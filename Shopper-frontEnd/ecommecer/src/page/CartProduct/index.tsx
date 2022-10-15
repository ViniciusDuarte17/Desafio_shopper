import React from "react";
import * as Styled from "./styled";
import { Hearder } from "../../components/Header";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { goToFeed } from "../../router/coordinator";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { ProductToPurchase } from "../../components/ProductToPurchase";
import { IProductPurchase } from "../../@types/user";
import { purchaseProduct } from "../../services/purchaseProduct";
import HomeIcon from '@mui/icons-material/Home';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from "../../services/notifyStyled";


export const CartProduct = (props: any) => {
    useProtectedPage()
    const navigate = useNavigate()
    const [open, setOpen] = React.useState(true);
    const { cart, setCart } = props;

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
        setOpen(false)
        notify()
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

            <h3>
                {cart.length > 0 ? `Preço total: R$ ${priceToPay},00` : null}
            </h3>

            <Styled.ContentButtonPurchase>
                {cart.length > 0 ?
                    <Box sx={{ width: '60%' }}>
                        <Collapse in={open}>
                            <Alert
                                action={
                                    <IconButton
                                        onClick={() => {
                                            setOpen(false);
                                        }}
                                    />
                                }
                            >
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={FinalizePurchase}
                                >
                                    Finalizar compra
                                </Button>
                            </Alert>
                        </Collapse>
                        <Button
                            disabled={open}
                            variant="outlined"

                            onClick={() => {
                                setCart([])
                                setOpen(true);
                            }}
                        >
                            Limpar carrinho
                        </Button>

                        <ToastContainer />
                    </Box>
                    : null
                }
            </Styled.ContentButtonPurchase>
        </Styled.ContainerCartProduct>
    )
}