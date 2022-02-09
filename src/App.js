import './App.css';
import { Routes, Route } from 'react-router-dom';
import CalculatorUI from './components/calculatorComponent/Calculator';
import NavBar from './components/navBarComponent/NavBar';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="calculator" element={<CalculatorUI />} />
      </Routes>
    </>
  );
}

export default App;
