import {createStore} from "redux";
import root from "./reducers/root"
//root
//TODO: add devtools extension!!! -> done
const store = createStore(root,  
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
/*
    OK
 */



/*
    PLAN
        actions:
            -> ADD_CHANNEL (payload -> channel info)
            -> REMOVE_CHANNEL (payload -> id channelu)
            -> EDIT_CHANNEL (payload -> id channelu, info o channeli)
            -> SET_VOLUME (payload -> id channelu)
            -> SET_PLAYING (payload -> id)

            {
                channels:{
                    id:{
                        name:String
                        type:online/offline
                        author:String
                        timePlaying:String -> zatial tak ptm to treba nejak inak vymysliet
                        listeners:number
                        audioSource:String
                        volume:number
                        color:blue/red/green/purple
                       }
                }
                otherStuff:something
            }

*/