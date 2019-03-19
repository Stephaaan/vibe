import React, {useContext} from "react";
import {Link} from "@reach/router";
import "../App.css";
import path from "../imgs/path-2.svg"
import HomeScreenChannels from "./HomeScreenChannels";
import DebugHomeScreenNoCHannels from "./debug/DebugHomeScreenNoChannels";
import VibeChannelsContext from "../context/VibeChannelsProvider";


const HomeScreen = props => {
		const {state, dispatch} = useContext(VibeChannelsContext);
		console.log(state);
		if(Object.keys(state).length === 0){
			return <div className="HomeScreen-noStreams">
			{/*	<DebugHomeScreenNoCHannels />  */}
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
		}
		return <HomeScreenChannels channels={state}/> 	
}
export default HomeScreen;

/* 
	-> //TODO: upravit... je to retardovane
	-> mozno z tohto urobit nieco ako kontajner ktory sa rozhodne ktory komponent zobrazit (s channels/bez channels)
*/