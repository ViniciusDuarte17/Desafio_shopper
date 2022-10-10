import axios from "axios"
import { headers } from "../components/token"


export const purchaseProduct = (body: any) => {
    axios
        .post("http://localhost:3003/purchase", body, headers as any)
        .then((res) => {
            alert(res.data.message)
        })
        .catch((error) => {
            console.log(error)
        })
}