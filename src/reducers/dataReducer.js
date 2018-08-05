const initialState = {
  playing: true,
  duration: undefined,
  progress: 0
}


export default function dataReducer (state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_PLAYING':
      state.playing = !state.playing;
      return {
        ...state
      }

    case 'UPDATE_PROGRESS':
    console.log(action);
      state.duration = action.duration;
      state.progress = action.progress;
      return {
        ...state
      }
      
    default:
      return state
  }
}