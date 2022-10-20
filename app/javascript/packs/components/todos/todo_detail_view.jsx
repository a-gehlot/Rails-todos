import React from "react";
import StepListContainer from "../steps/step_list_container";

const TodoDetailView = (props) => {
    return(
        <ul className="todo-detail-view">
            <li className="todo-body">{props.todo.body}</li>
            <ul className="todo-tags">Tags:
                {props.todo.tags.map((tag) => {
                    return(<li className="tag-item" key={tag}>{tag.name}</li>)
                })}
            </ul>
            <button className="remove-todo" onClick={e => props.deleteTodo(props.todo)}>Delete</button>
            <StepListContainer todo_id={props.todo.id} />
        </ul>
    )
}

export default TodoDetailView;