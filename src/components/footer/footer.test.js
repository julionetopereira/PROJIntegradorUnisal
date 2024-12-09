import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Footer from './footer'; 

describe('Footer Component', () => {
  test('should render the logo image', () => {
    render(<Footer/>);
    const logo = screen.getByAltText('Your Company');
    expect(logo).toBeInTheDocument();
    expect(logo.src).toContain('logo_certo.png'); 
  });

  test('should render the copyright text', () => {
    render(<Footer/>);
    const copyrightText = screen.getByText('© Copyright 2021. All Rights Reserved.');
    expect(copyrightText).toBeInTheDocument();
  });

  test('should render the links', () => {
    render(<Footer/>);
    const links = screen.getAllByRole('link');
    expect(links.length).toBe(3); 

    expect(links[0]).toHaveTextContent('Teams');
    expect(links[1]).toHaveTextContent('Privacy');
    expect(links[2]).toHaveTextContent('Cookies');
  });


  test('clicking the links should not navigate (default behavior)', () => {
    render(<Footer/>);
    const links = screen.getAllByRole('link');

    fireEvent.click(links[0]); 
    expect(window.location.pathname).toBe('/'); 

  });
});
