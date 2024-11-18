

import Gincana from "./Gincana";
import {Link} from "react-router-dom";


function ContadorGincana(){
    return (
        <>
            
            <Gincana/>
            
            <Link to="/" className="link-inferior">Voltar</Link>
        </>
    );
}
export default ContadorGincana;