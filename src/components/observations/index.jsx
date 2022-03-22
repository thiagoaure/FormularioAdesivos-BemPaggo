import React, { useState } from "react";

const Observations = () => {
    const [obs, setObs] = useState('');

    const handleOnChange = (value) => {
        setObs(value);
        localStorage.setItem("@form-obs", obs);
    }

    return (
        <div>
            <textarea onChange={(e) => handleOnChange(e.target.value)} placeholder="Alguma dúvida? Deixe seu recado"/>
        </div>
    );
}

export default Observations;