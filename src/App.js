import React, { Component } from 'react';
import './App.css';
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
