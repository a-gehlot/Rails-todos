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

