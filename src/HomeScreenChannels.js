import React, {Component} from "react";

import "./App.css";
import path from "./imgs/path-2.svg"

import Channel from "./Channel";
class HomeScreen extends Component{
	render(){
		return <div className="HomeScreen-noStreams">
			<div className="HomeScreen-stream-topLogo">
				<div className="topContainer">
					<div className="HomeScreen-stream-heading">plug<div className="blue_letter">2</div>vibe</div>
					<button className="btnAddChannel" onClick={()=>{}}>Add channel</button>
					<div className="HomeScreen-stream-live_channel_text">Live Input Channels</div>
					<div className="HomeScreen-stream-line"> </div>
				</div>
				<div className="HomeScreen-stream-channelHolder">
					<Channel liveStatus="OFFLINE SELECTION" time="00:23:45" channelName="Skuska Name" withCorp="Filip C" genre="kaufland kecy"/>
					<Channel liveStatus="LIVE" time="00:23:45"/>
					<Channel/>
				</div>
			</div>
			
		</div>
	}
}
export default HomeScreen;