import { useState } from "react";
import { TodoForm } from "./components/TodoForm";
import {Todos} from "./components/Todos";
import { useDispatch,useSelector } from 'react-redux';
import { deleteAll } from "./redux/todoApp/actions";

function App() {
  const dispatch = useDispatch()
  const todos = useSelector((state)=>state.operationsReducer);
  const [editFormVisibility, setEditFormVisibility]=useState(false);
  const [editTodo, setEditTodo]=useState('');
  const handleEditClick=(todo)=>{
    setEditFormVisibility(true);
     setEditTodo(todo);
  }
  const cancelUpdate=()=>{
    setEditFormVisibility(false);
  }
  
  return (
    <div className="wrapper">
    <h1 className="text-center">TODO APP</h1>
    <br></br>
    <TodoForm
    cancelUpdate={cancelUpdate}
    
    editTodo={editTodo}
    editFormVisibility={editFormVisibility}
    />
    <Todos 
    handleEditClick={handleEditClick} 
    editFormVisibility={editFormVisibility}/>
    {todos.length > 1 &&(
    <button className='btn btn-danger btn-md delete-all'
        onClick={()=>dispatch(deleteAll())}>DELETE ALL</button>
    )}
    </div>
  );
}

export default App;
