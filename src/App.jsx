import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './pages/home/Home';
import Order from './pages/order/Order';
import Cart from './pages/cart/Cart';
import NoPage from './pages/nopage/NoPage';
import MyState from './context/data/myState';
import SignUp from './pages/registration/SignUp';
import Login from './pages/registration/Login';
import ProductInfo from './pages/productInfo/ProductInfo';
import Dashboard from './pages/admin/Dashboard';
import AddProduct from './pages/admin/pages/AddProduct';
import UpdateProduct from './pages/admin/pages/UpdateProduct';
function App() {
  return (
    <MyState>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/productinfo/:id" element={<ProductInfo />} />
        <Route path="/*" element={<NoPage />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/updateproduct" element={<UpdateProduct />} />
      </Routes>
    </Router>
    </MyState>
  )
}

export default App
