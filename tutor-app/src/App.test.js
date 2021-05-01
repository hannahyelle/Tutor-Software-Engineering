import { render, screen, userEvent } from '@testing-library/react';

import App from './App';

/*UI testing */
test('home screen rendered', () => {
  render(<App />);
  const homeElement = screen.getByText('Welcome to Tutor Zone 3000!');
  expect(linkElement).toBeInTheDocument();
});


/* Event testing*/
test('moved to tutor appliction', () =>{
  render(<App />);
  userEvent.click(screen.getByText('Tutor Apply'));
  const tutorElement = screen.getByText('Tutor Application');
  expect(tutorElement).toBeInTheDocument();
})

test('moved to create Profile', () =>{
  render(<App />);
  userEvent.click(screen.getByText('Create Profile'));
  const profileElement = screen.getByText('Create Student Profile');
  expect(profileElement).toBeInTheDocument();
})

test('moved to log in', () =>{
  render(<App />);
  userEvent.click(screen.getByText('Log In'));
  const loginElement = screen.getByText('Log In to Tutor Zone 3000!')
  expect(loginElement).toBeInTheDocument();
})