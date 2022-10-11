import { LoadingContainer } from "./styled";
import {CircularProgress} from "@mui/material";


export const Loading = () => {
    return(
        <LoadingContainer>
          <CircularProgress color={"primary"} size={54}/>
        </LoadingContainer>
    )
}