import axios from "axios"
import { headers } from "../components/token"
import { BASE_URL } from "../constants/BASE_URL"


export const purchaseProduct = (body: any) => {
    axios
        .post(`${BASE_URL}/purchase`, body, headers as any)
        .then((res) => {
            alert(res.data.message)
        })
        .catch((error) => {
            console.log(error)
        })
}