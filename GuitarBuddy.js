/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import TunerButton from './TunerButton';

export default class Tuner extends Component {
  render() {
    return (
      <View style={styles.scene}>
        <Text style={styles.title}>Tuner</Text>
        <View style={styles.content}>
          <View style={styles.tuner}>
            <TunerButton note='E'/>
            <TunerButton note='A'/>
            <TunerButton note='D'/>
            <TunerButton note='G'/>
            <TunerButton note='B'/>
            <TunerButton note='E'/>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center'
  },
  title: {
    fontSize: 36,
    textAlign: 'center',
    margin: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center'
  },
  tuner: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});
