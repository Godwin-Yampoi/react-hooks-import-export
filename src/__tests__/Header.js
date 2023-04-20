import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

describe('Header', () => {
  test('renders a logo', () => {
    render(<Header />);
    const logoElement = screen.getByAltText('Logo');
    expect(logoElement).toBeInTheDocument();
  });
});


