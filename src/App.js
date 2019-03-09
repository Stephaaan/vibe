import React, { Component } from 'react';
import './App.css';
import store from "./store";
import {Provider} from "react-redux";
import MainRouterContainer from "./MainRouterContainer";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainRouterContainer/>
      </Provider>
    );
  }
}

export default App;
