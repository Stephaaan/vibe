import React, {useContext} from "react";
import RadioButtonHandler from "./RadioButtonHandler";
import ColorChooser from "./ColorChooser";
import VolumeController from "./VolumeController";
import {navigate} from "@reach/router"
import Modal from 'react-modal';

import DebugNewChannel from "./debug/DebugNewChannel";

import ChannelFormOnline from "./ChannelFormOnline";

import {NewChannelFormProvider} from "../context/NewChannelFormProvider";

Modal.defaultStyles.overlay.backgroundColor = 'rgba(0,0,0,0.5)';



const NewChannel = () => {
    
       return (
        <NewChannelFormProvider>
            <div className="animated_logo top center">
            { /*<DebugNewChannel/> */}
                <div className="edit_channel_screen_edit_channel">
                    <div className="edit_channel_edit_form">
                        <p className="edit_channel_new_channel_p">New Channel</p>
                        <div className="edit_channel_line"></div>
                        <div className="edit_channel_radioButtons">
                            <RadioButtonHandler setCheckedID={(id)=>""}buttons={([{id:1, text:"Live input channel", checked:false},{id:2, text:"Offline selection channel", checked:true}])}/>
                        </div>
                        <ChannelFormOnline/> {/* alebo potom channelFormOffline podla statu checked*/}
                    </div>
                    {/*preview div*/}
                    <div className="edit_channel_preview">
                        <div className="edit_channel_handler">
                            <p className="edit_channel_preview_text">Preview</p>
                            <div className="edit_channel_phone"></div>
                            <div className="saveButton" onClick={()=>{this.createChannel()}}>
                                    Go live
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </NewChannelFormProvider>
       ); 
      
}


export default NewChannel;
