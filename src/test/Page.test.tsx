import React from 'react';
import { render } from '@testing-library/react';
import Page from '../Page';

test('renders learn react link', () => {
  const { container } = render(<Page />);

  // console.log(container)
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
