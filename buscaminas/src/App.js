import React, {useState, useRef} from 'react';
import './App.css';
import Celda from './Celda';
import Tiempo from './Tiempo';
import Tablero from './Tablero';
import Login from './login';


function App() {
  const [tamaño, setTamaño] = useState(0);
  const [mapaValores, setMapaValores] = useState(Array(tamaño * tamaño).fill(" "));
  const [valores, setValores] = useState([]);
  const [puntuacion, setPuntuacion] = useState(0);
  const [celdasDescubiertas, setCeldasDescubiertas] = useState(0);
  const [numeroBombas, setNumeroBombas] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('username')); // Verifica el login
  const [puntuaciones, setPuntuaciones] = useState([]);

  const startTimer = useRef(null);
  const resetTimer = useRef(null);

// Pasar primero para que ejecute la ventana del login
  const username = localStorage.getItem('username');

  const handleLogin = (username) => {
    setIsLoggedIn(true);
  };
  
  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }


  // LOGICA PARA GENERAR LOS VALORESD DE LAS CELDAS
  const generarValores = (tamaño, numeroBombas) => {
    const totalCeldas = tamaño * tamaño;
    let arrayValores = Array(totalCeldas).fill(0);

    let bombasColocadas = 0;
    while (bombasColocadas < numeroBombas) {
      const index = Math.floor(Math.random() * totalCeldas);
      if (arrayValores[index] !== "*") {
        arrayValores[index] = "*";
        bombasColocadas++;
      }
    }

    const getCoordenadas = (i) => [Math.floor(i / tamaño), i % tamaño];

    for (let i = 0; i < totalCeldas; i++) {
      if (arrayValores[i] === "*") continue;

      const [fila, col] = getCoordenadas(i);
      let contadorBombas = 0;

      for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
          const nuevaFila = fila + x;
          const nuevaColumna = col + y;
          if (
            nuevaFila >= 0 && nuevaFila < tamaño &&
            nuevaColumna >= 0 && nuevaColumna < tamaño
          ) {
            const indexAdyacente = nuevaFila * tamaño + nuevaColumna;
            if (arrayValores[indexAdyacente] === "*") {
              contadorBombas++;
            }
          }
        }
      }
      arrayValores[i] = contadorBombas;
    }

    return arrayValores;
  };

// ELECCION DEL TAMAÑO DEL TABLERO Y SU CONFIG DE BOMBAS
  const handleSizeSelect = (nuevoTamaño) => {
    setTamaño(nuevoTamaño);

    let numeroBombas;
    if (nuevoTamaño === 5) {
      numeroBombas = 3;
    } else if (nuevoTamaño === 10) {
      numeroBombas = 10;
    } else if (nuevoTamaño === 15) {
      numeroBombas = 24;
    }

    const nuevosValores = generarValores(nuevoTamaño, numeroBombas);
    setPuntuacion(0);
    setValores(nuevosValores);
    setMapaValores(Array(nuevoTamaño * nuevoTamaño).fill(" "));
    setCeldasDescubiertas(0);
    setNumeroBombas(numeroBombas);

    // Reseteo del tiempo
    if (resetTimer.current) {
      resetTimer.current();
    }
  };

  // PUNTUACIONES PARA EL MARCADOR COGER LAS 3 MEJORES
  const cargarPuntuaciones = () => {
    const puntuacionesGuardadas = JSON.parse(localStorage.getItem('puntuaciones')) || [];
    const puntuacionesOrdenadas = puntuacionesGuardadas
      .sort((a, b) => b.puntuacion - a.puntuacion)
      .slice(0, 3);
    setPuntuaciones(puntuacionesOrdenadas);
  };
  // Guardamos la puntuacion en el LOCALSTORAGE'
  const guardarPuntuacion = (nuevaPuntuacion) => {
    const username = localStorage.getItem('username');
    if (username) {
      const puntuacionesGuardadas = JSON.parse(localStorage.getItem('puntuaciones')) || [];
      const nuevasPuntuaciones = [...puntuacionesGuardadas, { username, puntuacion: nuevaPuntuacion }];
      localStorage.setItem('puntuaciones', JSON.stringify(nuevasPuntuaciones));
      
      // En lugar de actualizar el estado directamente, volvemos a cargar las puntuaciones
      cargarPuntuaciones();
    }
  };

