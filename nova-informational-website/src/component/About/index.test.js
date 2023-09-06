import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '.';

describe('About component', () => {
  it('renders the component without errors', () => {
    render(<About />);
  });

  it('displays the "Who we Are?" section', () => {
    render(<About />);
    const whoWeAreSection = screen.getByText('Who we Are ?');
    expect(whoWeAreSection).toBeInTheDocument();
  });

    it('displays images', () => {
    render(<About />);
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(3); 
  });

  
});
