// Basis-URL des JSON Servers
const API_URL = 'http://localhost:3001';

// Funktion zum Abrufen der Geschäftsreisedaten
export const fetchBusinessTrips = async () => {
  const response = await fetch(`${API_URL}/businessTrips`);
  return response.json();
};

// Funktion zum Hinzufügen einer neuen Geschäftsreise
export const addBusinessTrip = async (trip) => {
  await fetch(`${API_URL}/businessTrips`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(trip),
  });
};
