import { NavigateFunction } from "react-router-dom";
import { goToLogin } from "../router/coordinator";


export const logout = (navigate: NavigateFunction) => {
    window.localStorage.removeItem('token')
    goToLogin(navigate)
}