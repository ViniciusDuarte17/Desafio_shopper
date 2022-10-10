import axios from "axios"
import { headers } from "../components/token"



export const getProduct = (setProduct: React.Dispatch<React.SetStateAction<never[]>>) => {

    axios
    .get("http://localhost:3003/product", headers as any )
    .then( (res) => {   
        setProduct(res.data.product)
    })
    .catch( (error) => {
        console.log(error)
    })
} 