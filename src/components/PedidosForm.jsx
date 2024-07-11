import { Cuernitos } from "./componentesForm/Cuernitos"
import { Licuados } from "./componentesForm/Licuados"

export const PedidosForm = () => {
    return (

        <>


            <form>
                <Cuernitos />
                <button type="submit" className="btn btn-primary mt-2">Registrar Orden</button>
            </form>

        </>


    )
}
