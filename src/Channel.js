import React, {Component} from "react";
import dot_16px from "./imgs/radius-16-px.svg"; 

class Channel extends Component{
	render(){
		const {liveStatus, time, channelName, withCorp, genre} = this.props;
		return (
				<div className="channel_background">
					<div className="channel_section channel_name_section">
						<div className="channel_section_channel_live_status ">
							<img className="dot_16_px" src={dot_16px}/> <span className="light">{liveStatus}</span> <span className="bold">{time}</span>
							</div>
							<p className="channelName">{channelName}</p>
							<p className="channelName">w/{withCorp}</p>
							<p className="fontLight">{genre}</p>
					</div>
					<div className="channel_section channel_listeners_section">
						<div className="channel_section_listener_handler">
							<div className="channel_section_listener_text">Listeners</div>
							<div className="channel_section_numberOfListeners_text">12</div>
						</div>
					</div>
					<div className="channel_section channel_audio_section">
						Neni zatial audio
					</div>
					<div className="channel_section channel_settings_section">
						nic nenastavujeme
					</div>
				</div>
			);
	}
}
export default Channel;