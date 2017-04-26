import React, { Component } from 'react';
import { View,  StyleSheet, Text, TextInput } from 'react-native';

export default class Metronome extends Component {
  constructor(props) {
    super(props);
    this.state = { bpm: '120'};
  }

  render() {
    return (
      <View>
        <Text style={styles.title}>Select BPM</Text>
        <View style={{flexDirection: 'row'}}>
          <TextInput style={{height:40, width:100}}
                      onChangeText={ (text) => this.setState({bpm: text}) }
                      value={this.state.bpm}
                      keyboardType='numeric'/>
          <Text>BPM</Text>
        </View>
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
