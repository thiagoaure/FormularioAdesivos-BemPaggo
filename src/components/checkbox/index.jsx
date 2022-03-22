import React, { useState } from "react";

const Checkbox = () => {
    const [adesivo, setAdesivo] = useState([]);

    const adesivos = ['React', 'Vue', 'Angular'];

    const handleOnChange = (newValue) => {
        setAdesivo([...adesivo, newValue])
        localStorage.setItem('@form-ads',JSON.stringify(adesivo));
        console.log(adesivo);
    }

    return (
        <>
            <h3>Quais adesivos?</h3>
            { adesivos.map((item, keys) => (
                <label>
                    <input
                    type="checkbox"
                    key={keys}
                    value={item}
                    onChange={(e) => handleOnChange(e.target.value)}
                    />
                    {item}
                </label>
            ))
            }
        </>
    );
}

export default Checkbox;