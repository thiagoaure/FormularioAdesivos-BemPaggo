import React, { useEffect } from "react";

const Checkout = () => {
    const shoppings = {
        adesivos: [],
        count: 0,
        obs: ''
    }

    const getAdesivos = () => {
        const values = localStorage.getItem("@form-ads");
        const storedAdesivos = JSON.parse(values);
        console.log(storedAdesivos);
        shoppings.adesivos = storedAdesivos;
        console.log(shoppings.adesivos);
    }

    const getCount = () => {
        const values = localStorage.getItem("@form-count");
        // console.log(values);
        shoppings.count = values;
    }

    const getObs = () => {
        const value = localStorage.getItem("@form-obs");
        // console.log(value);
        shoppings.obs  = value;
    }


    useEffect (() => {
        getAdesivos();
        getCount();
        getObs();
    }, [getAdesivos(), getCount(), getObs()])
    return (
        <div>
            {
                shoppings.adesivos.map((item, index) => (
                    <div>
                        <h2>{item}</h2>
                    </div>
                ))
            }
            <p>{shoppings.count}</p>
            <p>{shoppings.obs}</p>
        </div>
    )
}
export default Checkout;