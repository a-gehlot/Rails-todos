import { connect } from "react-redux";
import { receiveStep, createStep } from "../../actions/step_actions";
import { fetchTodos } from "../../actions/todo_actions";
import { stepsByTodoId } from "../../reducers/selectors";
import StepList from "./step_list";


const mapDispatchToProps = (dispatch) => ({
    receiveStep: (step) => dispatch(receiveStep(step)),
    requestSteps: () => dispatch(fetchTodos()),
    createStep: (step) => dispatch(createStep(step))
})

const mapStateToProps = (state, {todo_id}) => ({
    steps: stepsByTodoId(state, todo_id),
    todo_id: todo_id
})

export default connect(
    mapStateToProps, mapDispatchToProps
)(StepList)