// src/components/TrainList.js
import React from 'react';
import mockTrains from './mock-data'; // Replace with actual API calls

function TrainList() {
  // Sort and filter the train data here (replace this with your logic)
  const sortedAndFilteredTrains = mockTrains;

  return (
    <div>
      <h2>All Trains</h2>
      <table>
        <thead>
          <tr>
            <th>Train Name</th>
            <th>Departure Time</th>
            <th>Seat Availability</th>
            <th>Sleeper Price</th>
            <th>AC Price</th>
            <th>Delays</th>
          </tr>
        </thead>
        <tbody>
          {sortedAndFilteredTrains.map((train) => (
            <tr key={train.id}>
              <td>{train.name}</td>
              <td>{train.departureTime}</td>
              <td>{train.seatAvailability}</td>
              <td>{train.prices.sleeper}</td>
              <td>{train.prices.AC}</td>
              <td>{train.delays} minutes</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TrainList;
