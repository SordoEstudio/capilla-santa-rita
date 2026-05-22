# Capilla Santa Rita de Casia — Prompt para agente Claude Code / Cursor

> **Cómo usar este archivo:**
> Abrí Cursor, iniciá una conversación con el agente Claude y pegá el contenido de la sección
> "PROMPT PRINCIPAL" como primer mensaje. El agente leerá el contexto completo y generará
> la estructura del proyecto lista para ejecutar. Luego usá las secciones de etapas futuras
> como prompts de seguimiento en la misma sesión o en sesiones nuevas.

---

## PROMPT PRINCIPAL — Etapa 1 (pegar completo al agente)

```
Sos un desarrollador web experto. Vas a construir el sitio web oficial de la
Capilla Santa Rita de Casia de San Vicente, Santa Fe, Argentina.

## CONTEXTO DEL PROYECTO

Sitio institucional católico, de estética clara y sobria, orientado a feligreses
y visitantes que buscan información sobre la fiesta patronal anual, la santa,
la capilla y cómo llegar.

## DATOS REALES DE LA CAPILLA

- Nombre: Capilla Santa Rita de Casia
- Ubicación: Belgrano 333, San Vicente, Santa Fe, Argentina
- Teléfono / WhatsApp: 3492 669762
- Horario de apertura: todos los días de 8:00 a 18:00 hs.
- Pertenece a: Parroquia San Vicente de Paúl / Diócesis de Santa Fe
- Iframe de Google Maps (usar exactamente este):
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3469.7700794237808!2d-61.565975224169584!3d-31.69872070995721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ca8e568e8732b3%3A0x7a49a9a1aaea365e!2sCapilla%20Santa%20Rita%20De%20Casia!5e1!3m2!1ses!2sar!4v1779460809724!5m2!1ses!2sar" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

## PROGRAMA OFICIAL FIESTA PATRONAL 2026

Lema del año: "Santa Rita Mujer Misionera"
Organizan: Capilla Santa Rita de Casia y Parroquia San Vicente de Paúl

### Jueves 21 de mayo
- 18:30 hs. — Santo Rosario
- 19:00 hs. — Santa Misa rezando por las vocaciones

### Viernes 22 de mayo — Día de la Santa Patrona
- 17:00 hs. — Confesiones
- 18:00 hs. — Rezo de la Coronilla de Jesús Misericordioso
- 18:30 hs. — Adoración Eucarística
- 19:00 hs. — Santa Misa rezando por las familias, jóvenes y niños

### Sábado 23 de mayo
- 18:00 hs. — Santo Rosario rezando por los colaboradores y peregrinos

### Domingo 24 de mayo — Gran Fiesta Patronal ⭐
- 08:00 hs. — Santa Misa rezando por la Iglesia
- 10:30 hs. — Procesión y Santa Misa con la imagen de Santa Rita por las calles,
              rezando por la Patria, instituciones de la ciudad y medios de comunicación
- 16:00 hs. — Santa Misa rezando por la Comunidad

Notas al pie del programa:
- Cáritas sugiere que las ofrendas sean alimentos no perecederos en lugar de velas y flores
- Después de cada Misa se bendecirán los objetos religiosos

## INFORMACIÓN SOBRE SANTA RITA (para la sección informativa)

### Datos biográficos
- Nombre completo: Santa Rita de Casia (Margherita Lotti)
- Nacida: c. 1381, Roccaporena, Umbría, Italia
- Fallecida: 22 de mayo de 1457, Casia, Italia
- Beatificada: 19 de octubre de 1626 por el Papa Urbano VIII
- Canonizada: 24 de mayo de 1900 por el Papa León XIII
- Festividad: 22 de mayo
- Orden religiosa: Agustina (monasterio de Santa María Magdalena de Casia)
- Patrona de: causas imposibles, casos difíciles, matrimonios en conflicto,
              viudas, madres, enfermos, víctimas de violencia
- Su cuerpo se conserva incorrupto en la Basílica de Santa Rita de Casia, Italia

### Historia oficial de Santa Rita
Fuente principal: webcatolicodejavier.org/ritacasia.html (dominio público, uso libre)
Reproducir este texto completo en la sección "Santa Rita" del sitio, en tono
cálido y con subtítulos para mejorar la lectura:

---
**Niñez y vocación**
Santa Rita nació en 1381 junto a Casia, en la hermosa Umbría, tierra de santos.
Fue una niña precoz, inclinada a las cosas de Dios. Sentía desde niña una fuerte
inclinación a la vida religiosa, pero la Providencia dispuso que pasara por todos
los estados de la vida: esposa, madre, viuda y religiosa, para santificarlos con
su ejemplo.

**Esposa y madre**
Por conveniencias familiares se casó con Pablo Fernando, de su aldea natal. Fue
un verdadero martirio: Pablo era caprichoso y violento. Rita aceptó su papel con
silencio, sufrimiento y oración. Su bondad y paciencia lograron la conversión de
su esposo. Nacieron dos hijos gemelos que les llenaron de alegría.

**Viudez y pérdida**
A la paz siguió la tragedia: su esposo fue asesinado como secuela de su antigua
vida. Rita perdonó e inculcó el perdón a sus hijos. Al ver que no podía apartarlos
de la idea de venganza, pidió al Señor que se los llevara antes que cometer un
nuevo crimen, y el Señor atendió su súplica.

**Entrada al convento**
Tras años de soledad y oración, intentó cumplir el deseo de su infancia: ser
religiosa. Tres veces pidió ingresar a las Agustinas de Casia y tres veces fue
rechazada. Por fin, en un prodigio, se le aparecieron San Juan Bautista, San Agustín
y San Nicolás de Tolentino, y fue introducida milagrosamente en el monasterio. Hizo
su profesión religiosa en 1417 y allí pasó 40 años entregada a Dios.

**Los estigmas y la muerte**
Jesús selló a Rita con uno de los estigmas de la Pasión: una espina muy dolorosa
en la frente. En el jardín del convento, estando enferma y en pleno invierno,
nacieron una rosa y dos higos para satisfacer sus deseos de enferma. Al morir en
1457, la celda se iluminó y las campanas tañeron solas. Su cuerpo permanece incorrupto.
---

### Los 6 símbolos de Santa Rita
Mostrar como sección visual con ícono + nombre + descripción breve (ver detalles UI abajo):

1. 🌹 **La rosa**
   El milagro más famoso: en pleno invierno, una rosa floreció en el jardín del
   convento para ella enferma. Símbolo de la gracia divina que supera lo imposible.

2. 🫐 **Los dos higos**
   Junto a la rosa, dos higos aparecieron fuera de estación. Completando el milagro
   que habían pedido sus padres ancianos cuando aún vivía en el mundo.

3. ✝️ **La espina en la frente**
   Estigma recibido en 1432: una astilla de la corona de Cristo se clavó en su frente
   en respuesta a su oración de compartir la Pasión de Jesús. La llevó por años.

4. 📿 **El crucifijo**
   Su devoción central era meditar la Pasión de Jesús. El crucifijo es el centro de
   su espiritualidad agustina y mística.

5. 🐝 **Las abejas**
   Según la tradición, siendo bebé, un enjambre de abejas blancas sobrevoló su cuna
   sin hacerle daño. Símbolo de pureza, dulzura y protección divina desde la infancia.

6. 🍇 **La vid / el sarmiento**
   Siendo novicia, la priora le ordenó regar un sarmiento seco como prueba de
   obediencia. Rita lo regó por meses con fe y el sarmiento reverdeci. La tradición
   dice que esa parra milagrosa aún vive en Casia.

### Instrucciones UI para los 6 símbolos
Crear una sección "Sus símbolos" con 6 cards en grid (3 columnas en desktop,
2 en tablet, 1 en mobile). Cada card:
- Fondo blanco, borde sutil, border-radius 12px
- Emoji o SVG del símbolo (grande, 36-40px)
- Nombre en negrita (font: Cormorant Garamond, color #1a1a1a)
- Descripción en texto pequeño (color #5a5a5a, Inter)
- Hover: borde en #b83228 (rojo rosa), sombra suave
- Sin color de fondo especial — que sea limpio sobre el fondo crema general

### Oración oficial a Santa Rita
Usar este texto completo (fuente: webcatolicodejavier.org, dominio libre):

"Tú que has conocido tantas dificultades. Tú que sabes lo que cuesta tener
paciencia. Tú, la Santa de lo imposible. ¡Dame la fortaleza de saber esperar!

Tú que has aceptado los desprecios y las críticas y hasta la violencia en tu propio
hogar. Tú que has visto ridiculizada tu ternura maternal. ¡Dime cómo aún se puede amar!

Tú que tanto has amado a Dios. Tú que tanta piedad has tenido por el Señor, que has
sufrido en tu cuerpo sus llagas de crucificado. ¡Enséñame a saber mirar y comprender la cruz!

Te pido por todos los que no se atreven a esperar más, por todos aquellos que no
creen en el milagro. ¡Ayúdanos a encontrar al Resucitado!"

Diseño del bloque de oración:
- Fondo crema oscuro (#f0ebe2) o con borde izquierdo en dorado (#c8a951)
- Tipografía Cormorant Garamond, italic, tamaño levemente mayor
- Centrado, con icono de rosa al inicio y al final

## HISTORIA DE LA CAPILLA (placeholder — reemplazar con datos reales)

[PLACEHOLDER] La Capilla Santa Rita de Casia es una de las capillas más queridas
de San Vicente, Santa Fe. Año de fundación a confirmar. Forma parte de la comunidad
parroquial de San Vicente de Paúl. La imagen venerada de Santa Rita preside el altar
y es llevada en procesión por las calles de la ciudad cada año en su festividad,
el 22 de mayo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua.

## PALETA DE COLOR

- Fondo general:     #faf8f4  (crema cálido)
- Fondo cards:       #ffffff  (blanco)
- Texto principal:   #1a1a1a  (negro suave)
- Texto secundario:  #5a5a5a  (gris)
- Acento primario:   #b83228  (rojo rosa — la rosa de Santa Rita)
- Acento dorado:     #c8a951  (dorado litúrgico — detalles y ornamentos)
- Acento verde:      #2d5a27  (verde — detalles naturales secundarios)
- Nav y footer:      #1a1a1a  (negro agustino)
- Texto sobre negro: #ffffff

## TIPOGRAFÍA

- Títulos:   Cormorant Garamond (Google Fonts, serif, weights 400 y 600)
- Cuerpo:    Inter (Google Fonts, sans-serif, weights 400 y 500)
- Importar desde Google Fonts en el <head>

## ESTRUCTURA DE PÁGINAS (Etapa 1)

El sitio tendrá una sola página (one-page scroll) con secciones ancla,
o bien múltiples páginas HTML estáticas — elegí la opción más mantenible.

### Secciones / páginas:

1. **Inicio (Hero)**
   - Foto de la capilla como fondo (usar placeholder: imagen de una capilla
     similar o color de fondo oscuro con overlay)
   - Lema del año: "Santa Rita Mujer Misionera"
   - Subtítulo: "Fiesta Patronal · San Vicente, Santa Fe"
   - Botón CTA: "Ver programa de la fiesta" → ancla a sección cronograma
   - Strip informativo debajo del hero: "Fiesta Patronal: 21 al 24 de mayo de 2026"

2. **La Fiesta — Cronograma 2026**
   - Mostrar el programa completo organizado por día
   - El domingo 24 destacado visualmente como el gran día
   - Las notas de Cáritas y bendición de objetos al final
   - Diseño tipo timeline o cards por día

3. **Santa Rita**
   - Breve historia de vida (tono cálido, no académico)
   - Sus símbolos principales con íconos decorativos
   - Por qué es patrona de los imposibles
   - Bloque con la oración oficial
   - Imagen placeholder de Santa Rita

4. **La Capilla**
   - Historia (con el texto placeholder indicado arriba)
   - Galería de 3-4 imágenes placeholder (usar aspect-ratio fijo, fondo gris suave
     con ícono de cámara y texto "Foto próximamente")
   - Horarios: la capilla abre todos los días de 8:00 a 18:00 hs.

5. **Cómo llegar y Contacto**
   - Dirección: Belgrano 333, San Vicente, Santa Fe
   - Mapa de Google Maps embebido (iframe proporcionado arriba)
   - Botón de WhatsApp: https://wa.me/5493492669762
     (texto: "Consultanos por WhatsApp")
   - Horario de apertura: todos los días 8:00 a 18:00 hs.

6. **Footer**
   - Logo / nombre de la capilla
   - Dirección: Belgrano 333, San Vicente, Santa Fe
   - WhatsApp: 3492 669762
   - Créditos: "Capilla Santa Rita de Casia · Parroquia San Vicente de Paúl
     · Diócesis de Santa Fe"

## COMPONENTES Y DETALLES DE UI

- Navbar fijo en el top, fondo negro (#1a1a1a), logo en dorado (#c8a951)
- Links de nav: La Fiesta · Santa Rita · La Capilla · Cómo llegar
- En mobile: hamburger menu
- Separadores entre secciones: línea fina decorativa o ícono de rosa 🌹
- Botones primarios: fondo #b83228, texto blanco, border-radius 6px
- Botón WhatsApp: verde WhatsApp (#25D366) con ícono de WhatsApp (SVG inline)
- Botón flotante de WhatsApp en la esquina inferior derecha en todas las páginas
- Hover states suaves en todos los elementos interactivos
- El sitio debe ser completamente responsive (mobile-first)
- Imágenes con lazy loading
- Meta tags SEO básicos en el <head>:
  - title: "Capilla Santa Rita de Casia · San Vicente, Santa Fe"
  - description: "Fiesta Patronal de Santa Rita de Casia en San Vicente, Santa Fe.
    Programa de actividades, misas, procesión y cómo llegar."
  - og:title, og:description, og:locale: es_AR

## TECNOLOGÍA

- HTML5 + CSS3 + JavaScript vanilla (sin frameworks)
- Sin dependencias de npm — el sitio debe funcionar abriendo index.html en el browser
- Opcionalmente: un archivo styles.css separado y scripts.js separado
- Compatible con hosting estático (Netlify, Vercel, GitHub Pages)
- NO usar frameworks CSS como Bootstrap o Tailwind (escribir CSS propio limpio)
- Sí usar Google Fonts (link en el head)

## ENTREGABLES ESPERADOS

1. index.html (o index.html + páginas separadas)
2. styles.css
3. scripts.js (menú mobile, smooth scroll, año dinámico en el footer)
4. /images/ carpeta con placeholders documentados
5. README.md con instrucciones para actualizar el contenido

## INSTRUCCIONES PARA PLACEHOLDERS

Toda imagen placeholder debe ser un <div> con:
- background: #e8e0d8
- aspect-ratio adecuado (16/9 para hero, 1/1 para Santa Rita, 4/3 para galería)
- Un ícono SVG centrado (cámara para fotos de la capilla, imagen de santa para Santa Rita)
- Texto debajo: "Foto próximamente" en gris suave
- class="img-placeholder" para fácil identificación

Todo texto placeholder extenso usar lorem ipsum en español manteniendo el tono devocional.

Por favor, generá el proyecto completo y funcional.
```