// Tamaño del container segun las celdas para que quede estetico
  const getContainerWidth = () => {
    if (tamaño === 0) return 340;
    if (tamaño === 5) return 340;
    if (tamaño === 10) return 680;
    if (tamaño === 15) return 1020;
  };

  const celdas = mapaValores.map((item, index) => (
    <div className="col-auto p-0" key={index} style={{ width: `${100 / tamaño}%` }}>
      <Celda valor={item} onCeldaClick={() => mostrarValor(index)} />
    </div>
  ));

  // Logica del boton comenzar partida
  const btnComenzar = () => {
    setMapaValores(Array(tamaño * tamaño).fill(" "));
    setCeldasDescubiertas(0);
    if (resetTimer.current) {
      resetTimer.current();
    }
    setPuntuacion(0);
  };


// Logica de mostrar valores en las celdas
  const mostrarValor = (index) => {
    const valoresNuevos = mapaValores.slice();

    if (mapaValores[index] !== " ") return;

    if (valores[index] === "*") {
      valoresNuevos[index] = valores[index];
      guardarPuntuacion(puntuacion);
      setMapaValores(valoresNuevos);
      setTimeout(() => {
        alert(`Has perdido. Tu puntuación final es: ${puntuacion}`);
        btnComenzar();
      }, 100);
    } else {
      // Revelar celdas y actualizar el contador
      const nuevasCeldasDescubiertas = revelarCeldas(valoresNuevos, index);
      setCeldasDescubiertas(prev => prev + nuevasCeldasDescubiertas);
      setMapaValores(valoresNuevos);
      setPuntuacion(prevPuntuacion => prevPuntuacion + nuevasCeldasDescubiertas);

      // Verificar si el jugador ha ganado
      if (celdasDescubiertas + nuevasCeldasDescubiertas === tamaño * tamaño - numeroBombas) {
        guardarPuntuacion(puntuacion);
        setTimeout(() => {
          alert(`¡Has ganado! Tu puntuación final es: ${puntuacion}`);
          btnComenzar();
        }, 100);
      }

      if (startTimer.current) {
        startTimer.current();
      }
    }
  };


  // REVELAR LAS CELDAS + LOGICA DE LAS ADYACENETES
  const revelarCeldas = (mapa, index) => {
    const stack = [index];
    const visitados = new Set();
    let contadorReveladas = 0;

    const getCoordenadas = (i) => [Math.floor(i / tamaño), i % tamaño];

    while (stack.length > 0) {
      const currentIndex = stack.pop();
      const [fila, col] = getCoordenadas(currentIndex);

      if (visitados.has(currentIndex)) continue;
      visitados.add(currentIndex);

      if (mapa[currentIndex] === " ") {
        mapa[currentIndex] = valores[currentIndex];
        contadorReveladas++; // Contar esta celda como revelada

        // Si la celda es un 0, debemos explorar sus adyacentes
        if (valores[currentIndex] === 0) {
          const adyacentes = [];
          if (fila > 0) adyacentes.push(currentIndex - tamaño);
          if (fila < tamaño - 1) adyacentes.push(currentIndex + tamaño);
          if (col > 0) adyacentes.push(currentIndex - 1);
          if (col < tamaño - 1) adyacentes.push(currentIndex + 1);

          for (const adj of adyacentes) {
            if (!visitados.has(adj) && mapa[adj] === " ") {
              stack.push(adj);
            }
          }
        }
      }
    }
    // contador para la puntuacion
    return contadorReveladas;
  };




// HTML PASADO A REACT
  return (
    <div className="container text-center" style={{ width: getContainerWidth() }}>
      <h2>Bienvenido, {username}</h2>
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
      <div className="mt-4">
        <h3>Top Puntuaciones</h3>
        <ul className="list-group mb-3">
          {puntuaciones.map((item, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              <span>{item.username}</span>
              <span className="badge bg-danger rounded-pill">{item.puntuacion}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
