import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ToolBar extends Component {

  render() {
    return (
        <Icon.ToolbarAndroid style={styles.toolbar}
          title={this.props.title}
          titleColor="white"
          navIconName="navicon"
          //onIconClicked={this.props.navigator.pop}
          actions={[
            { title: 'Bluetooth', iconName: 'bluetooth-b', show: 'always' },
            { title: 'Settings', iconName: 'cog', show: 'always' },
            { title: 'About', show: 'never'}
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
