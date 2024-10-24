/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react';
import CharacterList from '../componentes/CharacterList.jsx';

test('renders character list', () => {
  act(() => {
    render(<CharacterList />);
  });
  const character1 = screen.getByText(/character 1/i);
  const character2 = screen.getByText(/CHARACTER 2/i);
  const character3 = screen.getByText(/Character 3/);

  expect(character1).toBeInTheDocument();
  expect(character2).toBeInTheDocument();
  expect(character3).toBeInTheDocument();
});

test('elimina un personaje cuando se hace clic en el botón de eliminar', () => {
  act(() => {
    render(<CharacterList />);
  });
  const deleteButtons = screen.getAllByText('Delete');

  // Se clickea el botón de eliminar al Character 1
  act(() => {
    fireEvent.click(deleteButtons[0]);
  });

  // Character 1 debería desaparecer
  expect(screen.queryByText(/Character 1/i)).toBeNull();

  // Character 2 y Character 3 todavía deberían estar
  expect(screen.getByText(/Character 2/i)).toBeInTheDocument();
  expect(screen.getByText(/Character 3/i)).toBeInTheDocument();
});

test('agrega un nuevo personaje', () => {
  act(() => {
    render(<CharacterList />);
  });

  // Se rellenan las entradas de un nuevo personaje con 'Character 4'
  act(() => {
    fireEvent.change(screen.getByPlaceholderText(/Character ID/i), {
      target: { value: '4' },
    });
    fireEvent.change(screen.getByPlaceholderText(/Character Name/i), {
      target: { value: 'Character 4' },
    });
  });

  // Se clickea el botón de agregar el nuevo Character
  act(() => {
    fireEvent.click(screen.getByText(/Add Character/i));
  });

  // El nuevo Character debería aparecer en la lista
  expect(screen.getByText(/Character 4/i)).toBeInTheDocument();
});
