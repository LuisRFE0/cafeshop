import { useState } from "react"

export const PedidosInicio = () => {
    const [cuernitoCheck, setCuernitoCheck] = useState(false);


    const cuernitoCheckHandler = () => {
        setCuernitoCheck(!cuernitoCheck);

    }
    console.log(cuernitoCheck);
    return (

        <>

            <div className="container row text-center ">
                <div className="col ">
                    <div>
                        <form >
                            <div>
                                <label htmlFor="cuernitos">Cuernito</label>
                                <input type="checkbox" name="cuernitos" value={'Cuernito'} onChange={cuernitoCheckHandler} /> <br />
                                <label htmlFor="cafe">Cafe</label>
                                <input type="checkbox" name="cafe" value={'Cafe'} onChange={cafeCheckHandler} />
                            </div>
                        </form>
                    </div>
                </div>

                <div className="col  ">

                    cola de pedidos

                </div>
            </div>


        </>

    )
}
