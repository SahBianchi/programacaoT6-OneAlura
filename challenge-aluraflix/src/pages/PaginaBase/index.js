import Cabecalho from "../../componentes/Cabecalho";
import Container from "../../componentes/Container";
import { Outlet } from "react-router-dom";

function PaginaBase() {
    return (
        <main>
            <Cabecalho />
            <Container>
                <Outlet />
            </ Container>
        </main>
    )
}

export default PaginaBase;