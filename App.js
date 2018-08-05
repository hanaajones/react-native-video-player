import React, {Component} from 'react';
import { TouchableHighlight, StyleSheet, Text, View} from 'react-native';
import YouTube from 'react-native-youtube'
import VideoPlayer from './src/components/VideoPlayer'
import Controls from './src/components/Controls'

import { connect } from 'react-redux'
import { togglePlaying, updateProgress } from './src/actions/actions'

type Props = {}
class App extends Component<props> {


  render() {

    const {
      configs,
      togglePlaying,
      updateProgress
    } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Hana's Video Player</Text>
      <VideoPlayer 
        configs={configs} 
        updateProgress={updateProgress}
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

function mapStateToProps (state) {
  return {
    configs: state.configs
  }
}

function mapDispatchToProps (dispatch) {
  return {
    togglePlaying: () => dispatch(togglePlaying()),
    updateProgress: (progress, duration) => dispatch(updateProgress(progress, duration))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
