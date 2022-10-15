import axios from "axios"
import { headers } from "../components/token"
import { BASE_URL } from "../constants/BASE_URL"


export const purchaseProduct = (body: any, setMessage: React.Dispatch<React.SetStateAction<string>>) => {
    axios
        .post(`${BASE_URL}/purchase`, body, headers as any)
        .then((res) => {
            setMessage(res.data.message)
        })
        .catch((error) => {
            setMessage(error)
        })
}