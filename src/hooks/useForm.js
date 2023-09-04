import { useState } from "react";

export const useForm = ({onSubmit, initialState}) => {
    const [state, setState] = useState(initialState);

    const handleChange = (e) => {
        const {name, type, value, checked} = e.target;

        if (type === 'checkbox') {
            setState(prevState => {return {...prevState, [name]: checked}});
        };

        setState(prevState => {return {...prevState, [name]: value}});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(state);
    };
    return {state, handleChange, handleSubmit};
};