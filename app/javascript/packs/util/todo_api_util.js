export const fetchTodos = () => {
    return(jQuery.ajax({
        method: 'GET',
        url: '/api/todos',
    }))
}

