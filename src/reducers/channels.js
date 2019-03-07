import {ADD_CHANNEL} from "../actions/actionTypes"
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
                    */
                   ...action.payload
                }
            }
        default:
            return state;
    }
}
export default channels;