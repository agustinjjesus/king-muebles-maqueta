// Datos de la maqueta. En la web real esto sale de la planilla de Google
// que mantiene Agustín (precios por medida y color).
const SPECS_KNG = [
  ["Medidas", "1,40 x 1,90 (colchón de 2 plazas). También 1,60, 1,80 y 2,00 m, a consultar"],
  ["Material", "Melamina de 18 mm, interior y exterior"],
  ["Carga máxima", "600 kg"],
  ["Altura", "40 cm (también de 30 cm)"],
  ["Cajones", "6 con guías telescópicas: 3 de cada lado, 1 grande y 2 chicos (también con 4 u 8, a consultar)"],
  ["Bauleras", "2, con bisagras"],
  ["Zapateros", "2 al frente, con pistones y bisagras"],
  ["Herrajes", "Metálicos, sin piezas de plástico"],
  ["Cantos", "PVC 0,22 x 0,45"],
];

const KM = {
  whatsapp: "5491139573474",          // +54 9 11 3957-3474
  instagram: "kingmuebless",
  // Productos del catálogo de WhatsApp de King Muebles (capturas del 13/10).
  // Los que tienen "url" tienen ficha (ficha.js arma la página con estos datos); el resto abre WhatsApp.
  // Las fotos de "assets/catalogo/" son recortes chicos de las capturas: reemplazar por las originales.
  // Para sumar una ficha: copiar cama-kng-scotch.html, cambiar el id y los textos del <head>, y cargar acá
  // fotos, medidas (precio null = "a consultar") y specs.
  productos: [
    // Ramiro (13/10): "Es la que tendría que estar principal". Misma cama en cada color, con su precio:
    // la blanca $499.000 y la Scotch $530.000. Las otras medidas y colores, a consultar.
    { id: "cama-kng", modelo: "kng", base: "Cama KNG", nombre: "Cama KNG Blanca", color: "Blanco", categoria: "Camas",
      bajada: "6 cajones · 2 bauleras · 2 zapateros", url: "cama-kng.html", desde: 499000,
      foto: "assets/reales/kng-blanco-2.jpg",
      galeria: [
        { foto: "assets/reales/kng-blanco-2.jpg", alt: "Cama KNG blanca con cajones, bauleras y zapateros abiertos" },
        { foto: "assets/reales/kng-blanco-1.jpg", alt: "Cama KNG blanca abierta, vista desde el costado" },
        { foto: "assets/reales/kng-blanco-3.jpg", alt: "Cama KNG blanca cerrada" },
        { video: "assets/reales/video-cajones.mp4", poster: "assets/reales/video-cajones-poster.jpg" },
        { video: "assets/reales/video-bauleras.mp4", poster: "assets/reales/video-bauleras-poster.jpg" },
      ],
      medidas: [["1,40 x 1,90", 499000], ["1,60", null], ["1,80", null], ["2,00", null]],
      specs: "kng" },
    { id: "cama-kng-scotch", modelo: "kng", base: "Cama KNG", nombre: "Cama KNG Scotch", color: "Scotch", categoria: "Camas",
      bajada: "6 cajones · 2 bauleras · 2 zapateros", url: "cama-kng-scotch.html", desde: 530000,
      foto: "assets/reales/kng-scotch-2.jpg",
      galeria: [
        { foto: "assets/reales/kng-scotch-2.jpg", alt: "Cama KNG Scotch con cajones, bauleras y zapateros abiertos" },
        { foto: "assets/reales/kng-scotch-1.jpg", alt: "Cama KNG Scotch abierta, de frente" },
        { foto: "assets/reales/kng-scotch-3.jpg", alt: "Cama KNG Scotch cerrada" },
        { foto: "assets/reales/kng-scotch-4.jpg", alt: "Frente de la Cama KNG Scotch con los zapateros cerrados" },
        { foto: "assets/reales/kng-scotch-5.jpg", alt: "Costado de la Cama KNG Scotch con los cajones cerrados" },
      ],
      medidas: [["1,40 x 1,90", 530000], ["1,60", null], ["1,80", null], ["2,00", null]],
      specs: "kng" },
    { id: "cama-kng-mdf", nombre: "Cama KNG MDF", categoria: "Camas", bajada: "La KNG en MDF",
      foto: "assets/catalogo/cama-kng-mdf.jpg" },
    { id: "cama-kingdom", nombre: "Cama Kingdom", categoria: "Camas", bajada: "Con cajones y bauleras",
      foto: "assets/catalogo/cama-kingdom.jpg" },
    { id: "cama-boti", nombre: "Cama Boti", categoria: "Camas", bajada: "Cama con guardado",
      foto: "assets/catalogo/cama-boti.jpg" },
    // Ramiro (14/10): $450.000 en cualquiera de las 3 medidas. No dijo el color: va como blanca (la foto
    // es blanca), a confirmar. Sin ficha hasta tener sus fotos originales (las del chat no llegaron).
    { id: "cama-kng-individual", nombre: "Cama KNG Individual", color: "Blanco", categoria: "Camas",
      bajada: "3 cajones · 2 bauleras · 1 zapatero", desde: 450000,
      foto: "assets/catalogo/cama-individual.jpg",
      medidas: [["80 x 1,90", 450000], ["90 x 1,90", 450000], ["1,00 x 1,90", 450000]],
      specs: "kng-individual" },
    // Ramiro (14/10): cama $530.000 (la de la foto es Scotch) + respaldo con mesitas flotantes $225.000.
    { id: "combo-kng", nombre: "Combo KNG", color: "Scotch", categoria: "Combos",
      bajada: "Cama KNG + respaldo con mesitas flotantes", url: "combo-kng.html", desde: 755000,
      foto: "assets/reales/combo-kng-1.jpg",
      galeria: [
        { foto: "assets/reales/combo-kng-1.jpg", alt: "Combo KNG Scotch: cama con respaldo y mesitas flotantes" },
        { foto: "assets/reales/kng-scotch-2.jpg", alt: "La cama del combo, con cajones, bauleras y zapateros abiertos" },
        { foto: "assets/reales/kng-scotch-4.jpg", alt: "Frente de la cama del combo con los zapateros cerrados" },
      ],
      partes: [["Cama", 530000], ["respaldo y mesitas", 225000]],
      medidas: [["1,40 x 1,90", 755000], ["1,60", null], ["1,80", null], ["2,00", null]],
      specs: "combo-kng" },
    { id: "colchon-reina-doble-pillow", nombre: "Colchón Reina Doble Pillow", categoria: "Colchones",
      bajada: "Con doble pillow", foto: "assets/catalogo/colchon-reina-doble-pillow.jpg" },
    { id: "colchon-isolda", nombre: "Colchón Isolda", categoria: "Colchones", bajada: "140 x 190",
      foto: "assets/catalogo/colchon-isolda.jpg" },
    { id: "colchon-isolda-doble-pillow", nombre: "Colchón Isolda Doble Pillow", categoria: "Colchones",
      bajada: "Con doble pillow", foto: "assets/catalogo/colchon-isolda-doble-pillow.jpg" },
  ],

  // Opiniones de Google (ficha de King Muebles, 12/10): nombre con inicial del apellido, sin fotos.
  // Se muestran en el inicio y en cada ficha.
  opiniones: {
    nota: "4,7", total: 68, link: "https://share.google/Lflyi2ZKii5RVjfKh",
    lista: [
      { autor: "Camila R.", texto: "Excelente experiencia de principio a fin. Compramos una cama y todo fue impecable. Cumplieron con los tiempos, hicieron todo muy rápido y el resultado superó nuestras expectativas." },
      { autor: "Silvana Z.", texto: "Son excelentes! La cama box quedó hermosa! El color y las terminaciones impecables. Son muy amables y responden a todas las preguntas… Muy recomendable!" },
      { autor: "Guadalupe R.", texto: "Excelente cama y servicio! Ramiro con toda la paciencia del mundo resolvió mis dudas y cumplieron con la entrega." },
    ],
  },

  // Colores: los 9 del catálogo de WhatsApp (13/10) + Scotch (la KNG que mandó Ramiro el 13/10; la
  // muestra es un recorte de esa foto). Cada color con fotos va como producto aparte, con su precio;
  // en la ficha, el resto de los colores es "a consultar".
  colores: [
    { nombre: "Blanco", img: "assets/colores/blanco.jpg" },
    { nombre: "Scotch", img: "assets/colores/scotch.jpg" },
    { nombre: "Blanco Nature", img: "assets/colores/blanco-nature.jpg" },
    { nombre: "Helsinki", img: "assets/colores/helsinki.jpg" },
    { nombre: "Pinot Gris", img: "assets/colores/pinot-gris.jpg" },
    { nombre: "Linoza Cinza", img: "assets/colores/linoza-cinza.jpg" },
    { nombre: "Atakama", img: "assets/colores/atakama.jpg" },
    { nombre: "Terrarum", img: "assets/colores/terrarum.jpg" },
    { nombre: "Fresno Negro", img: "assets/colores/fresno-negro.jpg" },
    { nombre: "Negro", img: "assets/colores/negro.jpg" },
  ],

  // Especificaciones por modelo, como las mandó Ramiro (KNG el 13/10; Individual y Combo el 14/10).
  // Carga, altura y herrajes de la KNG vienen de su descripción anterior de la cama.
  specs: {
    kng: SPECS_KNG,
    "combo-kng": [
      ["Incluye", "Cama KNG, respaldo y 2 mesitas flotantes"],
      ...SPECS_KNG,
    ],
    "kng-individual": [
      ["Medidas", "80 x 1,90, 90 x 1,90 o 1,00 x 1,90"],
      ["Material", "Melamina de 18 mm y MDF de 15 mm"],
      ["Cajones", "3 con guías telescópicas (también con 2)"],
      ["Bauleras", "2, con bisagras"],
      ["Zapatero", "1 al frente, con puerta rebatible, pistones y bisagras"],
      ["Cantos", "PVC 0,22 x 0,45"],
    ],
  },

  // Zonas de flete de King Muebles (el flete incluye instalación). El tarifario nombra solo algunas
  // localidades; acá va el PARTIDO entero en la zona donde el tarifario puso a sus localidades
  // (ej.: Ciudadela, El Palomar y Ciudad Jardín → Tres de Febrero entero en Zona Oeste).
  // A confirmar con Ramiro. Los costos por zona están pendientes (la imagen del tarifario salió cortada).
  zonas: {
    "CABA": {
      "CABA": ["CABA", "Capital Federal", "Ciudad Autónoma de Buenos Aires",
        "Agronomía", "Almagro", "Balvanera", "Barracas", "Belgrano", "Boedo", "Caballito", "Chacarita",
        "Coghlan", "Colegiales", "Constitución", "Flores", "Floresta", "La Boca", "La Paternal", "Liniers",
        "Mataderos", "Monte Castro", "Montserrat", "Nueva Pompeya", "Núñez", "Palermo", "Parque Avellaneda",
        "Parque Chacabuco", "Parque Chas", "Parque Patricios", "Puerto Madero", "Recoleta", "Retiro",
        "Saavedra", "San Cristóbal", "San Nicolás", "San Telmo", "Vélez Sarsfield", "Versalles",
        "Villa Crespo", "Villa del Parque", "Villa Devoto", "Villa General Mitre", "Villa Lugano",
        "Villa Luro", "Villa Ortúzar", "Villa Pueyrredón", "Villa Real", "Villa Riachuelo",
        "Villa Santa Rita", "Villa Soldati", "Villa Urquiza"],
    },
    "Zona Norte": {
      "Vicente López": ["Vicente López", "Olivos", "Florida", "Florida Oeste", "Munro", "La Lucila",
        "Carapachay", "Villa Martelli", "Villa Adelina"],
      "San Isidro": ["San Isidro", "Martínez", "Beccar", "Acassuso", "Boulogne Sur Mer", "Villa Adelina"],
      "San Fernando": ["San Fernando", "Victoria", "Virreyes"],
      "Tigre": ["Tigre", "Don Torcuato", "General Pacheco", "El Talar", "Benavídez", "Rincón de Milberg",
        "Ricardo Rojas", "Troncos del Talar", "Nordelta", "Dique Luján"],
    },
    "Zona Sur": {
      "Avellaneda": ["Avellaneda", "Dock Sud", "Sarandí", "Villa Domínico", "Wilde", "Gerli", "Piñeyro"],
      "Lanús": ["Lanús", "Lanús Este", "Lanús Oeste", "Remedios de Escalada", "Monte Chingolo",
        "Valentín Alsina", "Gerli"],
      "Lomas de Zamora": ["Lomas de Zamora", "Banfield", "Temperley", "Turdera", "Llavallol",
        "Villa Fiorito", "Ingeniero Budge", "Villa Centenario"],
      "Quilmes": ["Quilmes", "Quilmes Oeste", "Bernal", "Don Bosco", "Ezpeleta", "San Francisco Solano"],
      "Almirante Brown": ["Adrogué", "Burzaco", "Longchamps", "Glew", "Rafael Calzada", "José Mármol",
        "Claypole", "San José", "Ministro Rivadavia", "San Francisco Solano"],
    },
    "Zona Oeste": {
      "Tres de Febrero": ["Caseros", "Churruca", "Ciudadela", "Ciudad Jardín Lomas del Palomar",
        "Ciudad Jardín", "El Libertador", "El Palomar", "José Ingenieros", "Loma Hermosa",
        "Martín Coronado", "Once de Septiembre", "Pablo Podestá", "Remedios de Escalada", "Sáenz Peña",
        "Santos Lugares", "Villa Bosch", "Villa Raffo"],
      "Morón": ["Morón", "Castelar", "Haedo", "El Palomar", "Villa Sarmiento"],
      "Hurlingham": ["Hurlingham", "William C. Morris", "William Morris", "Villa Tesei"],
      "Ituzaingó": ["Ituzaingó", "Villa Udaondo", "Parque Leloir"],
      "La Matanza": ["San Justo", "Ramos Mejía", "Lomas del Mirador", "Villa Luzuriaga", "Isidro Casanova",
        "Gregorio de Laferrere", "González Catán", "Rafael Castillo", "Villa Madero", "Tapiales",
        "Aldo Bonzi", "La Tablada", "Ciudad Evita", "Villa Celina", "Virrey del Pino", "20 de Junio"],
      "Merlo": ["Merlo", "San Antonio de Padua", "Libertad", "Parque San Martín", "Mariano Acosta", "Pontevedra"],
      "Moreno": ["Moreno", "Paso del Rey", "Trujui", "La Reja", "Francisco Álvarez", "Cuartel V"],
    },
    "Zona Norte extendida": {
      "Pilar": ["Pilar", "Del Viso", "Presidente Derqui", "Villa Rosa", "Manzanares", "Fátima", "La Lonja",
        "Manuel Alberti", "Villa Astolfi", "Zelaya"],
      "Escobar": ["Escobar", "Belén de Escobar", "Garín", "Ingeniero Maschwitz", "Maquinista Savio",
        "Matheu", "Loma Verde"],
    },
    "La Plata": {
      "La Plata": ["La Plata", "City Bell", "Gonnet", "Villa Elisa", "Tolosa", "Ringuelet", "Los Hornos",
        "Gorina", "Villa Elvira", "San Carlos", "Melchor Romero"],
    },
  },

  // Partidos del AMBA que el tarifario no nombra: el buscador dice "consultanos", no "no llegamos".
  consultar: {
    "General San Martín": ["San Martín", "Villa Ballester", "San Andrés", "Villa Lynch", "Villa Maipú",
      "José León Suárez", "Billinghurst", "Chilavert", "Villa Libertad", "Villa Zagala"],
    "San Miguel": ["San Miguel", "Bella Vista", "Muñiz"],
    "Malvinas Argentinas": ["Los Polvorines", "Grand Bourg", "Tortuguitas", "Pablo Nogués", "Villa de Mayo",
      "Ingeniero Adolfo Sourdeaux", "Tierras Altas"],
    "José C. Paz": ["José C. Paz"],
    "Esteban Echeverría": ["Monte Grande", "Luis Guillón", "El Jagüel", "9 de Abril", "Canning"],
    "Ezeiza": ["Ezeiza", "Tristán Suárez", "La Unión", "Carlos Spegazzini"],
    "Florencio Varela": ["Florencio Varela", "Bosques", "Zeballos"],
    "Berazategui": ["Berazategui", "Hudson", "Ranelagh", "Sourigues", "Plátanos"],
    "Berisso": ["Berisso"],
    "Ensenada": ["Ensenada"],
    "General Rodríguez": ["General Rodríguez"],
    "Marcos Paz": ["Marcos Paz"],
    "Presidente Perón": ["Guernica"],
    "Cañuelas": ["Cañuelas"],
  },
};

