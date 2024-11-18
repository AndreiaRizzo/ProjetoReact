import Timeazul from "./Timeazul";
import Timeverde from "./Timeverde";
import Timevermelho from "./Timevermelho";
import Timeamarelo from "./Timeamarelo";
import Timerosa from "./Timerosa";

import { Link } from "react-router-dom";



function Gincana() {
    return (
        <>
            < div className="container" style={{
                display: "flex",
                flexDirection: "row",
                gap: 10
            }}>


                <Timeazul />
                <Timeverde />
                <Timevermelho />
                <Timeamarelo />
                <Timerosa/>

                <Link to="/" className="link-inferior">Voltar</Link>
            </div >
        </>
    );
}
export default Gincana;