import './App.css';
import {useState} from "react";
//Whenever a value is changing it triggers a reminder and shows the new valuein our ui.

function App() {

const [count,setCount]=useState(0);

const increase=()=>{
  setCount(count+1);
}

const decrease=()=>{
  setCount(count-1);
}
const setToZero=()=>{
  setCount(0);
}


  return (
    <div className="App">
    <button onClick={increase}>Increase number</button>
    <button onClick={decrease}>decrease number</button>
    <button onClick={setToZero}>SetToZero</button>
{count}
    </div>
    
  );
}



export default App;
