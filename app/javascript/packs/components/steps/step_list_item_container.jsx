import { connect } from "react-redux";
import { receiveStep, removeStep, updateStep, deleteStep } from "../../actions/step_actions";
import StepListItem from "./step_list_item";

const mapDispatchToProps = (dispatch) => ({
    receiveStep: (step) => dispatch(receiveStep(step)),
    removeStep: step => dispatch(removeStep(step)),
    updateStep: (step) => dispatch(updateStep(step)),
    deleteStep: (step) => dispatch(deleteStep(step)),
})

export default connect(null, mapDispatchToProps)(StepListItem)