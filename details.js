

// src/components/TrainDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import mockTrainDetails from './mock-train-details'; // Import mock data

function TrainDetails() {
  const { id } = useParams();
  const train = mockTrainDetails.find((train) => train.id === parseInt(id, 10));

  if (!train) {
    return <div>Train not found.</div>;
  }

  return (
    <div>
      <h2>Train Details</h2>
      <h3>{train.name}</h3>
      <p>Departure Time: {train.departureTime}</p>
      <p>Seat Availability: {train.seatAvailability}</p>
      <p>Sleeper Price: {train.prices.sleeper}</p>
      <p>AC Price: {train.prices.AC}</p>
      <p>Delays: {train.delays} minutes</p>
    </div>
  );
}

export default TrainDetails;
