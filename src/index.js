import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Hello(){
  return (
    <div>Hello React App</div>
  );
}

// ========================================

ReactDOM.render(
  <Hello />,
  document.getElementById('root')
);
