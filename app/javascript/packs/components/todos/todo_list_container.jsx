import { connect } from "react-redux";
import { createTodo } from "../../actions/todo_actions"
import TodoList from "./todo_list";
import { allTodos } from "../../reducers/selectors";
import { fetchTodos } from "../../util/todo_api_util";
import { clearErrors } from "../../actions/error_actions";

const mapStateToProps = state => ({
    todos: allTodos(state),
    errors: state.errors
});

const mapDispatchToProps = dispatch => ({
    receiveTodo: (todo) => dispatch(receiveTodo(todo)),
    requestTodos: () => dispatch(fetchTodos()),
    createTodo: (todo) => dispatch(createTodo(todo)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);