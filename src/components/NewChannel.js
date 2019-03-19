import React  from "react";

import NewChannelContainer from "./NewChannelContainer";

import  NewChannelFormProviderContext, {NewChannelFormProvider}from "../context/NewChannelFormProvider";



const NewChannel = () => { 
    return (
        <NewChannelFormProvider>
            <NewChannelContainer/>        
        </NewChannelFormProvider>
      ); 
      
}


export default NewChannel;
