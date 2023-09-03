// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import your CSS styles here
import App from './App';
import TrainList from './list';
import TrainDetails from './details';

ReactDOM.render(
  <React.StrictMode>
    {/* <TrainList/> */}
    
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
