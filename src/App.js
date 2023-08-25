import About from "./Pages/About";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Product from "./Pages/Product";
import Categories from "./Pages/Categories";
import NotFound from "./Pages/NotFound";
import "./App.css";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import DetailProduct from "./Pages/DetailProduct";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Product />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/product/:id" element={<DetailProduct />} />
      </Routes>
    </>
  );
}

export default App;
