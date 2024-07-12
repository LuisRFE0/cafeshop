import { useState } from "react"
import { Cuernitos } from "./componentesForm/Cuernitos"

export const PedidosForm = () => {

    const [cuernitoState, setCuernitoState] = useState({});


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
                <Cuernitos handlerCuernitos={handlerCuernitos} />
                <button type="button" className="btn btn-primary mt-2" onClick={mostrar}>mostrar states</button>

            </form>

        </>

    )
}
