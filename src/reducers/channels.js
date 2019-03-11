import {ADD_CHANNEL, REMOVE_CHANNEL} from "../actions/actionTypes"
let ID = -1;
const channels = (state = {}, action) => {
    switch(action.type){   
        case ADD_CHANNEL:
            ID++;
            return {
                ...state,
                [ID]:{
                    /*
                        ??? maybe spreadnuť payload?
                        ??? good idea?
                        //TODO:test it plz 
                        test passed 
                    */
                   ...action.payload
                }
            }
        case REMOVE_CHANNEL:
            //odstranit objekt ktory ma ten key
            return Object.keys(state).reduce((acc, curr) => curr!==action.payload?{...acc, [curr]:state[curr]}:acc, {})

        default:
            return state;
    }
}
export default channels;

/*
    OK
    -> dokoncit ostatne actions
*/