export function togglePlaying() {
  return {
    type: 'TOGGLE_PLAYING'
  }
}

export const updateProgress = (progress, duration) => ({
  type: 'UPDATE_PROGRESS',
  progress,
  duration
});


