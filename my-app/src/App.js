import './App.css';
import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import {Home} from "./components/Home"; 
import {Menu} from "./components/Menu"; 
import {Contact} from "./components/Contact"; 
import Navbar from "./Navbar";
function App() {
return (
    <div className="App">
<Router>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/menu" element={<Menu/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="*" element={<h1>Error 404</h1>}/> 
  </Routes>
</Router>

    </div>
  );
}
export default App; 
