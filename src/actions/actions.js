import {ADD_CHANNEL, REMOVE_CHANNEL, EDIT_CHANNEL, SET_VOLUME, SET_PLAYING, SET_STATE_OF_CHANNEL, SET_LISTENERS} from "./actionTypes"

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
export const addChannel = payload => ({
    type:ADD_CHANNEL,
    payload
})
/* 
    {id}
*/
export const removeChannel = id => ({
    type:REMOVE_CHANNEL,
    payload:id
})

/* 
    {
        id,
        name:"newName",
        ... atd,
        **
          odkaz pre buduce ja: 
          urob to tak aby sa do 
          payloadu dali len zmenene info
        **
    }
*/
export const editChannel = payload => ({
    type:EDIT_CHANNEL,
    payload
})
/* 
    {
        id, volume (number 1-15)
    }
*/
export const setVolume = payload => ({
    type:SET_VOLUME,
    payload
})
/* 
    {
        id, playing (true/false)
    }
*/
export const setPlaying = payload => ({
    type:SET_PLAYING,
    payload
})
/* 
    {
        id, state (live, pending, offline)
    }
*/
export const setStateOfChannel = payload => ({
    type:SET_STATE_OF_CHANNEL,
    payload
})
/* 
    {
        id, countOfListeners
    }
*/
export const setListeners = payload => ({
    type: SET_LISTENERS,
    payload
})


/* 
    OK
*/