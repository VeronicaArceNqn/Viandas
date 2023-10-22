import "../node_modules/tailwindcss/tailwind.css";
// import "./myCss.css";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { GlobalContextProvider } from "./context/GlobalContext";
import Error404 from "./components/Error404";
import AdminVianda from "./components/AdminVianda";


function App() {
  return (
    <GlobalContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />        
        <Route path="/register" element={<Register />} />
        <Route path="/nosotros" element={<Error404 />} />
        <Route path="/crear-viandas" element={<AdminVianda />} />
      </Routes>
    </BrowserRouter>
    </GlobalContextProvider>
  );
}
//useContext
export default App;
