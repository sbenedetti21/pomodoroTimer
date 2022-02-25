import './App.css';
import React from "react";
import MaterialIcon from 'material-icons-react';
import Params from "./Params";
import Clock from "./Clock";

function App() {
  // const [session_timer, setSession] = React.useState(25);
  // const [break_timer, setBreak] = React.useState(5);
  // const [time_left, setTimeLeft] = React.useState('25:00');
  // const [active, setActive] = React.useState(false);
  // const [session_type, setType] = React.useState('Session');

  return (
    <div className='container-app flex'>
      <h1>Pomodoro Timer</h1>
      <Params />
      <Clock />
    </div>
  );
}

export default App;
