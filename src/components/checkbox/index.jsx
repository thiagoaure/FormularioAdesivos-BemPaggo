import React, { useState } from "react";

const Checkbox = () => {
    const [check, setCheck] =  useState(
        new Array(3).fill(false)
      );

    const adesivos = ['React', 'Vue', 'Angular'];

    const handleOnChange = (e, pos) => {
        let filteredAdesivos = [];
        const updatedChecked = check.map((item, index) =>
            index === pos ? !item : item
        );
        setCheck(updatedChecked);
        console.log(updatedChecked);
        for(let i=0; i<adesivos.length; i++){
            if(updatedChecked[i] === true){
                filteredAdesivos.push(adesivos[i]);
            }
        }
        localStorage.setItem('@form-ads',JSON.stringify(filteredAdesivos));
        console.log(filteredAdesivos);
    }

    return (
        <>
            <h3>Quais adesivos?</h3>
            { adesivos.map((item, index) => (
                <label>
                    <input
                    type="checkbox"
                    checked={check[index]}
                    value={item}
                    onChange={(e) => handleOnChange(e, index)}
                    />
                    {item}
                </label>
            ))
            }
        </>
    );
}

export default Checkbox;