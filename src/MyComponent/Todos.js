import React from 'react'
import Todo from "../MyComponent/Todo";

const Todos = (props) => {
  return (
    <div className = "container">
      <h3 className='my-3'>Todos List</h3>
      {props.todos.length===0? "NO TODO DISPLAY":
      props.todos.map((todo)=>{
        return(
        <>
        <Todo todo = {todo} key = {todo.sno} onDelete={props.onDelete}/> <hr/>
        </>
        )
      })
    }
    </div>
  )
}

export default Todos


