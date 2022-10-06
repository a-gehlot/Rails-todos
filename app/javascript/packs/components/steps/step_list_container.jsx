import { connect } from "react-redux";
import { receiveStep } from "../../actions/step_actions";
import { fetchTodos } from "../../actions/todo_actions";
import { stepsByTodoId } from "../../reducers/selectors";
import StepList from "./step_list";


const mapDispatchToProps = (dispatch) => ({
    receiveStep: (todo) => dispatch(receiveStep(todo)),
    requestSteps: () => dispatch(fetchTodos())
})

const mapStateToProps = (state, {todo_id}) => ({
    steps: stepsByTodoId(state, todo_id),
    todo_id: todo_id
})

export default connect(
    mapStateToProps, mapDispatchToProps
)(StepList)