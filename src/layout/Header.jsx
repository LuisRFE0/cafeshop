import '../style/header.css'

export const Header = () => {
    return (
        <>
            <nav className="nav-bar navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Casa Cuernos</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pedidos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Inventario</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contabilidad</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
