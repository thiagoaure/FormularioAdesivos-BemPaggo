import React, { useState, useEffect } from "react";

const Checkbox = () => {
    const [adesivo, setAdesivo] = useState([]);

    const adesivos = ['React', 'Vue', 'Angular'];

    const handleCheckbox = (e) => {
        setAdesivo([...adesivo, e]);
        console.log(adesivo)
    }

    return (
        <>
            <h3>Quais adesivos?</h3>
            { adesivos.map((item, key) => (
                <label>
                    <input
                    type="checkbox"
                    value={item}
                    onChange={(e) => handleCheckbox(e.target.value)}
                    />
                    {item}
                </label>
            ))
            }
        </>
    );
}

export default Checkbox;