/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, View, Text, Navigator, StyleSheet } from 'react-native';
import Tuner from './GuitarBuddy';
import ToolBar from './ToolBar';
import About from './About';

export default class App extends Component {
  constructor() {
    super();
    this.routes = [
      {title: 'Riff Kit', index:0, leafRoute: false},
      {title: 'About', index:1, leafRoute: true},
      {title: 'Effects', index:2, leafRoute: false},
      {title: 'Settings', index:3, leafRoute: true},
      {title: 'Metronome', index:4, leafRoute: false},
      {title: 'Chords', index:5, leafRoute: false}
    ];
  }

  renderScene = (route, navigator) => {
    var scene = (<Text>Not implemented</Text>);

    if (route.index === 0) {
      scene = <Tuner/>;
    } else if (route.index === 1){
      scene = <About/>;
    } else if (route.index === 2){
      scene = (<Text>Guitar effects</Text>);
    } else if (route.index == 3) {
      scene = (<Text>Some settings</Text>);
    } else {
      scene = (<Text>Not implemented</Text>);
    }

    return (
      <View style={styles.container}>
        <ToolBar {...route} navPush={this.pushRoute} routes={this.routes} navPop={this.popRoute}/>
        {scene}
      </View>
    )

  }

  pushRoute = (pushedRoute) => {
    // If we're on this route, don't push onto stack
    //if (pushedRoute.index === routeStack[routeStack.length - 1].index) {
    //  return;
    //}
    let routeStack = this.refs.navigator.getCurrentRoutes();
    let routeOnStack = routeStack.find( (route) => {return route.index === pushedRoute.index })
    if (routeOnStack){
      this.refs.navigator.jumpTo(pushedRoute);
    } else {
      this.refs.navigator.push(pushedRoute);
    }
  }

  popRoute = () => {
    this.refs.navigator.pop()
  }


  render() {
    return (
      <Navigator
        initialRoute={this.routes[0]}
        renderScene={this.renderScene}
        ref="navigator" />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EDC726',
    flex: 1
  },
});

AppRegistry.registerComponent('GuitarBuddy', () => App);
