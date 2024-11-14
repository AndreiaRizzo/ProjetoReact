import Gallery from "./componentes/Gallery";
import Profile from "./componentes/Profile";
import TodoList from "./componentes/TodoList";
import './Atv04.css'

import { Link } from "react-router-dom";



function Atv04() {
    return (
        <>
            < div className="atv04-container">
                <h2 className="titulo-superior">Atividade 04</h2>
                <h1>Grandes Compositores</h1>
                
                <div className="galeria">
                
                    <TodoList />
                </div>
                <Gallery/>
                <Link to="/" className="link-inferior">Voltar</Link>
            </div >
        </>
    );
}
export default Atv04;