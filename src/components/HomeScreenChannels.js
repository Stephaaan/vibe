import React, {Component} from "react";

import "../App.css";


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
					<Channel liveStatus="pending" source="Akai EIE1 input 1 & 2" listeners="12"  time="00:23:45" channelName="Sapyens Night" withCorp="Alyaz" genre="bass, grime, trap"/>
					<Channel liveStatus="online" source="Akai EIE1 input 3 & 4" listeners="17"  time="00:23:45" channelName="House of Unity" withCorp="Paradiso Rhytm" genre="house & soul"/>
					<Channel liveStatus="offline" source="Akai EIE1 input 5 & 6" listeners="989"  time="00:23:45" channelName="Liquidity" withCorp="Majkl Kelso" genre="soulfull d&b"/>
					<Channel liveStatus="online" source="Akai EIE1 input 7 & 8" listeners="všetci"  time="10:00:01" channelName="Panteri" withCorp="Garda Mauzer" genre="srpska propaganda"/>
				</div>
			</div>
			
		</div>
	}
}
export default HomeScreen;