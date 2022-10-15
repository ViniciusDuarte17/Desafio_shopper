import styled from 'styled-components';
import { secondary} from "../../constants/colors";


export const ContainerToCard = styled.div`
    width: 18em;
    border: solid 1px ${ secondary };
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.23);
    border-radius: 8px;
    transition: 0.2s;
    margin: 5%;
    :hover {
    transform: scale(1.1);
}
`
export const Content = styled.div`
    p {
      font-family: 'Roboto';
      font-weight: 400;
      font-style: normal;
      font-size: 1.2rem;
      color: ${secondary};
    }

    img {
        display: flex;
        width: 100%;
        overflow: hidden;
    }

    h6 {
      font-family: 'Roboto';
      font-weight: 400;
      font-style: normal;
      font-size: 1.3rem;
      color: ${secondary};
    }

`

export const DivButton = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
`