import logo from './logo.svg';
import './App.css';
import Main from './components/Main'

import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
