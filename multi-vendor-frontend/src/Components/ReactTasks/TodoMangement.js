import React,{useState} from 'react'
import Todolist from './Todolist'
const TodoMangement = () => {
    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState([])
    const inputHandler = (e)=>{
        const {value} = e.target
    setTodo(value)
    }
    const Submit = (e)=>{
     e.preventDefault();
     const newTodos= [...todos, todo]
     setTodos(newTodos)
    }
    const Delete = (indexvalue)=>{
      const remaingvalues = todos.filter((i,index) => index !== indexvalue)
      setTodos(remaingvalues)
    }
  return (
    <div>
        <center>
            <div className='card'> 
                <div className='card-body'>
                    <div className='card-title'>Todo Management Application</div>
                    <form onSubmit={Submit}>
                        <input type='text' placeholder='enter your todo' name='todo' value={todo} onChange={inputHandler}/>&nbsp;&nbsp;
                        <button type='submit'>Submit</button>
                    </form>
                    <Todolist todos={todos} Delete={Delete}/>
                </div>
            </div>
        </center>
    </div>
  )
}

export default TodoMangement