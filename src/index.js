import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landingpage/home/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './landingpage/Navbar';
import Footer from './landingpage/Footer';
import Signup from './landingpage/signup/Signup';
import AboutPage  from './landingpage/about/AboutPage';
import ProductPage from './landingpage/products/ProductPage';
import PricingPage from './landingpage/pricing/PricingPage';
import SupportPage from './landingpage/support/SupportPage';
import NotFound from './landingpage/notfound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
  <Navbar />
    <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/products" element={<ProductPage />}></Route>
        <Route path="/pricing" element={<PricingPage />}></Route>
        <Route path="/support" element={<SupportPage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
    </Routes>
    <Footer />
  </HashRouter>
);
