import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./pages/home";
import Header from "./components/header";
import Records from "./pages/records";

const Routes = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/" exact >
                <Home />
            </Route>
            <Route path="/records" >
                <Records/>
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;