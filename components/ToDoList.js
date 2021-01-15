import React from 'react';
import ToDo from '../components/ToDo';

const ToDoList = ({toDoList, handleToggle, handleFilter}) => {    
    return (
        <div>
            {toDoList.map(todo => {
                return (               
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                )
            })}
            <button className="hover:text-gray-500" onClick={handleFilter}>Clear Completed</button>
        </div>
    );
};

export default ToDoList;