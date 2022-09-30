import React, { useState } from "react";
import uniqueId from "../../util/unique_id"

function TodoForm(props) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        const todo = Object.assign({}, {todo: {title: title, body: body, done: false}})
        props.createTodo(todo).then(() => {
            setBody('')
            setTitle('');
        })
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
            <div>Error: {props.errors}</div>
        </form>
    )
}

export default TodoForm