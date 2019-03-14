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
                console.log("register");
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
                        idToUpdate,
                        value
                    } = action.payload;
                    const objectToUpdate = state.find(item => item.idToUpdate === idToUpdate);
                    return [
                        ...state.filter(item => item.idToUpdate !== idToUpdate),
                        {
                            ...objectToUpdate,
                            value,
                            validated: (value.length >= objectToUpdate.minChars && value.length <= objectToUpdate.minChars ? true : false)
                        }
                    ]
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
            {
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