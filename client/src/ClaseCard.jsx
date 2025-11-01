function ClaseCard({ clase }) {
  return (
    <div className="tarjeta fade-in">
      <h3>{clase.titulo}</h3>
      <p><b>Entrega N°{clase.numero}</b></p>
      <p>{clase.descripcion}</p>
      <span className="tema">{clase.tema}</span>
    </div>
  );
}

export default ClaseCard;
