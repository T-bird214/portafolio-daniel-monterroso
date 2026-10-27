# Auditoría y actualización del portafolio v2

## Fallos encontrados

- `app/page.tsx` importaba `Projects`, ausente del repositorio: bloqueaba la compilación.
- `portfolio-next` estaba registrado como gitlink (modo 160000), sin una copia de la aplicación. No permitía garantizar el Root Directory alternativo solicitado.
- Tema predeterminado del sistema, contrario al requisito dark-first.
- Validación de contacto sin formato de correo ni comprobación segura de tipos para JSON arbitrario.
- Copias de CV diferentes: 16,047 bytes en public/ y 46,151 en public/cv/.
- Porcentajes de habilidades e idiomas sin escala verificable.

## Cambios

Composición ejecutiva dark-first, paleta adaptada en claro, navegación fija y dock móvil, hero con foto existente y títulos rotativos, carrusel óptico de seis conexiones con controles de pausa y navegación, demo local de pipeline de cuatro pasos, trayectoria completa, matriz ejecutiva y contacto directo con formulario. Se respeta prefers-reduced-motion. Se conservan los datos profesionales existentes y los requisitos del encargo.

API con validación de tipos, correo, tamaños, errores JSON y Resend, honeypot y rate limit en memoria acotada. El límite es por instancia y no distribuido. La demo de pipeline no realiza operaciones externas.

`portfolio-next/` se convierte en directorio real, con código, assets, scripts, package-lock y configuración. La raíz es la fuente de edición. `npm run sync:portfolio` actualiza la copia sin copiar secretos ni outputs. TypeScript excluye la copia desde la raíz para evitar revisar dos aplicaciones a la vez.

CV canónico existente conservado y copiado a public/CV_Daniel_Monterroso.pdf. SHA-256: `534c1b9d01731e63542e8474ec9fb7e9bc9d09ecbd04cd1956df129ad0ed2145`. No se ha recibido un CV nuevo. Foto JPEG existente conservada.

## Verificación

- Compilación de producción y TypeScript ejecutados desde la raíz y desde portfolio-next.
- Handler real compilado: 11 escenarios, 16 solicitudes; JSON nulo/arreglo/malformado, tipos incorrectos, correo inválido, opcionales incorrectos, exceso de tamaño, content-type, honeypot, proveedor ausente y rate limit. Sin envíos externos.
- Comparación byte a byte de app/, components/, public/, data/, lib/ y scripts/ entre directorios.
- Validación de firma PDF, igualdad de ambos CV y decodificación de JPEG.
- Cálculo de contraste de colores principales de texto en fondos base claros y oscuros: >= 4.5:1. No constituye una certificación WCAG completa.
- Revisión visual de escritorio y marco móvil de 390 px; ancho interior observado de 375 px más scrollbar y sin overflow horizontal.
- Limitación de browser QA: los chunks JavaScript de Next fueron bloqueados por el navegador de preview con ERR_BLOCKED_BY_CLIENT. Se verificó renderizado, pero no se confirmó ejecución interactiva extremo a extremo en ese navegador.
- No se midió Core Web Vitals ni carga <1 s en producción; se comunica como objetivo.
- Correo real pendiente de credenciales Resend y dominio remitente configurados en Vercel. El fallo devuelve 502 y nunca confirma falsamente la entrega.

## Operación

Consultar README.md para compilación, sincronización, variables de entorno y despliegue. No se publica un Site adicional: el destino solicitado es el repositorio GitHub existente y su despliegue Vercel.
