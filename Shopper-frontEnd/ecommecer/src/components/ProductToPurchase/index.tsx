import * as Styled from './styled';
import Button from "@mui/material/Button";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { IProductPurchase } from '../../@types/purchase';


interface Props {
    product: IProductPurchase,
    removeProductToCart(product: IProductPurchase): void
}

export const ProductToPurchase = ({ product, removeProductToCart }: Props) => {

    return (
        <Styled.ContainerToCard>
            <Styled.Content>
                <p>{product.name}</p>
                <p> <strong>Quantidade: </strong> {product.amout}</p>
                <h6> <strong>Preço: </strong> R$ {product.price.toString().replace('.', ',')}</h6>
                <Styled.DivButton>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => removeProductToCart(product)}
                    >
                        Remover item   <RemoveCircleOutlineIcon />
                    </Button>
                </Styled.DivButton>
            </Styled.Content>

        </Styled.ContainerToCard>

    )
}