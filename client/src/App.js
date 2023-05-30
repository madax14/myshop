import React from 'react';
import Shop from './components/Shop';
import NavBar from './components/NavBar';
import { BrowserRouter as  Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
    <NavBar/>
      <Routes>
        <Route path="/" exact element={ <Shop/> } />
        
      </Routes>
    </Router>
  );
}

export default App;
