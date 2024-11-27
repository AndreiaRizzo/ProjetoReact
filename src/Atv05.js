
import AlertButton from "./componentes/AlertButton";
import Button from "./componentes/Button";

import './Atv05.css'

import { Link } from "react-router-dom";



function Atv05() {
    return (
        <>
            <div className="container">
                <div className="button">
                    <Button />

                </div>
                <div className="alert">
                    <AlertButton />
                </div> 
            </div>
           
        </>
    );
}
export default Atv05;