import { Container, SelectLabel, SelectBtn, SelectIcon, SelectValue, OptionsList, Option } from "./CategoriesSelect.styled";
import { useRef, useState, useEffect } from "react";
import { useEscapeKey } from "../../hooks/useEscapeKey";
import {SlArrowDown} from 'react-icons/sl'

export const CategoriesSelect = ({options, chosen, setChosen}) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    const toggleOpen = () => {
        setOpen(o => !o);
    };

    const handleSelect = (e) => {
        const {textContent} = e.target;
        setChosen({name: textContent});
        toggleOpen();
    };

    useEffect(() => {
        const handleClick = (e) => {
            if (open && ref.current && !ref.current.contains(e.target)) {
                setOpen(o => !o);
            };
        };

        document.addEventListener('mousedown', handleClick);

        return () => {document.removeEventListener('mousedown', handleClick)};
    }, [open]);

    useEscapeKey(toggleOpen);

    return (
        <Container>
            <SelectLabel>Choose category</SelectLabel>
            <SelectBtn open={open} onClick={toggleOpen} >
                <SelectValue>{chosen.name}</SelectValue>
                <SelectIcon open={open} as={SlArrowDown} />
            </SelectBtn>
            {open && 
                <OptionsList ref={ref}>
                    {options.map(({name}, i) => <Option key={i} id={i} onClick={handleSelect}>{name}</Option>)}
                </OptionsList>}
        </Container>
    )
}