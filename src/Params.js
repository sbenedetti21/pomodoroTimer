import React from "react";
import MaterialIcon from 'material-icons-react';
import {sessionIncrement, sessionDecrement, breakDecrement, breakIncrement} from './actions/index'
import {connect} from "react-redux";

function Params ({session_timer, break_timer, sessionIncrement, sessionDecrement, breakIncrement, breakDecrement}) {
  function checkInput(type, op) {
    switch (type) {
      case 'SESSION':
        if (op === 'ADD') {
          if (session_timer < 60) sessionIncrement();
        } else {
          if (session_timer > 1) sessionDecrement();
        }
        break;
      case 'BREAK':
        if (op === 'ADD') {
          if (break_timer < 60) breakIncrement();
        } else {
          if (break_timer > 1) breakDecrement();
        }
        break;
      default:
        break;
    }
  }

  return (
      <div className='container-params flex'>
        <div>
          <h2 id='break-label'>Session Length</h2>
          <div className='buttons flex'>
            <button id="session-increment" onClick={() => checkInput('SESSION', 'ADD')}><MaterialIcon icon='keyboard_arrow_up' size='medium' color='white'/></button>
            <span id="session-length"> {session_timer} </span>
            <button id="session-decrement" onClick={() => checkInput('SESSION', 'SUB')}><MaterialIcon icon='keyboard_arrow_down' size='medium' color='white'/></button>
          </div>
        </div>
        <div>
          <h2 id='session-label'>Break Length</h2>
          <div className='buttons flex'>
            <button id="break-increment" onClick={() => checkInput('BREAK', 'ADD')}><MaterialIcon icon='keyboard_arrow_up' size='medium' color='white'/></button>
            <span id="break-length"> {break_timer} </span>
            <button id="break-decrement" onClick={() => checkInput('BREAK', 'SUB')}><MaterialIcon icon='keyboard_arrow_down' size='medium' color='white'/></button>
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