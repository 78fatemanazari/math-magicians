import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="quote" element={<Quote />} />
      </Routes>
    </>
  );
}

export default App;
