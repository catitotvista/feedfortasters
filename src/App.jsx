import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './layout/Layout.jsx';
import { ToastProvider } from './context/ToastContext.jsx';
import { ScrollToTop } from './components/ScrollToTop.jsx';
import Home from './pages/Home.jsx';
import Catalog from './pages/Catalog.jsx';
import Product from './pages/Product.jsx';
import Order from './pages/Order.jsx';
import About from './pages/About.jsx';

export default function App() {
  return (
    <ToastProvider>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalog />} />
          <Route path="/producto" element={<Product />} />
          <Route path="/pedido" element={<Order />} />
          <Route path="/nosotras" element={<About />} />
        </Route>
      </Routes>
    </ToastProvider>
  );
}
