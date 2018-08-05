import React, { Component } from 'react';
import { Alert, Text, View, Button, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';



class Controls extends React.Component{
  constructor(props) {
    super(props)

  }



  render() {
    let display = this.props.configs.playing ? "Pause" : "Play"
    // let progressPercentage = this.props.configs.progress/this.props.configs.duration
    console.log('in controls this.props',this.props)
    return (
      <View >
        <View>
          <Button onPress={this.props.togglePlaying} title={display}>
            {display}
          </Button>
          <Text>Progress: {this.props.configs.progress} secs </Text>
          {/* <Progress.Bar progress={progressPercentage} width={200} /> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Controls;
