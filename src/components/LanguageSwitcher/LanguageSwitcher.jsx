import {SlArrowDown} from 'react-icons/sl';
import { Container, SelectBtn, SelectIcon, OptionsList, Option, SelectImg } from './LanguageSwitcher.styled';
import { useState, useEffect, useRef } from 'react';
import { useApp } from '../../appContext';
import ua from '../../images/ua.png';
import en from '../../images/en.png';
import { useEscapeKey } from '../../hooks/useEscapeKey';

export const LanguageSwitcher = () => {
    const [open, setOpen] = useState(false);
    const {setLanguage, language} = useApp();
    const ref = useRef();
    
    const handleChose = (e) => {
        setLanguage(e.target.id);
        setOpen(o => !o);
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
        <Container>
            <SelectBtn type='button' onClick={() => setOpen(o => !o)}><SelectImg src={language === 'EN' ? en : ua} />{language}<SelectIcon as={SlArrowDown} open={open} /></SelectBtn>
            {open &&
                <OptionsList ref={ref}>
                    <Option onClick={handleChose} id='EN'>{language === 'EN' ? 'English' : 'Англійська'}</Option>
                    <Option onClick={handleChose} id='UA'>{language === 'EN' ? 'Ukrainian' : 'Українська'}</Option>
                </OptionsList>
            }
        </Container>
    )
};