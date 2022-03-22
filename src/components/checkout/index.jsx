import React, { useEffect } from "react";
import { Button } from 'react-bootstrap';
import * as S from "./styled";

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
            <S.Container>
                <S.CheckMainContainer>
                    <h3>Vocé está comprando os seguintes adesivos:</h3>
                    {
                        shoppings.adesivos.map((item, index) => (
                            <div>
                                <h2> * {item}</h2>
                            </div>
                        ))
                    }
                    <S.Label>
                        <p>Quantidade de cada item: {shoppings.count} </p>
                    </S.Label>

                    <S.Label>
                    {
                        shoppings.obs.length === 0 ?
                            <p>Voce não deixou nenhum recado :( </p>
                        :
                        <>
                            <p>Seu recado para nós: </p>
                            <p>{shoppings.obs}</p>
                        </>
                    }
                    </S.Label>

                    <Button variant="primary">Finalizar</Button>
                </S.CheckMainContainer>
            </S.Container>
        </div>
    )
}
export default Checkout;