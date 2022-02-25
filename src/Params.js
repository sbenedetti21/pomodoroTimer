import React from "react";
import MaterialIcon from 'material-icons-react';
import {sessionIncrement, sessionDecrement, breakDecrement, breakIncrement} from './actions/index'
import {connect} from "react-redux";

function Params ({session_timer, break_timer, sessionIncrement, sessionDecrement, breakIncrement, breakDecrement}) {
  return (
      <div className='container-params flex'>
        <div>
          <h2 id='break-label'>Session Length</h2>
          <div className='buttons flex'>
            <button id="session-increment" onClick={sessionIncrement}><MaterialIcon icon='keyboard_arrow_up' size='medium' color='white'/></button>
            <span id="session-length"> {session_timer} </span>
            <button id="session-decrement" onClick={sessionDecrement}><MaterialIcon icon='keyboard_arrow_down' size='medium' color='white'/></button>
          </div>
        </div>
        <div>
          <h2 id='session-label'>Break Length</h2>
          <div className='buttons flex'>
            <button id="break-increment" onClick={breakIncrement}><MaterialIcon icon='keyboard_arrow_up' size='medium' color='white'/></button>
            <span id="break-length"> {break_timer} </span>
            <button id="break-decrement" onClick={breakDecrement}><MaterialIcon icon='keyboard_arrow_down' size='medium' color='white'/></button>
          </div>
        </div>
      </div>
  )
}

function mapStateToProps(state) {
  return {
    session_timer: state.session_timer,
    break_timer: state.break_timer
  }
}

export default connect(mapStateToProps, {sessionIncrement, sessionDecrement, breakDecrement, breakIncrement})(Params)