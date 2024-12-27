import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './components/main';
import About from './components/about';
import NavBar from "./components/navbar";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="about" element={<About />} />
    </Routes>
  </BrowserRouter>
  )
}