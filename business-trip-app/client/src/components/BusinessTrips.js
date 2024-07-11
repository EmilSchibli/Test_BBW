import React, { useState, useEffect } from 'react';
import { fetchBusinessTrips, deleteBusinessTrip } from '../services/api';

// Komponente zur Anzeige der Geschäftsreisen
const BusinessTrips = ({ setEditingTrip }) => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetchBusinessTrips().then(data => setTrips(data));
  }, []);

  const handleDelete = (id) => {
    deleteBusinessTrip(id).then(() => {
      setTrips(trips.filter(trip => trip.id !== id));
    });
  };

  return (
    <div className="BusinessTrips">
      <h2>Business Trips</h2>
      <ul>
        {trips.slice().reverse().slice(0, 3).map(trip => (
          <li key={trip.id}>
            <strong>Destination:</strong> {trip.destination} <br />
            <strong>Name:</strong> {trip.name} <br />
            <strong>Email:</strong> {trip.email} <br />
            <strong>Date:</strong> {trip.date}
            <div className="trip-actions">
              <button className="edit-button" onClick={() => setEditingTrip(trip)}>Edit</button>
              <button className="delete-button" onClick={() => handleDelete(trip.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BusinessTrips;
