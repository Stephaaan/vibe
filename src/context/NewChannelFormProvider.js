import React, {
    useReducer,
    createContext
} from "react";

const NewChannelFormProviderContext = createContext();

export const NewChannelFormProvider = ({
        children
    }) => {
        const formReducer = (state = {}, action) => {
            switch (action.type) {
                case "REGISTER_COMPONENT":
                    const {
                        id,
                        minChars,
                        maxChars
                    } = action.payload;
                    return [
                        ...state,
                        {
                            id,
                            minChars,
                            maxChars,
                            value: "",
                            validated: "false"
                        }
                    ]
                case "UPDATE_COMPONENT":
                    const {
                        value
                    } = action.payload;
                    const idToUpdate = action.payload.id;
                    const objectToUpdate = state.find(item => item.id === idToUpdate);
                    return [
                        ...state.filter(item => item.id !== idToUpdate),
                        {
                            ...objectToUpdate,
                            value,
                            validated:((typeof value === "string")?(value.trim() !== ""?true:false):true)
                        }
                    ]
                default: return state;
                    }
            }

            const [state, dispatch] = useReducer(formReducer,[]);
            return ( <NewChannelFormProviderContext.Provider value = {
                    {
                        state,
                        dispatch
                    }
                }>{
                    children
                } </NewChannelFormProviderContext.Provider>
            );
        }
export default NewChannelFormProviderContext;

        /* 
         const object = [
                id:1,
                value:"Sapyenz Night",
                validated:true,
                minChars:1,
                maxChars:24
            },
            {
                id:2,
                value:"Alyenz",
                validated:true,
                minChars:1,
                maxChars:20
            }

         ]

        */