import axios from "axios"
import { headers } from "../components/token"
import { BASE_URL } from "../constants/BASE_URL"
import { goToFeed } from "../router/coordinator"
import { NavigateFunction } from "react-router-dom";
import { IProductPurchase } from "../@types/purchase";


export const purchaseProduct = (body: any, navigate: NavigateFunction, setCart: React.Dispatch<React.SetStateAction<IProductPurchase[]>>) => {
    axios
        .post(`${BASE_URL}/purchase`, body, headers as any)
        .then((res) => {
            alert(res.data.message || res.data.error)
            const messageSucess = res.data.message
            messageSucess && goToFeed(navigate)
            messageSucess && setCart([])
        })
        .catch((error) => {
          alert(error)
        })
}