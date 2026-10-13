// Datos de la maqueta. En la web real esto sale de la planilla de Google
// que editan Ramiro y Agustín (precios por medida y color).
const KM = {
  whatsapp: "5491139573474",          // +54 9 11 3957-3474
  instagram: "kingmuebless",
  productos: [
    {
      id: "cama-kng",
      nombre: "Cama KNG",
      categoria: "Camas",
      bajada: "6 cajones · 2 bauleras · 2 botineros",
      foto: "assets/kng-1.jpg",
      url: "cama-kng.html",
      desde: 499000,
    },
  ],
  // Zonas y localidades del tarifario de fletes de King Muebles (el flete incluye instalación).
  // Los costos por zona están pendientes: en la imagen que pasó Ramiro la columna de precios salía cortada.
  zonas: {
    "CABA": ["CABA", "Capital Federal", "Ciudad Autónoma de Buenos Aires",
      "Agronomía", "Almagro", "Balvanera", "Barracas", "Belgrano", "Boedo", "Caballito", "Chacarita",
      "Coghlan", "Colegiales", "Constitución", "Flores", "Floresta", "La Boca", "La Paternal", "Liniers",
      "Mataderos", "Monte Castro", "Montserrat", "Nueva Pompeya", "Núñez", "Palermo", "Parque Avellaneda",
      "Parque Chacabuco", "Parque Chas", "Parque Patricios", "Puerto Madero", "Recoleta", "Retiro",
      "Saavedra", "San Cristóbal", "San Nicolás", "San Telmo", "Vélez Sarsfield", "Versalles",
      "Villa Crespo", "Villa del Parque", "Villa Devoto", "Villa General Mitre", "Villa Lugano",
      "Villa Luro", "Villa Ortúzar", "Villa Pueyrredón", "Villa Real", "Villa Riachuelo",
      "Villa Santa Rita", "Villa Soldati", "Villa Urquiza"],
    "Zona Norte": ["Vicente López", "Olivos", "Florida", "Munro", "La Lucila", "Carapachay",
      "Villa Martelli", "San Isidro", "Martínez", "Beccar", "Acassuso", "Boulogne Sur Mer",
      "Villa Adelina", "San Fernando", "Virreyes", "Tigre", "Don Torcuato", "General Pacheco", "El Talar"],
    "Zona Sur": ["Avellaneda", "Dock Sud", "Sarandí", "Wilde", "Piñeyro", "Gerli", "Lanús Este",
      "Lanús Oeste", "Remedios de Escalada", "Monte Chingolo", "Lomas de Zamora", "Banfield",
      "Temperley", "Turdera", "Villa Fiorito", "Quilmes", "Bernal", "Don Bosco", "Ezpeleta",
      "San Francisco Solano", "Adrogué", "Burzaco", "Longchamps", "Glew", "Rafael Calzada"],
    "Zona Oeste": ["San Justo", "Ramos Mejía", "Isidro Casanova", "Gregorio de Laferrere",
      "González Catán", "Haedo", "Morón", "Castelar", "El Palomar", "Ciudadela", "Ciudad Jardín",
      "Merlo", "Libertad", "San Antonio de Padua", "Moreno", "Paso del Rey", "Trujui", "Ituzaingó",
      "William Morris", "Hurlingham"],
    "Zona Norte extendida": ["Pilar", "Escobar", "Del Viso", "Presidente Derqui", "Villa Rosa",
      "Belén de Escobar", "Garín", "Ingeniero Maschwitz", "Maquinista Savio", "Matheu"],
    "La Plata": ["La Plata"],
  },
};

function normal(s) {
  return s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().trim();
}

// Devuelve la zona de una localidad escrita por el cliente, o null si no está en la lista
function zonaDe(texto) {
  const t = normal(texto);
  if (t.length < 3) return null;
  for (const [zona, locs] of Object.entries(KM.zonas)) {
    const hit = locs.find((l) => normal(l) === t) || locs.find((l) => normal(l).startsWith(t));
    if (hit) return { zona, localidad: hit };
  }
  return null;
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
