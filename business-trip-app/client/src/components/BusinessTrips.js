import React, { useState, useEffect } from 'react';
import { fetchBusinessTrips } from '../services/api';

// Komponente zur Anzeige der Geschäftsreisen
const BusinessTrips = () => {
  // Zustandsverwaltung für die Liste der Geschäftsreisen
  const [trips, setTrips] = useState([]);

  // Abrufen der Geschäftsreisedaten bei der ersten Komponentenmethode
  useEffect(() => {
    fetchBusinessTrips().then(data => setTrips(data));
  }, []);

  return (
    <div>
      <h2>Business Trips</h2>
      {/* Ungeordnete Liste zur Anzeige der Geschäftsreisen */}
      <ul>
        {trips.slice().reverse().slice(0, 3).map(trip => (
          <li key={trip.id}>
            <strong>Destination:</strong> {trip.destination} <br />
            <strong>Name:</strong> {trip.name} <br />
            <strong>Email:</strong> {trip.email} <br />
            <strong>Date:</strong> {trip.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BusinessTrips;
