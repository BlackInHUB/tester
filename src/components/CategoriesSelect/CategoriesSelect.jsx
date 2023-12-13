import { Container, SelectLabel, SelectBtn, SelectIcon, SelectValue, OptionsList, Option } from "./CategoriesSelect.styled";
import { useRef, useState, useEffect } from "react";
import { useEscapeKey } from "../../hooks/useEscapeKey";
import {SlArrowDown} from 'react-icons/sl';
import { getCategoryName } from "../helpers/helpers";

export const CategoriesSelect = ({options, chosen, setChosen, language}) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    const toggleOpen = () => {
        setOpen(o => !o);
    };

    const handleSelect = (o) => {
        setChosen(o);
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

    useEscapeKey(() => setOpen(false));

    return (
        <Container ref={ref}>
            <SelectLabel>{language === 'EN' ? 'Choose category' : 'Оберіть категорію'}</SelectLabel>
            <SelectBtn open={open} onClick={toggleOpen} >
                <SelectValue>{getCategoryName(language, options, chosen.id)}</SelectValue>
                <SelectIcon open={open} as={SlArrowDown} />
            </SelectBtn>
            {open && 
                <OptionsList>
                    {options.map((o, i) => <Option key={i} id={o.id} onClick={() => handleSelect(o)}>{getCategoryName(language, options, o.id)}</Option>)}
                </OptionsList>}
        </Container>
    );
};