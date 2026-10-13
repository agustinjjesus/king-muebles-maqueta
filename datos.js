// Datos de la maqueta. En la web real esto sale de la planilla de Google
// que mantiene Agustín (precios por medida y color).
const KM = {
  whatsapp: "5491139573474",          // +54 9 11 3957-3474
  instagram: "kingmuebless",
  // Productos del catálogo de WhatsApp de King Muebles (capturas del 13/10).
  // Solo la Cama KNG tiene ficha y precio confirmado; el resto abre WhatsApp para consultar.
  // Las fotos de "assets/catalogo/" son recortes chicos de las capturas: reemplazar por las originales.
  productos: [
    { id: "cama-kng", nombre: "Cama KNG", categoria: "Camas", bajada: "6 cajones · 2 bauleras · 2 botineros",
      foto: "assets/kng-1.jpg", url: "cama-kng.html", desde: 499000 },
    { id: "cama-kng-mdf", nombre: "Cama KNG MDF", categoria: "Camas", bajada: "La KNG en MDF",
      foto: "assets/catalogo/cama-kng-mdf.jpg" },
    { id: "cama-kingdom", nombre: "Cama Kingdom", categoria: "Camas", bajada: "Con cajones y bauleras",
      foto: "assets/catalogo/cama-kingdom.jpg" },
    { id: "cama-boti", nombre: "Cama Boti", categoria: "Camas", bajada: "Cama con guardado",
      foto: "assets/catalogo/cama-boti.jpg" },
    { id: "cama-individual", nombre: "Cama Individual", categoria: "Camas", bajada: "Para una persona",
      foto: "assets/catalogo/cama-individual.jpg" },
    { id: "combo-kng", nombre: "Combo KNG", categoria: "Combos", bajada: "Cama KNG con respaldo y mesitas de luz",
      foto: "assets/catalogo/combo-kng.jpg" },
    { id: "colchon-reina-doble-pillow", nombre: "Colchón Reina Doble Pillow", categoria: "Colchones",
      bajada: "Con doble pillow", foto: "assets/catalogo/colchon-reina-doble-pillow.jpg" },
    { id: "colchon-isolda", nombre: "Colchón Isolda", categoria: "Colchones", bajada: "140 x 190",
      foto: "assets/catalogo/colchon-isolda.jpg" },
    { id: "colchon-isolda-doble-pillow", nombre: "Colchón Isolda Doble Pillow", categoria: "Colchones",
      bajada: "Con doble pillow", foto: "assets/catalogo/colchon-isolda-doble-pillow.jpg" },
  ],

  // Catálogo de colores (13/10). Blanco es el precio base; "en color" suma $30.000 (lo dijo Ramiro
  // por la KNG). A confirmar si Blanco Nature cuenta como blanco o como color.
  colores: [
    { nombre: "Blanco", img: "assets/colores/blanco.jpg", extra: 0 },
    { nombre: "Blanco Nature", img: "assets/colores/blanco-nature.jpg", extra: 30000 },
    { nombre: "Helsinki", img: "assets/colores/helsinki.jpg", extra: 30000 },
    { nombre: "Pinot Gris", img: "assets/colores/pinot-gris.jpg", extra: 30000 },
    { nombre: "Linoza Cinza", img: "assets/colores/linoza-cinza.jpg", extra: 30000 },
    { nombre: "Atakama", img: "assets/colores/atakama.jpg", extra: 30000 },
    { nombre: "Terrarum", img: "assets/colores/terrarum.jpg", extra: 30000 },
    { nombre: "Fresno Negro", img: "assets/colores/fresno-negro.jpg", extra: 30000 },
    { nombre: "Negro", img: "assets/colores/negro.jpg", extra: 30000 },
  ],

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

function waLink(mensaje) {
  return "https://wa.me/" + KM.whatsapp + "?text=" + encodeURIComponent(mensaje);
}

function pesos(n) {
  return "$" + n.toLocaleString("es-AR");
}

// Todos los enlaces con data-wa="mensaje" abren WhatsApp con ese mensaje ya escrito
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-wa]").forEach((a) => {
    a.href = waLink(a.dataset.wa);
    a.target = "_blank";
    a.rel = "noopener";
  });
});
