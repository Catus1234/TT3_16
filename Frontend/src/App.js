import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Navbar />} />
      </Routes>
    </Router>
  );
}

export default App;
