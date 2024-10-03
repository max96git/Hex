import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GameDetails = ({ match }) => {
  const [game, setGame] = useState(null);

  useEffect(() => {
    const fetchGame = async () => {
      const response = await axios.get(`http://localhost:5000/api/games/${match.params.id}`);
      setGame(response.data);
    };
    fetchGame();
  }, [match.params.id]);

  return (
    <div>
      {game ? (
        <div>
          <h2>{game.title}</h2>
          <p>{game.description}</p>
          <div className="game-code">
            <iframe
              srcDoc={game.code}
              title={game.title}
              sandbox="allow-scripts"
              width="100%"
              height="500px"
            ></iframe>
          </div>
        </div>
      ) : (
        <p>Loading game...</p>
      )}
    </div>
  );
};

export default GameDetails;
