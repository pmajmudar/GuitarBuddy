'use strict';

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BluetoothSerial from 'react-native-bluetooth-serial'

export default class ToolBar extends Component {

  state = {
    bluetoothEnabled: false
  };

  render() {
    return (
        <Icon.ToolbarAndroid style={styles.toolbar}
          title={this.props.title}
          titleColor="white"
          navIconName={this.props.leafRoute ? "md-arrow-back" : "md-menu"}
          actions={[
                { title: 'Bluetooth', iconName: 'md-bluetooth', iconColor: !this.state.bluetoothEnabled ? 'white' : 'blue', show: 'always' },
                { title: 'Settings', iconName: 'md-settings', show: 'always' },
                { title: 'About', show: 'never'}
              ]}
          onActionSelected={this.onActionSelected}
          overflowIconName="md-more"
          onIconClicked={this.onNavSelected}
        />
    )
  }

  onNavSelected = () => {
    this.props.navPop();
  }

  onActionSelected = (position) => {
    if (position === 2) {
      this.props.navPush(this.props.routes[1]);
    } else if (position === 1) {
      this.props.navPush(this.props.routes[3]);
    } else if (position === 0) {
      BluetoothSerial.enable()
                     .then((res) => this.setState({bluetoothEnabled: true}) )
    }
  }
}

const styles = StyleSheet.create({
  toolbar: {
    height: 56,
    backgroundColor: '#333333'
  },
});
