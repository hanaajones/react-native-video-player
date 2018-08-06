import React, { Component } from 'react';
import { Alert, Text, View, Button, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';
import _ from 'lodash'



class Controls extends React.Component{
  constructor(props) {
    super(props)

  }

  getPercentage() {
    let percentageH = (this.props.configs.progress/this.props.configs.duration).toFixed(2)
    console.log('this is percentage in function', percentageH)
    return percentageH
  }



  render() {
    let display = this.props.configs.playing ? "Pause" : "Play"
    console.log('this.props.percentage', this.props.configs.percentage)
    return (
      <View >
        <View>
          <Button onPress={this.props.togglePlaying} title={display}>
            {display}
          </Button>
          <Progress.Bar progress={this.props.configs.percentage} width={200} />
          <Text>Progress: {this.props.configs.progress.toFixed(2)}s </Text>
          <Text>Duration: {this.props.configs.duration.toFixed(2)}s</Text>
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


