import React from 'react';
import './App.css';
import BusinessTrips from './components/BusinessTrips';
import AddBusinessTrip from './components/AddBusinessTrip';

const App = () => (
  <div className="App">
    <h1>Business Trip App</h1>
    <AddBusinessTrip />
    <BusinessTrips />
  </div>
);

export default App;
