# GUÍA DE INSTALACIÓN COMPLETA — Portafolio Daniel Monterroso

> Para principiantes · Fedora Linux en MacBook Pro Mid 2012
> Esta guía asume que ya tienes otro proyecto funcionando en tu máquina y **no debe tocarlo en absoluto**. Cada paso está pensado para que este portafolio viva en su propia carpeta, su propio repositorio de GitHub y su propio proyecto de Vercel, completamente aislado de lo demás.

---

## Índice

1. Verificar qué ya tienes instalado
2. Instalar solo lo que falte
3. Crear la carpeta del proyecto (independiente)
4. Abrir el proyecto en VS Code
5. Instalar dependencias
6. Configurar variables de entorno
7. Configurar Resend (envío de correos) con tu Gmail
8. Probar el proyecto localmente
9. Verificar que el formulario de contacto realmente envía correos
10. Crear un repositorio de GitHub NUEVO (sin tocar el anterior)
11. Conectar el proyecto a Vercel
12. Agregar variables de entorno en Vercel
13. Primer despliegue
14. Cómo actualizar el sitio en el futuro (nuevos deploys)
15. Solución de problemas comunes
16. Cómo revisar logs y errores en producción
17. Mantenimiento futuro

---

## 1. Verificar qué ya tienes instalado

Abre la app **Terminal** y ejecuta cada comando. Si devuelve una versión, ya lo tienes instalado — no lo reinstales.

```bash
node -v
```

Debe mostrar `v20.x.x` o superior. Si muestra un error tipo "command not found", instálalo en el paso 2.

```bash
npm -v
```

Viene junto con Node, así que si Node está instalado, npm también.

```bash
git --version
```

Debe mostrar algo como `git version 2.x.x`.

```bash
gh --version
```

Esto es GitHub CLI. Si no lo tienes, se instala en el paso 2 (es opcional pero recomendado, hace todo más rápido).

```bash
vercel --version
```

Si no existe, no te preocupes: **no es necesario instalar Vercel CLI** para este proyecto — todo el despliegue se hace desde la web de Vercel (pasos 11 a 13). Solo instálalo si en el futuro quieres desplegar desde la terminal.

```bash
code --version
```

Confirma que VS Code ya está instalado (ya lo usas en tu otro proyecto).

---

## 2. Instalar solo lo que falte

**Si `node -v` no funcionó o mostró una versión menor a 20:**

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
source ~/.bashrc
nvm install 20
nvm use 20
nvm alias default 20
node -v   # confirma v20.x.x
```

> Si ya usas `nvm` para tu otro proyecto, este paso no lo afecta: `nvm` permite tener varias versiones de Node instaladas y cada terminal usa la que hayas seleccionado con `nvm use`.

**Si `git --version` no funcionó:**

```bash
sudo dnf install -y git
```

**Si `gh --version` no funcionó (opcional pero recomendado):**

```bash
sudo dnf install -y gh
gh auth login
```

Sigue las instrucciones en pantalla: elige **GitHub.com** → **HTTPS** → **Login with a web browser**. Esto abre tu navegador para que inicies sesión — no afecta ninguna sesión de git que ya tengas configurada para otro repositorio.

---

## 3. Crear la carpeta del proyecto (independiente)

Esto es clave para **no mezclar nada con tu otro proyecto**. Vamos a crear una carpeta hermana, no dentro de la carpeta de tu otro proyecto.

```bash
mkdir -p ~/Proyectos/portafolio-daniel-monterroso
```

Ahora copia el proyecto que te entregué (descomprime `PORTAFOLIO_PRODUCCION.zip`) dentro de esa carpeta:

```bash
unzip ~/Descargas/PORTAFOLIO_PRODUCCION.zip -d ~/Proyectos/portafolio-daniel-monterroso
cd ~/Proyectos/portafolio-daniel-monterroso
```

Si al descomprimir se crea una subcarpeta extra (por ejemplo `portafolio-daniel-monterroso/portafolio-daniel-monterroso/`), simplemente entra un nivel más:

```bash
ls
# si ves una sola carpeta adentro, muévete a esa
cd portafolio-daniel-monterroso   # solo si aplica
```

Confirma que estás en el lugar correcto:

```bash
pwd
ls
```

Deberías ver archivos como `package.json`, `app/`, `components/`, `data/`, `README.md`.

---

## 4. Abrir el proyecto en VS Code

```bash
code .
```

Esto abre una **ventana nueva e independiente** de VS Code para este proyecto. Tu otro proyecto sigue intacto en su propia ventana/carpeta.

---

## 5. Instalar dependencias

Con la terminal integrada de VS Code abierta (`` Ctrl+` ``):