---

## PROMPT ETAPA 2-A — Santería online (cuando estén listos)

```
Continuando el proyecto de la Capilla Santa Rita de Casia.
Agregar al sitio existente una sección de Santería con las siguientes características:

- Nueva sección/página: "Santería"
- Catálogo de artículos con: imagen, nombre, descripción breve, precio (opcional)
- Categorías: estampas, imágenes, rosarios, medallas, velas, libros de oraciones
- Cada artículo con botón "Consultar por WhatsApp" que abra un mensaje predefinido:
  "Hola, me interesa [nombre del artículo] de la Santería de la Capilla Santa Rita"
- Los artículos se definen en un array JavaScript (products.js) para fácil actualización
  sin tocar el HTML
- Filtro por categoría (tabs simples, sin librería)
- Diseño coherente con la paleta existente

Datos a confirmar antes de implementar:
- Lista real de artículos con precios (si se muestran)
- Política de envíos o retiro en capilla
- Si se integran pagos (Mercado Pago) o solo consultas por WhatsApp
```

---

## PROMPT ETAPA 2-B — Sección de comunidad y devoción

```
Continuando el proyecto de la Capilla Santa Rita de Casia.
Agregar las siguientes secciones de contenido devocional:

1. **Novena digital** (activa del 13 al 21 de mayo cada año)
   - 9 páginas/pasos con la oración de cada día
   - Detección automática del día actual dentro del período de novena
   - Fuera del período: mostrar la novena completa para rezar libremente

2. **Intenciones / Peticiones**
   - Formulario simple: nombre (opcional) + intención de oración
   - Envío por EmailJS o Formspree (sin backend)
   - Las intenciones recibidas las ve el administrador por email
   - En el sitio mostrar solo: "Tu intención fue recibida, la llevaremos en oración"

3. **Galería de fiestas anteriores**
   - Grid de fotos por año (2024, 2025, 2026...)
   - Lightbox simple (vanilla JS, sin librería)
   - Las fotos se agregan editando un array en gallery-data.js

Mantener coherencia visual y tecnología vanilla.
```

