import { useState, useEffect } from 'react';

export default function Tiempo({ startTimer, resetTimer }) {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false); // Añado la constante para poner el tiempo en activo o no

  useEffect(() => {

    let idTemporizador;

    if (isActive) {
      idTemporizador = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    }

    return () => {
      clearInterval(idTemporizador);
    };

  }, [isActive]);


// Funcion del timer Inicio en celda y reset en boton comenzar partida
  useEffect(() => {

    if (startTimer) {
      startTimer.current = () => {
        setIsActive(true);
      };
    }

    if (resetTimer) {
      resetTimer.current = () => {
        setSeconds(0);
        setIsActive(false);
      };
    }
  }, [startTimer, resetTimer]);

  return (
    <div className="lcdText text-danger pe-2 m-2 borderInsideS">
      {seconds}
    </div>
  );
}
