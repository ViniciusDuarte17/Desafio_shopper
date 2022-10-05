import { NavigateFunction } from "react-router-dom";

export const goToCart = (navigate : NavigateFunction) => {
    navigate("/carrinho")
}

export const goToBack = (navigate: NavigateFunction) => {
    navigate("/")
}