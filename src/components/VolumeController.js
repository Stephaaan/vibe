import React, {Component} from "react";

class VolumeController extends Component{
    state = {
        controller:{
            volume:15
        }
    }
    //15 bodiek -> 10 blueberry a 5 red
    //idea-> na kazdu bodku nastavit onclick a nastavit state volume a podla toho nastavit v renderi aby sa zobrazovali
    getVolume(){
        return this.state.controller.volume;
    }
    getClassName(limit){
        return "volume_controller_dot_blue " + ((limit > 10)?"red ":"")+(this.getVolume() < limit?"disabled":"");
    }
    render(){
        var array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        return(
            
            <div className="volume_controller_handler">
                {array.map(i=><div key={i+"clickable"}className="volume_controller_dot_clickable" onClick={() => this.setState({controller:{volume:i}})}><div key={i} className={this.getClassName(i)}></div></div>)}
                
                    <div className="volume_controller_db_label">{this.state.controller.volume - 10}dB</div>
            </div>
            
        );
    }
}
export default VolumeController;