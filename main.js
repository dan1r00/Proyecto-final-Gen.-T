class Clase {
  constructor(numero, titulo, descripcion, tema) {
    this.numero = numero;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.tema = tema;
  }
}

const clases = [
  new Clase(6, "CSS Grid", "Creamos layouts con grid-template-areas y media queries.", "CSS"),
  new Clase(7, "Pseudo-elementos y animaciones", "Usamos ::before, ::after y @keyframes.", "CSS"),
  new Clase(8, "Formularios HTML", "Usamos input, select, fieldset y validaciones.", "HTML"),
  new Clase(9, "Responsive Design", "Aplicamos media queries y diseño adaptable.", "CSS"),
  new Clase(10, "Introducción a JS", "Uso de variables, alert, prompt y consola.", "JS"),
  new Clase(11, "Funciones JS", "Aprendimos funciones, parámetros, retorno y eventos.", "JS"),
  new Clase(12, "DOM dinámico y eventos", "Creamos elementos, manejamos clicks y estilos.", "JS"),
  new Clase(13, "POO en JS", "Creamos clases, objetos, herencia y métodos.", "JS"),
  new Clase(14, "Canvas", "Dibujamos y animamos figuras con coordenadas.", "JS"),
  new Clase(15, "React Básico", "Creamos componentes y usamos props y estados.", "React"),
  new Clase(16, "Git & GitHub", "Control de versiones y trabajo en equipo.", "Herramientas")
];

const contenedor = document.createElement("section");
contenedor.className = "contenedor-clases";
document.body.appendChild(contenedor);

function renderClases(lista) {
  contenedor.innerHTML = "";
  lista.forEach(c => {
    const card = document.createElement("div");
    card.className = "tarjeta fade-in";
    card.innerHTML = `
      <h3>${c.titulo}</h3>
      <p><b>Entrega N°${c.numero}</b></p>
      <p>${c.descripcion}</p>
      <span class="tema">${c.tema}</span>
    `;
    contenedor.appendChild(card);
  });
}

renderClases(clases);

inputFiltro.addEventListener("input", () => {
  const valor = inputFiltro.value.toLowerCase();
  const filtradas = clases.filter(c =>
    c.titulo.toLowerCase().includes(valor) ||
    c.descripcion.toLowerCase().includes(valor) ||
    c.tema.toLowerCase().includes(valor)
  );
  renderClases(filtradas);
  localStorage.setItem("ultimoFiltro", valor);
});
