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
      </div>
    );
  }

}
// ========================================

ReactDOM.render(
  <Clock/>, document.getElementById('root'));
