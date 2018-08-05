import React, { Component } from 'react';
import { Text, View } from 'react-native';
import YouTube from 'react-native-youtube';


class VideoPlayer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
        <YouTube 
          videoId="3NhHqPA8nIs"
          play={this.props.configs.playing}
          loop={true}
          controls={0}
          onProgress={e => this.props.updateProgress(e.currentTime, e.duration)}
          style={{ alignSelf: 'stretch', height: 300 }}

        /> 
    );
  }
}


export default VideoPlayer;