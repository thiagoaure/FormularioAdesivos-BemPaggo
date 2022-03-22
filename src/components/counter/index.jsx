import React, { useEffect, useState } from "react";
import {ToggleButtonGroup, ToggleButton}  from "react-bootstrap";

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
            <ToggleButtonGroup type="btn" className="mb-2">
                <ToggleButton  onClick={handleDecrement} id="tbg-check-1" size="sm">-</ToggleButton>
                    <h4>{count}</h4>
                <ToggleButton onClick={handleIncrement} id="tbg-check-1" size="sm">+</ToggleButton>
            </ToggleButtonGroup>
        </div>
    );
}

export default Counter;