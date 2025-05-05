import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import CriptoDetail from "./pages/CriptoDetail";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cripto/:id' element={<CriptoDetail />} />
    </Routes>
  );
}

export default App;
