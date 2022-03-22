import React from 'react';
import {useNavigate} from 'react-router-dom';
import Checkbox from '../checkbox';
import Counter from '../counter';
import Observations from '../observations';

import { Button } from 'react-bootstrap';

const Form = () => {
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('checkout');
    }

    return (
        <form>
            <Checkbox/>
            <Counter/>
            <Observations/>
            <Button variant="primary" onClick={handleSubmit}>Enviar</Button>
        </form>
    );
}

export default Form;