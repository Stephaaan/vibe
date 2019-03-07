import React, { Component } from 'react';
import './App.css';
import HomeScreen from "./components/HomeScreenChannels"
import store from "./store";
import {Provider} from "react-redux";
import ApplicationContainer from "./ApplicationContainer";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ApplicationContainer/>
      </Provider>
    );
  }
}

export default App;
