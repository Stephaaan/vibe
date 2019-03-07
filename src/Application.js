import React, {Component} from "react";
import HomeScreen from "./components/HomeScreen"
import HomeScreenChannels from "./components/HomeScreenChannels";
import NewChannel from "./components/NewChannel";
import { Router, Link } from "@reach/router"
class Application extends Component{
    render(){
        return(
            <Router>
                <HomeScreen path="/"/>
                <HomeScreenChannels path="/channels"/>
                <NewChannel path="/createChannel"/>
            </Router>
        );
    }
}
export default Application;