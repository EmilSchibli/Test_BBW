// src/components/AddBusinessTrip.js
import React, { useState } from 'react';
import { addBusinessTrip } from '../services/api';

const AddBusinessTrip = () => {
  const [destination, setDestination] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addBusinessTrip({ destination }).then(() => {
      setDestination('');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        placeholder="Destination"
      />
      <button type="submit">Add Trip</button>
    </form>
  );
};

export default AddBusinessTrip;
