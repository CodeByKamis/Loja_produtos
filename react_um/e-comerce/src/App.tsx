import { Route, Routes } from "react-router";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import TelaProduto from "./Pages/TelaProduto/TelaProduto";

function App() {
  return <Routes>
    <Route path="/" element={<Login />}/>
    <Route path="/home" element={<Home />}/>
    <Route path="/produto/:id" element={<TelaProduto />} />
  </Routes>
}

export default App
