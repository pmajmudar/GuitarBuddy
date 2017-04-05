/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, View, Text, Navigator, StyleSheet } from 'react-native';
import Tuner from './GuitarBuddy';
import ToolBar from './ToolBar';

export default class App extends Component {
  constructor() {
    super();
    this.routes = [
      {title: 'Riff Kit', index:0},
      {title: 'About', index:1},
      {title: 'Effects', index:2},
      {title: 'Settings', index:3}
    ];
  }

  renderScene = (route, navigator) => {
    //var scene = (<Text>Not implemented</Text>);

    if (route.index === 0) {
      return (
        <View style={styles.container}>
          <ToolBar title={route.title} navPush={this.pushRoute} routes={this.routes} navPop={this.popRoute}/>
          <Tuner/>
        </View>
      )
    } else if (route.index === 1){
      return (
        <View style={styles.container}>
          <ToolBar title={route.title} navPush={this.pushRoute} routes={this.routes} navPop={this.popRoute}/>
          <Text>Riff Kit app created by PBM</Text>
          <Text>Version 0.1</Text>
        </View>
      )
    } else if (route.index === 2){
      return (
        <View style={styles.container}>
          <ToolBar title={route.title}  navPush={this.pushRoute} routes={this.routes} navPop={this.popRoute}/>
          <Text>Guitar effects</Text>
        </View>
      )
    } else if (route.index == 3) {
      return (
        <View style={styles.container}>
          <ToolBar title={route.title}  navPush={this.pushRoute} routes={this.routes} navPop={this.popRoute}/>
          <Text>Some settings</Text>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <ToolBar title={route.title}  navPush={this.pushRoute} routes={this.routes} navPop={this.popRoute}/>
          <Text>Not implemented</Text>
        </View>
      )
    }
    /*
    return (
      <View style={styles.container}>
        <ToolBar title={route.title}  navPush={this.pushRoute} routes={this.routes} navPop={this.popRoute}/>
        <Text>Not implemented</Text>
      </View>
    )*/

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
