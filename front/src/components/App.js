import React, { Component } from "react";
import { Router, Scene } from "react-native-router-flux";

import Home from "./Home";
import Post from "./Post";


const App = () => {
  return (
    <Router>
      <Scene headerMode="none" key="root">
        <Scene
          key="home"
          component={Home}
          initial
        />
        <Scene
          key="post"
          component={Post}
        />
    
      </Scene>
    </Router>
  );
};

export default App;
