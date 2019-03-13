import React, {Component} from "react";
import {Link} from "@reach/router";
import "../App.css";
import DebugHomeScreenChannels from "./debug/DebugHomeScreenChannels";

import Channel from "./Channel";
class HomeScreen extends Component{
	render(){
		const {channels} = this.props;
		
		return(	<div>
					{/* 
						TOP
					*/}
					<div className="HomeScreen-noStreams">
				{ <DebugHomeScreenChannels/> }
						<div style={{height:"190px"}}>
							<div className="HomeScreen-stream-topLogo">
								<div className="topContainer">
									<div>
										<div className="HomeScreen-stream-heading">plug<div className="blue_letter">2</div>vibe</div>
										<div className="HomeScreen-button-holder"><div className="HomeScreen-stream-live_channel_text">Live Input Channels</div><Link to="/createChannel"><button className="btnAddChannel onStream" onClick={()=>{}}>Add channel</button></Link></div>
									</div>
									<div className="HomeScreen-stream-line-holder"><div className="HomeScreen-stream-line"> </div></div>
								</div>
							</div>
						</div>
					</div>
					{
						/*
							CHANNEL RENDERING
						*/
					}
					<Channels channels={channels} removeChannel={(index) => this.props.removeChannel(index)}/>
					
				</div>
			);
		}
	}

const Channels = ({removeChannel, channels}) => <div style={{width:"100%", marginTop:"-5px"}}>
							<div className="HomeScreen-stream-channelHolder"> 
								{
									Object.keys(channels).map(index =>  {
										const {name, /*type,*/ author, timePlaying, listeners, audioSource, volume, color, genre} = channels[index];
										//TODO: podla type rozhodnut ci zobrazit channel alebo offline channel
										//TODO: -> pridat prop volume do channel -> done
										//TODO: -> vytvorit component offline channel
										return <Channel removeChannel={() => removeChannel(index)} volume={volume} key={index} color={color} source={audioSource} listeners={listeners} time={timePlaying} channelName={name} withCorp={author} genre={genre} />
									})
								}
						</div>
					</div>
export default HomeScreen;

/* 
	-> nejak
	 rozumnejsie pomenovat files
	-> dokoncit to s tymi offline channels -> k tomu by asi bolo dobre pristupovat trochu inak
	-> vytvorit novy state a reducer na offline channels.... lenze to by bolo mozno prilis vela duplikovaneho kodu v tom reduceri
	-> alebo to urobit podla povodneho planu -> offline channel by mal nejaku flag ze je offline
	-> a v renderi by sa najprv vyfiltrovali online a potom offline channely 
*/
//    OLD CODE
/**
	{/*return <div className="HomeScreen-noStreams">
			
			<div className="HomeScreen-stream-topLogo">
				<div className="topContainer">
					<div className="HomeScreen-stream-heading">plug<div className="blue_letter">2</div>vibe</div>
					<Link to="/createChannel"><button className="btnAddChannel onStream" onClick={()=>{}}>Add channel</button></Link>
					<div className="HomeScreen-stream-live_channel_text">Live Input Channels</div>
					<div className="HomeScreen-stream-line"> </div>
				</div>
				<div className="HomeScreen-stream-channelHolder">
					{
						Object.keys(channels).map(index =>  {
							const {name, /*type,*/// author, timePlaying, listeners, audioSource, volume, color, genre} = channels[index];
							//TODO: podla type rozhodnut ci zobrazit channel alebo offline channel
							//TODO: -> pridat prop volume do channel -> done
							//TODO: -> vytvorit component offline channel
			//				return <Channel removeChannel={() => this.props.removeChannel(index)} volume={volume} key={index} color={color} source={audioSource} listeners={listeners} time={timePlaying} channelName={name} withCorp={author} genre={genre} />
					//	})
			//		}
		//		</div>
		//	</div>
			
		//		</div>*/
 