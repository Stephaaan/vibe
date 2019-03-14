import React, {useState} from "react";
import VolumeController from "./VolumeController";


const FormAudioChooser = (props) => {
    const [volume, setVolume] = useState(15);
    const [source, setSource] = useState("");
    return (
        <>
           <div className="edit_channel_color">Audio source*</div>
            <select onChange={e=>setSource(e.target.value)} className="edit_channel_source_select">
                <option>skuska</option>
                <option>skuska2</option>
            </select>
            <div className="edit_channel_audio_select_warning">System will use audio device system settings</div>
            <div className="edit_channel_volume_control">
            <div className="edit_name_channel_volume_label">Channel volume</div>
            <VolumeController volume={volume} setVolume={(volume) => setVolume(volume)}/>
        </div>
        </>
    );
}
export default FormAudioChooser;