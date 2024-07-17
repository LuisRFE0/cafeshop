import { useState } from "react"
import { Cuernitos } from "./componentesForm/Cuernitos"
import { Licuados } from "./componentesForm/Licuados";

export const PedidosForm = () => {

    const [cuernitoState, setCuernitoState] = useState({});
    const [licuadoState, setLicuadoState] = useState({});


    const handlerCuernitos = (cuernitos = {}) => {
        console.log('desde padre', cuernitos);
        setCuernitoState(cuernitos);
    }

    const mostrar = () => {
        console.log('mostrar');
        console.log(cuernitoState);
    }

    return (

        <>
            <form>
                <div className="row">
                    <div className="col"><Cuernitos handlerCuernitos={handlerCuernitos} /></div>
                    <div className="col"><Licuados /></div>
                </div>
                <div className="row">
                 
                </div>


                <button type="button" className="btn btn-success m-2" onClick={mostrar}>mostrar states</button>

            </form>

        </>

    )
}
