import { Button, TextField } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { registerClient } from "../../services/registerClient";
import * as Styled from "./styled";
import { CircularProgress } from "@mui/material";


export const FormSignup: React.FC = () => {
    const navigate = useNavigate();
    const { form, onChange, clean } = useForm({ name: "", password: "" });
    const [isLoading, setIsLoading] = React.useState<boolean>(false);


    const onSubmitForm = (event: React.ChangeEvent<HTMLInputElement> | any) => {
        event.preventDefault();
        setIsLoading(true)
        registerClient({ userName: form.name, password: form.password }, navigate, clean)
    };


    return (
        <div>
            <Styled.ContainerFormSinup onSubmit={onSubmitForm}>
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

                <TextField
                    name={"password"}
                    label={"senha"}
                    value={form.password}
                    onChange={onChange}
                    type={"password"}
                    required
                    fullWidth
                    margin="normal"
                />

                <Styled.ContentButton>
                    <Button
                        fullWidth
                        type="submit"
                        variant="contained"
                        size='medium'>
                        {isLoading ? (
                            <CircularProgress color={"inherit"} size={24} />
                        ) : (
                            <>Cadastrar</>
                        )}
                    </Button>
                </Styled.ContentButton>
            </Styled.ContainerFormSinup>
        </div>
    )
}