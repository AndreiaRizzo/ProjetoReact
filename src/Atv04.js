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
                <h3>Grandes Compositores clássicos</h3>
                <Gallery />
                <div className="galeria">
                    <TodoList />
                </div>
                <Link to="/" className="link-inferior">Voltar</Link>
            </div >
        </>
    );
}
export default Atv04;