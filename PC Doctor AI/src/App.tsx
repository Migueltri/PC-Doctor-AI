import { BrowserRouter, Routes, Route } from 'react-router-dom';
import home from './pages/home';
import contact from './pages/contact';

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