```bash
npm install
```

> ⚠️ Nota de rendimiento (MacBook Pro Mid 2012): la primera instalación y el primer build pueden tardar varios minutos porque el hardware es más limitado que una máquina moderna. Cierra pestañas y programas pesados mientras corre. Una vez instalado, `npm run dev` con Fast Refresh de Next.js se siente fluido para editar.

---

## 6. Configurar variables de entorno

```bash
cp .env.example .env.local
```

Abre `.env.local` en VS Code. Por ahora déjalo así — vamos a llenarlo en el siguiente paso, después de crear tu cuenta de Resend.

---

## 7. Configurar Resend (envío de correos) con tu Gmail

Esta es la parte que conecta el formulario de contacto con tu bandeja de entrada real.

### 7.1 Crear tu cuenta de Resend

1. Ve a **https://resend.com** y haz clic en **Sign Up**.
2. Regístrate usando tu correo de Gmail: **monterroso221b@gmail.com** (o inicia sesión con Google directamente si te da esa opción — es lo más rápido).
3. Confirma tu correo si Resend te lo pide (revisa tu bandeja de entrada de Gmail).

### 7.2 Generar tu API Key

1. Dentro del panel de Resend, ve a **API Keys** en el menú lateral.
2. Haz clic en **Create API Key**.
3. Ponle un nombre, por ejemplo `portafolio-produccion`.
4. Permisos: **Sending access** (o "Full access" si no aparece la opción anterior) es suficiente.
5. Copia la key que se genera — **empieza con `re_`** — y guárdala en un lugar seguro. Resend solo te la muestra una vez.

### 7.3 Por qué NO necesitas configurar un dominio propio

Resend, sin verificar un dominio, solo te permite:

- Enviar usando la dirección remitente compartida `onboarding@resend.dev`.
- Entregar **únicamente** al correo con el que te registraste en Resend.

Como te registraste con tu Gmail (`monterroso221b@gmail.com`), esto es exactamente lo que necesitas: los mensajes del formulario llegarán a tu Gmail sin que tengas que comprar un dominio ni tocar configuración DNS. El día que compres un dominio propio (ej. `danielmonterroso.com`), puedes verificarlo en Resend para enviar desde una dirección con tu propio dominio — pero eso es completamente opcional y no bloquea nada hoy.

### 7.4 Completar `.env.local`

Abre `.env.local` en VS Code y complétalo así:

