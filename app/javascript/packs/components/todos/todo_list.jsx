import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import TodoForm from "./todo_form";
import TodoListItem from "./todo_list_item";

const TodoList = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos())
    }, [])

    return(
        <div className="todo-list">
            <TodoForm 
                receiveTodo={ props.receiveTodo }
                createTodo={ props.createTodo } />
            <ul className="todo-items">
                {props.todos.map((todo, idx) => {
                    return (
                        <TodoListItem key={idx} todo={todo} 
                        receiveTodo={ props.receiveTodo } />)
                })}
            </ul>
        </div>

    )
}

export default TodoList;