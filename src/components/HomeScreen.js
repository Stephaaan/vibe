import React, {Component} from "react";
import {Link} from "@reach/router";
import "../App.css";
import path from "../imgs/path-2.svg"
import HomeScreenChannels from "./HomeScreenChannels";
import DebugHomeScreenNoCHannels from "./debug/DebugHomeScreenNoChannels";


class HomeScreen extends Component{
	componentDidMount(){
		console.log("mount");
        this.props.addChannel({
            name:"Sapyenz Night",
            type:"live",
            author:"Alyaz",
            timePlaying:"00:23:45",
            listeners:"12",
            audioSource:"Akai EIE1 input 1 & 2",
			volume:13,
            color:"blue",
            genre:"bass, grime, trap"
        });
	}
	// TODO: FIXME
	render(){
		if(Object.keys(this.props.channels).length === 0){
			return <div className="HomeScreen-noStreams">
			{	<DebugHomeScreenNoCHannels /> }
				<div className="animated_logo">
				<p className="logo">vibe</p>
					<div className="topContainer_noChannels">
						<p className="no_active_channels_p">You have no Active channels</p>
						<div className="btnNoStreams-holder"><Link to="/createChannel"><button className="btnAddChannel_noStream" onClick={()=>{}}>Add channel</button></Link></div>	
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