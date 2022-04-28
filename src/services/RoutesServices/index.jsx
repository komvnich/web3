import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Page} from "../../pages/Page";
import {AuthWallet} from "../../pages/authWallet";
import {NFTContainer} from "../../pages/NFTContainer";


export const RoutesServices = () => {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Page />}>
                        <Route path="wallet" element={<AuthWallet/>}/>
                        <Route path="nft-list" element={<NFTContainer/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
