import axios from "axios";
import { headers } from "../components/token";
import { BASE_URL } from "../constants/BASE_URL"


export const getProduct = (setProduct: React.Dispatch<React.SetStateAction<never[]>>) => {

    axios
    .get(`${BASE_URL}/product`, headers as any )
    .then( (res) => {   
        setProduct(res.data.product)
    })
    .catch( (error) => {
        console.log(error)
    })
} 