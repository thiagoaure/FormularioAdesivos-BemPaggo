import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from "../src/components/form";
import Error from './components/error';
import Checkout from './components/checkout';

const RouteComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Form/>} />
                <Route path="checkout" element={<Checkout/>} />
                <Route path="*" element={<Error/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteComponent;