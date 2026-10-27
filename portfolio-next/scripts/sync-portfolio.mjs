import { cpSync, mkdirSync, rmSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { basename, dirname, join } from "node:path";
let root = dirname(dirname(fileURLToPath(import.meta.url)));
if (basename(root) === "portfolio-next") root = dirname(root);
const target = join(root, "portfolio-next");
mkdirSync(target, { recursive: true });
for (const name of ["app", "components", "public", "data", "lib", "scripts"]) {
  rmSync(join(target, name), { recursive: true, force: true });
  cpSync(join(root, name), join(target, name), { recursive: true });
}
for (const name of [
  "package.json",
  "package-lock.json",
  "tsconfig.json",
  "next.config.ts",
  "postcss.config.mjs",
  "eslint.config.mjs",
])
  cpSync(join(root, name), join(target, name));
console.log("portfolio-next sincronizado.");
