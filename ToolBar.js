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
                { title: 'Bluetooth', iconName: 'md-bluetooth', iconColor: !this.state.bluetoothEnabled ? 'white' : '#4444EE', show: 'always' },
                { title: 'Settings', iconName: 'md-settings', show: 'always' },
                { title: 'About', show: 'never'},
                { title: 'Metronome', show: 'never'},
                { title: 'Chords', show: 'never'},
                { title: 'Effects', show: 'never'},
                { title: 'Tuner', show: 'never'}
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

  onEnableDevice = () => {
    this.setState({bluetoothEnabled: true});
    console.log("enabled");
    BluetoothSerial.discoverUnpairedDevices()
                   .then( (devices) => console.log(devices) )
  }

  onDisableDevice = () => {
    this.setState({bluetoothEnabled: false});
  }

  onActionSelected = (position) => {
    if (position === 2) {
      this.props.navPush(this.props.routes[1]);
    } else if (position === 1) {
      this.props.navPush(this.props.routes[3]);
    } else if (position === 0) {
      if(!this.state.bluetoothEnabled) {
        BluetoothSerial.enable()
                       .then((res) => this.onEnableDevice() )

      } else {
        BluetoothSerial.disable()
                       .then((res) => this.onDisableDevice() )

      }

    } else if (position == 3) {
      this.props.navPush(this.props.routes[4]);
    } else if (position == 4) {
      this.props.navPush(this.props.routes[5]);
    } else if (position == 5) {
      this.props.navPush(this.props.routes[2]);
    } else if (position == 6) {
      this.props.navPush(this.props.routes[0]);
    }
  }
}

const styles = StyleSheet.create({
  toolbar: {
    height: 56,
    backgroundColor: '#333333'
  },
});
