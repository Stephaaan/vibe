import React, {useContext, useEffect, useState} from "react";
import FormContext from "../context/NewChannelFormProvider";
import {registerElement, updateComponent} from "../context/contextActions";
/* 
    co musi byt v props
     -> title
     -> placeholder
     -> warning
     -> required
*/

/* 
    cele to ide akoby o jeden render pozadu ... 
*/
const FormInput = ({id, minChars, maxChars, title, placeholder, warning, required}) => {
    let inputClassName =  "new_channel_text_input new_channel_name" ;
    const {dispatch} = useContext(FormContext);
    let [inputValue, setInputValue] = useState("");
    useEffect(() => {
        dispatch(registerElement(id, minChars, maxChars));
    }, []);
    const updateValue = (value) => {
        if(value.trim().length < maxChars){
            dispatch(updateComponent(id, value));
            setInputValue(value);
        }  
    }
    return(
        <>
            <p className="edit_channel_channel_name_tag">{title + (required?"*":"")}</p>
            <input type="text" value={inputValue} onChange={(e) => updateValue(e.target.value)} className={inputClassName} placeholder={placeholder}/>
            <p className="edit_channel_channel_name_warning">i  {warning}</p>
        </>
    );
}
export default FormInput;