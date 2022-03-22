import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = (e) => {
        e.preventDefault();
        setCount(count + 1);
        localStorage.setItem("@form-count", count);
    }

    const handleDencrement = (e) => {
        e.preventDefault();
        if (count <= 0) {
            setCount(0);
        } else {
            setCount(count - 1);
        }
        localStorage.setItem("form-count", count);
    }

    return (
        <div>
            <h2>Quantos adesivos de cada?</h2>
            <button onClick={handleDencrement}>-</button>
            <h4>{count}</h4>
            <button onClick={handleIncrement}>+</button>
        </div>
    );
}

export default Counter;