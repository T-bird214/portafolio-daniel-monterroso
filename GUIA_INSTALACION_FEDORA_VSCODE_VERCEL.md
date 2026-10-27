# Guía de Instalación y Despliegue — Portfolio Daniel Monterroso
> De Google AI Studio → Fedora (MacBook Pro 2012) + VS Code → GitHub → Vercel
> Sigue los pasos en orden. Cada bloque de código se copia y pega tal cual en la terminal (`Terminal` app de GNOME/KDE en Fedora).

---

## 0. Qué vamos a lograr

1. Generar el código del portafolio en **Google AI Studio** usando el prompt maestro que ya tienes (`PROMPT_PORTFOLIO_DANIEL_MONTERROSO.md`).
2. Prepararlo y correrlo localmente en tu **MacBook Pro 2012 con Fedora**, editando en **VS Code**.
3. Subirlo a **GitHub**.
4. Desplegarlo en **Vercel** con un dominio gratuito tipo `daniel-monterroso.vercel.app`.

---

## 1. Generar el código en Google AI Studio

1. Entra a **https://aistudio.google.com** e inicia sesión con tu cuenta de Google.
2. Crea un **New chat** (o **New prompt**) y selecciona el modelo más capaz disponible (el de mayor contexto — actualmente los modelos "Pro" de Gemini).
3. Sube o pega el contenido completo de `PROMPT_PORTFOLIO_DANIEL_MONTERROSO.md` como tu primer mensaje.
4. Agrega esta instrucción al final del mensaje para que la salida sea usable de inmediato:
   > "Genera el proyecto completo, archivo por archivo, indicando la ruta exacta de cada uno (por ejemplo `// app/page.tsx`). No resumas ni omitas archivos. Si el proyecto no cabe en una respuesta, continúa en el siguiente mensaje exactamente donde lo dejaste, sin repetir archivos ya entregados."
5. Gemini generará el proyecto en bloques de código. Si se corta a la mitad de un archivo, simplemente responde **"continúa"** y seguirá donde quedó.
6. **Copia cada archivo** a un editor de texto o, mejor, ve directo al paso 4 (VS Code) y pega ahí mismo cada bloque en su archivo correspondiente — te ahorra un paso.

> 💡 Tip: si Google AI Studio te da la opción de **"Code" / Canvas / Build**, úsala — te deja ver el árbol de archivos y descargarlos en un solo ZIP, lo cual es más rápido que copiar archivo por archivo.

---

## 2. Preparar Fedora en tu MacBook Pro 2012

Abre la app **Terminal**.

### 2.1 Actualizar el sistema
```bash
sudo dnf upgrade --refresh -y
```

### 2.2 Instalar herramientas base (git, curl, build tools)
```bash
sudo dnf install -y git curl gcc-c++ make
```

### 2.3 Instalar Node.js (usando `nvm`, recomendado)
Next.js 15 requiere **Node.js 18.18 o superior** (idealmente Node 20 LTS). En Fedora es mejor usar `nvm` en vez del paquete del sistema, para poder cambiar de versión sin romper nada:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```

Cierra y vuelve a abrir la terminal (o ejecuta `source ~/.bashrc`), luego:

```bash
nvm install 20
nvm use 20
nvm alias default 20
node -v   # debe mostrar v20.x.x
npm -v
```

### 2.4 (Opcional pero recomendado) GitHub CLI
Facilita crear el repositorio sin salir de la terminal:
```bash
sudo dnf install -y gh
gh auth login
```
Sigue las instrucciones en pantalla (elige **GitHub.com** → **HTTPS** → **Login with a web browser**).

---

## 3. Instalar VS Code en Fedora

### Opción A — Repositorio oficial de Microsoft (recomendada)
```bash
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
sudo sh -c 'echo -e "[code]\nname=Visual Studio Code\nbaseurl=https://packages.microsoft.com/yumrepos/vscode\nenabled=1\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" > /etc/yum.repos.d/vscode.repo'
sudo dnf check-update
sudo dnf install -y code
```

### Opción B — Flatpak (si prefieres entornos sandboxeados)
```bash
flatpak install flathub com.visualstudio.code -y
```

Abre VS Code:
```bash
code .
```
(el `.` lo usarás más abajo, dentro de la carpeta del proyecto, para abrirlo directamente).

**Extensiones útiles a instalar desde VS Code** (`Ctrl+Shift+X`):
- ESLint
- Prettier – Code formatter
- Tailwind CSS IntelliSense
- GitLens

---

## 4. Preparar el proyecto localmente

### 4.1 Crear la carpeta y pegar el código generado
```bash
mkdir -p ~/Proyectos/portfolio-daniel-monterroso
cd ~/Proyectos/portfolio-daniel-monterroso
code .
```
Con VS Code abierto en esa carpeta, crea cada archivo/carpeta que generó Google AI Studio respetando exactamente las rutas indicadas (`app/page.tsx`, `components/sections/Hero.tsx`, etc.) y pega el contenido correspondiente. Si descargaste un `.zip` desde AI Studio, simplemente descomprímelo dentro de esta carpeta:
```bash
unzip ~/Descargas/portfolio-daniel-monterroso.zip -d ~/Proyectos/portfolio-daniel-monterroso
```

### 4.2 Instalar dependencias
Desde la terminal integrada de VS Code (`` Ctrl+` ``):
```bash
npm install
```

