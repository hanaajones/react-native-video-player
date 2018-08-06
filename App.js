import React, {Component} from 'react';
import { TouchableHighlight, StyleSheet, Text, View} from 'react-native';

import YouTube from 'react-native-youtube';
import VideoPlayer from './src/components/VideoPlayer';
import Controls from './src/components/Controls';


import { connect } from 'react-redux'
import { togglePlaying, updateProgress, setVideo } from './src/actions/actions'

type Props = {}
class App extends Component<props> {


  render() {

    const {
      configs,
      togglePlaying,
      updateProgress,
      setVideo
    } = this.props;

    return (
      <View style={styles.container}>
      <VideoPlayer 
        configs={configs} 
        updateProgress={updateProgress}
        setVideo={setVideo}
      />
      <Controls 
        togglePlaying={togglePlaying} 
        configs={configs} 
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 150,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    margin: 10,
    marginTop: 100
  }

});

function mapStateToProps (state) {
  return {
    configs: state.configs
  }
}

function mapDispatchToProps (dispatch) {
  return {
    togglePlaying: () => dispatch(togglePlaying()),
    updateProgress: (progress, duration) => dispatch(updateProgress(progress, duration)),
    setVideo: (video) => dispatch(setVideo(video))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
