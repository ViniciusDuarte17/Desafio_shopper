import * as Styled from "./styled";
import { Hearder } from "../../components/Header";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { goToFeed } from "../../router/coordinator";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { ProductToPurchase } from "../../components/ProductToPurchase";
import { purchaseProduct } from "../../services/purchaseProduct";
import HomeIcon from '@mui/icons-material/Home';
import { INewPurchase, IProductPurchase } from "../../@types/purchase";
import { TextField } from "@mui/material";
import { useForm } from "../../hooks/useForm";


export const CartProduct = ({ cart, setCart }: INewPurchase) => {
    useProtectedPage()
    const navigate = useNavigate()
    const { form, onChange } = useForm({ date: "" });


    const removeProductToCart = (itemToRemove: IProductPurchase) => {
        const index = cart.findIndex((i: IProductPurchase) => i.id === itemToRemove.id)

        const newCart = [...cart];

        if (newCart[index].amout === 1) {
            newCart.splice(index, 1)
        } else {
            newCart[index].amout -= 1
        }
        setCart(newCart);
    }

    const renderProductCart = cart.map((product: IProductPurchase) => {
        return (
            <ProductToPurchase
                key={product.id}
                product={product}
                removeProductToCart={removeProductToCart}
            />
        )
    })

    let priceToPay = 0

    cart.forEach((prod: IProductPurchase) => {
        priceToPay += prod.price * prod.amout
    })

    const FinalizePurchase = () => {
        const body = { cartItems: cart, price: priceToPay, deliveryDate: form.date }
        purchaseProduct(body, navigate, setCart)
    }

    return (
        <Styled.ContainerCartProduct>
            <Hearder>
                <Button
                    onClick={() => goToFeed(navigate)}
                    color="inherit">
                    home <HomeIcon fontSize="small" />
                </Button>
            </Hearder>

            <Styled.ContentMain>
                {cart.length > 0 ? renderProductCart : <h3>Carrinho vazio!</h3>}
            </Styled.ContentMain>

            {cart.length > 0 ? <Styled.ContentInput>
                <Styled.TextH1>Passe a data de entrega.</Styled.TextH1>
                <TextField
                    name={"date"}
                    value={form.date}
                    onChange={onChange}
                    variant="outlined"
                    type={"date"}
                    fullWidth
                    required
                    margin="normal"
                />
            </Styled.ContentInput> : null}

            <h3>
                {cart.length > 0 ? `Preço total: R$ ${priceToPay.toFixed(2).toString().replace('.', ',')}` : null}
            </h3>

            {cart.length > 0 ? <Styled.ContentButtonPurchase>
                <Button
                    color="primary"
                    variant="contained"
                    onClick={FinalizePurchase}
                >
                    Finalizar compra
                </Button>
            </Styled.ContentButtonPurchase> : null}
        </Styled.ContainerCartProduct>
    )
}