import './App.css';
import React from "react";
import Axios from "axios";
import {useState} from "react";
function App() {
const [genExcuse,setExcuse]=useState("");
const FetchExcuse=(excuse)=>{
  Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then(
    (res)=>{
      setExcuse(res.data[0].excuse);
    }
  )
}

return (
    <div className="App">
<button onClick={()=>FetchExcuse("family")}>Family</button>
<button onClick={()=>FetchExcuse("office")}>Office</button>
<button onClick={()=>FetchExcuse("party")}>Party</button>
<p>{genExcuse}</p>

    </div>
  );
}





export default App;
