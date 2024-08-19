import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Celda from './Celda';
import Tiempo from './Tiempo';

function App() {
  //Valores
  const valores=["1","1","1","0","0","1","*","1","0","0","1","1","2","2","1","0","1","*","*","1","0","1","2","2","1"];
  //Definir state
  const [mapaValores,setMapaValores]=useState(Array(25).fill(" "));
  const celdas=mapaValores.map((item,index)=>
    <div className="col-auto p-0" key={index}><Celda valor={item} onCeldaClick={() => mostrarValor(index)}/></div>
  );

  //Funcion respuesta al BTN
  const btnComenzar = ()=>{
    setMapaValores(Array(25).fill(" "));
  }

  //Funcion que cambia el valor de una celda
  const mostrarValor = (index)=>{
    const valoresNuevos = mapaValores.slice();
    valoresNuevos[index] = valores[index];
    setMapaValores(valoresNuevos);
  }


  return (
    <div className="container text-center" style={{ width: 340 }}>
      <div className="grid bg-body-secondary py-2 px-4 borderOutSide m-0">
        <div className="row bg-body-secondary borderInside ">
          <div className="d-flex flex-wrap justify-content-around">
            <div className="lcdText text-danger pe-2 m-2 borderInsideS">10</div>
            <div className="align-self-center m-2 borderInsideS">
              <img src="acierto.png" style={{ width: 50 }} />
            </div>
            <Tiempo/>
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