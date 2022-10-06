export const fetchSteps = () => {
    return(jQuery.ajax({
        method: 'GET',
        url: '/api/steps'
    }))
}

export const postStep = (step) => {
    return(jQuery.ajax({
        method: 'POST',
        url: '/api/steps',
        data: step
    }))
}

export const updateStep = (step) => {
    return(jQuery.ajax({
        method: 'PATCH',
        url: `/api/steps/${step.step.id}`,
        data: step
    }))
}

export const deleteStep = (step) => {
    return(jQuery.ajax({
        method: 'DELETE',
        url: `api/steps/${step.id}`
    }))
}