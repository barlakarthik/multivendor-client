import React from 'react'

const Todolist = ({todos, Delete}) => {
  return (
    <div>
        {todos.map((todo, index)=>{
            return(<div key={index}>
                <h2>{todo}&nbsp;<button onClick={()=>Delete(index)}>delete</button></h2>
            </div>)
        })}
    </div>
  )
}

export default Todolist