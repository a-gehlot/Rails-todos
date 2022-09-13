import React from "react";

const StepListItem = (props) => {
    function toggleDone(e) {
        e.preventDefault();
        let toggledStep = Object.assign({},
            props.step,
            {done: !props.step.done}
        )
        props.receiveStep(toggledStep)
    }

    const style = {
        textDecoration: props.step.done ? "line-through" : "none"
    }


    return(
        <ul className="step-list-item">
            <li className="step-title" style={style}>{props.step.title}</li>
            <button className="step-done" onClick={toggleDone}>{ props.step.done ? "Undo" : "Done" }</button>
            <button className="step-delete" onClick={e => props.removeStep(props.step)}>Delete</button>
        </ul>

    )
}

export default StepListItem