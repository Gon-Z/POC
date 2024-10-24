import React, { useState } from 'react';
import ListaCharacter from './ListaCharacter.jsx';

const ManejoCharacter = () => {
  const [characters, setCharacters] = useState([
    { id: 1, name: 'Character 1' },
    { id: 2, name: 'Character 2' },
    { id: 3, name: 'Character 3' },
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
      <h1>Manejo de Character </h1>
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
        <button type="submit">Agregar Character</button>
      </form>
      <ListaCharacter characters={characters} onDelete={handleDelete} />
    </div>
  );
};

export default ManejoCharacter;
