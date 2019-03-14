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