function normal(s) {
  return s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().trim();
}

// Todas las localidades y partidos en una lista: { nombre, partido, zona } (zona null = consultar)
const LUGARES = (() => {
  const lista = [];
  const sumar = (partido, locs, zona) => {
    [partido, ...locs].forEach((nombre) => {
      if (!lista.some((l) => l.nombre === nombre && l.zona === zona)) lista.push({ nombre, partido, zona });
    });
  };
  for (const [zona, partidos] of Object.entries(KM.zonas)) {
    for (const [partido, locs] of Object.entries(partidos)) sumar(partido, locs, zona);
  }
  for (const [partido, locs] of Object.entries(KM.consultar)) sumar(partido, locs, null);
  return lista;
})();

// Busca lo que escribió el cliente. Devuelve:
//   { nombre, partido, zona }   → llegamos (o zona null: consultar)
//   { ambigua: true, opciones } → varias en zonas distintas: si el nombre es exacto (ej. Remedios de
//                                 Escalada, que está en Lanús y en Tres de Febrero) se muestran todas;
//                                 si no, hay que seguir escribiendo
//   null                        → no la tenemos
function buscarLugar(texto) {
  const t = normal(texto);
  if (t.length < 3) return null;
  const exactas = LUGARES.filter((l) => normal(l.nombre) === t);
  const candidatas = exactas.length ? exactas : LUGARES.filter((l) => normal(l.nombre).startsWith(t));
  if (!candidatas.length) return null;
  const zonas = new Set(candidatas.map((c) => c.zona));
  if (zonas.size > 1) return { ambigua: true, exacta: exactas.length > 0, opciones: candidatas };
  return candidatas[0];
}

