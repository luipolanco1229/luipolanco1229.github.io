import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StartingScreen from "../components/StartingScreen";
import { Computers } from "../pages/Computers";

export const Router = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={StartingScreen} />
                <Route path='/computers' component={Computers} />
            </Switch>
        </BrowserRouter>
    );
}