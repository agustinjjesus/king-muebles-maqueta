// Ficha de producto: arma la página con los datos de datos.js.
// Cada página de producto tiene <main id="ficha" data-producto="id del producto">.

const main = document.getElementById("ficha");
const P = KM.productos.find((p) => p.id === main.dataset.producto);
const base = P.base || P.nombre;   // "Cama KNG", sin el color
// los otros colores del mismo modelo que tienen su propia ficha
const variantes = KM.productos.filter((p) => p.modelo && p.modelo === P.modelo);
const elegido = { medida: P.medidas[0][0], color: P.color };

const textoMedida = (m) => (m.includes("x") ? m : m + " m");
const abrirEnWhatsApp = (a, msg) => {
  a.href = waLink(msg);
  a.target = "_blank";
  a.rel = "noopener";
};

main.innerHTML = `
  <div class="migas"><a href="index.html#catalogo">Catálogo</a> / ${P.categoria} / ${P.nombre}</div>
  <div class="ficha">
    <div class="galeria">
      <div class="principal" id="principal"></div>
      <div class="miniaturas" id="miniaturas"></div>
    </div>

    <div class="info-producto">
      <p class="eyebrow">${P.categoria}</p>
      <h1>${P.nombre}</h1>
      <p class="sub">${P.bajada}</p>

      <p class="precio-ficha" id="precio"></p>
      <p class="precio-nota" id="nota"></p>

      <div class="opcion">
        <span>Medida</span>
        <div class="botones" id="medidas"></div>
        <details class="guia-medidas">
          <summary>¿Qué medida necesito?</summary>
          <table class="tabla-medidas">
            <thead><tr><th>Cama</th><th>Colchón</th></tr></thead>
            <tbody>
              <tr><td>2 plazas</td><td>140 x 190 cm</td></tr>
              <tr><td>Queen</td><td>160 x 200 cm</td></tr>
              <tr><td>King</td><td>180 x 200 cm</td></tr>
              <tr><td>Super King</td><td>200 x 200 cm</td></tr>
            </tbody>
          </table>
          <p>Elegí la medida según tu colchón. Si tiene otra medida, consultanos: la hacemos a medida.</p>
        </details>
      </div>
      <div class="opcion">
        <span>Color · <span class="color-elegido" id="color-elegido"></span></span>
        <div class="botones colores" id="colores"></div>
        <p class="colores-nota">Los demás colores, a consultar.</p>
      </div>

      <a class="btn btn-negro btn-ancho" id="consultar">Consultar por WhatsApp</a>
      <p class="ayuda">Atendido por sus dueños, sin respuestas automáticas. Envío con instalación en CABA y GBA · <a href="index.html#envios">Ver zonas</a></p>

      <dl class="tabla-specs">
        ${KM.specs[P.specs].map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("")}
      </dl>
    </div>
  </div>`;

// galería: fotos y videos
const principal = document.getElementById("principal");
const miniaturas = document.getElementById("miniaturas");
function mostrar(item) {
  principal.innerHTML = item.video
    ? `<video src="${item.video}" poster="${item.poster}" controls autoplay muted loop playsinline></video>`
    : `<img src="${item.foto}" alt="${item.alt || P.nombre}">`;
}
P.galeria.forEach((item, i) => {
  const b = document.createElement("button");
  b.type = "button";
  b.setAttribute("aria-label", item.video ? "Video" : `Foto ${i + 1}`);
  b.innerHTML = item.video
    ? `<img src="${item.poster}" alt=""><span class="play">Video</span>`
    : `<img src="${item.foto}" alt="">`;
  b.addEventListener("click", () => {
    miniaturas.querySelectorAll("button").forEach((x) => x.classList.toggle("activa", x === b));
    mostrar(item);
  });
  if (i === 0) b.classList.add("activa");
  miniaturas.appendChild(b);
});
mostrar(P.galeria[0]);

// medidas
const cajaMedidas = document.getElementById("medidas");
P.medidas.forEach(([m]) => {
  const b = document.createElement("button");
  b.type = "button";
  b.textContent = textoMedida(m);
  b.dataset.id = m;
  b.addEventListener("click", () => { elegido.medida = m; actualizar(); });
  cajaMedidas.appendChild(b);
});

// colores: los que tienen ficha propia llevan a esa ficha; el resto se elige acá y queda a consultar
const cajaColores = document.getElementById("colores");
KM.colores.forEach((c) => {
  const variante = variantes.find((v) => v.color === c.nombre);
  const propia = variante && variante.id === P.id;
  const el = document.createElement(variante && !propia ? "a" : "button");
  el.className = "muestra";
  el.title = c.nombre;
  el.dataset.id = c.nombre;
  el.innerHTML = `<img src="${c.img}" alt=""><span>${c.nombre}${variante ? `<small>${pesos(variante.desde)}</small>` : ""}</span>`;
  if (variante && !propia) {
    el.href = variante.url;
  } else {
    el.type = "button";
    el.addEventListener("click", () => { elegido.color = c.nombre; actualizar(); });
  }
  cajaColores.appendChild(el);
});

function actualizar() {
  cajaMedidas.querySelectorAll("button").forEach((b) => b.classList.toggle("activa", b.dataset.id === elegido.medida));
  cajaColores.querySelectorAll(".muestra").forEach((b) => b.classList.toggle("activa", b.dataset.id === elegido.color));

  const mismoColor = elegido.color === P.color;
  const precio = mismoColor ? P.medidas.find(([m]) => m === elegido.medida)[1] : null;
  const medida = textoMedida(elegido.medida);

  document.getElementById("color-elegido").textContent = elegido.color;
  document.getElementById("precio").textContent = precio ? pesos(precio) : "Precio a consultar";
  document.getElementById("nota").textContent = precio
    ? `Color ${elegido.color} · ${medida}`
    : "Te pasamos el precio por WhatsApp";

  const msg = precio
    ? `Hola! Vi en la web la ${P.nombre} de ${medida} (${pesos(precio)}). ¿Me pasás más info?`
    : `Hola! Vi en la web la ${base} y la quiero de ${medida}, color ${elegido.color}. ¿Me pasás el precio?`;
  abrirEnWhatsApp(document.getElementById("consultar"), msg);

  // barra fija del celular
  document.getElementById("barra-precio").textContent = precio ? pesos(precio) : "Precio a consultar";
  document.getElementById("barra-detalle").textContent = `${base} · ${medida} · ${elegido.color}`;
  abrirEnWhatsApp(document.getElementById("barra-consultar"), msg);
}
actualizar();

// la barra aparece cuando el botón principal no está en pantalla
const barra = document.getElementById("barra-fija");
const botonPrincipal = document.getElementById("consultar");
function revisarBarra() {
  const r = botonPrincipal.getBoundingClientRect();
  const visible = r.bottom < 0 || r.top > window.innerHeight;
  barra.classList.toggle("visible", visible);
  barra.setAttribute("aria-hidden", String(!visible));
  document.body.classList.toggle("con-barra", visible);
}
window.addEventListener("scroll", revisarBarra, { passive: true });
window.addEventListener("resize", revisarBarra);
revisarBarra();
