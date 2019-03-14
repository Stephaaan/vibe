import React from "react";

import FormInput from "./FormInput"; 
import FormFileUploader from "./FormFileUploader";
import FormAudioChooser from "./FormAudioChooser";
import ColorChooser from "./ColorChooser";
import {Link} from "@reach/router";

const ChannelFormOnline = props => <>
    <FormInput title="ChannelName" required={true} placeholder="Insert channel name" warning="Maximum 48 characters"/>
    <div className="edit_channel_dj_form_input_holder">
        <FormInput title="Dj name" required={true} placeholder="Insert dj name" warning="Maximum 20 characters"/>
    </div>
    <div className="edit_channel_dj_form_input_holder">
        <FormInput title="Generes" required={true} placeholder="Insert generes" warning="Maximum 50 characters"/>
    </div>
    <FormFileUploader title="Upload channel cover picture" required={true} defaultText="Select from your computer" warning="Minimal picture size is 1624 x 750 px" />
    
    <div className="edit_channel_color">Channel color theme*</div>
    <ColorChooser choose={id => this.handleColorChoose(id)}/>
    
    <div className="edit_channel_source_control_handler">
        <FormAudioChooser /> 
        <Link className="linkWidth" to="/"><div className="backButton">
            Back
        </div></Link>
    </div>
    
</>
export default ChannelFormOnline;