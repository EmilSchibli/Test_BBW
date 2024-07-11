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

// Funktion zum Aktualisieren einer Geschäftsreise
export const updateBusinessTrip = async (trip) => {
  await fetch(`${API_URL}/businessTrips/${trip.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(trip),
  });
};

// Funktion zum Löschen einer Geschäftsreise
export const deleteBusinessTrip = async (id) => {
  await fetch(`${API_URL}/businessTrips/${id}`, {
    method: 'DELETE',
  });
};
