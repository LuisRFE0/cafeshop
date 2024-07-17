import { useState } from "react"

export const Cuernitos = ({ handlerCuernitos }) => {

    const [cuernitoCheck, setCuernitoCheck] = useState({
        cuernito: false,
        sandwich:false,
        mayonesa: false,
        cebolla: false,
        jitomate: false,
        lechuga: false,
        aguacate: false,
        quesoAmarillo: false,
        quesillo: false,
    });

    const handlerCheckCuernitos = (event) => {

        const { name, checked } = event.target;
        setCuernitoCheck({ ...cuernitoCheck, [name]: checked });

    }

    const submitCuernitos = () => {
        console.log('desde el submit cuernos');
        handlerCuernitos(cuernitoCheck);
    }

    return (
        <>
            <div className="form-check">
                <input type="checkbox" id="cuerno" className="form-check-input" name="cuernito" checked={cuernitoCheck.cuernito} onChange={handlerCheckCuernitos} />
                <label htmlFor="cuerno" className="form-check-label">Cuernito</label>
            </div>
    
            <div className="form-check">
                <input type="checkbox" id="sandwich" className="form-check-input" name="sandwich" checked={cuernitoCheck.sandwich} onChange={handlerCheckCuernitos} />
                <label htmlFor="sandwich" className="form-check-label">Sandwich</label>
            </div>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="mayo" name="mayonesa" checked={cuernitoCheck.mayonesa} onChange={handlerCheckCuernitos} />
                <label htmlFor="mayo" className="form-check-label">Mayonesa</label>
            </div>
            <div className="form-check">
                <input type="checkbox" id="cebo" className="form-check-input" name="cebolla" checked={cuernitoCheck.cebolla} onChange={handlerCheckCuernitos} />
                <label htmlFor="cebo" className="form-check-label">Cebolla</label>
            </div>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="jito" name="jitomate" checked={cuernitoCheck.jitomate} onChange={handlerCheckCuernitos} />
                <label htmlFor="jito" className="form-check-label">Jitomate</label>
            </div>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="lechu" name="lechuga" checked={cuernitoCheck.lechuga} onChange={handlerCheckCuernitos} />
                <label htmlFor="lechu" className="form-check-label">Lechuga</label>
            </div>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="agua" name="aguacate" checked={cuernitoCheck.aguacate} onChange={handlerCheckCuernitos} />
                <label htmlFor="agua" className="form-check-label">Aguacate</label>
            </div>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="quesoA" name="quesoAmarillo" checked={cuernitoCheck.quesoAmarillo} onChange={handlerCheckCuernitos} />
                <label htmlFor="quesoA" className="form-check-label">Queso Amarillo</label>
            </div>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="quesill" name="quesillo" checked={cuernitoCheck.quesillo} onChange={handlerCheckCuernitos} />
                <label htmlFor="quesill" className="form-check-label">Quesillo</label>
            </div>
            <button type="button" className="btn btn-primary m-2" onClick={submitCuernitos}>Agregar</button>



        </>
    )
}
