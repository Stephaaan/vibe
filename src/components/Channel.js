import React, {Component} from "react";
import dot_16px_red from "../imgs/radius-16-px-red.svg"; 
import dot_16px_green from "../imgs/radius-16-px-green.svg"; 
import dot_16px_blue from "../imgs/radius-16-px-blue.svg"; 
import dot_16px_purple from "../imgs/radius-16-px-purple.svg"; 
import VolumeController from "./VolumeController";
import Modal from 'react-modal';
import styled, { keyframes } from "styled-components";

const customStyles = {
    content : {
      width:"40%",
      height:"50%",
	  margin:"auto",
	  border: "1px solid #502f7e",
	  borderRadius:"15px",
	  display:"flex",
	  justifyContent:"center",
	  flexWrap:"wrap",
	  flexDirection:"collumn"
	}, 
	overlay : {
		backgroundColor: 'rgba(0,0,0,0.6)',
		animation: "${animation}",
		animationDuration: "1s"
	}
  };
  const animation = keyframes`
  from {
   backgroundColor:rgba(0,0,0,1);
  }

  to {
    backgroundColor:rgba(0,0,0,0.6);
  }
`;
  /*
  Modal.defaultStyles.overlay.backgroundColor = 'rgba(0,0,0,0.6)';
*/


class Channel extends Component{
	state = {
		playing:true,
		volume:15,
		isModalOpened:false
	}
	componentDidMount(){
		this.setState({volume:this.props.volume});
	}
	setVolume(value){
		this.setState({volume:value});
	}
	render(){
		const {color, time, channelName, withCorp, genre, listeners, source} = this.props;
		let icon = null
		switch(color){
			case "green":
				icon = dot_16px_green;
				break;
			case "blue":
				icon = dot_16px_blue;
				break;
			case "red":
				icon = dot_16px_red;
				break;
			default:
				icon = dot_16px_purple;
				break;
		}; 
		return (
				<div className="channel_background">
					<Modal
				   		isOpen={this.state.isModalOpened}
				   		contentLabel="Delete channel"
				   		style={customStyles}>
						<div className="modal_delete_channel_question">Delete channel?</div><br/>
						<div className="modal_delete_channel_question modal_delete_channel_name ">'{channelName}'</div>
						<div className="edit_channel_line">
                                &nbsp;
                            </div>
						<div className="modal_delete_channel_warning">
						If you delete channel user will be redirected to another active channel automatically.
						</div>
						<div className="modal_delete_button_holder"><button className="modal_delete_back" onClick={() => this.setState({isModalOpened:false})}>Back</button><button className="modal_delete_confirm"  onClick={()=>this.props.removeChannel(this.props.key)}>Delete</button></div>
				   </Modal>    
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
							<VolumeController volume={this.state.volume} setVolume={value => this.setVolume(value)}/>
						</div>
					</div>
					<div className="channel_section channel_settings_section">
						<div className={`channel_settings ${this.state.playing?" play":""}`} onClick={()=>this.setState({playing:!this.state.playing})}> </div>
						<div className="channel_settings_editBtn">Edit</div>
						<div className="channel_delete" onClick={() => {
							this.setState({isModalOpened:true})
						}}></div>
					</div>
				</div>
			);
	}
}
export default Channel;


/*
	-> prilis vela veci -> skusit to zjednodusit
	-> mozno vyhodit ten modal do niecoho samostatneho a urobit ho reusable? 
*/