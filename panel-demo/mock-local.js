// Solo para probar el panel en la compu (localhost), sin Google: imita google.script.run con pedidos
// de ejemplo (nombres y teléfonos inventados) guardados en el navegador. En Apps Script no se usa.
(function () {
  const CLAVE = "km-panel-demo";
  const dia = (n) => {
    const d = new Date();
    d.setDate(d.getDate() + n);
    d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
    return d.toISOString().slice(0, 10);
  };
  const ahora = () => new Date().toISOString().slice(0, 19).replace("T", " ");
  const base = { direccion: "", detalle: "", notas: "", flete: "", sena: "", saldoCobrado: false, entrega: "",
    creado: ahora(), actualizado: ahora(), actualizadoPor: "demo", version: 1 };
  const ejemplo = [
    { id: 1, fecha: dia(-20), estado: "Entregado", cliente: "Lucía Fernández", telefono: "11 5555-0101", localidad: "Caseros",
      canal: "Instagram", atendio: "Cande", producto: "Cama KNG", medida: "1,40 x 1,90", color: "Blanco",
      precio: 499000, flete: 25000, sena: 200000, saldoCobrado: true, entrega: dia(-12) },
    { id: 2, fecha: dia(-9), estado: "En fabricación", cliente: "Martín Gómez", telefono: "11 5555-0102", localidad: "Ramos Mejía",
      canal: "WhatsApp", atendio: "Ramiro", producto: "Combo KNG", medida: "1,40 x 1,90", color: "Scotch",
      precio: 755000, flete: 30000, sena: 300000, entrega: dia(3), notas: "Subir por escalera, 2° piso." },
    { id: 3, fecha: dia(-6), estado: "Listo", cliente: "Sofía Ruiz", telefono: "11 5555-0103", localidad: "Morón",
      canal: "WhatsApp", atendio: "Ramiro", producto: "Cama KNG Individual", medida: "90 x 1,90", color: "Blanco",
      precio: 450000, flete: 25000, sena: 150000, entrega: dia(1) },
    { id: 4, fecha: dia(-4), estado: "Señado", cliente: "Diego Morales", telefono: "11 5555-0104", localidad: "San Isidro",
      canal: "Instagram", atendio: "Cande", producto: "Cama KNG", medida: "1,40 x 1,90", color: "Helsinki",
      precio: 530000, flete: 35000, sena: 200000, entrega: dia(10) },
    { id: 5, fecha: dia(-2), estado: "Presupuesto", cliente: "Valeria Sosa", telefono: "11 5555-0105", localidad: "Quilmes",
      canal: "WhatsApp", atendio: "Ramiro", producto: "Mueble a medida", detalle: "Bajo mesada de 2,40 m con lugar para lavarropas",
      notas: "Mandó fotos del lugar. Pasarle presupuesto el lunes." },
    { id: 6, fecha: dia(-15), estado: "En fabricación", cliente: "Pablo Herrera", telefono: "11 5555-0106", localidad: "Caseros",
      canal: "En la fábrica", atendio: "Ramiro", producto: "Cama KNG", medida: "1,60 x 2,00", color: "Negro",
      precio: 610000, sena: 250000, entrega: dia(-1), detalle: "Con 8 cajones" },
  ].map((p) => ({ ...base, ...p }));

  const leer = () => {
    try { return JSON.parse(localStorage.getItem(CLAVE)) || ejemplo; } catch (e) { return ejemplo; }
  };
  const escribir = (lista) => {
    try { localStorage.setItem(CLAVE, JSON.stringify(lista)); } catch (e) { /* sin almacenamiento: queda en memoria */ }
  };
  let memoria = leer();

  const servidor = {
    quienSoy: () => "demo (pedidos de ejemplo)",
    listarPedidos: () => memoria,
    guardarPedido: (p) => {
      const lista = memoria;
      if (p.id) {
        const i = lista.findIndex((x) => String(x.id) === String(p.id));
        if (i < 0) throw new Error("No encontré el pedido N° " + p.id + ".");
        if (Number(lista[i].version) !== Number(p.version)) {
          throw new Error("Alguien cambió este pedido mientras lo editabas. Tocá Actualizar y volvé a hacer el cambio.");
        }
        p = { ...p, creado: lista[i].creado, actualizado: ahora(), version: Number(lista[i].version) + 1 };
        lista[i] = p;
      } else {
        p = { ...p, id: lista.reduce((m, x) => Math.max(m, Number(x.id) || 0), 0) + 1, creado: ahora(), actualizado: ahora(), version: 1 };
        lista.push(p);
      }
      if (!["Presupuesto", "Señado", "En fabricación", "Listo", "Entregado", "Cancelado"].includes(p.estado)) p.estado = "Presupuesto";
      ["id", "precio", "flete", "sena"].forEach((c) => { p[c] = p[c] === "" || p[c] == null ? "" : Number(p[c]) || 0; });
      p.saldoCobrado = p.saldoCobrado === true;
      p.actualizadoPor = "demo";
      escribir(lista);
      return p;
    },
  };

  // google.script.run.withSuccessHandler(ok).withFailureHandler(mal).funcion(...args)
  function corredor(ok, mal) {
    return new Proxy({}, {
      get(_, nombre) {
        if (nombre === "withSuccessHandler") return (f) => corredor(f, mal);
        if (nombre === "withFailureHandler") return (f) => corredor(ok, f);
        return (...args) => setTimeout(() => {
          try {
            const r = servidor[nombre](...JSON.parse(JSON.stringify(args)));
            if (ok) ok(JSON.parse(JSON.stringify(r)));
          } catch (e) {
            if (mal) mal(e);
          }
        }, 300);
      },
    });
  }
  window.google = { script: { run: corredor(null, null) } };
})();
