import * as Styled from './styled';
import Button from "@mui/material/Button";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { IProduct } from '../../@types/user';

interface Props {
    product: IProduct,
    addProductToCart(product: IProduct): void
}

export const CardProduct = ({ product, addProductToCart }: Props) => {

    return (
        <Styled.ContainerToCard>
            <Styled.Content>
                <p>{product.name}</p>
                <p> <strong>Estoque: </strong> {product.qty_stock}</p>
                <h6> <strong>Preço: </strong> R$ {product.price},00</h6>
                <Styled.DivButton>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => addProductToCart(product)}
                    >
                        add produto  <AddCircleOutlineIcon />
                    </Button>
                </Styled.DivButton>
            </Styled.Content>

        </Styled.ContainerToCard>

    )
}