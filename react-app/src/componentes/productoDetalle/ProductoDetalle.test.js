import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductoDetalle from './ProductoDetalle';

describe('ProductoDetalle', () => {
  const props = {
    imagen: 'assets/img/Paracetamol.jpg',
    nombre: 'Paracetamol',
    etiquetaPrecio: '$10.000',
    disponible: true,
  };

  test('Dibuja el producto', () => {
    render(<ProductoDetalle {...props} />);
    
    // Verificar que la imagen se renderiza con el src y alt correctos
    const imgElement = screen.getByRole('img', { name: "Paracetamol" });
    expect(imgElement).toHaveAttribute('src', props.imagen);
    expect(imgElement).toHaveAttribute('alt', props.nombre);

    // Verificar que el nombre del producto se renderiza correctamente
    const nombreElement = screen.getByText("Paracetamol");
    expect(nombreElement).toBeInTheDocument();

    // Verificar que el precio se renderiza correctamente
    const precioElement = screen.getByText("$10.000");
    expect(precioElement).toBeInTheDocument();

    // Verificar que el estado de disponibilidad se renderiza correctamente
    const disponibilidadElement = screen.getByText("Disponible");
    expect(disponibilidadElement).toBeInTheDocument();

    // Verificar que el botón "Añadir al carrito" se renderiza cuando el producto está disponible
    const botonElement = screen.getByRole('button', { name: "Añadir al carrito" });
    expect(botonElement).toBeInTheDocument();
  });

  test('No dibuja el botón añadir al carrito cuando no está disponible', () => {
    render(<ProductoDetalle {...props} disponible={false} />);
    
    // Verificar que el estado de disponibilidad se renderiza correctamente
    const disponibilidadElement = screen.getByText("No disponible");
    expect(disponibilidadElement).toBeInTheDocument();

    // Verificar que el botón "Añadir al carrito" no se renderiza cuando el producto no está disponible
    const botonElement = screen.queryByRole('button', { name: "Añadir al carrito" });
    expect(botonElement).not.toBeInTheDocument();
  });
});