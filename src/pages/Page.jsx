import {Outlet} from "react-router-dom";

export const Page = () => {
    return(
        <>
            <header>
                header
            </header>
                <main>
                    <Outlet/>
                </main>
            <footer>
                footer
            </footer>
        </>
    )
}
