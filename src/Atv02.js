
import Letreiro from "./Letreiro";
import {Link} from "react-router-dom";


function Atv02(){
    return (
        <>
            <h2 className="titulo-superior">Atividade 02</h2>
            <Letreiro />
            <Link to="/" className="link-inferior">Voltar</Link>
        </>
    );
}
export default Atv02;