import React from "react";
import { Hearder } from "../../components/Header";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { goToBack } from "../../router/coordinator";

export const CartProduct: React.FC = () => {
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