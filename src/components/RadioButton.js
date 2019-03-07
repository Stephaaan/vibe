import React from "react";
const RadioButton = props => {
    const {text, checked, handleClick} = props;
    return(<div className="radio_button_handler">
        <div onClick={()=>handleClick()}className="radiobutton_outer">
            {checked?<div className="radiobutton_inner"></div>:""}
        </div>
        <p>{text}</p>
        </div>
    );

}
export default RadioButton;