```bash
RESEND_API_KEY=re_tu_key_real_aqui
CONTACT_TO_EMAIL=monterroso221b@gmail.com
CONTACT_FROM_EMAIL=onboarding@resend.dev
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Guarda el archivo. **Nunca subas este archivo a GitHub** — ya está excluido en `.gitignore`, así que no tienes que preocuparte por eso, pero tampoco lo compartas ni lo pegues en ningún chat.

---

## 8. Probar el proyecto localmente

```bash
npm run dev
```

Abre tu navegador en **http://localhost:3000**. Revisa:

- Que la página cargue y se vea el Hero con tu foto.
- Que el botón de modo claro/oscuro funcione.
- Que el menú de navegación haga scroll a cada sección.

Para detener el servidor cuando termines de probar: `Ctrl + C` en la terminal.

---

## 9. Verificar que el formulario de contacto realmente envía correos

Con `npm run dev` corriendo:

1. Ve a la sección **Contacto** del sitio.
2. Llena el formulario con datos de prueba (puedes usar tu propio correo en el campo "Correo" para poder responderte a ti mismo si quieres probar el "Reply-To").
3. Haz clic en **Enviar mensaje**.
4. Deberías ver el mensaje de confirmación en verde ("Mensaje enviado...").
5. Revisa tu bandeja de entrada de Gmail (**monterroso221b@gmail.com**) — el correo debería llegar en segundos. Revisa también la carpeta de Spam la primera vez.

**Si no llega nada**, revisa la terminal donde corre `npm run dev`: ahí se imprime cualquier error de Resend (por ejemplo, una API key incorrecta). Ver también la sección 15 (Solución de problemas).

---

## 10. Crear un repositorio de GitHub NUEVO (sin tocar el anterior)

Esto crea un repositorio **separado**, con otro nombre, que no interfiere con tu proyecto anterior.

### Opción A — Con GitHub CLI (más rápido)

Desde la carpeta del proyecto (`~/Proyectos/portafolio-daniel-monterroso`):

```bash
git init
git add .
git commit -m "feat: version inicial del portafolio en Next.js"
gh repo create portafolio-daniel-monterroso --public --source=. --remote=origin --push
```

`gh repo create` crea un repositorio **nuevo** con este nombre específico. Como el nombre es distinto al de tu otro proyecto, no hay ningún conflicto.

### Opción B — Manual desde el navegador

1. Ve a **https://github.com/new**.
2. Nombre del repositorio: `portafolio-daniel-monterroso` (o el que prefieras, mientras no repitas el de tu otro proyecto).
3. Público o privado, como prefieras.
4. **No marques** "Add a README" (ya tienes uno).
5. Clic en **Create repository**.
6. GitHub te mostrará comandos — en tu terminal, dentro de la carpeta del proyecto:

```bash
git init
git add .
git commit -m "feat: version inicial del portafolio en Next.js"
git remote add origin https://github.com/T-bird214/portafolio-daniel-monterroso.git
git branch -M main
git push -u origin main
```

> Esto no modifica el `remote origin` de tu otro proyecto porque cada carpeta tiene su propia configuración de git independiente — `git remote add origin` aquí solo afecta a _esta_ carpeta.

---

## 11. Conectar el proyecto a Vercel

1. Ve a **https://vercel.com** e inicia sesión (o regístrate) con tu cuenta de **GitHub** — así queda todo conectado automáticamente.
2. En el dashboard, clic en **Add New...** → **Project**.
3. Busca y selecciona el repositorio `portafolio-daniel-monterroso` (el que acabas de crear, **no** el de tu otro proyecto).
4. Vercel detecta automáticamente que es un proyecto Next.js — no necesitas cambiar ni el _Build Command_ ni el _Output Directory_.

**No hagas clic en Deploy todavía** — primero agrega las variables de entorno (siguiente paso), para que el primer deploy ya funcione con el formulario incluido.

---

## 12. Agregar variables de entorno en Vercel

En la misma pantalla de importación del proyecto (o luego en **Project → Settings → Environment Variables**), agrega exactamente estas cuatro:

| Nombre                 | Valor                                                                                                                                                                                |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `RESEND_API_KEY`       | Tu API key real de Resend (`re_...`)                                                                                                                                                 |
| `CONTACT_TO_EMAIL`     | `monterroso221b@gmail.com`                                                                                                                                                           |
| `CONTACT_FROM_EMAIL`   | `onboarding@resend.dev`                                                                                                                                                              |
| `NEXT_PUBLIC_SITE_URL` | La URL que Vercel te va a asignar, por ejemplo `https://portafolio-daniel-monterroso.vercel.app` (si todavía no la sabes, complétala después del primer deploy y vuelve a desplegar) |

Aplícalas a los tres entornos que Vercel ofrece (Production, Preview, Development) a menos que tengas una razón específica para no hacerlo.

---

## 13. Primer despliegue

Haz clic en **Deploy**. Vercel va a instalar dependencias y compilar el proyecto — toma entre 1 y 3 minutos.

Al terminar, verás un dominio gratuito como:

```
https://portafolio-daniel-monterroso.vercel.app
```

Puedes personalizar el subdominio (sigue siendo gratis) desde **Project → Settings → Domains → Edit**.

**Importante:** si acabas de escribir la URL final en `NEXT_PUBLIC_SITE_URL` por primera vez después de este deploy, ve a **Deployments**, abre los tres puntos del último deploy y elige **Redeploy** para que el sitemap y el Open Graph usen la URL correcta.

### Checklist post-deploy

