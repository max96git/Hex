import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './games.css';

const GamesPage = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const response = await axios.get('http://localhost:5000/api/games');
      setGames(response.data);
    };
    fetchGames();
  }, []);

  return (
    <div className="games-page">
      <h2>All Games</h2>
      <Link to="/create-game" className="btn">Create a Game</Link>
      <div className="games-grid">
        {games.map(game => (
          <div key={game._id} className="game-card">
            <h3>{game.title}</h3>
            <p>{game.description}</p>
            <Link to={`/games/${game._id}`} className="btn">Play Game</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamesPage;
