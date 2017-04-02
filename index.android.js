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

  render() {
    return (
      <View style={styles.container}>
        <ToolBar title="RiffKit"/>
        <Tuner/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFEEFF',
    flex: 1
  },
});


AppRegistry.registerComponent('GuitarBuddy', () => App);
