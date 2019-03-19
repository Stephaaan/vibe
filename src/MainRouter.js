import React, {Component} from "react";
import HomeScreen from "./components/HomeScreen";
import NewChannel from "./components/NewChannel";
import { Router } from "@reach/router"
import { VibeChannelsContextProvider } from "./context/VibeChannelsProvider";

class Application extends Component{
    render(){
        return(
            <VibeChannelsContextProvider>
                <Router>
                    <HomeScreen path="/" addChannel={this.props.addChannel} channels={this.props.channels} removeChannel={this.props.removeChannel}/>
                    <NewChannel addChannel={this.props.addChannel} path="/createChannel"/>
                </Router>
            </VibeChannelsContextProvider>
        );
    }
}
export default Application;

/*
    OK
*/