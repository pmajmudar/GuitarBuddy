import React, { Component } from 'react';
import { View,  StyleSheet, Text } from 'react-native';

export default class About extends Component {

  render() {
    return (
      <View>
        <Text>Riff Kit app created by PBM</Text>
        <Text>Version 0.1</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EDC726',
    flex: 1
  },
});
