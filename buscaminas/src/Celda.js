function Celda({ valor = "", onCeldaClick }) {
    const obtenerEstiloCelda = () => {
      if (valor === " ") {
        return { backgroundColor: "white"}; // Celda oculta
      } else if (valor === 0) {
        return { backgroundColor: "lightgrey"}; // Celda revelada con valor 0
      } else {
        return { backgroundColor: "lightgrey"}; // Celdas reveladas con otros valores
      }
    };
  
    return (
      <div>
        <button
          className="border border-2 border-dark-subtle fs-2 fw-bold text-success"
          style={{ ...obtenerEstiloCelda(), minWidth: 50, minHeight: 50 }}
          onClick={onCeldaClick}
        >
          {valor == " " ? "\u00A0" : valor}
        </button>
      </div>
    );
  }
  
  export default Celda;
  