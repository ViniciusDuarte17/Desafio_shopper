import styled from "styled-components";
import { secondary } from "../../constants/colors";




export const ContainerCartProduct = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    flex-wrap: wrap;
    h3{
        font-family: 'Roboto';
        font-style: normal;
        margin: auto;
        font-size: 1.7em;
        margin-top: 2%;
    }
`

export const ContentMain = styled.main`
    display: flex;
    flex-wrap: wrap;
    width: 98%;
    margin-left: 2%;
`

export const ContentButtonPurchase = styled.div`
    display: flex;
    margin-left: 6%;
    margin-bottom: 2%;
    margin-top: 1%;
    @media  screen and (min-width: 270px) and (max-width: 600px) {
       width: 22em;
 }
`

export const ContentInput = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    margin-left: 8%;
    margin-bottom: 2%;
`

export const TextH1 = styled.h3`
    color: ${secondary};
    font-family: 'Roboto';
    font-style: normal;
`

