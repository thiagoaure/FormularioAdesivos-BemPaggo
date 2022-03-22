import React, { useState } from "react";
import * as S from "./styled";

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
            <S.CheckContainer>
                <h3>Quais adesivos?</h3>
                <S.Radios>
                    { adesivos.map((item, index) => (
                        <S.Radios>
                            <input
                            type="checkbox"
                            checked={check[index]}
                            value={item}
                            onChange={(e) => handleOnChange(e, index)}
                            />
                            {item}
                        </S.Radios>
                    ))
                    }
                </S.Radios>
            </S.CheckContainer>
        </>
    );
}

export default Checkbox;