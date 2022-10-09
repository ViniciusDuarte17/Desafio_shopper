import React from "react";
import { Hearder } from "../../components/Header";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { goToBack } from "../../router/coordinator";
import { useProtectedPage } from "../../hooks/useProtectedPage";

export const CartProduct: React.FC = () => {
    useProtectedPage()
    const navigate = useNavigate()
    return (
        <>
            <Hearder>
                <Button
                    onClick={() => goToBack(navigate)}
                    color="inherit">
                    Home
                </Button>
            </Hearder>
            <h3>Tela de Carrinho dos produtos</h3>
        </>
    )
}