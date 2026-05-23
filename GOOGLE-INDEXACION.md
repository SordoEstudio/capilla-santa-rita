# Guía: conectar el sitio con Google y aparecer en búsquedas

Sitio principal: **https://capillasantarita.ar**  
Dominio alternativo: **https://capillasantarita.com.ar** (debe redirigir al `.ar` en Vercel para evitar contenido duplicado)

---

## Antes de empezar (verificación rápida)

Abrí en el navegador y confirmá que cargan bien:

| URL | Qué debe mostrar |
|-----|------------------|
| https://capillasantarita.ar/ | La página de la capilla |
| https://capillasantarita.ar/robots.txt | `Sitemap: https://capillasantarita.ar/sitemap.xml` |
| https://capillasantarita.ar/sitemap.xml | Una URL: la home |
| https://capillasantarita.ar/public/favicon-32x32.png | El ícono del sitio |

Si algo falla, esperá 2–5 minutos tras el deploy en Vercel y probá de nuevo.

---

## 1. Dominio en Vercel (redirección .com.ar → .ar)

1. Entrá a [vercel.com](https://vercel.com) → proyecto **capilla-santa-rita**.
2. **Settings** → **Domains**.
3. Confirmá que están:
   - `capillasantarita.ar` (principal)
   - `capillasantarita.com.ar`
4. En **capillasantarita.com.ar**, configurá **Redirect to** → `https://capillasantarita.ar` (301 permanente).

Así Google indexa una sola URL canónica.

---

## 2. Google Search Console (indexación en Google)

Search Console es la herramienta oficial para que Google encuentre e indexe el sitio.

### 2.1 Crear la propiedad

1. Entrá a [Google Search Console](https://search.google.com/search-console).
2. Iniciá sesión con una cuenta de Google (ideal: correo de la parroquia o responsable de la capilla).
3. Clic en **Agregar propiedad**.
4. Elegí **Prefijo de URL** e ingresá exactamente:
   ```
   https://capillasantarita.ar
   ```
5. Clic en **Continuar**.

### 2.2 Verificar que sos dueño del sitio

Google ofrece varios métodos. El más simple para este proyecto:

**Opción A — Etiqueta HTML (recomendada)**

1. En Search Console, elegí **Etiqueta HTML**.
2. Copiá la meta que te da, por ejemplo:
   ```html
   <meta name="google-site-verification" content="TU_CODIGO_AQUI" />
   ```
3. Pegala en `index.html` dentro de `<head>`, **antes** de `</head>`.
4. Hacé commit, push y esperá el deploy en Vercel.
5. Volvé a Search Console y clic en **Verificar**.

**Opción B — Registro DNS**

Si preferís no tocar el código:

1. Elegí **Proveedor de nombres de dominio** en Search Console.
2. Agregá el registro TXT que indique Google en el panel de tu registrador (donde compraste `capillasantarita.ar`).
3. Esperá propagación (puede tardar hasta 48 h) y verificá.

### 2.3 Enviar el sitemap

1. En el menú izquierdo: **Sitemaps**.
2. En «Agregar un sitemap nuevo», escribí:
   ```
   sitemap.xml
   ```
3. Clic en **Enviar**.

Estado esperado: **Correcto** (puede tardar unas horas).

### 2.4 Solicitar indexación de la página principal

1. Menú **Inspección de URLs**.
2. Pegá: `https://capillasantarita.ar/`
3. Enter → esperá el análisis.
4. Si dice «La URL no está en Google», clic en **Solicitar indexación**.

Repetí lo mismo para `https://capillasantarita.com.ar/` solo si **no** redirige al `.ar`; si redirige, no hace falta.

### 2.5 Qué revisar después (2–7 días)

- **Páginas** → debe aparecer la URL como **Indexada**.
- **Experiencia** → revisar si hay problemas en móvil.
- **Mejoras** → ver si Google detectó datos estructurados (`Church`, `Event`).

---

## 3. Perfil de Empresa en Google (aparecer en Maps y «cerca de mí»)

Esto es **tan importante** como Search Console para búsquedas locales.

1. Entrá a [Google Business](https://business.google.com) (misma cuenta de Google).
2. Buscá **Capilla Santa Rita De Casia** en San Vicente, Santa Fe.
3. Si el lugar ya existe en Maps:
   - Clic en **Reclamar este negocio** o **Solicitar acceso** (necesitás ser autorizado por la comunidad/parroquia).
4. Si no existe, **Agregar tu negocio** con estos datos:

| Campo | Valor sugerido |
|-------|----------------|
| Nombre | Capilla Santa Rita de Casia |
| Categoría | Iglesia católica / Capilla |
| Dirección | Belgrano 333, San Vicente, Santa Fe |
| Teléfono | +54 3492 669762 |
| Sitio web | https://capillasantarita.ar |
| Horario | Todos los días 8:00–18:00 |

5. Subí fotos: fachada de la capilla, interior, celebración.
6. En **Actualizaciones** o **Publicaciones**, publicá el programa del 21–24 de mayo 2026 con enlace al sitio.

Cuando el perfil esté verificado, el sitio web aparece en la ficha de Maps y refuerza la confianza de Google.

---

## 4. Probar que Google entiende el sitio (opcional)

| Herramienta | URL | Para qué |
|-------------|-----|----------|
| Prueba de resultados enriquecidos | https://search.google.com/test/rich-results | Validar Schema `Church` y `Event` |
| PageSpeed Insights | https://pagespeed.web.dev/ | Velocidad en móvil |
| Inspección de URL | Dentro de Search Console | Ver cómo Google ve una página |

Pegá `https://capillasantarita.ar/` en la prueba de resultados enriquecidos; deberían detectarse datos de iglesia y evento.

---

## 5. Bing (opcional, 5 minutos)

1. [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Podés **importar desde Google Search Console** si ya verificaste el sitio ahí.
3. Enviá el mismo sitemap: `https://capillasantarita.ar/sitemap.xml`

---

## 6. Difusión para indexar más rápido

Google también descubre sitios por enlaces externos:

- Agregar **https://capillasantarita.ar** en la web de la Parroquia San Vicente de Paúl o Diócesis de Santa Fe (si tienen sitio).
- Publicar el enlace en redes de la comunidad (Facebook, Instagram, WhatsApp).
- Carteles del 21–24 de mayo con QR al sitio.

---

## 7. Meta de verificación (cuando la tengas)

Cuando Search Console te dé el código, agregá en `index.html` dentro de `<head>`:

```html
<meta name="google-site-verification" content="PEGAR_CODIGO_AQUI" />
```

Luego: commit → push → Verificar en Search Console.

---

## Resumen del orden recomendado

1. Confirmar deploy y URLs (`robots.txt`, `sitemap.xml`, favicon).
2. Redirección 301 de `.com.ar` → `.ar` en Vercel.
3. Google Search Console: verificar → sitemap → solicitar indexación.
4. Perfil de Empresa en Google: reclamar/actualizar con la URL del sitio.
5. Enlaces desde parroquia y redes.
6. Revisar en 1 semana si la página figura como indexada.

---

## Preguntas frecuentes

**¿Cuánto tarda en aparecer en Google?**  
Entre unos días y 2–4 semanas. La solicitud de indexación acelera el primer rastreo, no garantiza posición.

**¿Debo registrar también capillasantarita.com.ar en Search Console?**  
Solo si no redirige al `.ar`. Con redirección 301, alcanza con la propiedad del dominio principal.

**¿Necesito pagar?**  
No. Search Console, Business Profile y el sitio en Vercel son gratuitos en este uso.

**¿El H1 oculto es penalizado?**  
No, si el texto oculto describe el contenido real de la página (nombre y ubicación de la capilla). El lema visible sigue siendo el mensaje principal para quien visita el sitio.
