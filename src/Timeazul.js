// src/Gincana.js

import React, { useState, useEffect } from 'react';
import './Gincana.css';
import timeAzul from './img/timeazul.jpg';

const Timeazul = () => {
  const [descpalav, setDescPalav] = useState(() => parseInt(localStorage.getItem('descpalav3')) || 0);
  const [cantmusi, setCantMusi] = useState(() => parseInt(localStorage.getItem('cantmusi3')) || 0);
  const [acertliv, setAcertLiv] = useState(() => parseInt(localStorage.getItem('acertliv3')) || 0);
  const [raclog, setRaclog] = useState(() => parseInt(localStorage.getItem('raclog3')) || 0);
  const [arrucor, setArrucor] = useState(() => parseInt(localStorage.getItem('arrucor3')) || 0);
  const [racha, setRacha] = useState(() => parseInt(localStorage.getItem('racha3')) || 0);
  const [ctorta, setTorta] = useState(() => parseInt(localStorage.getItem('ctorta3')) || 0);
  const [saiamuro, setSaiamuro] = useState(() => parseInt(localStorage.getItem('saiamuro3')) || 0);
  const [versiculo, setVersiculo] = useState(() => parseInt(localStorage.getItem('versiculo3')) || 0);
  const [tesouro, setTesouro] = useState(() => parseInt(localStorage.getItem('tesouro3')) || 0);
  const [circuito, setCircuito] = useState(() => parseInt(localStorage.getItem('circuito3')) || 0);
  const [bolbal, setBolbal] = useState(() => parseInt(localStorage.getItem('bolbal3')) || 0);
  const [enrosco, setEnrosco] = useState(() => parseInt(localStorage.getItem('enrosco3')) || 0);
  const [enche, setEnche] = useState(() => parseInt(localStorage.getItem('enche3')) || 0);
  const [velha, setVelha] = useState(() => parseInt(localStorage.getItem('velha3')) || 0);

  const total = descpalav + cantmusi + acertliv + raclog + arrucor + racha + ctorta + saiamuro + versiculo + tesouro + circuito + bolbal + enrosco + enche + velha;

  useEffect(() => {
    localStorage.setItem('descpalav3', descpalav);
    localStorage.setItem('cantmusi3', cantmusi);
    localStorage.setItem('acertliv3', acertliv);
    localStorage.setItem('raclog3', raclog);
    localStorage.setItem('arrucor3', arrucor);
    localStorage.setItem('racha3', racha);
    localStorage.setItem('ctorta3', ctorta);
    localStorage.setItem('saiamuro3', saiamuro);
    localStorage.setItem('versiculo3', versiculo);
    localStorage.setItem('tesouro3', tesouro);
    localStorage.setItem('circuito3', circuito);
    localStorage.setItem('bolbal3', bolbal);
    localStorage.setItem('enrosco3', enrosco);
    localStorage.setItem('enche3', enche);
    localStorage.setItem('velha3', velha);
  }, [descpalav, cantmusi, acertliv, raclog, arrucor, racha, ctorta, saiamuro, versiculo, tesouro, circuito, bolbal, enrosco, enche, velha]);

  const handleIncrement = (setter, value) => setter(value + 1);
  const handleDecrement = (setter, value) => setter(value > 0 ? value - 1 : 0);

  return (
    <div className="contador-container">
      <div className="contador">
        <div className="pessoa">
          <img src={timeAzul} alt="Time Azul" className="imagem" />
          <h4>Descobrindo a palavra: {descpalav} &nbsp;
            <button onClick={() => handleIncrement(setDescPalav, descpalav)}> + </button>&nbsp;
            <button onClick={() => handleDecrement(setDescPalav, descpalav)}> - </button>
          </h4>
          <h4>Cantando a música: {cantmusi} &nbsp;
            <button onClick={() => handleIncrement(setCantMusi, cantmusi)}> + </button>&nbsp;
            <button onClick={() => handleDecrement(setCantMusi, cantmusi)}> - </button>
          </h4>
          <h4>Acerte o livro: {acertliv} &nbsp;
            <button onClick={() => handleIncrement(setAcertLiv, acertliv)}> + </button>&nbsp;
            <button onClick={() => handleDecrement(setAcertLiv, acertliv)}> - </button>
          </h4>
          <h4>Quiz: {raclog} &nbsp;
            <button onClick={() => handleIncrement(setRaclog, raclog)}> + </button>&nbsp;
            <button onClick={() => handleDecrement(setRaclog, raclog)}> - </button>
          </h4>
          <h4>Arrumar as cores: {arrucor} &nbsp;
            <button onClick={() => handleIncrement(setArrucor, arrucor)}> + </button>&nbsp;
            <button onClick={() => handleDecrement(setArrucor, arrucor)}> - </button>
          </h4>
          <h4>Racha cuca: {racha} &nbsp;
            <button onClick={() => handleIncrement(setRacha, racha)}> + </button>&nbsp;
            <button onClick={() => handleDecrement(setRacha, racha)}> - </button>
          </h4>
          <h4>Torta na cara: {ctorta} &nbsp;
            <button onClick={() => handleIncrement(setTorta, ctorta)}> + </button>&nbsp;
            <button onClick={() => handleDecrement(setTorta, ctorta)}> - </button>
          </h4>
          <h4>Fantasia: {saiamuro} &nbsp;
            <button onClick={() => handleIncrement(setSaiamuro, saiamuro)}> + </button>&nbsp;
            <button onClick={() => handleDecrement(setSaiamuro, saiamuro)}> - </button>
          </h4>
          <h4>Encontre o versículo: {versiculo} &nbsp;
            <button onClick={() => handleIncrement(setVersiculo, versiculo)}> + </button>&nbsp;
            <button onClick={() => handleDecrement(setVersiculo, versiculo)}> - </button>
          </h4>
          <h4>Caça ao tesouro: {tesouro} &nbsp;
            <button onClick={() => handleIncrement(setTesouro, tesouro)}> + </button>&nbsp;
            <button onClick={() => handleDecrement(setTesouro, tesouro)}> - </button>
          </h4>
          <h4>Circuito: {circuito} &nbsp;
            <button onClick={() => handleIncrement(setCircuito, circuito)}> + </button>&nbsp;
            <button onClick={() => handleDecrement(setCircuito, circuito)}> - </button>
          </h4>
          <h4>Bolinhas no balde: {bolbal} &nbsp;
            <button onClick={() => handleIncrement(setBolbal, bolbal)}> + </button>&nbsp;
            <button onClick={() => handleDecrement(setBolbal, bolbal)}> - </button>
          </h4>
          <h4>Teatro: {enrosco} &nbsp;
            <button onClick={() => handleIncrement(setEnrosco, enrosco)}> + </button>&nbsp;
            <button onClick={() => handleDecrement(setEnrosco, enrosco)}> - </button>
          </h4>
          <h4>Grito de Guerra: {enche} &nbsp;
            <button onClick={() => handleIncrement(setEnche, enche)}> + </button>&nbsp;
            <button onClick={() => handleDecrement(setEnche, enche)}> - </button>
          </h4>
          <h4>Jogo da velha: {velha} &nbsp;
            <button onClick={() => handleIncrement(setVelha, velha)}> + </button>&nbsp;
            <button onClick={() => handleDecrement(setVelha, velha)}> - </button>
          </h4>
        </div>
      </div>
      <h2>Total: {total}</h2>
    </div>
  );
};

export default Timeazul;
