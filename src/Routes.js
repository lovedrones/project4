import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './user/Signup';
import Signin from './user/Signin';
import Home from './core/Home';
import PrivateRoute from "./auth/PrivateRoute";
import Dashboard from './user/UserDashboard';
import AdminRoute from './auth/AdminRoute';
import AdminDashboard from './user/AdminDashboard';
import AddCategory from './admin/AddCategory';
import AddProduct from './admin/AddProduct';
import ManageProducts from "./admin/ManageProducts"

const Routes = () => {
    return (
    <BrowserRouter>
        <Switch>
            <PrivateRoute path="/" exact component={Home} />
            <Route path="/signin" exact component={Signin} />
            <Route path="/signup" exact component={Signup} />
            <PrivateRoute path="/user/dashboard" exact component={Dashboard} />
            <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
            <AdminRoute 
            path="/create/category"
             exact component={AddCategory} 
             />
            <AdminRoute 
            path="/create/product"
             exact component={AddProduct} 
             />
            <PrivateRoute path="/admin/products" exact component={ManageProducts} />

        </Switch>
    </BrowserRouter>
    );
};

export default Routes;