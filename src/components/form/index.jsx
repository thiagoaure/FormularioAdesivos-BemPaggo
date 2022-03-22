import React from 'react';
import {useNavigate} from 'react-router-dom';
import Checkbox from '../checkbox';
import Counter from '../counter';
import Observations from '../observations';

import { Button } from 'react-bootstrap';
import * as S from './styled';

const Form = () => {
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('checkout');
    }

    return (
        <S.FormContainer>
            <S.SecondContainer>
                <Checkbox/>
                <Counter/>
                <Observations/>
                <Button variant="primary" onClick={handleSubmit}>Enviar</Button>
            </S.SecondContainer>
        </S.FormContainer>
    );
}

export default Form;