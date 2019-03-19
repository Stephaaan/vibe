import React, {
    useReducer,
    createContext
} from "react";

let ID = 0;
const VibeChannelsContext = createContext();

export const VibeChannelsContextProvider = ({
        children
    }) => {
        const channelReducer = (state = {}, action) => {
            switch(action.type){   
                case "ADD_CHANNEL":
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
                case "REMOVE_CHANNEL":
                    //odstranit objekt ktory ma ten key
                    return Object.keys(state).reduce((acc, curr) => curr!==action.payload?{...acc, [curr]:state[curr]}:acc, {})
        
                default:
                    return state;
            }
        }

            const [state, dispatch] = useReducer(channelReducer,[]);
            return ( <VibeChannelsContext.Provider value = {
                    {
                        state,
                        dispatch
                    }
                }>{
                    children
                } </VibeChannelsContext.Provider>
            );
        }
export default VibeChannelsContext;