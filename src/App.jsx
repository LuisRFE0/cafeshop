
import '../src/style/app.css'
import { InicioView } from './components/InicioView'
import { Header } from './layout/Header'
import { Administradores } from './data/Administradores'
import { Footer } from './layout/Footer'
import { PedidosInicio } from './components/PedidosInicio'

export const App = () => {
    const admin = Administradores();



    return (
        <>
            <Header />
            <InicioView admin={admin} />
            <PedidosInicio />
            <Footer />
        </>)


}
