import React, { useState, useEffect } from 'react';
import { fetchBusinessTrips } from '../services/api';

const BusinessTrips = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetchBusinessTrips().then(data => setTrips(data));
  }, []);

  return (
    <div>
      <h2>Business Trips</h2>
      <ul>
        {trips.map(trip => (
          <li key={trip.id}>{trip.destination}</li>
        ))}
      </ul>
    </div>
  );
};

export default BusinessTrips;
