import React, { Component } from 'react';
import { View,  StyleSheet, Text } from 'react-native';

export default class Metronome extends Component {

  render() {
    return (
      <View>
        <Text style={styles.title}>Select BPM</Text>
        <Text>120 BPM</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EDC726',
    flex: 1
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    margin: 10,
  },
});
