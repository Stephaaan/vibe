import React, {useState, useContext, useEffect} from "react";
import VolumeController from "./VolumeController";
import NewChannelFormProviderContext from "../context/NewChannelFormProvider";
import { registerElement, updateComponent } from "../context/contextActions";


const FormAudioChooser = (props) => {

    const [volume, setVolume] = useState(15);
    const [source, setSource] = useState("Akai EIE1 input 1 & 2");
    
    useEffect(() => {
        dispatch(registerElement("audio_source_default_volume"));
        dispatch(updateComponent("audio_source_default_volume", volume));
        dispatch(registerElement("audio_source_channel"));
        dispatch(updateComponent("audio_source_channel", source));
    }, []);
    const {dispatch} = useContext(NewChannelFormProviderContext);
    const handleOnSetVolume = volume => {
        setVolume(volume);
        dispatch(updateComponent("audio_source_default_volume", volume));
    }
    const handleOnSetSource = source => {
        setSource(source);
        dispatch(updateComponent("audio_source_channel", source));
    }
    return (
        <>
           <div className="edit_channel_color">Audio source*</div>
            <select onChange={e=>handleOnSetSource(e.target.value)} className="edit_channel_source_select">
                <option>Akai EIE1 input 1 & 2</option>
                <option>Akai EIE1 input 3 & 4</option>
                <option>Akai EIE1 input 5 & 6</option>
                <option>Akai EIE1 input 7 & 8</option>
            </select>
            <div className="edit_channel_audio_select_warning">System will use audio device system settings</div>
            <div className="edit_channel_volume_control">
            <div className="edit_name_channel_volume_label">Channel volume</div>
            <VolumeController volume={volume} setVolume={(volume) => handleOnSetVolume(volume)}/>
        </div>
        </>
    );
}
export default FormAudioChooser;