1. Abre la URL de Vercel y revisa que todo se vea bien, en modo claro y oscuro.
2. Prueba el formulario de contacto **en producción** (no solo en local) — repite el paso 9 pero contra tu URL de Vercel.
3. Verifica el botón "Descargar CV" — recuerda que debes haber subido tu `CV_Daniel_Monterroso.pdf` real a `public/cv/` antes de este deploy (ver la nota en `README.md`).

---

## 14. Cómo actualizar el sitio en el futuro (nuevos deploys)

Cada vez que quieras cambiar algo (texto, foto, colores, lo que sea):

1. Edita los archivos en VS Code (por ejemplo, `data/profile.ts` para cambiar texto o cifras).
2. Prueba localmente con `npm run dev`.
3. Sube los cambios:

```bash
git add .
git commit -m "fix: actualizo texto de la sección X"
git push
```

Vercel detecta el `push` a `main` automáticamente y despliega la nueva versión en 1-2 minutos, sin que tengas que hacer nada más.

**Para probar cambios grandes sin afectar el sitio en vivo**: crea una rama nueva (`git checkout -b prueba-nueva-seccion`), haz `git push -u origin prueba-nueva-seccion`, y Vercel generará automáticamente una URL de _preview_ separada para esa rama.

---

## 15. Solución de problemas comunes

**`npm install` falla o se cuelga**

- Verifica tu conexión a internet.
- Borra `node_modules` y `package-lock.json` y vuelve a intentar: `rm -rf node_modules package-lock.json && npm install`.

**El formulario dice "No se pudo enviar tu mensaje"**

- Revisa que `RESEND_API_KEY` esté bien copiada (sin espacios extra) en `.env.local` (local) o en Vercel (producción).
- Confirma en el panel de Resend, sección **Logs**, si el envío aparece y qué error muestra.
- Recuerda: sin dominio propio verificado, Resend solo entrega al correo con el que te registraste. Si cambiaste `CONTACT_TO_EMAIL` a un correo distinto al de tu cuenta de Resend, no llegará nada.

**`npm run build` falla con errores de TypeScript**

- Lee el mensaje de error: indica el archivo y la línea exacta. La gran mayoría de errores en este proyecto ya fueron corregidos, pero si tú agregas contenido nuevo a `data/profile.ts`, asegúrate de mantener la misma forma (mismos campos) que ya existe.

**El sitio se ve distinto en Vercel que en local**

- Verifica que las variables de entorno estén configuradas en Vercel (paso 12) — es la causa más común.
- Haz un **Redeploy** después de agregar o cambiar variables de entorno; Vercel no las aplica retroactivamente a deploys anteriores.

**Cambié algo pero no se refleja en el sitio en vivo**

- Confirma que hiciste `git push` (no solo `git commit`).
- Ve a Vercel → **Deployments** y confirma que el deploy más reciente diga "Ready" y no "Error".

---

## 16. Cómo revisar logs y errores en producción

1. Ve a tu proyecto en **Vercel** → pestaña **Deployments**.
2. Haz clic en el deploy más reciente.
3. Pestaña **Runtime Logs** (o **Functions** en versiones anteriores del dashboard): aquí aparecen los `console.error` del servidor — por ejemplo, si el envío de Resend falla, verás el mensaje exacto ahí.
4. Pestaña **Build Logs**: aquí ves el resultado de `npm run build` — útil si un deploy falla antes de siquiera llegar a producción.

---

## 17. Mantenimiento futuro

- **Actualizar dependencias de forma segura**: cada 2-3 meses, corre `npm outdated` para ver qué paquetes tienen versiones nuevas, y actualiza de a uno (`npm install nombre-paquete@latest`), probando con `npm run dev` y `npm run build` después de cada uno.
- **Antes de cualquier cambio grande**: crea una rama nueva (`git checkout -b nombre-del-cambio`) en vez de editar directo sobre `main`, así siempre tienes una versión estable a la cual volver.
- **Revisa Lighthouse periódicamente**: Chrome DevTools (`F12`) → pestaña **Lighthouge** → **Analyze page load**, contra tu URL de producción, para detectar si algún cambio futuro afectó el rendimiento.
- **Si agregas Supabase, HubSpot o n8n más adelante**: el código en `lib/lead-service.ts` ya tiene los puntos de extensión comentados exactamente donde deben ir — no hace falta rediseñar nada, solo activar cada integración cuando tengas las credenciales.
