const initialState = {
  session_timer: 25,
  break_timer: 5,
  // time_left: '25:00',
  // timer: new Date(25*1000*60),
  // active: false,
  // session_type: 'Session'
}

export default function rootReducer(state=initialState, action) {
  switch (action.type) {
    case 'SESSION_INCREMENT':
      return {
        ...state,
        session_timer: state.session_timer + 1,
      }
    case 'SESSION_DECREMENT':
      return {
        ...state,
        session_timer: state.session_timer - 1,
      }
    case 'BREAK_INCREMENT':
      return {
        ...state,
        break_timer: state.break_timer + 1,
      }
    case 'BREAK_DECREMENT':
      return {
        ...state,
        break_timer: state.break_timer - 1,
      }
    // case 'UPDATE_TIMER':
    //   return {
    //     ...state,
    //     time_left: action.payload
    //   }
    // case 'CHANGE_SESSION_TYPE':
    //   return {
    //     ...state,
    //     session_type: action.payload
    //   }
    // case 'PLAY_PAUSE':
    //   return {
    //     ...state,
    //     active: !state.active
    //   }
    case 'RESET_TIMER':
      return initialState;
    default: return state;
  }
}

