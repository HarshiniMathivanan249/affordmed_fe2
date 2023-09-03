// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; // Import Route
import TrainList from './list';
import TrainDetails from './details';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" element={<TrainList />} />
        <Route path="Train details" element={<TrainDetails />} />
      </div>
    </Router>
  );
}

export default App;
