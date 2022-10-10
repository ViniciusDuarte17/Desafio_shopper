import React from "react";
import * as Styled from "./styled";
import { Hearder } from "../../components/Header";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { goToBack } from "../../router/coordinator";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { ProductToPurchase } from "../../components/ProductToPurchase";
import { IProductPurchase } from "../../@types/user";
import { purchaseProduct } from "../../services/purchaseProduct";

export const CartProduct: React.FC = (props: any) => {
    useProtectedPage()
    const navigate = useNavigate()
    const { cart, setCart } = props

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
            <ProductToPurchase key={product.id} product={product} removeProductToCart={removeProductToCart} />
        )
    })

    let priceToPay = 0

    cart.forEach((prod: IProductPurchase) => {
        priceToPay += prod.price * prod.amout
    })

    const FinalizePurchase = () => {
        const body = { cartItems: cart, price: priceToPay }
        purchaseProduct(body)
    }

    return (
        <Styled.ContainerCartProduct>
            <Hearder>
                <Button
                    onClick={() => goToBack(navigate)}
                    color="inherit">
                    Home
                </Button>
            </Hearder>

            <Styled.ContentMain>
                {cart.length > 0 ? renderProductCart : <h3>Carrinho vazio!</h3>}
            </Styled.ContentMain>

            <h3>Total preço: {cart.length > 0 ? `R$ ${priceToPay.toFixed(2)},00` : null}
            </h3>

            <Styled.ContentButtonPurchase>
                {cart.length > 0 ? <Button
                    variant="contained"
                    color="primary"
                    onClick={FinalizePurchase}
                >
                    Finalizar compra
                </Button> : null}
            </Styled.ContentButtonPurchase>
        </Styled.ContainerCartProduct>
    )
}