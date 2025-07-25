import { Route, Routes } from "react-router";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";


function App() {
  return <Routes>
    <Route path="/" element={<Login />}/>
    <Route path="/home" element={<Home />}/>
  </Routes>
}

export default App
