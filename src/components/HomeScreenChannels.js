import React, {Component} from "react";
import {Link} from "@reach/router";
import "../App.css";


import Channel from "./Channel";
class HomeScreen extends Component{
	render(){
		const {channels} = this.props;
		return <div className="HomeScreen-noStreams">
			<div className="HomeScreen-stream-topLogo">
				<div className="topContainer">
					<div className="HomeScreen-stream-heading">plug<div className="blue_letter">2</div>vibe</div>
					<Link to="/createChannel"><button className="btnAddChannel" onClick={()=>{}}>Add channel</button></Link>
					<div className="HomeScreen-stream-live_channel_text">Live Input Channels</div>
					<div className="HomeScreen-stream-line"> </div>
				</div>
				<div className="HomeScreen-stream-channelHolder">
					{
						Object.keys(channels).map(index =>  {
							const {name, type, author, timePlaying, listeners, audioSource, volume, color, genre} = channels[index];
							//TODO: podla type rozhodnut ci zobrazit channel alebo offline channel
							//TODO: -> pridat prop volume do channel -> done
							//TODO: -> vytvorit component offline channel
							return <Channel removeChannel={() => this.props.removeChannel(index)} volume={volume} key={index} color={color} source={audioSource} listeners={listeners} time={timePlaying} channelName={name} withCorp={author} genre={genre} />
						})
					}
				</div>
			</div>
			
		</div>
	}
}
export default HomeScreen;