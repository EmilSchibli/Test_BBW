import React, { useState } from 'react';
import { addBusinessTrip } from '../services/api';

const AddBusinessTrip = () => {
  const [destination, setDestination] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');

  const destinations = ["New York", "San Francisco", "Chicago", "Los Angeles", "Miami"];

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTrip = { destination, name, email, date };
    addBusinessTrip(newTrip).then(() => {
      setDestination('');
      setName('');
      setEmail('');
      setDate('');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <select
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      >
        <option value="">Select Destination</option>
        {destinations.map((dest, index) => (
          <option key={index} value={dest}>{dest}</option>
        ))}
      </select>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder="Date"
      />
      <button type="submit">Add Trip</button>
    </form>
  );
};

export default AddBusinessTrip;
