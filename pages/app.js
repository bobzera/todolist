import React, { useState } from "react";

// import data from "./data.json";

import ToDoList from "../components/ToDoList";
import ToDoForm from "../components/ToDoForm";

function App({dataT}) {  
  
  
  async function enviar(vaiColocar){
    console.log(vaiColocar)
    try {
      const res = await fetch('./api/actvits', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(vaiColocar) 
      })
      
      if (res.status === 200) {
        console.log("User Insert")
       
      } else {
        alert('Sorry, something went wrong.')
      }
    } catch(err) {
      alert(err)
    }
  }

  const [toDoList, setToDoList] = useState(dataT);

  const handleToggle = (id) => {    
    //enviar()
    let mapped = toDoList.map((task) => {
      return task.id === Number(id)
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(mapped);
  };

  const handleFilter = () => {
    let filtered = toDoList.filter((task) => {
      
      return !task.complete;
    });
    setToDoList(filtered);
    
  };

  const addTask = (userInput) => {
    let copy = [...toDoList];
    let vaiColocar = { id: toDoList.length + 1, task: userInput, complete: false }
    copy = [
      ...copy,
      vaiColocar
    ];
    enviar(vaiColocar)
    setToDoList(copy);
  };

  return (<>   

    <div className="pb-4">
      <ToDoForm addTask={addTask} />
    </div>

    <div className="">
      <ToDoList
        toDoList={toDoList}
        handleToggle={handleToggle}
        handleFilter={handleFilter}
      />      
    </div>
    
  </>);
}


export default App;

