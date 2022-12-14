import Button from "@mui/material/Button";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Hearder } from "../../components/Header";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";
import { goToRegister } from "../../router/coordinator";
import { FormLogin } from "./FormLogin";
import * as Styled from './styled';


export const Login: React.FC = () => {
    useUnprotectedPage()
    const navigate = useNavigate()

    return (
        <Styled.Container>
            <Hearder>
                <Styled.SpanHeaderLogin>Login</Styled.SpanHeaderLogin>
            </Hearder>
            <FormLogin />
            <Styled.ContentButtonSignup>
                <Button
                    onClick={() => goToRegister(navigate)}
                >
                    Não possui cadastro ? Clique aqui.
                </Button>
            </Styled.ContentButtonSignup>
        </Styled.Container>
    )
}