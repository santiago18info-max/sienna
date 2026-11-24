/* =========================================================
   SIENNA — Datos de productos
   Para agregar, quitar o editar un producto, cambiá solo esta lista.
   Las tarjetas de la sección "El tratamiento" y el modal de detalle
   se generan automáticamente a partir de estos datos.

   category:    "pre-shampoo" | "shampoo" | "serum" | "mascara"
                (tiene que coincidir con data-filter de los botones en index.html)
   funcion:     texto de "Función" en el modal
   ingredients: lista de "Ingredientes" en el modal
   image:       ruta local, ej. "assets/img/products/serum.jpg"
   ========================================================= */
window.SIENNA_PRODUCTS = [
  {
    tag: '01 / Pre-shampoo',
    title: 'Pre-Shampoo',
    subtitle: 'Tratamiento para cabello químicamente tratado',
    category: 'pre-shampoo',
    funcion: 'Preparar la fibra antes del lavado y aportar acondicionamiento.',
    ingredients: ['Peptide Complex', 'Arginina', 'Aceite de argán', 'Escualano'],
    image: 'assets/img/products/pre-shampoo-v2.jpg'
  },
  {
    tag: '02 / Shampoo',
    title: 'Shampoo',
    subtitle: 'Tratamiento para cabello químicamente tratado',
    category: 'shampoo',
    funcion: 'Limpiar el cabello y el cuero cabelludo sin descuidar el acondicionamiento de la fibra.',
    ingredients: ['Peptide Complex', 'Glicerina', 'Serina', 'Pantenol'],
    image: 'assets/img/hero-shampoo-v2.jpg'
  },
  {
    tag: '03 / Serum',
    title: 'Serum',
    subtitle: 'Tratamiento para cabello químicamente tratado',
    category: 'serum',
    funcion: 'Complementar el cuidado de la fibra y mejorar su apariencia superficial.',
    ingredients: ['Peptide Complex', 'Proteínas hidrolizadas', 'Aceite de jojoba', 'Dimeticona'],
    image: 'assets/img/products/serum.jpg'
  },
  {
    tag: '04 / Máscara',
    title: 'Máscara',
    subtitle: 'Tratamiento para cabello químicamente tratado',
    category: 'mascara',
    funcion: 'Proporcionar acondicionamiento intensivo y mejorar la manejabilidad del cabello.',
    ingredients: ['Peptide Complex', 'Aminoácidos', 'Queratina hidrolizada', 'Manteca de karité', 'Alcohol cetearílico'],
    image: 'assets/img/products/mascara.jpg'
  }
];
