import { connect } from "react-redux";
import { receiveTodo } from "../../actions/todo_actions"
import TodoList from "./todo_list";
import { allTodos } from "../../reducers/selectors";
import { fetchTodos } from "../../util/todo_api_util";

const mapStateToProps = state => ({
    todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
    receiveTodo: (todo) => dispatch(receiveTodo(todo)),
    requestTodos: () => dispatch(fetchTodos())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);