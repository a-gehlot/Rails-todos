import { connect } from 'react-redux'
import { deleteTodo } from '../../actions/todo_actions';
import TodoDetailView from './todo_detail_view';

const mapDispatchToProps = dispatch => ({
    recieveSteps: todo => dispatch(receiveSteps(todo)),
    deleteTodo: todo => dispatch(deleteTodo(todo))
})

export default connect(
    null,
    mapDispatchToProps
)(TodoDetailView);