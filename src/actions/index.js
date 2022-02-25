export function sessionIncrement() {
  return {
    type: 'SESSION_INCREMENT'
  }
}

export function sessionDecrement() {
  return {
    type: 'SESSION_DECREMENT'
  }
}

export function breakIncrement() {
  return {
    type: 'BREAK_INCREMENT'
  }
}

export function breakDecrement() {
  return {
    type: 'BREAK_DECREMENT'
  }
}

// export function updateTimer(minSec) {
//   return {
//     type: 'UPDATE_TIMER',
//     payload: minSec
//   }
// }
//
// export function changeSessionType(sType) {
//   return {
//     type: 'CHANGE_SESSION_TYPE',
//     payload: sType
//   }
// }
//
// export function playPause() {
//   return {
//     type: 'PLAY_PAUSE'
//   }
// }

export function resetTimer() {
  return {
    type: 'RESET_TIMER'
  }
}
