const initialState = {
  video: undefined,
  playing: true,
  duration: 0,
  progress: 0,
  percentage: 0
}


export default function dataReducer (state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_PLAYING':
      state.playing = !state.playing;
      return {
        ...state
      }

    case 'UPDATE_PROGRESS':
      state.duration = action.duration;
      state.progress = action.progress;
      state.percentage = action.progress/action.duration
      return {
        ...state
      }
    
    case 'SET_VIDEO':
      state.video = action.video
      console.log('hi from set Video', action.video)
      return {
        ...state
      }
      
    default:
      return state
  }
}