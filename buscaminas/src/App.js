import React, { useState, useRef } from 'react';
import './App.css';
import Celda from './Celda';
import Tiempo from './Tiempo';
import Tablero from './Tablero';

function App() {
  const [tamaño, setTamaño] = useState(5); // Tamaño inicial 5x5
  const [mapaValores, setMapaValores] = useState(Array(tamaño * tamaño).fill(" "));
  const [valores, setValores] = useState([]); // Array de valores según la dificultad
  const [puntuacion, setPuntuacion] = useState(0);  // Nuevo estado para la puntuación
  
  const startTimer = useRef(null);
  const resetTimer = useRef(null);
  

  // Ajuste dinámico del ancho del contenedor según el tamaño
  const getContainerWidth = () => {
    if (tamaño === 5) return 340; // Fácil (5x5)
    if (tamaño === 10) return 680; // Medio (10x10)
    if (tamaño === 15) return 1020; // Difícil (15x15)
  };

  // Cre4acion de las celdas
  const celdas = mapaValores.map((item, index) => (
    <div className="col-auto p-0" key={index} style={{ width: `${100/tamaño}%` }}>
      <Celda valor={item} onCeldaClick={() => mostrarValor(index)} />
    </div>
  ));

  // Boton inicio de la partida + reset de timer
  const btnComenzar = () => {
    setMapaValores(Array(tamaño * tamaño).fill(" "));
    if (resetTimer.current) {
      resetTimer.current();
    }
    setPuntuacion(0);  // Reiniciar la puntuación
  }


  const mostrarValor = (index) => {
    const valoresNuevos = mapaValores.slice();
    valoresNuevos[index] = valores[index];

    if (valores[index] === "*") {
      // Esperar un momento para que se vea la bomba y luego mostrar la alerta
      setTimeout(() => {
        alert(`Has perdido. Tu puntuación final es: ${puntuacion}`);
        btnComenzar();  // Reiniciar la partida después de la alerta
      }, 100);}

    if (valores[index] === 0) {
      revelarCeldasAdyacentes(valoresNuevos, index);
    } else {
      valoresNuevos[index] = valores[index];
    }

    setMapaValores(valoresNuevos);

    // Incrementar la puntuación
    // Como no se como funciona la puntuacion, pondremos que cuantos menos movimientos mejor lo has hecho, ademas le añadire el tiempo que ha tardado en completarlo ya que los dos terminos son indicativos de lo bien que lo has hecho.
    setPuntuacion(prevPuntuacion => prevPuntuacion + 1);


    if (startTimer.current) {
      startTimer.current();
    }
  }


  // Funcion para recelar las celdas cogiendo las coordenadas
  const revelarCeldasAdyacentes = (mapa, index) => {
    const stack = [index];
    const visitados = new Set();

    const getCoordenadas = (i) => [Math.floor(i / tamaño), i % tamaño];

    while (stack.length > 0) {
      const currentIndex = stack.pop();
      const [fila, col] = getCoordenadas(currentIndex);

      if (visitados.has(currentIndex)) continue;
      visitados.add(currentIndex);

      mapa[currentIndex] = valores[currentIndex];

      const adyacentes = [];

      // Obtener celdas adyacentes
      if (fila > 0) adyacentes.push(currentIndex - tamaño);           // Arriba
      if (fila < tamaño - 1) adyacentes.push(currentIndex + tamaño);  // Abajo
      if (col > 0) adyacentes.push(currentIndex - 1);                 // Izquierda
      if (col < tamaño - 1) adyacentes.push(currentIndex + 1);        // Derecha

      // Expandir la búsqueda si es un 0
      for (const adj of adyacentes) {
          // Condición para evitar revelar bombas
          if (valores[adj] === "*") {
              continue; // No revelamos la bomba y seguimos con la siguiente celda adyacente
          }

          if (valores[adj] === 0 && !visitados.has(adj)) {
              stack.push(adj); // Expandimos la búsqueda solo para celdas vacías
          }

          // Revelamos la celda adyacente (si no es una bomba)
          mapa[adj] = valores[adj];
      }
    }
  };


  // Función para generar el array de valores con bombas
  const generarValores = (tamaño, numeroBombas) => {
    const totalCeldas = tamaño * tamaño;
    let arrayValores = Array(totalCeldas - numeroBombas).fill(null).map(() => Math.floor(Math.random() * 3));
    const bombas = Array(numeroBombas).fill("*");

    arrayValores = arrayValores.concat(bombas);
    
    // Mezclar el array para que las bombas estén en posiciones aleatorias
    for (let i = arrayValores.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arrayValores[i], arrayValores[j]] = [arrayValores[j], arrayValores[i]];
    }

    return arrayValores;
  };

  // Manejar la selección del tamaño y la dificultad
  const handleSizeSelect = (nuevoTamaño) => {
    setTamaño(nuevoTamaño);
    
    let numeroBombas;
    if (nuevoTamaño === 5) {
      numeroBombas = 5;  // Fácil
    } else if (nuevoTamaño === 10) {
      numeroBombas = 10; // Medio
    } else if (nuevoTamaño === 15) {
      numeroBombas = 15; // Difícil
    }
    
    const nuevosValores = generarValores(nuevoTamaño, numeroBombas);
    setValores(nuevosValores);
    setMapaValores(Array(nuevoTamaño * nuevoTamaño).fill(" "));

    if (resetTimer.current) {
      resetTimer.current();
    }
  };

  return (
    <div className="container text-center" style={{ width: getContainerWidth() }}>
      <Tablero onSizeSelect={handleSizeSelect} />
      <div className="grid bg-body-secondary py-2 px-4 borderOutSide m-0">
        <div className="row bg-body-secondary borderInside ">
          <div className="d-flex flex-wrap justify-content-around">
            <div className="lcdText text-danger pe-2 m-2 borderInsideS">{puntuacion}</div>
            <div className="align-self-center m-2 borderInsideS">
              <img src="acierto.png" style={{ width: 50 }} alt="icon" />
            </div>
            <Tiempo startTimer={startTimer} resetTimer={resetTimer} />
          </div>
        </div>
        <div className="row borderInside bg-body-secondary text-center justify-content-center">
          <div className="col my- p-0">
            <div className="d-flex flex-wrap justify-content-center">
              {celdas}
            </div>
          </div>
        </div>
      </div>
      <div><button className="btn btn-outline-secondary mt-2" onClick={btnComenzar}>COMIENZA LA PARTIDA</button></div>
    </div>
  );
}

export default App;
