import React, {Component} from "react";
import RadioButtonHandler from "./RadioButtonHandler";

class NewChannel extends Component{
    state = {
        checked:2
    }
    render(){
        console.log(this.state.checked);
        return (
            <div className="animated_logo top center">
                 &nbsp;
                <div className="edit_channel_screen_edit_channel">
                    {/*edit channel div*/}
                    <div className="edit_channel_edit_form">
                        <p className="edit_channel_new_channel_p">New Channel</p>
                        <div className="edit_channel_line">
                            &nbsp;
                        </div>
                        <div className="edit_channel_radioButtons">
                            <RadioButtonHandler setCheckedID={(id)=>this.setState({checked:id})}buttons={([{id:1, text:"Live input channel", checked:false},{id:2, text:"Offline selection channel", checked:true}])}/>
                        </div>
                    </div>
                    {/*preview div*/}
                    <div className="edit_channel_preview">
                        &nbsp;
                    </div>
                </div>     
            </div>
        )
    }  
}
export default NewChannel;
//24px;