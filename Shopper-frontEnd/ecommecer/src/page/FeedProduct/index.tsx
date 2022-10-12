import { useEffect, useState } from "react";
import { CardProduct } from "../../components/CardProduct";
import { Hearder } from "../../components/Header";
import * as Styled from './styled';
import Button from '@mui/material/Button';
import { goToCart } from "../../router/coordinator";
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { getProduct } from "../../services/getProduct";
import { IProduct } from "../../@types/user";
import { logout } from "../../services/logout";
import { Loading } from "../../components/Loading";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';

export const FeedProduct = (props: any) => {
    useProtectedPage()
    const navigate = useNavigate()
    const [product, setProduct] = useState([])
    const { cart, setCart } = props


    const addProductToCart = (newItem: any) => {
        const index = cart.findIndex((i: any) => i.id === newItem.id);
        const newCart = [...cart]

        if (index === -1) {
            const cartItem = { ...newItem, amout: 1 }
            newCart.push(cartItem)
        } else {
            newCart[index].amout = newCart[index].amout + 1
        }

        setCart(newCart)
    }

    useEffect(() => {
        getProduct(setProduct)
    }, [])

    const renderProduct = product && product.map((product: IProduct) => {
        return (
            <CardProduct key={product?.id} product={product} addProductToCart={addProductToCart} />
        )
    })

    return (
        <Styled.ContainerFeedProduct>
            <Hearder>
                <Button
                    onClick={() => goToCart(navigate)}
                    color="inherit">
                   <AddShoppingCartIcon fontSize="medium"/>
                </Button>
                <Styled.ContentLogout>
                    <Button
                        onClick={() => logout(navigate)}
                        color="inherit">
                        Sair <LogoutIcon fontSize="small"/>
                    </Button>
                </Styled.ContentLogout>
            </Hearder>
            <Styled.ContentMain>
                {product.length > 0 ? renderProduct : <Loading />}
            </Styled.ContentMain>
        </Styled.ContainerFeedProduct>
    )
}