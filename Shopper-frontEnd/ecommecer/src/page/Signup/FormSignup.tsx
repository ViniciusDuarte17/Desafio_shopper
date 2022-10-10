import { Button, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { registerClient } from "../../services/registerClient";
import * as Styled from "./styled";


export const FormSignup: React.FC = () => {
    const { form, onChange, clean } = useForm({ name: "", date: "" });
    const navigate = useNavigate();


    const onSubmitForm = (event: React.ChangeEvent<HTMLInputElement> | any) => {
        event.preventDefault();
        registerClient({ userName: form.name, deliveryDate: form.date }, navigate, clean)
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
                    name={"date"}
                    value={form.date}
                    onChange={onChange}
                    type={"date"}
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
                        Cadastrar
                    </Button>
                </Styled.ContentButton>
            </Styled.ContainerFormSinup>
        </div>
    )
}