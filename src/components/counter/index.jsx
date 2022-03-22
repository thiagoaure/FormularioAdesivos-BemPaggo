import React, { useEffect, useState } from "react";
import {ToggleButtonGroup, ToggleButton}  from "react-bootstrap";
import * as S from './styled';

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = (e) => {
        e.preventDefault();
        setCount(count + 1);
    }

    const handleDecrement = (e) => {
        e.preventDefault();
        if (count <= 0) {
            setCount(0);
        } else {
            setCount(count - 1);
        }
    }

    useEffect(() => {
        localStorage.setItem("@form-count", count);
    }, [count, setCount])

    return (
        <div>
            <h3>Quantos adesivos de cada?</h3>
            <S.CounterContainer>
                <ToggleButtonGroup type="btn" className="mb-2">
                    <ToggleButton  onClick={handleDecrement} id="tbg-check-1" size="sm">-</ToggleButton>
                        <S.LabelCount>{count}</S.LabelCount>
                    <ToggleButton onClick={handleIncrement} id="tbg-check-1" size="sm">+</ToggleButton>
                </ToggleButtonGroup>
            </S.CounterContainer>
        </div>
    );
}

export default Counter;