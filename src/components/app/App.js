import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect,  } from "react-router-dom";

import useToken from './useToken';

import { Header } from '../ui/Header';
import { Login } from '../auth/Login';
import { ViewBrand } from '../brand/ViewBrand';
import { UpdateBrand } from '../brand/UpdateBrand';
import { ViewCategory } from '../category/ViewCategory';
import { UpdateCategory } from '../category/UpdateCategory';
import { ViewProduct } from '../product/ViewProduct';
import {  UpdateProduct } from '../product/UpdateProduct';

export const App = () => {

    const { token, setToken } = useToken();
    if(!token) {
        console.log("debe ingresar un token vigente", token);
        return <Login setToken={setToken} />
    }

    return <Router>
            <Header />
            <Switch>
                <Route exact path='/brand' component={ViewBrand} />
                <Route exact path='/brand/edit/:brandId' component={UpdateBrand} />
                <Route exact path='/category' component={ViewCategory} />
                <Route exact path='/category/edit/:categoryId' component={UpdateCategory} />
                <Route exact path='/product' component={ViewProduct} />
                <Route exact path='/product/edit/:productId' component={UpdateProduct } />
                <Redirect to='/' />
            </Switch>
    </Router>
}
