import React, { Component } from 'react';
import { Alert, Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Progress from 'react-native-progress';
import _ from 'lodash';
import YouTube from 'react-native-youtube';



class Controls extends React.Component{
  constructor(props) {
    super(props)

  }

  render() {
    let display = this.props.configs.playing ? "pause" : "play";
    let minutes = Math.floor(this.props.configs.progress/60)
    let seconds = Math.round(this.props.configs.progress - minutes * 60)
    return (
      <View style={styles.container}>
        <View style={styles.controllers}>
        <View style={styles.iconContainer}>
          <Icon 
            name='chevron-left' 
            onPress={() => this.props.configs.video.seekTo(this.props.configs.progress - 20)}  
            size={30} 
            style={styles.chevronLeft}
          />
          <Text style={styles.seek}>R 20s</Text>
        </View>
        <View style={styles.iconContainer}>
          <Icon 
            name={display} 
            onPress={this.props.togglePlaying}  
            size={30} 
            style={styles.play}
          />
        </View>
        <View style={styles.iconContainer}>
          <Icon 
            name='chevron-right' 
            onPress={() => this.props.configs.video.seekTo(this.props.configs.progress + 20)}  
            size={30} 
            style={styles.chevronRight}
          />
          <Text style={styles.seek}>F 20s</Text>
        </View>

          <View style={styles.progressContainer}>
          <Progress.Bar style={styles.progressBar} progress={this.props.configs.percentage} width={250} />
          <Text style={styles.progress}>{minutes}:{seconds <10 ? '0'+seconds : seconds } (3:08)</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    // alignItems: 'center',
    flex:1
  },
  controllers: {
    marginTop: 10,
    flexDirection:'row',
    flexWrap: 'wrap',
    flex:1,
    justifyContent: 'center'
  },
  iconContainer: {
    
  },
  chevronLeft: {
    margin: 10,
    alignSelf: 'flex-start'
  },
  play: {
    // marginLeft: 5,
    margin: 10,
    alignSelf: 'center'
  },
  chevronRight: {
    margin: 10,
    alignSelf: 'flex-end'
  },
  seek: {
    fontSize: 10,
    textAlign: 'center'

  },
  progressBar: {
    marginTop: 15,
  },
  progress: {
    fontSize: 10,
    textAlign: 'right',
  }
});

export default Controls;


