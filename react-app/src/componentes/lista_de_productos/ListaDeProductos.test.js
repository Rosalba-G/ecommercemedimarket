// ListaDeProductos.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import ListaDeProductos from './ListaDeProductos';

describe('Lista De Productos', () => {
  const agregarProductoMock = jest.fn();

  test('renders the heading with text "Resultados de productos"', () => {
    render(<ListaDeProductos agregarProducto={agregarProductoMock} />);
    const headingElement = screen.getByRole('heading', { name: "Resultados de productos" });
    expect(headingElement).toBeInTheDocument();
  });

  test('renders the correct number of ProductoDetalle components', () => {
    render(<ListaDeProductos agregarProducto={agregarProductoMock} />);
    const productoDetalleElements = screen.queryAllByText("Precio:");
    expect(productoDetalleElements.length).toBe(10);
  });

});
