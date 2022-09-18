import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Home from "./components/Home";

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
