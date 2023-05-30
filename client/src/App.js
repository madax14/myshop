import React from 'react';
import Shop from './components/Shop';
import MoreInfo from './components/MoreInfo';
import NavBar from './components/NavBar';
import { BrowserRouter as  Router, Routes, Route} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
    <NavBar/>
      <Routes>
        <Route path="/" exact element={ <Shop/> } />
        <Route path="/MoreInfo" element={ <MoreInfo/> } />
        
      </Routes>
    </Router>
  );
}

export default App;
