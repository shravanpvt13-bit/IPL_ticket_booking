import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MatchCard from './components/MatchCard';
import './App.css';
const MATCHES_DATA = [
  {
    id: 1,
    teams: 'RCB vs CSK',
    date: '25 August 2026',
    time: '7:30 PM',
    venue: 'M. Chinnaswamy Stadium',
  },
  {
    id: 2,
    teams: 'MI vs SRH',
    date: '27 August 2026',
    time: '7:30 PM',
    venue: 'Wankhede Stadium',
  },
  {
    id: 3,
    teams: 'RR vs KKR',
    date: '29 August 2026',
    time: '7:30 PM',
    venue: 'Sawai Mansingh Stadium',
  },
];

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedMatch, setSelectedMatch] = useState('');

  const handleBookClick = (matchName) => {
    setSelectedMatch(matchName);
  };

  return (
    <div>
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="container">
        {activeTab === 'home' && (
          <Hero onViewSchedule={() => setActiveTab('matches')} />
        )}

        <section className="schedule-section">
          <h2>IPL Match Schedule</h2>

          {selectedMatch && (
            <div className="selection-banner">
              Selected Match for Booking: <strong>{selectedMatch}</strong>
            </div>
          )}

          {/* Mapping over match data and reusing MatchCard */}
          <div className="matches-grid">
            {MATCHES_DATA.map((match) => (
              <MatchCard
                key={match.id}
                match={match}
                onBook={handleBookClick}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;