---

## PROMPT ETAPA 2-C — Mejoras SEO y rendimiento

```
Continuando el proyecto de la Capilla Santa Rita de Casia.
Optimizar el sitio para búsqueda local y rendimiento:

1. SEO local:
   - Schema.org markup para Church/ReligiousOrganization
   - Google Business Profile integration (instrucciones para el cliente)
   - sitemap.xml y robots.txt
   - Open Graph tags completos para WhatsApp y Facebook preview

2. Rendimiento:
   - Optimizar imágenes (cuando estén disponibles): WebP + fallback JPEG
   - Preload de fuentes críticas
   - Minificación de CSS y JS para producción

3. Accesibilidad:
   - ARIA labels en todos los elementos interactivos
   - Contraste mínimo WCAG AA verificado
   - Focus visible en navegación por teclado
   - Alt text descriptivo en todas las imágenes

Schema.org de ejemplo para incluir:
{
  "@context": "https://schema.org",
  "@type": "Church",
  "name": "Capilla Santa Rita de Casia",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Belgrano 333",
    "addressLocality": "San Vicente",
    "addressRegion": "Santa Fe",
    "addressCountry": "AR"
  },
  "telephone": "+543492669762",
  "openingHours": "Mo-Su 08:00-18:00",
  "url": "[URL del sitio cuando esté publicado]"
}
```

