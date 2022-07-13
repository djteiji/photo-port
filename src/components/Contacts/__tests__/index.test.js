import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contacts from '..';

afterEach(cleanup);

describe('Contact component renders', () => {
    it('renders', () => {
    render(<Contacts />);
  });
  
    it('renders', () => {
      const { asFragment } = render(<Contacts />)
      expect(asFragment()).toMatchSnapshot()
    })
  });

  it('renders', () => {
    const { getByTestId } = render(<Contacts />)
    expect(getByTestId('h1tag')).toHaveTextContent('Contact me')
  })
   
  it('renders', () => {
    const { getByTestId } = render(<Contacts />)
    expect(getByTestId('button')).toHaveTextContent('Submit')
  })