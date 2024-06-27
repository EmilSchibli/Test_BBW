import React, { useState } from 'react';
import { addBusinessTrip } from '../services/api';

const AddBusinessTrip = () => {
  // Zustandsverwaltung für Formulareingaben
  const [destination, setDestination] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');

  // Verfügbare Reiseziele
  const destinations = ["New York", "San Francisco", "Chicago", "Los Angeles", "Miami"];

  // Funktion zur Verarbeitung der Formulareinreichung
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTrip = { destination, name, email, date };
    // API-Aufruf zum Hinzufügen einer neuen Geschäftsreise
    addBusinessTrip(newTrip).then(() => {
      // Zurücksetzen der Formulareingaben nach erfolgreicher Einreichung
      setDestination('');
      setName('');
      setEmail('');
      setDate('');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Dropdown zur Auswahl des Reiseziels */}
      <select
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      >
        <option value="">Select Destination</option>
        {destinations.map((dest, index) => (
          <option key={index} value={dest}>{dest}</option>
        ))}
      </select>
      {/* Eingabefeld für den Namen */}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      {/* Eingabefeld für die E-Mail */}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      {/* Eingabefeld für das Datum */}
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder="Date"
      />
      {/* Button zum Einreichen des Formulars */}
      <button type="submit">Add Trip</button>
    </form>
  );
};

export default AddBusinessTrip;
