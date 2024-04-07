import './App.css';

function App() {
  
  return (
    <div className="App">

<User name="shiva" age={20} gmail="Shiva@gmail.com"/>
<User name="shiva" age={20} gmail="Shiva@gmail.com"/>
<User name="shiva" age={20} gmail="Shiva@gmail.com"/>
      
    </div>
  );
}
const User=(props)=>{
  return(
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.gmail}</h1>
    </div>
  )
}
export default App;
