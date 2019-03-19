export const registerElement = (id, minChars, maxChars) => {
    return {
        type: "REGISTER_COMPONENT",
        payload: {
            id,
            minChars,
            maxChars
        }
    }
}
export const updateComponent = (id, value) => {
    return{
        type:"UPDATE_COMPONENT",
        payload:{
            id, value
        }
    }
}
/*
{
    id,
    name,
    type,
    author,
    timePlaying,
    listeners,
    audioSource,
    volume,
    stateOfChannel
}
*/
export const addChannel = payload => {
    return {
        type:"ADD_CHANNEL", 
        payload:{
            ...payload 
        }
    }
}

export const removeChannel = id => ({
    type:"REMOVE_CHANNEL",
    payload:id
})
/* nazvy jak ******* ... */