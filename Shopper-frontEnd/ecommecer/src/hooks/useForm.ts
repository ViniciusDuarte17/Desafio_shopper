import { useState } from "react";
import { User } from "../@types/user";


export const useForm = (initialState: User) => {
    const [form, setForm] = useState(initialState);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };

    const clean = () => {
        setForm(initialState);
    };

    return { form, onChange, clean };
};