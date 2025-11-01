import { useState, useEffect } from 'react';
import './styles.css';

const clases = [
  { numero: 6, titulo: "CSS Grid", descripcion: "Creamos layouts con grid-template-areas y media queries.", tema: "CSS" },
  { numero: 7, titulo: "Pseudo-elementos y animaciones", descripcion: "Usamos ::before, ::after y @keyframes.", tema: "CSS" },
  { numero: 8, titulo: "Formularios HTML", descripcion: "Usamos input, select, fieldset y validaciones.", tema: "HTML" },
  { numero: 9, titulo: "Responsive Design", descripcion: "Aplicamos media queries y diseño adaptable.", tema: "CSS" },
  { numero: 10, titulo: "Introducción a JS", descripcion: "Uso de variables, alert, prompt y consola.", tema: "JS" },
  { numero: 11, titulo: "Funciones JS", descripcion: "Aprendimos funciones, parámetros, retorno y eventos.", tema: "JS" },
  { numero: 12, titulo: "DOM dinámico y eventos", descripcion: "Creamos elementos, manejamos clicks y estilos.", tema: "JS" },
  { numero: 13, titulo: "POO en JS", descripcion: "Creamos clases, objetos, herencia y métodos.", tema: "JS" },
  { numero: 14, titulo: "Canvas", descripcion: "Dibujamos y animamos figuras con coordenadas.", tema: "JS" },
  { numero: 15, titulo: "React Básico", descripcion: "Creamos componentes y usamos props y estados.", tema: "React" },
  { numero: 16, titulo: "Git & GitHub", descripcion: "Control de versiones y trabajo en equipo.", tema: "Herramientas" }
];

function App() {
  const [filtro, setFiltro] = useState(localStorage.getItem('ultimoFiltro') || '');

  const filtradas = clases.filter(c =>
    c.titulo.toLowerCase().includes(filtro.toLowerCase()) ||
    c.descripcion.toLowerCase().includes(filtro.toLowerCase()) ||
    c.tema.toLowerCase().includes(filtro.toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem('ultimoFiltro', filtro);
  }, [filtro]);

  return (
    <>
      <header>
        <h1>🎮 GameNews</h1>
        <nav>
          <a href="/">Inicio</a>
          <a href="/noticias">Noticias</a>
          <a href="/reseñas">Reseñas</a>
          <a href="/esports">eSports</a>
        </nav>
      </header>

      <main>
        <input
          type="text"
          placeholder="Filtrar clases..."
          value={filtro}
          onChange={e => setFiltro(e.target.value)}
        />

        <section className="contenedor-clases">
          {filtradas.map(c => (
            <div className="tarjeta fade-in" key={c.numero}>
              <h3>{c.titulo}</h3>
              <p><b>Entrega N°{c.numero}</b></p>
              <p>{c.descripcion}</p>
              <span className="tema">{c.tema}</span>
            </div>
          ))}
        </section>

        <section className="noticias">
          <article className="card">
            <img src="images.jpg" alt="Spider-Man 2" />
            <div className="contenido">
              <h2>Marvel’s Spider-Man 2 supera récords</h2>
              <p>El título exclusivo de PlayStation se consolida como uno de los más vendidos de 2025.</p>
              <a href="/spiderman">Leer más</a>
            </div>
          </article>
        </section>
      </main>

      <footer>
        <p>© 2025 GameNews. Todos los derechos reservados. (alumno: Daniel Roque)</p>
      </footer>
    </>
  );
}

export default App;
