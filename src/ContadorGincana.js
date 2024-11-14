

import Gincana from "./Gincana";
import {Link} from "react-router-dom";


function ContadorGincana(){
    return (
        <>
            <h2 className="titulo-superior">Gincana</h2>
            <Gincana/>
            
            <Link to="/" className="link-inferior">Voltar</Link>
        </>
    );
}
export default ContadorGincana;