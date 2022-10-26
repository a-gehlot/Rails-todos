import React, { useState } from "react";
import uniqueId from "../../util/unique_id"

function TodoForm(props) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [newTag, setNewTag] = useState('');
    const [tagNames, setTagNames] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        const todo = Object.assign({}, {todo: {title: title, body: body, done: false, tag_names: tagNames}})
        props.createTodo(todo).then(() => {
            setBody('')
            setTitle('');
            setTagNames([]);
            setNewTag('')
        })
    }

    function renderError() {
        if (props.errors[0]) {
            return(
                <ul>Error: 
                    {props.errors[0].map((err, idx) => <li key={idx}>{err}</li>)}
                </ul>
            )
        }
    }

    function addTag(e) {
        e.preventDefault();
        setTagNames([...tagNames, newTag]);
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
            <input 
                type="text"
                id="tag"
                onChange={event => setNewTag(event.target.value)}
                value={newTag} />
            <button type="button" className="tag-button" onClick={addTag}>Add Tag</button>
            <ul className="tags">Tags
                {tagNames.map((tag, index) => {
                    return(<li key={index}>{tag}</li>)
                })}
            </ul>
            <input type="submit" value="Submit" />
            {renderError()}
        </form>
    )
}

export default TodoForm