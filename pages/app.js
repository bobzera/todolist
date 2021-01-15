import React, { useState } from "react";

import ToDoList from "../components/ToDoList";
import ToDoForm from "../components/ToDoForm";

function App({dataT}) {  
  
  
  async function enviar(vaiColocar){
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

  async function deletar(vaiDeletar){
    try {
      const res = await fetch('./api/actvits', {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(vaiDeletar) 
      })
      
      if (res.status === 200) {
        console.log("deletado")
       
      } else {
        alert('Sorry, something went wrong.')
      }
    } catch(err) {
      alert(err)
    }
  }

  const [toDoList, setToDoList] = useState(dataT);

  const handleToggle = (id) => {   
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

    let inverso = toDoList.filter((task) => {      
      return task.complete;
    });

    let vaiDeletar = inverso.map((task) => {      
      return task.task
    });
    
    deletar(vaiDeletar)

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

