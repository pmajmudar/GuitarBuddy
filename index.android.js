/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import GuitarBuddy from './GuitarBuddy';

export default class ToolBar extends Component {

  render() {
    return (
        <Icon.ToolbarAndroid style={styles.toolbar}
          title='GuitarBuddy'
          titleColor="white"
          //subtitle='Tuner'
          navIconName="navicon"
          //onIconClicked={props.navigator.pop}
          actions={[
            { title: 'Bluetooth', iconName: 'bluetooth-b', show: 'always' },
            { title: 'Settings', iconName: 'cog', show: 'always' },
            { title: 'About', iconName: 'cog'}
          ]}
          overflowIconName="ellipsis-v"
        />
    )
  }
}

const styles = StyleSheet.create({
  toolbar: {
    height: 56,
    backgroundColor: 'steelblue'
  },
});


AppRegistry.registerComponent('GuitarBuddy', () => ToolBar);
