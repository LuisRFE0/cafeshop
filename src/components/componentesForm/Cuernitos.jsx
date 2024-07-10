import { useState } from "react"

export const Cuernitos = () => {

    const [cuernitoCheck, setCuernitoCheck] = useState({
        cuernito: false,
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
        console.log(cuernitoCheck);
    }
    return (
        <>

            <input type="checkbox" name="cuernito" checked={cuernitoCheck.cuernito} onChange={handlerCheckCuernitos} />
            <input type="checkbox" name="mayonesa" checked={cuernitoCheck.mayonesa} onChange={handlerCheckCuernitos} />
            <input type="checkbox" name="cebolla" checked={cuernitoCheck.cebolla} onChange={handlerCheckCuernitos} />
            <input type="checkbox" name="jitomate" checked={cuernitoCheck.jitomate} onChange={handlerCheckCuernitos} />
            <input type="checkbox" name="lechuga" checked={cuernitoCheck.lechuga} onChange={handlerCheckCuernitos} />
            <input type="checkbox" name="aguacate" checked={cuernitoCheck.aguacate} onChange={handlerCheckCuernitos} />
            <input type="checkbox" name="quesoAmarillo" checked={cuernitoCheck.quesoAmarillo} onChange={handlerCheckCuernitos} />
            <input type="checkbox" name="quesillo" checked={cuernitoCheck.quesillo} onChange={handlerCheckCuernitos} />

        </>
    )
}
