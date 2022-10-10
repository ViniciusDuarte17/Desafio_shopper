import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FeedProduct } from "../page/FeedProduct";
import { CartProduct } from "../page/CartProduct";
import { Signup } from "../page/Signup";
import { Login } from "../page/Login";
import { useState } from "react";


export const AppRouter = () => {
    const [cart, setCart] = useState([])

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FeedProduct cart={cart} setCart={setCart}/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Signup />} />
                <Route path="/carrinho" element={<CartProduct cart={cart} setCart={setCart}/>} />
            </Routes>
        </BrowserRouter>
    )
}