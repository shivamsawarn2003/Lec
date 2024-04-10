import './App.css';
import {useState} from "react";


function App() {

  const [todoList,settodoList]=useState([]);
  const [newTask,setNewTask]=useState("");

const handleChange=(event)=>{
  setNewTask(event.target.value);
}

  const addTask=()=>{
    const task={
      id : todoList.length === 0 ? 1 : todoList[todoList.length-1].id+1,
      taskName:newTask,
      
    }
    settodoList([...todoList,task]) ; 
  };
  const deleteTask = (id) => {
    settodoList(todoList.filter((task) => task.id !== id));
  }
  
  return (
    <div className="App">
    <input onChange={handleChange}/>
    <button onClick={addTask}>Add Task</button>

   
    <div className="list">

      {todoList.map((task)=>{
          return(<div> <h1>{task.taskName}</h1>
          <button onClick={()=>deleteTask(task.id)}>X</button></div>)
        })
      }
      </div> 
    </div>
  );
}





export default App;
