import './App.css';
import React from "react";
import {useState,createContext}  from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import {Home} from "./components/Home"; 
import {Profile} from "./components/Profile"; 
import {Contact} from "./components/Contact"; 
import {Navbar} from "./Navbar";

export const AppContext=createContext();
function App() {
  const [username,setUsername]=useState("TechTimes");
return (
    <div className="App">
      <AppContext.Provider value={{username,setUsername}}>
<Router>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="*" element={<h1>Error 404</h1>}/> 
  </Routes>
</Router>
</AppContext.Provider>

    </div>
  );
}
export default App; 