import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/home/page";
import home from './pages/home/page';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
