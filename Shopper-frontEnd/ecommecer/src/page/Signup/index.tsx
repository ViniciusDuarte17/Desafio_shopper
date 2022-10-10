import React from "react";
import { Hearder } from "../../components/Header";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";
import { FormSignup } from "./FormSignup";
import * as Styled from './styled';

export const Signup: React.FC = () => {
    useUnprotectedPage()

    return (
        <Styled.Container>
            <Hearder>
                <h3>Cadastro</h3>
            </Hearder>
            <FormSignup />
        </Styled.Container>
    )
}