import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from 'react-icons-kit';
import {trash2} from 'react-icons-kit/feather/trash2'
import {edit} from 'react-icons-kit/feather/edit'
import { handleCheckbox, removeTodo } from "../redux/todoApp/actions";



export const Todos = (props) => {
  const todos = useSelector((state) => state.operationsReducer);
  const dispatch = useDispatch();
  console.log("todos", todos);
  const handleEditClick = props.handleEditClick
  const editFormVisibility = props.editFormVisibility
  return todos.map((todo) => (
    <div key={todo.id} className="todo-box">
      <div className="content">
      {editFormVisibility===false&&(
        <input type="checkbox" checked={todo.completed}
        onChange={()=>dispatch(handleCheckbox(todo.id))}></input>
        )}
        <p
          style={
            todo.completed === true
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        >
          {todo.todo}
        </p>
      </div>
      <div >
      {editFormVisibility===false&&(
        <>
        <span className="actions-box-edit" onClick={()=>handleEditClick(todo)}>
          <Icon icon={edit} />
        </span>
        <span className="actions-box-delete" onClick={()=>dispatch(removeTodo(todo.id))}>
          <Icon icon={trash2} />
        </span>
        </>
        )}
      </div>
    </div>
  ));
};
