import React, { Component } from "react";
import { Router, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Menu from "./pages/Menu";
import AdminLayout from "./pages/AdminLayout";
import LocationsLayout from "./pages/LocationsLayout";
import HomeLayout from "./pages/HomeLayout";


export default class Routing extends Component {

    render() {
        
        return (
            <Router>
                <Routes>
                    <Route path="/" exact component={HomeLayout} />
                    <Route path="/menu" exact component={Menu} />
                    <Route path="/about" exact component={About} />
                    <Route path="/locations" exact component={LocationsLayout} />
                    <Route path="/admin" exact component={AdminLayout} />
                </Routes>
            </Router>
        )
    }
}