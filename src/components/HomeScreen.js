import React, {Component} from "react";
import {Link} from "@reach/router";
import "../App.css";
import path from "../imgs/path-2.svg"
import HomeScreenChannels from "./HomeScreenChannels";

class HomeScreen extends Component{
	render(){
		if(Object.keys(this.props.channels).length === 0){
			return <div className="HomeScreen-noStreams">
				<div className="animated_logo">
				
					<div className="topContainer">
						<p className="no_active_channels_p">You have no active channels</p>
						<Link to="/createChannel"><button className="btnAddChannel" onClick={()=>{}}>Add channel</button></Link>	
					</div>
					<p className="create_vibe_p">Create some vibe</p>
					<img className="pathHomeScreen" src={path} alt=""/>
				</div>
			</div>
		}else{
			return <HomeScreenChannels removeChannel={this.props.removeChannel} channels={this.props.channels} /> 
		}
	}
}
export default HomeScreen;

/* 
	-> //TODO: upravit... je to retardovane
	-> mozno z tohto urobit nieco ako kontajner ktory sa rozhodne ktory komponent zobrazit (s channels/bez channels)
	
*/