import React, {useState} from "react";
import TodoDetailViewContainer from "./todo_detail_view_container"

function TodoListItem(props) {

    const [detail, setDetail] = useState(false);

    const toggleDetail = (e) => {
        e.preventDefault()
        detail ? setDetail(false) : setDetail(true)
    }

    const toggleTodo = (e) => {
        e.preventDefault()
        const toggledTodo = Object.assign(
            {},
            props.todo,
            {done: !props.todo.done}
        )
        props.updateTodo({todo: toggledTodo})
    }

    function checkForDetail() {
        if (!detail) {
            return <TodoDetailViewContainer todo={ props.todo }
            />
        }
    }

    return(
        <ul className="todo-list-item">
            <li className="todo-list-item-title">{props.todo.title}</li>
            <button className="toggle-todo" onClick={toggleTodo}>{props.todo.done ? "Undo" : "Done"}</button>
            <button className="toggle-detail" onClick={toggleDetail}>Detail</button>
            {checkForDetail()}
        </ul>)
}


export default TodoListItem;