import axios from "axios"
import { NavigateFunction } from "react-router-dom"
import { goToFeed } from "../router/coordinator"



export const registerLogin = (body: any, navigate: NavigateFunction, clear: { (): void; (): void }) => {


    axios
        .post("http://localhost:3003/user/login", body)
        .then((res) => {
            const setToken = res.data.message
            setToken ? localStorage.setItem("token", res.data.token) : alert(res.data.error);
            goToFeed(navigate)
            clear()
        })
        .catch((error) => {
            alert(error)
        })
}