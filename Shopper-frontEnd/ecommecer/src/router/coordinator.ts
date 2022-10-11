import { NavigateFunction } from "react-router-dom";


export const goToFeed = (navigate: NavigateFunction) => {
    navigate('/')
}
export const goToLogin = (navigate: NavigateFunction) => {
    navigate('/login')
}
export const goToRegister = (navigate: NavigateFunction) => {
    navigate('/cadastro')
}

export const goToCart = (navigate: NavigateFunction) => {
    navigate("/carrinho")
}

export const goToBack = (navigate: NavigateFunction) => {
    navigate(-1)
}