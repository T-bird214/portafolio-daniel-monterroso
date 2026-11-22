// QA local: axe-core (WCAG 2.x A/AA) en móvil 360 px y escritorio 1440 px, tema oscuro y claro.
// Uso: node scripts/qa-axe.mjs <url> [carpeta-capturas]
// Requiere un Chromium instalado (CHROME_PATH, por defecto /usr/bin/brave-browser).
import { chromium } from "playwright-core";
import { AxeBuilder } from "@axe-core/playwright";

const url = process.argv[2] ?? "http://localhost:3000/";
const shots = process.argv[3];
const browser = await chromium.launch({
  executablePath: process.env.CHROME_PATH ?? "/usr/bin/brave-browser",
  headless: true,
});
let blocking = 0;
for (const [label, viewport] of [
  ["movil-360", { width: 360, height: 800 }],
  ["escritorio-1440", { width: 1440, height: 900 }],
]) {
  for (const theme of ["dark", "light"]) {
    const context = await browser.newContext({ viewport, deviceScaleFactor: 1 });
    await context.addInitScript((t) => {
      try {
        localStorage.setItem("theme", t);
      } catch {}
    }, theme);
    const page = await context.newPage();
    await page.goto(url, { waitUntil: "networkidle" });
    // Recorre la página para activar las animaciones al entrar en pantalla.
    const height = await page.evaluate(() => document.body.scrollHeight);
    for (let y = 0; y < height; y += 500) {
      await page.evaluate((v) => window.scrollTo(0, v), y);
      await page.waitForTimeout(120);
    }
    await page.waitForTimeout(1200);
    await page.evaluate(() => window.scrollTo(0, 0));
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    if (shots) await page.screenshot({ path: `${shots}/${label}-${theme}.png`, fullPage: true });
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa", "best-practice"])
      .analyze();
    const counts = {};
    for (const v of results.violations) counts[v.impact] = (counts[v.impact] ?? 0) + 1;
    console.log(
      `${label} ${theme}: ${results.violations.length} reglas con fallos ${JSON.stringify(counts)} · desbordamiento horizontal ${overflow}px`,
    );
    for (const v of results.violations) {
      console.log(`  [${v.impact}] ${v.id}: ${v.help} (${v.nodes.length})`);
      for (const n of v.nodes.slice(0, 3)) console.log(`     ${n.target.join(" ")}`);
      if (v.impact === "critical" || v.impact === "serious") blocking++;
    }
    await context.close();
  }
}
await browser.close();
process.exit(blocking ? 1 : 0);
