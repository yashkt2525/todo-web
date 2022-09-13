import React from 'react'
import { Todoitems } from './Todoitems'

export const Todos = (props) => {
    let myStyle = {
        minHeight: "90vh", 
        margin : "10px auto"
    }
  return (
    <div className='container my-3' style={myStyle}>
        <h3 className='text-center'>TODOS LIST</h3>
        {props.todos.length===0? 'no todos to display':
        props.todos.map((todo)=>{
            return( <Todoitems todo={todo} key={todo.sno} onDelete={props.onDelete} />

            
        )})
        }
        

    </div>
  )
}
