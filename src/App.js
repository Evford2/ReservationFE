import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import About from "./pages/About.js";
import Admin from "./pages/Admin.js";
import Home from "./pages/Home.js";
import Navbar from './components/Navbar.js';
import Footer from  './components/Footer.js';
import Campsites from './pages/Campsites.js';
import RenFest from './pages/RenFest.js';
import Rules from './pages/Rules.js';

function App() {

  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
            <Route
              exact
              path="/"
              element={<Home />}
            />
            
            <Route
              exact
              path="/about"
              element={<About />}
            />

            <Route
              exact
              path="/campsites"
              element={<Campsites />}
            />

            <Route
              exact
              path="/renfest"
              element={<RenFest />}
            />

            <Route
              exact
              path="/rules"
              element={<Rules />}
            />

            <Route
              exact
              path="/admin"
              element={<Admin />}
            />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
