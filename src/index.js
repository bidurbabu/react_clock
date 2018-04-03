import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Hello(){
  let currentTime = new Date();
  return (
    <div>
      <div>Welcome to my clock</div>
    <div>{currentTime.toLocaleTimeString()}</div>
    </div>
  );
}
// ========================================

setInterval(function(){
  ReactDOM.render(
    <Hello />,
    document.getElementById('root')
  );
}, 1000);