---

## PROMPT ETAPA 3 — CMS simple para actualización anual del cronograma

```
Continuando el proyecto de la Capilla Santa Rita de Casia.
El cronograma cambia cada año. Implementar un sistema simple para que alguien
sin conocimientos técnicos pueda actualizarlo:

Opción A (recomendada — sin backend):
- Mover los datos del cronograma a un archivo /data/programa.json
- El JavaScript lee el JSON y renderiza el cronograma dinámicamente
- El administrador solo edita el JSON con cualquier editor de texto
- Documentar el formato del JSON en el README

Opción B (si se quiere interfaz visual):
- Integrar Netlify CMS (ahora Decap CMS) — gratuito
- Interfaz web en /admin para editar el cronograma y textos
- Sin costo adicional de hosting

Formato del programa.json:
{
  "anio": 2026,
  "lema": "Santa Rita Mujer Misionera",
  "dias": [
    {
      "fecha": "2026-05-21",
      "label": "Jueves 21 de mayo",
      "destacado": false,
      "eventos": [
        { "hora": "18:30", "descripcion": "Santo Rosario" },
        { "hora": "19:00", "descripcion": "Santa Misa rezando por las vocaciones" }
      ]
    }
  ],
  "notas": [
    "Cáritas sugiere ofrendas de alimentos no perecederos",
    "Después de cada Misa se bendecirán los objetos religiosos"
  ]
}
```

