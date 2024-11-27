import React from "react";
import { Link } from "react-router-dom";
import './Home.css'; // Importando o arquivo CSS

const Home = () => {
    return (
        <div>
            <h1>PÁGINA INICIAL</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/Atv01">*Atividade 01 - Relógio</Link>
                    </li>
                    <li>
                        <Link to="/Atv02">*Atividade 02 - Letreiro</Link>
                    </li>
                    <li>
                        <Link to="/Atv03">*Atividade 03 - Contador</Link>
                    </li>
                    <li>
                        <Link to="/Atv04">*Atividade 04 - Componentes 1</Link>
                    </li>
                    <li>
                        <Link to="/Atv05">*Atividade 05 - Componentes 2</Link>
                    </li>
                    <li>
                        <Link to="/ContadorGincana">*Gincana - Contador de pontos</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Home;
