import React from 'react';
import Header from './Header/Header';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';
import Orders from './orders/Orders';
import Checkout from './orders/checkout/Checkout';
import Auth from "./Auth/Auth"
import { Route } from 'react-router-dom';

const Main = props => {
    return (
        <div>
            <Header />
            <div className="container">
                <Route path="/orders" component={Orders} />
                <Route path="/checkout" component={Checkout} />
                <Route path="/Login" component={Auth} />
                <Route path="/" exact component={BurgerBuilder} />
            </div>
        </div>
    )
}


export default Main;