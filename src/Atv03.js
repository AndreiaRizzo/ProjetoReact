
import Contador from "./Contador";
import {Link} from "react-router-dom";


function Atv03(){
    return (
        <>
            <h2 className="titulo-superior">Atividade 03</h2>
            <Contador/>
            
            <Link to="/" className="link-inferior">Voltar</Link>
        </>
    );
}
export default Atv03;