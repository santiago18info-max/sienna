# SIENNA — [peptide complex] (web)

Sitio estático (HTML + CSS + JS, sin dependencias). Se abre directo con doble clic en `index.html`.

## Estructura

```
sienna-web/
├── index.html              Estructura y textos de la página
├── css/
│   ├── base.css            Colores, tipografías (:root), reset, utilidades, animaciones
│   ├── components.css      Botones, header, filtros, tarjetas, modal, footer
│   ├── sections.css        Estilos de cada sección (hero, manifiesto, tecnología…)
│   └── responsive.css      Ajustes para tablet y celular
├── js/
│   ├── products.js         ← Datos de los productos (editar acá)
│   └── main.js             Menú, filtros, modal y animaciones
└── assets/
    └── img/
        ├── sienna-logo-black.svg   Logo (header) — versión web del logo oficial
        ├── sienna-logo-white.svg   Logo (footer) — versión web del logo oficial
        ├── sienna-emblema.svg      Emblema de círculos (sección Tecnología)
        ├── favicon.svg             Ícono de pestaña (la gota de la "I")
        ├── originales/             Archivos tal cual los mandó la diseñadora
        └── products/               Poner acá las fotos de producto
```

### Sobre el logo

Los SVG originales (`originales/Recurso 1.svg`, `Recurso 2.svg`) tienen el texto como
**texto con la tipografía Bonny**, no como contornos. En cualquier compu que no tenga Bonny
instalada las letras se ven encimadas. Por eso `sienna-logo-*.svg` es una versión adaptada
que fija el ancho de cada letra y usa una serif de respaldo.

**Solución definitiva:** exportar el logo desde Illustrator con *Texto → Crear contornos*
y reemplazar `sienna-logo-black.svg` / `sienna-logo-white.svg` con el mismo nombre.

## Cómo editar

| Quiero cambiar…            | Archivo                                   |
|----------------------------|-------------------------------------------|
| Textos de la página        | `index.html`                              |
| Colores / tipografías      | `css/base.css` → bloque `:root`           |
| Productos (nombre, foto…)  | `js/products.js`                          |
| Logo                       | reemplazar los `.svg` en `assets/img/` con el mismo nombre |
| Mail de contacto           | `index.html`, sección CONTACTO            |

## Pendientes

- [ ] Logo con texto en contornos (ver "Sobre el logo")
- [ ] `sienna-emblema.svg` pesa 1,4 MB (tiene un PNG de 3193px adentro); conviene exportarlo más liviano
- [ ] Fotos definitivas: hero, quiénes somos, feature y productos (hoy son de Unsplash)
- [ ] Descripciones finales de los productos
- [ ] Mail de contacto real (hoy `hello@sienna.example`)
