import { render, screen } from '@testing-library/react';
import PieDePagina from './PieDePagina';

describe('Pie de pagina', () => {

    test('Dibuja el pie de pagina', () => {
    render(<PieDePagina />);
    const footerElement = screen.getByText("Medimarket © 2024 - Todos los derechos reservados");
    expect(footerElement).toBeInTheDocument();
    });

});