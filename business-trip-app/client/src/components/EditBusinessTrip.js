import React, { useState } from 'react';
import { updateBusinessTrip } from '../services/api';
import TextInput from './TextInput';
import SelectInput from './SelectInput';

// Komponente zum Bearbeiten von Geschäftsreisen
const EditBusinessTrip = ({ trip, setEditingTrip }) => {
  const [destination, setDestination] = useState(trip.destination);
  const [name, setName] = useState(trip.name);
  const [email, setEmail] = useState(trip.email);
  const [date, setDate] = useState(trip.date);
  const [error, setError] = useState('');

  const destinations = ["New York", "San Francisco", "Chicago", "Los Angeles", "Miami"];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!destination || !name || !email || !date) {
      setError('Bitte alle Felder ausfüllen');
      return;
    }
    const updatedTrip = { ...trip, destination, name, email, date };
    updateBusinessTrip(updatedTrip).then(() => {
      setEditingTrip(null);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <SelectInput
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        options={destinations}
        placeholder="Select Destination"
      />
      <TextInput
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <TextInput
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <TextInput
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder="Date"
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Update Trip</button>
      <button type="button" onClick={() => setEditingTrip(null)}>Cancel</button>
    </form>
  );
};

export default EditBusinessTrip;
