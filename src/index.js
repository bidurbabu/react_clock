import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function KathmanduTime(props) {
  return (
    <div>
      <div>Current Date and time in Kathmandu Nepal is {props
          .date
          .toLocaleTimeString('en-US', {timeZone: 'Asia/Kathmandu'})}</div>
    </div>
  )
}
function LocalTime(props) {
  return (
    <div>
      <div>Current Local Date and time is {props
          .date
          .toLocaleTimeString()}</div>
    </div>
  )
}
function AnalogClock(props) {
  const currentDatetime = props.timeZone? props.date.toLocaleTimeString('en-US', {timeZone: props.timeZone}): props.date.toLocaleTimeString();
  const timeSplit = currentDatetime.split(' ')[0].split(':');
  const isAM = currentDatetime.split(' ')[1] === 'AM';
  const secondsAngle = 2 * Math.PI * timeSplit[2] / 60;
  const minutesAngle = 2 * Math.PI * timeSplit[1] / 60;
  const hourAngle = 2 * Math.PI * timeSplit[0] / 12;

  const lineStyleSeconds = {
    'stroke': 'rgb(255,0,0)',
    'strokeWidth': '2'
  };
  const lineStyleMinutes = {
    'stroke': 'rgb(255,0,0)',
    'strokeWidth': '3'
  };
  const lineStyleHour = {
    'stroke': 'rgb(255,0,0)',
    'strokeWidth': '5'
  };
  const cc = {
    'cx': '77',
    'cy': '77',
    'radius': '75'
  };
  const secondsRadius = 45;
  const minutesRadius = 40;
  const hourRadius = 30;
  const numberRadius = 60;
  const numberXAdjust = -5;
  const numberYAdjust = 5;
  const secondsNiddle = {
    'x1': cc.cx,
    'y1': cc.cy,
    'x2': parseInt(cc.cx, 10) + secondsRadius * Math.sin(secondsAngle),
    'y2': parseInt(cc.cy, 10) - secondsRadius * Math.cos(secondsAngle)
  };
  const minutesNiddle = {
    'x1': cc.cx,
    'y1': cc.cy,
    'x2': parseInt(cc.cx, 10) + minutesRadius * Math.sin(minutesAngle),
    'y2': parseInt(cc.cy, 10) - minutesRadius * Math.cos(minutesAngle)
  };

  const hourNiddle = {
    'x1': cc.cx,
    'y1': cc.cy,
    'x2': parseInt(cc.cx, 10) + hourRadius * Math.sin(hourAngle),
    'y2': parseInt(cc.cy, 10) - hourRadius * Math.cos(hourAngle)
  };
  const textLocations = [...new Array(12).keys()].map(a => {
    const time = a + 1;
    const x = numberXAdjust + parseInt(cc.cx, 10) + numberRadius * Math.sin(2 * Math.PI * time / 12);
    const y = numberYAdjust + parseInt(cc.cy, 10) - numberRadius * Math.cos(2 * Math.PI * time / 12);
    return (
      <text x={x} y={y} fill="red">{time}</text>
    )
  });

  return (
    <svg width="155" height="155">
      <circle
        cx={cc.cx}
        cy={cc.cy}
        r={cc.radius}
        stroke="green"
        strokeWidth="4"
        fill={isAM? "yellow": "rgb(51, 102, 153)"}/> {textLocations.map(i => (i))}
      <line
        x1={hourNiddle.x1}
        y1={hourNiddle.y1}
        x2={hourNiddle.x2}
        y2={hourNiddle.y2}
        style={lineStyleHour}/>
      <line
        x1={minutesNiddle.x1}
        y1={minutesNiddle.y1}
        x2={minutesNiddle.x2}
        y2={minutesNiddle.y2}
        style={lineStyleMinutes}/>
      <line
        x1={secondsNiddle.x1}
        y1={secondsNiddle.y1}
        x2={secondsNiddle.x2}
        y2={secondsNiddle.y2}
        style={lineStyleSeconds}/>
    </svg>
  )
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({date: new Date()});
  }
  render() {
    return (
      <div>
        <div>Welcome to my clock</div>
        <LocalTime date={this.state.date}/>
        <KathmanduTime date={this.state.date}/>
        <AnalogClock date={this.state.date} />
        <AnalogClock date={this.state.date} timeZone='Asia/Kathmandu'/>
      </div>
    );
  }

}
// ========================================

ReactDOM.render(
  <Clock/>, document.getElementById('root'));