### 4.3 Copiar tu foto y tu CV al proyecto
```bash
cp ~/Descargas/CV_Daniel_Monterroso_Maestro.pdf ./public/cv/
cp ~/Descargas/daniel-monterroso.jpg ./public/images/
```

### 4.4 Configurar variables de entorno
```bash
cp .env.example .env.local
```
Abre `.env.local` en VS Code y llena solo las variables que realmente vayas a usar (por ejemplo, la API key de Resend si activaste el formulario de contacto). Si no tienes alguna todavía, déjala vacía — el proyecto debe poder correr igual en modo desarrollo.

### 4.5 Levantar el servidor de desarrollo
```bash
npm run dev
```
Abre tu navegador en **http://localhost:3000** y revisa que todo se vea bien.

> ⚠️ Nota de rendimiento (MacBook Pro 2012): el primer `npm install` y el primer build pueden tardar varios minutos porque el hardware es más limitado que una máquina moderna. Cierra pestañas y programas pesados mientras compila. Una vez levantado, `npm run dev` con Fast Refresh de Next.js va a sentirse fluido para editar.

---

## 5. Subir el proyecto a GitHub

### 5.1 Verificar el `.gitignore`
Asegúrate de que exista `.gitignore` con al menos:
```
node_modules
.next
.env*.local
.vercel
```

### 5.2 Inicializar y hacer el primer commit
```bash
git init
git add .
git commit -m "feat: proyecto inicial del portafolio profesional"
```

### 5.3 Crear el repositorio remoto y subirlo
Con GitHub CLI (más rápido):
```bash
gh repo create portfolio-daniel-monterroso --public --source=. --remote=origin --push
```

Si prefieres hacerlo manual desde el navegador:
1. Ve a **https://github.com/new**, nombre `portfolio-daniel-monterroso`, público, sin inicializar README (ya tienes uno).
2. Luego en terminal:
```bash
git remote add origin https://github.com/T-bird214/portfolio-daniel-monterroso.git
git branch -M main
git push -u origin main
```

---

## 6. Desplegar en Vercel con dominio gratuito

### 6.1 Crear cuenta / iniciar sesión
Ve a **https://vercel.com** → **Sign up** o **Log in** usando tu cuenta de GitHub (más simple, queda todo conectado).

### 6.2 Importar el proyecto
1. En el dashboard de Vercel, clic en **Add New… → Project**.
2. Selecciona el repositorio `portfolio-daniel-monterroso`.
3. Vercel detecta automáticamente que es Next.js — no necesitas cambiar el *Build Command* ni el *Output Directory*.
4. En **Environment Variables**, agrega las mismas variables que pusiste en `.env.local` (si activaste el formulario de contacto con Resend u otro servicio).
5. Clic en **Deploy**.

### 6.3 Obtener tu dominio gratuito
Al terminar el deploy, Vercel te asigna automáticamente un dominio del tipo:
```
https://portfolio-daniel-monterroso.vercel.app
```
Puedes personalizar el subdominio (sigue siendo gratis, solo cambia el nombre) desde:
**Project → Settings → Domains → Edit** y escribe, por ejemplo:
```
daniel-monterroso.vercel.app
```

> 💡 Si en el futuro quieres un dominio propio (ej. `danielmonterroso.com`), lo compras en cualquier registrador (Namecheap, Google Domains, etc.) y lo agregas en la misma sección **Domains** de Vercel — el certificado SSL se configura solo.

### 6.4 Deploys automáticos
A partir de ahora, cada vez que hagas `git push` a la rama `main`, Vercel vuelve a desplegar automáticamente. Para cambios de prueba, crea una rama nueva — Vercel genera una URL de *preview* distinta para cada Pull Request.

---

## 7. Verificación final

1. Abre tu URL de Vercel en el navegador y revisa: modo claro/oscuro, botones de contacto, descarga del CV, responsive en móvil (`F12` → ícono de dispositivo).
2. Corre Lighthouse desde Chrome DevTools (`F12 → Lighthouse → Analyze page load`) y confirma que Performance, Accessibility, Best Practices y SEO estén cerca de 100.
3. Comparte el link en LinkedIn y agrégalo también en el CV Maestro (`/data/profile.ts` ya tiene tu LinkedIn y GitHub reales, así que el ciclo queda cerrado: CV → Portafolio → Vercel).

---

## Resumen de comandos (todo junto, para copiar rápido)

```bash
# Sistema
sudo dnf upgrade --refresh -y
sudo dnf install -y git curl gcc-c++ make gh

# Node
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
nvm install 20 && nvm use 20 && nvm alias default 20

# VS Code
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
sudo sh -c 'echo -e "[code]\nname=Visual Studio Code\nbaseurl=https://packages.microsoft.com/yumrepos/vscode\nenabled=1\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" > /etc/yum.repos.d/vscode.repo'
sudo dnf install -y code

# Proyecto
mkdir -p ~/Proyectos/portfolio-daniel-monterroso && cd ~/Proyectos/portfolio-daniel-monterroso
code .
npm install
npm run dev

# Git + GitHub
git init && git add . && git commit -m "feat: proyecto inicial del portafolio profesional"
gh repo create portfolio-daniel-monterroso --public --source=. --remote=origin --push
```

Luego el deploy en Vercel se hace desde la web (Paso 6), no requiere comandos adicionales.
