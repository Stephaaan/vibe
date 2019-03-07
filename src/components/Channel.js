import React, {Component} from "react";
import dot_16px_red from "../imgs/radius-16-px-red.svg"; 
import dot_16px_green from "../imgs/radius-16-px-green.svg"; 
import dot_16px_blue from "../imgs/radius-16-px-blue.svg"; 
import VolumeController from "./VolumeController";

class Channel extends Component{
	state = {
		playing:true
	}
	render(){
		const {liveStatus, time, channelName, withCorp, genre, listeners, source} = this.props;
		let icon = null
		if(liveStatus==="online"){
			icon = dot_16px_green
		}else if(liveStatus==="pending"){
		
			icon = dot_16px_blue
		}else{
			icon = dot_16px_red
		};
		return (
				<div className="channel_background">
					<div className="channel_section channel_name_section">
						<div className="channel_section_channel_live_status ">
							<img alt="" className="dot_16_px" src={icon}/> <span className="light">LIVE</span> <span className="bold">{time}</span>
							</div>
							<p className="channelName">{channelName}</p>
							<p className="channelName">w/ {withCorp}</p>
							<p className="channel_genre">{genre}</p>
					</div>
					<div className="channel_section channel_listeners_section">
						<div className="channel_section_listener_handler">
							<div className="channel_section_listener_text">Listeners</div>
							<div className="channel_section_numberOfListeners_text">{listeners||0}</div>
						</div>
					</div>
					<div className="channel_section channel_audio_section">
						<p className="s">Audio source</p>
						<p className="channel_audio_audio_source_value">{source}</p>
						<div className="channel_audio_volume_handler">
							<p className="channel_audio_volume_label">Channel Volume</p> <br/>
							<VolumeController/>
						</div>
					</div>
					<div className="channel_section channel_settings_section">
						<div className={`channel_settings ${this.state.playing?" play":""}`} onClick={()=>this.setState({playing:!this.state.playing})}> </div>
						<div className="channel_settings_editBtn">Edit</div>
						<div className="channel_delete"></div>
					</div>
				</div>
			);
	}
}
export default Channel;