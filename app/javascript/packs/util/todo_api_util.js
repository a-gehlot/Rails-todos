export const fetchTodos = () => {
    return(jQuery.ajax({
        method: 'GET',
        url: '/api/todos',
    }))
}

export const postTodo = (todo) => {
    return(jQuery.ajax({
        method: 'POST',
        url: '/api/todos',
        data: todo
    }))
}

export const updateTodo = (todo) => {
    return(jQuery.ajax({
        method: 'PATCH',
        url: `/api/todos/${todo.todo.id}`,
        data: todo,
    }))
}

export const deleteTodo = (todo) => {
    return(jQuery.ajax({
        method: 'DELETE',
        url: `/api/todos/${todo.id}`
    }))
}

