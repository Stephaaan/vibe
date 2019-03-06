import React, {Component} from "react";

class Channel extends Component{
	render(){
		return (
				<div className="channel_background">
					<div className="channel_section channel_name_section">
						meno
					</div>
					<div className="channel_section channel_listeners_section">
						Listeners: 1653
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