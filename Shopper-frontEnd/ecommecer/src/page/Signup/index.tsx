import Button from "@mui/material/Button";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Hearder } from "../../components/Header";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";
import { goToBack } from "../../router/coordinator";
import { FormSignup } from "./FormSignup";
import * as Styled from './styled';

export const Signup: React.FC = () => {
    useUnprotectedPage()
    const navigate = useNavigate();

    return (
        <Styled.Container>
            <Hearder>
                <Styled.SpanHeaderSignup>Cadastro</Styled.SpanHeaderSignup>
            </Hearder>
            <FormSignup />
            <Styled.ButtonGoBackLogin>
                <Button
                    onClick={() => goToBack(navigate)}
                >
                    Voltar para login
                </Button>
            </Styled.ButtonGoBackLogin>
        </Styled.Container>
    )
}