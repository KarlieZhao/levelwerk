import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './components/main';
import About from './components/about';
import Contact from './components/contact';
import Events from './components/events';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="about" element={<About />} />
        <Route path="events" element={<Events />} />
      </Routes>
    </BrowserRouter>
  );
}
