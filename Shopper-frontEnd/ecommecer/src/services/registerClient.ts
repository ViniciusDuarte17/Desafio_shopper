import axios from "axios"
import { NavigateFunction } from "react-router-dom";
import { goToFeed } from "../router/coordinator";


export const registerClient = (body: any, navigate: NavigateFunction, clear: { (): void; (): void }) => {

    axios
        .post("http://localhost:3003/user/signup", body)
        .then((res) => {
            const setToken = res.data.message
            setToken ? localStorage.setItem("token", res.data.token) : alert(res.data.error);
            setToken ? goToFeed(navigate) : null
            clear()
        })
        .catch((error) => {
            alert(error)
        })
}