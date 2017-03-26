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
          subtitle='Tuner'
          navIconName="navicon"
          //onIconClicked={props.navigator.pop}
          actions={[
            { title: 'Settings', iconName: 'cog', iconSize: 30, show: 'always' },
            { title: 'About', iconName: 'cog', iconSize: 30, show: 'ifroom' }
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
