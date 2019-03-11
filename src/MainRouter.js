import React, {Component} from "react";
import HomeScreen from "./components/HomeScreen";
import NewChannel from "./components/NewChannel";
import { Router } from "@reach/router"

class Application extends Component{
    render(){
        return(
            <Router>
                <HomeScreen channels={this.props.channels} removeChannel={this.props.removeChannel} path="/"/>
                <NewChannel addChannel={this.props.addChannel} path="/createChannel"/>
            </Router>
        );
    }
}
export default Application;

/*
    OK
*/