import React from "react";
import TodoForm from "./todo_form";
import TodoListItem from "./todo_list_item";

const TodoList = (props) => {
    return(
        <div className="todo-list">
            <TodoForm 
                receiveTodo={ props.receiveTodo } />
            <ul className="todo-items">
                {props.todos.map((todo, idx) => {
                    return (
                        <TodoListItem key={idx} todo={todo} 
                        receiveTodo={ props.receiveTodo} />)
                })}
            </ul>
        </div>

    )
}

export default TodoList;