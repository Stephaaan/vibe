import React, {useState} from "react";

const VolumeController = props => {
        console.log("volume in volumeController - " + props.volume);
        const [volume, setVolume] = useState(props.volume || 15);
        const updateVolume = newVolume => {
            props.setVolume(newVolume);
            setVolume(newVolume);
        }
        var array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        let volumeValueDB = volume - 10;
        volumeValueDB = volume-10;
        if(volumeValueDB > 0){
            volumeValueDB = "+"+volumeValueDB;
        }
        const getClassName = limit => {
            return "volume_controller_dot_blue " + ((limit > 10)?"red ":"")+(volume < limit?"disabled":"");
        }
        return(

            <div className="volume_controller_handler">
                {array.map(i=><div key={i}className="volume_controller_dot_clickable" onClick={() => updateVolume(i)}><div key={i} className={getClassName(i)}></div></div>)}
                    <div className="volume_controller_db_label">{volumeValueDB}dB</div>
            </div>
            
        );
}
export default VolumeController;

/*
    OK
*/