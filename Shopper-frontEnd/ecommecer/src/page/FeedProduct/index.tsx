import React from "react";
import { CardProduct } from "../../components/CardProduct";
import { Hearder } from "../../components/Header";
import * as Styled from './styled';
import Button from '@mui/material/Button';
import { goToCart } from "../../router/coordinator";
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage";


export const FeedProduct: React.FC = () => {
    useProtectedPage()
    const navigate = useNavigate()
    return (
        <Styled.ContainerFeedProduct>
            <Hearder>
                <Button
                    onClick={() => goToCart(navigate)}
                    color="inherit">
                    Carrinho
                </Button>
            </Hearder>
            <Styled.ContentMain>
                <CardProduct />
            </Styled.ContentMain>
        </Styled.ContainerFeedProduct>
    )
}