import React, { useState } from "react";
import uniqueId from "../../util/unique_id"

function TodoForm(props) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        const todo = Object.assign({}, {title: title, body: body}, {id: uniqueId()})
        props.receiveTodo(todo)
        setTitle("");
        setBody("");
    }

    return(
        <form className="todo-form" onSubmit={handleSubmit} action="submit">
            <label htmlFor="title">Title</label>
            <input 
                type="text" 
                id="title" 
                onChange={event => setTitle(event.target.value)}
                value={title} />
            <label htmlFor="body">Body</label>
            <input 
                type="text" 
                id="body" 
                onChange={event => setBody(event.target.value)}
                value={body} />
            <input type="submit" value="Submit" />
        </form>
    )
}

export default TodoForm