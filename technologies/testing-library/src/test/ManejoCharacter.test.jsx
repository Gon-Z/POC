/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react';
import ManejoCharacter from '../componentes/ManejoCharacter.jsx';

test('renderiza la lista de personajes correctamente en el componente ManejoCharacter', () => {
  act(() => {
    render(<ManejoCharacter />);
  });

  expect(screen.getByText(/Character 1/i)).toBeInTheDocument();
  expect(screen.getByText(/Character 2/i)).toBeInTheDocument();
  expect(screen.getByText(/Character 3/i)).toBeInTheDocument();
});

test('agrega un nuevo personaje y lo muestra en la lista de characters', async () => {
  act(() => {
    render(<ManejoCharacter />);
  });

  act(() => {
    fireEvent.change(screen.getByPlaceholderText(/Character ID/i), {
      target: { value: '4' },
    });
    fireEvent.change(screen.getByPlaceholderText(/Character Name/i), {
      target: { value: 'Character 4' },
    });
  });

  act(() => {
    fireEvent.click(screen.getByText(/Agregar Character/i));
  });

  expect(screen.getByText(/Character 4/i)).toBeInTheDocument();
});

test('elimina un personaje de la lista en ManejoCharacter', () => {
  act(() => {
    render(<ManejoCharacter />);
  });

  act(() => {
    fireEvent.click(screen.getAllByRole('button', { name: /delete/i })[0]);
  });

  expect(screen.queryByText(/Character 1/i)).toBeNull();
});
