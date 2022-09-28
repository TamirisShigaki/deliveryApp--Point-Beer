import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Products from './pages/Products';
import Register from './pages/Register';
import Orders from './pages/Orders';
import AppProvider from './context/appProvider';
import CompletedOrder from './components/CompletedOrder';
import OrderDetails from './pages/OrderDetails';

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={ <Navigate to="/login" replace /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/customer/products" element={ <Products /> } />
          <Route path="/register" element={ <Register /> } />
          <Route path="/customer/orders" element={ <Orders seller={ false } /> } />
          <Route path="/seller/orders" element={ <Orders seller /> } />
          <Route
            path="/customer/orders/:id"
            element={ <OrderDetails seller={ false } /> }
          />
          <Route path="/seller/orders/:id" element={ <OrderDetails seller /> } />
          <Route path="/customer/checkout" element={ <CompletedOrder /> } />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
