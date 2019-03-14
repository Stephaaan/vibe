import React, {useContext, useEffect} from "react";
import FormContext from "../context/NewChannelFormProvider";
import {registerElement, updateValue, updateComponent} from "../context/contextActions";
/* 
    co musi byt v props
     -> title
     -> placeholder
     -> warning
     -> required
*/
const FormInput = ({id, minChars, maxChars, title, placeholder, warning, required}) => {
    const {state, dispatch} = useContext(FormContext);
    useEffect(() => {
        console.log("mount");
        dispatch(registerElement(id, minChars, maxChars));
    });
    const updateValue = (value) => {
        dispatch(updateComponent(id, value));
        console.log(state);
    }
    return(
        <>
            <p className="edit_channel_channel_name_tag">{title + (required?"*":"")}</p>
            <input type="text" onChange={(e) => updateValue(e.target.value)} className="new_channel_text_input new_channel_name" placeholder={placeholder}/>
            <p className="edit_channel_channel_name_warning">i  {warning}</p>
        </>
    );
}
export default FormInput;