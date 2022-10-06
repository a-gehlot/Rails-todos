import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import StepForm from "./step_form";
import StepListItemContainer from './step_list_item_container'


const StepList = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSteps())
    }, [])

    const stepList = props.steps.map((step, idx) => {
        return(
            <StepListItemContainer 
                key={idx}
                step={step}
            />
        )
    })

    const todoID = () => {
        return (props.todo_id);
    }

    return(
        <ul className="step-list">
            {stepList}
            <StepForm receiveStep={props.receiveStep}
            todo_id={todoID()} />
        </ul>
    )
}

export default StepList