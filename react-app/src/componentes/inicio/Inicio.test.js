import React from 'react';
import { render, screen } from '@testing-library/react';
import Inicio from './Inicio';

describe('Inicio', () => {

  test('Dibuja el titulo', () => {
    render(<Inicio />);
    const headingElement = screen.getByRole('heading', { name: "Nuestros productos" });
    expect(headingElement).toBeInTheDocument();
  });

  test('Dibuja el parrafo', () => {
    render(<Inicio />);
    const paragraphElement = screen.getByText("Descubre una amplia variedad de medicamentos, vitaminas y productos de salud.");
    expect(paragraphElement).toBeInTheDocument();
  });

});
