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
};

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
