import { useState} from "react";
import './index.css';
import Header from './Components/Header';
import AddTask from "./Components/AddTask";
import About from "./Components/About";

import Tasks from './Components/Tasks';
const  App =() => {
  const [showAddTask, setshowAddTask] = useState(false)
  const [tasks, setTasks]= useState([{
    id: 1,
    text:"UX/UI Designer",
    day: "June 5th at 2:30pm",
    reminder: true
  },
  {
    id: 2,
    text: "Software Engineer",
    day: "May 20th at 14.00pm",
    reminder: true
  },
  {
    id: 3,
   text :"Web Designer",
    day :"May 24th at 12:30pm" ,
   reminder: false
  },
  {
    id: 4,
    text: "Software developer",
   day: "Feb 7th at 12:30pm",
  reminder: true
  }])

  

  //AddTask
  const addTask = (task) =>{
    const id =Math.floor(Math.random()*10000)+1
   
    const newTask ={id, ...task}
    setTasks([...tasks, newTask])
  }
 //delete task
  const deleteTask = (id) =>{
   setTasks(tasks.filter( (task) => task.id !==id))
  }
//toggle reminder
const toggleReminder =(id) =>{
  setTasks(tasks.map( (task) => task.id ===id ? {...task,reminder :!task.reminder}: task))
}
  return (
    <div className= "container">
     
     <Header  onAdd={ () => setshowAddTask(!showAddTask)} showAdd={showAddTask}/>
     {showAddTask && <AddTask  onAdd ={  addTask }/> }
     {tasks.length >0 ? (<Tasks  tasks={tasks} onDelete={deleteTask}  onToggle={ toggleReminder}/>): "No task to show"} 
     <About/>
    
   
    
    </div>
  
  );
}

export default App;
