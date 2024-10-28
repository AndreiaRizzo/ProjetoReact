// src/Letreiro.js
import React, { useState, useEffect } from 'react';
import './Letreiro.css';


function Letreiro() {
  const texto = "CONHEÇA A FATEC";
  const [textoExibido, setTextoExibido] = useState("");
  const [index, setIndex] = useState(0);
  const [pausa, setPausa] = useState(false); // controla a pausa no final da frase

  useEffect(() => {
    if (pausa) return;

    const intervalo = setInterval(() => {
      setTextoExibido((prev) => prev + texto[index]);
      setIndex((prevIndex) => prevIndex + 1);
    }, 200); // velocidade de digitação em ms

    if (index === texto.length) {
      clearInterval(intervalo);
      setPausa(true); // ativa a pausa
      setTimeout(() => {
        setTextoExibido(""); // limpa o texto exibido para reiniciar
        setIndex(0);
        setPausa(false); // reinicia a animação
      }, 1000); // pausa de 1 segundo antes de reiniciar
    }

    return () => clearInterval(intervalo);
  }, [index, pausa]);

  return (
    <div className="letreiro">
      {textoExibido}
    </div>
  );
}

export default Letreiro;
