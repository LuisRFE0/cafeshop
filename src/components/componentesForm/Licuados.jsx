import { useState } from "react";

export const Licuados = () => {

    const [licuadoCheck, setLicuadoCheck] = useState({
        licuado: false,
        platano: false,
        fresa: false,
        mamey: false,
        chocolate: false,
        manzana:false,
        avena: false,
        combinado: false,

    });

    const handlerCheckLicuado = (event) => {

        const { name, checked } = event.target;
        setLicuadoCheck({ ...licuadoCheck, [name]: checked });

    }

    
    const mostrarLicuado = () =>{
        console.log(licuadoCheck);
    }


    return (
        <>
        <div className="form-check">
            <input type="checkbox" id="licuado" className="form-check-input" name="licuado" checked={licuadoCheck.licuado} onChange={handlerCheckLicuado} />
            <label htmlFor="licuado" className="form-check-label">Licuado</label>
        </div>
        <div className="form-check">
            <input type="checkbox" id="platano" className="form-check-input" name="platano" checked={licuadoCheck.platano} onChange={handlerCheckLicuado} />
            <label htmlFor="platano" className="form-check-label">Platano</label>
        </div>
        <div className="form-check">
            <input type="checkbox" id="fresa" className="form-check-input" name="fresa" checked={licuadoCheck.fresa} onChange={handlerCheckLicuado} />
            <label htmlFor="fresa" className="form-check-label">Fresa</label>
        </div>
        <div className="form-check">
            <input type="checkbox" id="mamey" className="form-check-input" name="mamey" checked={licuadoCheck.mamey} onChange={handlerCheckLicuado} />
            <label htmlFor="mamey" className="form-check-label">Mamey</label>
        </div>
        <div className="form-check">
            <input type="checkbox" id="chocolate" className="form-check-input" name="chocolate" checked={licuadoCheck.chocolate} onChange={handlerCheckLicuado} />
            <label htmlFor="chocolate" className="form-check-label">Chocolate</label>
        </div>
        <div className="form-check">
            <input type="checkbox" id="manzana" className="form-check-input" name="manzana" checked={licuadoCheck.manzana} onChange={handlerCheckLicuado} />
            <label htmlFor="manzana" className="form-check-label">Manzana</label>
        </div>
        <div className="form-check">
            <input type="checkbox" id="avena" className="form-check-input" name="avena" checked={licuadoCheck.avena} onChange={handlerCheckLicuado} />
            <label htmlFor="avena" className="form-check-label">Avena</label>
        </div>
        <div className="form-check">
            <input type="checkbox" id="combinado" className="form-check-input" name="combinado" checked={licuadoCheck.combinado} onChange={handlerCheckLicuado} />
            <label htmlFor="combinado" className="form-check-label">Combinado</label>
        </div>
        <button type="button" className="btn btn-primary m-2" onClick={mostrarLicuado} >Agregar</button>
        </>
    )
}
