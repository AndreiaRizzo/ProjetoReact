// src/Gincana.js

import React, { useState, useEffect } from 'react';
import './Gincana.css';
import timeVermelho from './img/timevermelho.jpg';

const Timevermelho = () => {
  // Recupera a pontuação inicial do localStorage ou usa 0 se não existir
  const [descpalav, setDescPalav] = useState(
    () => parseInt(localStorage.getItem('descpalav1')) || 0
  );
  const [cantmusi, setCantMusi] = useState(
    () => parseInt(localStorage.getItem('cantmusi1')) || 0
  );
  const [acertliv, setAcertLiv] = useState(
    () => parseInt(localStorage.getItem('acertliv1')) || 0
  );

  const [raclog, setRaclog] = useState(
    () => parseInt(localStorage.getItem('raclog1')) || 0
  );

  const [arrucor, setArrucor] = useState(
    () => parseInt(localStorage.getItem('arrucor1')) || 0
  );

  const [racha, setRacha] = useState(
    () => parseInt(localStorage.getItem('racha1')) || 0
  );

  const [ctorta, setTorta] = useState(
    () => parseInt(localStorage.getItem('ctorta1')) || 0
  );

  const [saiamuro, setSaiamuro] = useState(
    () => parseInt(localStorage.getItem('saiamuro1')) || 0
  );

  const [versiculo, setVersiculo] = useState(
    () => parseInt(localStorage.getItem('versiculo1')) || 0
  );

  const [tesouro, setTesouro] = useState(
    () => parseInt(localStorage.getItem('tesouro1')) || 0
  );

  const [circuito, setCircuito] = useState(
    () => parseInt(localStorage.getItem('circuito1')) || 0
  );

  const [bolbal, setBolbal] = useState(
    () => parseInt(localStorage.getItem('bolbal1')) || 0
  );

  const [enrosco, setEnrosco] = useState(
    () => parseInt(localStorage.getItem('enrosco1')) || 0
  );

  const [enche, setEnche] = useState(
    () => parseInt(localStorage.getItem('enche1')) || 0
  );

  const [velha, setVelha] = useState(
    () => parseInt(localStorage.getItem('velha1')) || 0
  );

  const total = descpalav + cantmusi + acertliv + raclog + arrucor + racha + ctorta + saiamuro + 
  versiculo + tesouro + circuito + bolbal + enrosco + enche + velha;  

  // Efeito para atualizar o localStorage sempre que descpalav ou cantmusi mudar
  useEffect(() => {
    localStorage.setItem('descpalav1', descpalav);
  }, [descpalav]);

  useEffect(() => {
    localStorage.setItem('cantmusi1', cantmusi);
  }, [cantmusi]);

  useEffect(() => {
    localStorage.setItem('acertliv1', acertliv);
  }, [acertliv]);

  useEffect(() => {
    localStorage.setItem('raclog1', raclog);
  }, [raclog]);

  useEffect(() => {
    localStorage.setItem('arrucor1', arrucor);
  }, [arrucor]);


  useEffect(() => {
    localStorage.setItem('racha1', racha);
  }, [racha]);

  useEffect(() => {
    localStorage.setItem('ctorta1', ctorta);
  }, [ctorta]);

  useEffect(() => {
    localStorage.setItem('saiamuro1', saiamuro);
  }, [saiamuro]);

  useEffect(() => {
    localStorage.setItem('versiculo1', versiculo);
  }, [versiculo]);

  useEffect(() => {
    localStorage.setItem('tesouro1', tesouro);
  }, [tesouro]);

  useEffect(() => {
    localStorage.setItem('circuito1', circuito);
  }, [circuito]);

  useEffect(() => {
    localStorage.setItem('bolbal1', bolbal);
  }, [bolbal]);

  useEffect(() => {
    localStorage.setItem('enrosco1', enrosco);
  }, [enrosco]);

  useEffect(() => {
    localStorage.setItem('enche1', enche);
  }, [enche]);

  useEffect(() => {
    localStorage.setItem('velha1', velha);
  }, [velha]);

  // Funções para incrementar e decrementar
  const handleIncrementDescPalav = () => setDescPalav(descpalav + 1);
  const handleDecrementDescPalav = () => setDescPalav(descpalav > 0 ? descpalav - 1 : 0);

  const handleIncrementCantMusi = () => setCantMusi(cantmusi + 1);
  const handleDecrementCantMusi = () => setCantMusi(cantmusi > 0 ? cantmusi - 1 : 0);

  const handleIncrementAcertLiv = () => setAcertLiv(acertliv + 1);
  const handleDecrementAcertLiv = () => setAcertLiv(acertliv > 0 ? acertliv - 1 : 0);

  const handleIncrementRaclog = () => setRaclog(raclog + 1);
  const handleDecrementRaclog = () => setRaclog(raclog > 0 ? raclog - 1 : 0);

  const handleIncrementArrucor= () => setArrucor(arrucor+ 1);
  const handleDecrementArrucor= () => setArrucor(arrucor> 0 ? arrucor- 1 : 0);

  const handleIncrementRacha= () => setRacha(racha+ 1);
  const handleDecrementRacha= () => setRacha(racha> 0 ? racha- 1 : 0);

  const handleIncrementTorta= () => setTorta(ctorta+ 1);
  const handleDecrementTorta= () => setTorta(ctorta> 0 ? ctorta- 1 : 0);

  const handleIncrementSaiamuro= () => setSaiamuro(saiamuro+ 1);
  const handleDecrementSaiamuro= () => setSaiamuro(saiamuro> 0 ? saiamuro- 1 : 0);

  const handleIncrementVersiculo= () => setVersiculo(versiculo+ 1);
  const handleDecrementVersiculo= () => setVersiculo(versiculo> 0 ? versiculo- 1 : 0);

  const handleIncrementTesouro= () => setTesouro(tesouro+ 1);
  const handleDecrementTesouro= () => setTesouro(tesouro> 0 ? tesouro- 1 : 0);

  const handleIncrementCircuito= () => setCircuito(circuito+ 1);
  const handleDecrementCircuito= () => setCircuito(circuito> 0 ? circuito- 1 : 0);

  const handleIncrementBolbal= () => setBolbal(bolbal+ 1);
  const handleDecrementBolbal= () => setBolbal(bolbal> 0 ? bolbal- 1 : 0);

  const handleIncrementEnrosco= () => setEnrosco(enrosco+ 1);
  const handleDecrementEnrosco= () => setEnrosco(enrosco> 0 ? enrosco- 1 : 0);

  const handleIncrementEnche= () => setEnche(enche+ 1);
  const handleDecrementEnche= () => setEnche(enche> 0 ? enche- 1 : 0);

  const handleIncrementVelha= () => setVelha(velha+ 1);
  const handleDecrementVelha= () => setVelha(velha> 0 ? velha- 1 : 0);

  return (
    <div className="contador-container">
      
      <div className="contador">
        <div className="pessoa">
          <img src={timeVermelho} alt="Time Vermelho" className="imagem" />
          <h4>Descobrindo a palavra: {descpalav}  &nbsp;
          <button onClick={handleIncrementDescPalav}> + </button>&nbsp;
          <button onClick={handleDecrementDescPalav}> - </button></h4>

          <h4>Cantando a música: {cantmusi} &nbsp; 
          <button onClick={handleIncrementCantMusi}> + </button>&nbsp;
          <button onClick={handleDecrementCantMusi}> - </button> </h4>

          <h4>Acerte o livro: {acertliv} &nbsp; 
          <button onClick={handleIncrementAcertLiv}> + </button>&nbsp;
          <button onClick={handleDecrementAcertLiv}> - </button> </h4>

          <h4>Quiz: {raclog} &nbsp; 
          <button onClick={handleIncrementRaclog}> + </button>&nbsp;
          <button onClick={handleDecrementRaclog}> - </button> </h4>

          <h4>Arrumar as cores: {arrucor} &nbsp; 
          <button onClick={handleIncrementArrucor}> + </button>&nbsp;
          <button onClick={handleDecrementArrucor}> - </button> </h4>

          <h4>Racha cuca: {racha} &nbsp; 
          <button onClick={handleIncrementRacha}> + </button>&nbsp;
          <button onClick={handleDecrementRacha}> - </button> </h4>

          <h4>Torta na cara: {ctorta} &nbsp; 
          <button onClick={handleIncrementTorta}> + </button>&nbsp;
          <button onClick={handleDecrementTorta}> - </button> </h4>

          <h4>Fantasia: {saiamuro} &nbsp; 
          <button onClick={handleIncrementSaiamuro}> + </button>&nbsp;
          <button onClick={handleDecrementSaiamuro}> - </button> </h4>

          <h4>Encontre o versículo: {versiculo} &nbsp; 
          <button onClick={handleIncrementVersiculo}> + </button>&nbsp;
          <button onClick={handleDecrementVersiculo}> - </button> </h4>

          <h4>Caça ao tesouro: {tesouro} &nbsp; 
          <button onClick={handleIncrementTesouro}> + </button>&nbsp;
          <button onClick={handleDecrementTesouro}> - </button> </h4>

          <h4>Circuito: {circuito} &nbsp; 
          <button onClick={handleIncrementCircuito}> + </button>&nbsp;
          <button onClick={handleDecrementCircuito}> - </button> </h4>

          <h4>Bolinhas no balde: {bolbal} &nbsp; 
          <button onClick={handleIncrementBolbal}> + </button>&nbsp;
          <button onClick={handleDecrementBolbal}> - </button> </h4>

          <h4>Teatro: {enrosco} &nbsp; 
          <button onClick={handleIncrementEnrosco}> + </button>&nbsp;
          <button onClick={handleDecrementEnrosco}> - </button> </h4>

          <h4>Grito de Guerra: {enche} &nbsp; 
          <button onClick={handleIncrementEnche}> + </button>&nbsp;
          <button onClick={handleDecrementEnche}> - </button> </h4>

          <h4>Jogo da velha: {velha} &nbsp; 
          <button onClick={handleIncrementVelha}> + </button>&nbsp;
          <button onClick={handleDecrementVelha}> - </button> </h4>


        </div>
      </div>
      <h2>Total: {total}</h2>
    </div>
  );
};

export default Timevermelho;
