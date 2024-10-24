import React, { useState } from 'react';

const CharacterList = () => {
  const [characters, setCharacters] = useState([
    { id: 1, name: 'Character' },
    { id: 2, name: 'Character' },
    { id: 3, name: 'Character' },
  ]);
  const [newCharacter, setNewCharacter] = useState({ id: '', name: '' });

  const handleDelete = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

  const handleAddCharacter = (e) => {
    e.preventDefault();
    if (newCharacter.id && newCharacter.name) {
      setCharacters([...characters, { ...newCharacter }]);
      setNewCharacter({ id: '', name: '' });
    }
  };

  return (
    <div>
      <h1>Character List</h1>
      <form onSubmit={handleAddCharacter}>
        <input
          type="text"
          placeholder="Character ID"
          value={newCharacter.id}
          onChange={(e) =>
            setNewCharacter({ ...newCharacter, id: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Character Name"
          value={newCharacter.name}
          onChange={(e) =>
            setNewCharacter({ ...newCharacter, name: e.target.value })
          }
        />
        <button type="submit">Add Character</button>
      </form>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            {character.name}&nbsp;{character.id}
            <button onClick={() => handleDelete(character.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;
