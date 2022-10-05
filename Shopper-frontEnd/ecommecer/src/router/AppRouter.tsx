import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FeedProduct } from "../page/FeedProduct";
import { CartProduct } from "../page/CartProduct";
 

export const AppRouter = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FeedProduct/>} />
                <Route path="/carrinho" element={<CartProduct />} />
            </Routes>
        </BrowserRouter>
    )
}