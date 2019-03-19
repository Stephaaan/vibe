import React, {useContext, useState, useEffect} from "react";
import NewChannelFormProvider from "../context/NewChannelFormProvider";
import { registerElement, updateComponent } from "../context/contextActions";

const ColorChooser = props => {
  const {state, dispatch} = useContext(NewChannelFormProvider);
   useEffect(() => {
        console.log("helllooo");
        dispatch(registerElement("new_form_color_chooser"));
        dispatch(updateComponent("new_form_color_chooser", 1));
    },[]); 
    const [color, setColor] = useState(1); 
    const handleOnClick = id => {
        console.log("......... skuska " );
        setColor(id);
        dispatch(updateComponent("new_form_color_chooser", id));
    }
    return(
        <div className="color_chooser_handler">
            <div className="color_chooser_block">
                <div onClick={() => handleOnClick(1)} className="color_chooser color_chooser_blue">
                    <div className={"color_chooser_whitebox "+((color===1)?"color_chooser_active":"")}></div>
                </div>
                <div className="color_chooser_color_tag">Blue</div>
            </div>
            <div className="color_chooser_block">
                <div onClick={() => handleOnClick(2)} className="color_chooser color_chooser_red">
                    <div className={"color_chooser_whitebox "+((color===2)?"color_chooser_active":"")}></div>
                </div>
                <div className="color_chooser_color_tag">Red</div>
            </div>
            <div className="color_chooser_block">
                <div onClick={() => handleOnClick(3)} className="color_chooser color_chooser_green">
                    <div className={"color_chooser_whitebox "+((color===3)?"color_chooser_active":"")}></div>
                </div>
                <div className="color_chooser_color_tag">Green</div>
            </div>
            <div className="color_chooser_block">
                <div onClick={() => handleOnClick(4)} className="color_chooser color_chooser_purple">
                    <div className={"color_chooser_whitebox "+((color===4)?"color_chooser_active":"")}></div>
                </div>
                <div className="color_chooser_color_tag">Purple</div>
            </div>
        </div>        
    );
}

export default ColorChooser;

/* 
    -> mozno ze to prerobit tak aby sa cez props dal nastavit pocet a farba tych chooserov...
    -> zbytocne to ma state ked sa aj tak posiela parentovi a pri renderi ten state moze poslat sem len ako hodnotu
*/