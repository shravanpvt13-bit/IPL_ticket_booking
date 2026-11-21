function MatchCard({ match, onBook }) {
  return (
    <div className="match-card">
      <div>
        <h3>{match.teams}</h3>
        <p><strong>Date:</strong> {match.date}</p>
        <p><strong>Time:</strong> {match.time}</p>
        <p><strong>Venue:</strong> {match.venue}</p>
      </div>
      <button className="hero-btn" onClick={() => onBook(match.teams)}>
        Book Ticket
      </button>
    </div>
  );
}

export default MatchCard;