import Login from "./components/Login.jsx";
import MainContainer from "./components/MainContainer.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/products" element={<MainContainer />} />
      </Routes>
    </div>
  );
}

export default App;
