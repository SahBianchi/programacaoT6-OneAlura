import { Outlet } from "react-router-dom";
import Cabecalho from "../../componentes/Cabecalho";
import Container from "../../componentes/Container";
import Rodape from "../../componentes/Rodape";

export default function PaginaModelo(){
    return(
        <main>
            <Cabecalho />
            <Container>
                <Outlet />
            </Container>
            <Rodape />
        </main>
    )
}