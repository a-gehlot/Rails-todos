import React, {useState} from "react";
import uniqueID from "../../util/unique_id";

const StepForm = (props) => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        const step = Object.assign({}, { title: title, body: body, todo_id: props.todo_id, done: false }, { id: uniqueID() })
        props.createStep({step: step})
        setTitle("");
        setBody("");
    }

    return (
        <form className="step-form" onSubmit={handleSubmit} action="submit">
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

export default StepForm

