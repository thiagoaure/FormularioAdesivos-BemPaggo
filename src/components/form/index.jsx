import React from 'react';
import Checkbox from '../checkbox';
import Counter from '../counter';
import Observations from '../observations';

const Form = () => {

    return (
        <form>
            <Checkbox/>
            <Counter/>
            <Observations/>
            <input type="submit" value="Enviar" />
        </form>
    );
}

export default Form;