import React, {useEffect} from "react";
import MaterialIcon from "material-icons-react";
import {
  resetTimer
} from '../src/actions/index'
import {connect} from "react-redux";

function Clock ({resetTimer, session_timer, break_timer}) {
  const [active, setActive] = React.useState(false);
  const [timeLeft, setTimeLeft] = React.useState(new Date())
  const [sessionType, setType] = React.useState('Session');
  const [audio, setAudio] = React.useState();

  useEffect( () => {
    if (sessionType === 'Session') {
      setTimeLeft(new Date(session_timer * 60000))
    } else {
      setTimeLeft(new Date(break_timer * 60000))
    }
  },[session_timer, break_timer, sessionType])

  useEffect( () => {
    console.log(timeLeft.toISOString())
    console.log(timeLeft.toISOString().substr(11, 8))
    let intervalo = null;
    if (active) {
      intervalo = setInterval(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        oneSecond();
      }, 1000)
    }
    if (!active) {
      console.log('entre a frenar')
      clearInterval(intervalo);
    }
    if (timeLeft.toISOString().substr(11, 8) === '00:00:00') {
      audio.play();
      setTimeout(() => {
        if (sessionType === 'Session') {
          setType('Break');
        } else {
          setType('Session');
        }
      }, 1000);

      setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;
      },1000);
    }
    return () => clearInterval(intervalo);
  },[active, timeLeft])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function oneSecond() {
    setTimeLeft(prev => {console.log(timeLeft); return new Date(prev.getTime() - 1000)})
  }

  function reset() {
    resetTimer();
    setType('Session');
    setTimeLeft(new Date(session_timer * 60000));
    setActive(false);
    audio.pause();
    audio.currentTime = 0;
  }

  return(
      <div className='flex container-timer'>
        <h2 id="timer-label">{sessionType}</h2>
        <span id="time-left">{
          (timeLeft.toISOString().substr(11, 8) === '01:00:00')
              ? '60:00'
              : timeLeft.toISOString().substr(14, 5)
        }</span>
        <div>
          <span id='start_stop' onClick={() => setActive(prevState => {return !prevState})}>
            <MaterialIcon icon='pause' color='white' size='medium'/>
            <MaterialIcon icon='play_arrow' color='white' size='medium' id='no-margin'/>
          </span>
          <MaterialIcon icon='replay' id='reset' color='white' size='medium' onClick={reset}/>
          <audio
              id="beep"
              preload="auto"
              ref={(audio) => {
                setAudio(audio);
              }}
              src="http://www.cooperfulleon.com/sites/cooperfulleon.com/files/sounder_tones/standard/cooper_fulleon_sounder_tone_16.wav"
          />
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

export default connect(mapStateToProps, {resetTimer})(Clock)