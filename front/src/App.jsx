// import "../node_modules/tailwindcss/tailwind.css";
// import "./myCss.css";
import "./App.css";
import Login from "./components/Loggin";
import Register from "./components/Register";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
