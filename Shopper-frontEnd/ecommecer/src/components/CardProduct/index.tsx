import React from "react";
import * as Styled from './styled';
import Button from "@mui/material/Button";

export const CardProduct: React.FC = () => {

    return (
        <Styled.ContainerToCard>
            <Styled.Content>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                <h6>$100,00</h6>
                <Styled.DivButton>
                    <Button
                        variant="contained"
                        color="primary"
                    >
                        add produto
                    </Button>
                </Styled.DivButton>
            </Styled.Content>

        </Styled.ContainerToCard>

    )
}