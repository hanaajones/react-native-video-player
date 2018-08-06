import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import YouTube from 'react-native-youtube';


class VideoPlayer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <YouTube 
          ref="youtubePlayer"
          videoId="3NhHqPA8nIs"
          play={this.props.configs.playing}
          loop={true}
          controls={0}
          onReady={e => this.props.setVideo(this.refs.youtubePlayer)}
          onProgress={e => this.props.updateProgress(e.currentTime, e.duration)}
          style={{ alignSelf: 'stretch', height: 300 }}
        /> 
    );
  }
}

export default VideoPlayer;