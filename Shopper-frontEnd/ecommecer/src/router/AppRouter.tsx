import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FeedProduct } from "../page/FeedProduct";
import { CartProduct } from "../page/CartProduct";
import { Signup } from "../page/Signup";
import { Login } from "../page/Login";


export const AppRouter = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FeedProduct />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Signup />} />
                <Route path="/carrinho" element={<CartProduct />} />
            </Routes>
        </BrowserRouter>
    )
}