import './App.css';
import { Routes, Route } from 'react-router-dom';
import Calculator from './pages/Calculator/Calculator';
import NavBar from './components/navBarComponent/NavBar';
import Home from './pages/Home/Home';
import Quote from './pages/Quote/Quote';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="quote" element={<Quote />} />
      </Routes>
    </>
  );
}

export default App;
