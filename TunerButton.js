import React, { Component } from 'react';
import { View,
         TouchableHighlight,
         Text,
         StyleSheet
        } from 'react-native';

export default class TunerButton extends Component {
  constructor(props) {
    super(props);
    this.state = { pressing: false };
  }

  _onPress = () => {
    this.setState({ pressing: true });
    console.log("pressed");
  }

  _onRelease = () => {
    this.setState({ pressing: false });
    console.log("released");
  }

  render () {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.touchable}
                            onPressIn={this._onPress}
                            onPressOut={this._onRelease}>
          <View style={styles.button}>
            <Text style={styles.label}>{this.props.note}</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchable: {
    borderRadius: 25
  },
  label:{
    textAlign: 'center',
    fontSize: 18,
    color: '#FFFFFF'
  },
  button: {
    //backgroundColor: '#880000', red
    backgroundColor: '#222222',
    borderRadius: 25,
    height: 50,
    width: 50,
    justifyContent: 'center'
  }
});
