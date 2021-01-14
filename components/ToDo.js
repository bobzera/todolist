import React from 'react';

const ToDo = ({todo, handleToggle}) => {

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    return (

        <div id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} onClick={handleClick}>
            <div className="bg-gray-100 p-2 flex ">
                {todo.complete  && <svg className="w-8 h-8 bg-green-100 border-2 rounded border-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>}
                {!todo.complete  && <div className="w-8 h-8   bg-white border-2 rounded border-black"></div>}
                <h1 className={todo.complete ? "line-through pl-2 text-xl" : "pl-2 text-xl"} >{todo.task}</h1>        
            </div>    
        </div>
    );
};

export default ToDo;