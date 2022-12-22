
import './App.css';
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Navi from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
     <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <Navi />
          <div className="container">
            <Routes>
            <Route 
                path="/"
                element={<Home />}
              />
              <Route 
                path="/about" 
                element={<About />}
              />
            </Routes>
          </div>
          <Footer />
   </div>
   </Router>

  );
}

export default App;
