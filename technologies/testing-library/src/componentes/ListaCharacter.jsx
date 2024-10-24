import React from 'react';

const ListaCharacter = ({ characters, onDelete }) => {
  return (
    <div>
      <h1>Character List</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            {character.name} {character.id}
            <button onClick={() => onDelete(character.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaCharacter;
