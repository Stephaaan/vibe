import React, {useContext} from "react";
import RadioButtonHandler from "./RadioButtonHandler";
import {navigate} from "@reach/router"
import Modal from 'react-modal';


import DebugNewChannel from "./debug/DebugNewChannel";
import ChannelFormOnline from "./ChannelFormOnline";
import NewChannelFormProviderContext from "../context/NewChannelFormProvider"
import { addChannel } from "../context/contextActions";
import VibeChannelsContext from "../context/VibeChannelsProvider";

Modal.defaultStyles.overlay.backgroundColor = 'rgba(0,0,0,0.5)';

const NewChannelContainer = () => {
    const {state, dispatch} = useContext(NewChannelFormProviderContext);
    const channelContext = useContext(VibeChannelsContext);
    const createChannel = () => {
        console.log("------");
        console.log(state[6].value);
        console.log("------");
        //{color, time, channelName, withCorp, genre, listeners, source}{name, /*type,*/ author, timePlaying, listeners, audioSource, volume, color, genre}
        //{name, /*type,*/ author, timePlaying, listeners, audioSource, volume, color, genre}
        let color = state.find(item => item.id === "new_form_color_chooser").value;
        let name = state.find(item => item.id === "channelName").value;
        let author = state.find(item => item.id === "djlName").value;
        let genre = state.find(item => item.id === "genres").value;
        let audioSource = state.find(item => item.id ==="audio_source_channel").value;
        let volume = state.find(item  => item.id === "audio_source_default_volume").value
        channelContext.dispatch(addChannel({color, timePlaying:"00:00:00", name, author, genre, listeners:0, audioSource, volume}));
        console.log(channelContext);
        navigate("/");
    }
    return (
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
                        <div className="saveButton" onClick={()=>createChannel()}>
                                Go live
                            </div>
                    </div>
                </div>
            </div>
        </div>
        );
}
export default NewChannelContainer;