---

## CHECKLIST DE CONTENIDO PENDIENTE

Antes de publicar el sitio, completar con información real:

### Obligatorio para la etapa 1
- [ ] Foto de la capilla (exterior) — para el hero y la sección capilla
- [ ] Fotos del interior de la capilla
- [ ] Foto o imagen de la imagen venerada de Santa Rita
- [ ] Historia de la capilla (texto en español, 150-300 palabras)
- [ ] Año de fundación de la capilla
- [ ] Horario de misas semanal habitual (fuera de la fiesta)
- [ ] Links a redes sociales (Facebook, Instagram) si existen
- [ ] Email de contacto (opcional, además del WhatsApp)
- [ ] Nombre del dominio elegido (ej: capillasantarita-sanvicente.com.ar)

### Para etapa 2
- [ ] Lista completa de artículos de la santería con precios
- [ ] Fotos de los artículos de la santería
- [ ] Política de retiro/envío de artículos
- [ ] Fotos de fiestas de años anteriores (organizadas por año)
- [ ] Texto de la novena oficial (9 días)

---

## NOTAS PARA EL DESARROLLADOR

- El sitio debe estar listo para hostear en **Netlify** (gratuito) o **GitHub Pages**
- Estructura de archivos sugerida:
  ```
  capilla-santa-rita/
  ├── index.html
  ├── styles.css
  ├── scripts.js
  ├── images/
  │   ├── capilla-exterior.jpg       (placeholder)
  │   ├── capilla-interior-1.jpg     (placeholder)
  │   ├── capilla-interior-2.jpg     (placeholder)
  │   ├── santa-rita.jpg             (placeholder)
  │   └── og-image.jpg               (placeholder — 1200x630px para redes)
  ├── data/
  │   └── programa.json              (opcional, para etapa 3)
  └── README.md
  ```
- El **número de WhatsApp en formato internacional** para el href es: `+543492669762`
  (prefijo AR +54, sin el 0 de la provincia, con el 9 de celular)
- El cronograma 2026 tiene su **gran fiesta el domingo 24 de mayo**, no el 22
  (el 22 es el día litúrgico de la santa, la celebración local se extendió al domingo)
- La capilla es organizada conjuntamente con la **Parroquia San Vicente de Paúl**

---

*Generado como parte del pre-proyecto del sitio web de la Capilla Santa Rita de Casia · San Vicente, Santa Fe · Mayo 2026*
