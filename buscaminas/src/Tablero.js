import React from 'react';

function SelectorTamano({ onSizeSelect }) {
  const tamaños = [
    { label: "---Selecciona un tamaño---)", value: 0 },
    { label: "Pequeño (5x5)", value: 5 },
    { label: "Mediano (10x10)", value: 10 },
    { label: "Grande (15x15)", value: 15 },
  ];

  return (
    <div className="my-3">
      <label htmlFor="tamanoPartida" className="form-label">Selecciona el tamaño de la partida:</label>
      <select id="tamanoPartida" className="form-select" onChange={(e) => onSizeSelect(parseInt(e.target.value))}>
        {tamaños.map((tamaño) => (
          <option key={tamaño.value} value={tamaño.value}>
            {tamaño.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectorTamano;
