import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import SellerSignup from "./pages/SellerSignup";
import CustomerSignup from "./pages/CustomerSignup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/login" element={<Login />} />
      <Route path="/seller-signup" element={<SellerSignup />} />
      <Route path="/customer-signup" element={<CustomerSignup />} />
    </Routes>
  );
}

export default App;