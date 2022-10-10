import * as Styled from './styled';
import Button from "@mui/material/Button";


export const CardProduct = (props: any) => {

    return (
        <Styled.ContainerToCard>
            <Styled.Content>
                <p>{props.product?.name}</p>
                <p> <strong>Estoque: </strong> {props.product?.qty_stock}</p>
                <h6> <strong>Preço: </strong> R$ {props.product?.price},00</h6>
                <Styled.DivButton>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => props.addProductToCart(props.product)}
                    >
                        add produto
                    </Button>
                </Styled.DivButton>
            </Styled.Content>

        </Styled.ContainerToCard>

    )
}