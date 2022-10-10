import * as Styled from './styled';
import Button from "@mui/material/Button";


export const ProductToPurchase = (props: any) => {

    return (
        <Styled.ContainerToCard>
            <Styled.Content>
                <p>{props.product?.name}</p>
                <p> <strong>Quantidade: </strong> {props.product?.amout}</p>
                <h6> <strong>Preço: </strong> R$ {props.product?.price},00</h6>
                <Styled.DivButton>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => props.removeProductToCart(props.product)}
                    >
                       Remover item
                    </Button>
                </Styled.DivButton>
            </Styled.Content>

        </Styled.ContainerToCard>

    )
}