const allTodos = function(state) {
    return(Object.values(state.todos))
}

const stepsByTodoId = function(state, todoId) {
    const stepsByTodoId = [];
    Object.keys(state.steps).forEach((stepId) => {
        const step = state.steps[stepId]
        if (step.todo_id === todoId) {
            stepsByTodoId.push(step)
        }
    })
    return stepsByTodoId;
}

export { allTodos, stepsByTodoId }