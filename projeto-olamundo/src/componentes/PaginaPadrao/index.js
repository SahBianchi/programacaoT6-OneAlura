import Banner from "componentes/Banner/inde";
import { Outlet } from "react-router-dom";

export default function PaginaPadrao(){
    return(
        <main>
            <Banner />

            <Outlet />
        </main>
    )
}