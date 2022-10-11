import { Button, TextField } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import {CircularProgress} from "@mui/material";
import { useForm } from "../../hooks/useForm";
import { registerLogin } from "../../services/registerLogin";
import * as Styled from "./styled";



export const FormLogin: React.FC = () => {
    const navigate = useNavigate()
    const { form, onChange, clean } = useForm({ name: "", date: "" });
    const [isLoading, setIsLoading] = React.useState<boolean>(false);



    const onSubmitForm = (event: React.ChangeEvent<HTMLInputElement> | any) => {
        event.preventDefault();
        setIsLoading(true)
        registerLogin({ userName: form.name }, navigate, clean)
    };

    return (
        <div>
            <Styled.ContainerLogin onSubmit={onSubmitForm}>
                <TextField
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    label={"name"}
                    variant="outlined"
                    type={"text"}
                    fullWidth
                    required
                    margin="normal"
                />

                <Styled.ContentButtonLogin>
                    <Button
                        fullWidth
                        type="submit"
                        variant="contained"
                        size='medium'
                    >
                        {isLoading ? (
                            <CircularProgress  color={"inherit"} size={24} />
                        ) : (
                            <>Login</>
                        )}
                    </Button>
                </Styled.ContentButtonLogin>
            </Styled.ContainerLogin>
        </div>
    )
}

