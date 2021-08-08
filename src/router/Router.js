import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StartingScreen from "../components/StartingScreen";
import { Computers } from "../pages/Computers";
import { ProductDetail } from "../pages/ProductDetail";
import { Smartphones } from "../pages/Smartphones";

export const Router = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={StartingScreen} />
                <Route path='/computers' component={Computers} />
                <Route path='/smartphones' component={Smartphones} />
                <Route path='/product/:id/:type' component={ProductDetail} />
            </Switch>
        </BrowserRouter>
    );
}