import React, {Component} from "react";

import "./App.css";
import path from "./imgs/path-2.svg"

class HomeScreen extends Component{
	render(){
		return <div className="HomeScreen-noStreams">
			<div className="animated_logo">
				<div className="topContainer">
					<p className="no_active_channels_p">You have no active channels</p>
					<button className="btnAddChannel" onClick={()=>{}}>Add channel</button>
				</div>
				<p className="create_vibe_p">Create some vibe</p>
				<img className="pathHomeScreen" src={path}/>
			</div>
		</div>
	}
}
export default HomeScreen;