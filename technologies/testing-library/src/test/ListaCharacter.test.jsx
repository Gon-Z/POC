/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react';
import CharacterList from '../componentes/ListaCharacter.jsx';

const mockDelete = jest.fn();

const mockCharacters = [
  { id: 1, name: 'Character 1' },
  { id: 2, name: 'Character 2' },
  { id: 3, name: 'Character 3' },
];

test('renderiza la lista de personajes correctamente', () => {
  act(() => {
    render(<CharacterList characters={mockCharacters} onDelete={mockDelete} />);
  });

  expect(screen.getByText(/Character 1/i)).toBeInTheDocument();
  expect(screen.getByText(/Character 2/i)).toBeInTheDocument();
  expect(screen.getByText(/Character 3/i)).toBeInTheDocument();
});

test('elimina un personaje cuando se hace clic en el botón de eliminar', () => {
  act(() => {
    render(<CharacterList characters={mockCharacters} onDelete={mockDelete} />);
  });

  const deleteButtons = screen.getAllByText('Delete');

  act(() => {
    fireEvent.click(deleteButtons[0]);
  });

  expect(mockDelete).toHaveBeenCalledWith(1);
});
