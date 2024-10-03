import React, { useState } from 'react';
import axios from 'axios';

const CreateGame = ({ history }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [code, setCode] = useState('');

  const handleCreateGame = async (e) => {
    e.preventDefault();
    const creatorId = 'user_id'; // Replace this with the actual logged-in user ID
    const response = await axios.post('http://localhost:5000/api/games/create', {
      title,
      description,
      code,
      creatorId,
    });
    alert(response.data.message);
    history.push('/games'); // Redirect to games page after creation
  };

  return (
    <div>
      <h2>Create a New Game</h2>
      <form onSubmit={handleCreateGame}>
        <input
          type="text"
          placeholder="Game Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Game Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <textarea
          placeholder="HTML/JS Code for the Game"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
        ></textarea>
        <button type="submit">Create Game</button>
      </form>
    </div>
  );
};

export default CreateGame;
