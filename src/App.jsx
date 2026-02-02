import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PricingPage from './pages/PricingPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import BlogsPage from './pages/BlogsPage';
import ContactPage from './pages/ContactPage';
import './App.css'; // Minimal resets if needed, but index.css handles most

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/blogs" element={<BlogsPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
