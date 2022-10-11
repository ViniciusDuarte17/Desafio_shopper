import axios from "axios"
import { NavigateFunction } from "react-router-dom"
import { headers, setHeader } from "../components/token";
import { goToFeed } from "../router/coordinator"



export const registerLogin = (body: any, navigate: NavigateFunction, clear: { (): void; (): void }) => {

    (window.localStorage.getItem('token') && !headers.headers.Authorization) && setHeader
    axios
        .post("http://localhost:3003/user/login", body)
        .then((res) => {
            const setToken = res.data.message
            setHeader(res.data.token)
            setToken ? window.localStorage.setItem("token", res.data.token) : alert(res.data.error);
            alert(res.data.message)
            goToFeed(navigate)
            clear()
        })
        .catch((error) => {
            alert(error)
        })
}