import React from 'react';
import {useNavigate} from 'react-router-dom';
import Checkbox from '../checkbox';
import Counter from '../counter';
import Observations from '../observations';

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
            <input type="button"  onClick={handleSubmit} value="Enviar" />
        </form>
    );
}

export default Form;