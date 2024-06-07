import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/about/About";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import Todos from "./pages/todos/Todos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
