
import './App.css';
import React from 'react';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
// import ProTip from './ProTip';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
// import Navi from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';

// navbar sections
const sections = [
  { title: 'Home', url: '/' },
  { title: 'Projects', url: 'Projects' },
  { title: 'About', url: 'About' },
];


function App() {
  return (
    <Router>
     <div className="flex-column justify-flex-start min-100-vh">
          <Header title="Portfolio" sections={sections}/>
          {/* <Navi /> */}
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