// "la Cama KNG" / "el Combo KNG", y "la quiero" / "lo quiero"
function articulo(p) {
  return p.categoria === "Camas" ? "la" : "el";
}
function pronombre(p) {
  return p.categoria === "Camas" ? "la" : "lo";
}

function waLink(mensaje) {
  return "https://wa.me/" + KM.whatsapp + "?text=" + encodeURIComponent(mensaje);
}

function pesos(n) {
  return "$" + n.toLocaleString("es-AR");
}

// Opiniones de Google: la nota y las tarjetas, para el inicio y las fichas
function htmlNotaGoogle() {
  const o = KM.opiniones;
  return `<div class="nota-google"><strong>${o.nota}</strong><span class="estrellas" aria-hidden="true">★★★★★</span>` +
    `<span>${o.total} opiniones en Google</span></div>` +
    `<a class="link-flecha" href="${o.link}" target="_blank" rel="noopener">Ver opiniones en Google →</a>`;
}
function htmlOpiniones() {
  return KM.opiniones.lista.map((o) => `
    <li>
      <blockquote>“${o.texto}”</blockquote>
      <div class="autor"><span class="avatar" aria-hidden="true">${o.autor[0]}</span><div><strong>${o.autor}</strong><span class="fuente">Opinión en Google</span></div></div>
    </li>`).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  // Todos los enlaces con data-wa="mensaje" abren WhatsApp con ese mensaje ya escrito
  document.querySelectorAll("[data-wa]").forEach((a) => {
    a.href = waLink(a.dataset.wa);
    a.target = "_blank";
    a.rel = "noopener";
  });

  // Menú del celular: se cierra al elegir una sección o al tocar afuera
  const menu = document.querySelector(".menu-movil");
  if (menu) {
    menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => { menu.open = false; }));
    document.addEventListener("click", (e) => { if (menu.open && !menu.contains(e.target)) menu.open = false; });
  }
});
