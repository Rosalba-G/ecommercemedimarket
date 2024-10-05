// Contacto.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Contacto from './Contacto';

describe('Contacto', () => {

  test('Dibuja el titulo"', () => {
    render(<Contacto />);
    const headingElement = screen.getByRole('heading', { name: "Formulario de contacto" });
    expect(headingElement).toBeInTheDocument();
  });

  test('Dibuja el mensaje de contactenos', () => {
    render(<Contacto />);
    const paragraphElement = screen.getByText("Escríbenos y en breve nos pondremos en contacto contigo");
    expect(paragraphElement).toBeInTheDocument();
  });

  test('Dibuja los campos del formulario', () => {
    render(<Contacto />);
    const nombreInput = screen.getByLabelText("Nombre:");
    const emailInput = screen.getByLabelText("Email:");
    const telefonoInput = screen.getByLabelText("Teléfono:");
    const asuntoInput = screen.getByLabelText("Asunto:");
    const mensajeInput = screen.getByLabelText("Mensaje:");
    const submitButton = screen.getByRole('button', { name: "Enviar" });

    expect(nombreInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(telefonoInput).toBeInTheDocument();
    expect(asuntoInput).toBeInTheDocument();
    expect(mensajeInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
});
