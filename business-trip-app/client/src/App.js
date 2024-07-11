import React from 'react';
import './App.css';
import BusinessTrips from './components/BusinessTrips';
import AddBusinessTrip from './components/AddBusinessTrip';
import EditBusinessTrip from './components/EditBusinessTrip';

const App = () => {
  const [editingTrip, setEditingTrip] = React.useState(null);

  return (
    <div className="app-container">
      <header className="header">
        <h1>SchibliFlüge
        </h1>
      </header>
      <main className="App">
        <section className="hero">
          <h2>Die Seite für Ihre Geschäftsreisen</h2>
          <p>Entdecken Sie die besten Geschäftsreiseziele und buchen Sie Ihre Flüge, Hotels und Meetings ganz einfach online.</p>
        </section>
        <section className="card-container">
          <div className="card">
            <img src="san-francisco.jpg" alt="San Francisco" />
            <h3>Entdecken Sie San Francisco!</h3>
            <p>Als Herzstück der globalen Innovation bietet die Stadt einzigartige Geschäftsmöglichkeiten in Technologie, Finanzen und Biotechnologie.</p>
          </div>
          <div className="card">
            <img src="santa-clara.jpg" alt="Santa Clara" />
            <h3>Geschäftsmöglichkeiten in Santa Clara!</h3>
            <p>Im Herzen des Silicon Valley gelegen, bietet Santa Clara ideale Bedingungen für Innovation und Wachstum.</p>
          </div>
          <div className="card">
            <img src="san-jose.jpg" alt="San José" />
            <h3>Erleben Sie das Wirtschaftszentrum San José!</h3>
            <p>Als Hauptstadt des Silicon Valley bietet San José eine Fülle an Geschäftsmöglichkeiten in Technologie, Finanzen und Innovation.</p>
          </div>
        </section>
        {editingTrip ? (
          <EditBusinessTrip trip={editingTrip} setEditingTrip={setEditingTrip} />
        ) : (
          <AddBusinessTrip />
        )}
        <BusinessTrips setEditingTrip={setEditingTrip} />
      </main>
    </div>
  );
};

export default App;
