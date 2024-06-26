// src/services/api.js
const API_URL = 'http://localhost:3001';

export const fetchBusinessTrips = async () => {
  const response = await fetch(`${API_URL}/businessTrips`);
  return response.json();
};

export const addBusinessTrip = async (trip) => {
  await fetch(`${API_URL}/businessTrips`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(trip),
  });
};
