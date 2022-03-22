import React, { useEffect, useState } from "react";
import {FloatingLabel, Form} from 'react-bootstrap';

const Observations = () => {
    const [obs, setObs] = useState('');

    const handleOnChange = (value) => {
        setObs(value);
    }

    useEffect(() => {
        localStorage.setItem("@form-obs", obs);
    }, [obs])

    return (
        <div>
             <FloatingLabel controlId="floatingTextarea" label="Deixe seu recado!" className="mb-3">
                <Form.Control style={{ width: '350px' }} onChange={(e) => handleOnChange(e.target.value)} as="textarea" placeholder="Leave a comment here" />
             </FloatingLabel>
        </div>
    );
}

export default Observations;