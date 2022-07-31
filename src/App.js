import DragList from "./components/Draggable/DragList";
import MainPage from "./pages/MainPage/MainPage";
import LoginPage from "./pages/loginPage/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<MainPage />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
