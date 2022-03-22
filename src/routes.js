import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from "../src/components/form";
import Error from './components/error';
import Checkout from './components/checkout';
import Header from '../src/components/header';
import Footer from '../src/components/footer';

const RouteComponent = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Form/>} />
                <Route path="checkout" element={<Checkout/>} />
                <Route path="*" element={<Error/>} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default RouteComponent;