import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import TodoForm from "./todo_form";
import TodoListItem from "./todo_list_item";

const TodoList = (props) => {
    console.log(props)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos())
    }, [])

    return(
        <div className="todo-list">
            <TodoForm 
                receiveTodo={ props.receiveTodo }
                createTodo={ props.createTodo }
                errors={ props.errors } />
            <ul className="todo-items">
                {props.todos.map((todo, idx) => {
                    return (
                        <TodoListItem key={idx} todo={todo} 
                        deleteTodo={ props.deleteTodo }
                        updateTodo={ props.updateTodo } />)
                })}
            </ul>
        </div>

    )
}

export default TodoList;