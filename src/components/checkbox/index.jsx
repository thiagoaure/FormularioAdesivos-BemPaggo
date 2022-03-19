import React from "react";

const Checkbox = () => {

    const adesivos = ['React', 'Vue', 'Angular'];

    return (
        <>
            <h3>Quais adesivos?</h3>
            { adesivos.map((item, key) => (
                <label>
                    <input
                    type="checkbox"
                    value={item}
                    />
                    {item}
                </label>
            ))
            }
        </>
    );
}

export default Checkbox;