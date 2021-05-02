import { render, screen, fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

/*UI testing */
test('home screen rendered', () => {
  render(<App />);
  const homeElement = screen.getByText('Welcome to Tutor Zone 3000!');
  expect(homeElement).toBeInTheDocument();
});


/* Event testing*/
test('moved to tutor appliction', () =>{
  render(<App />);
  fireEvent.click(screen.getByTestId("tutorButton"));
  const tutorElement = screen.getByTestId('tutorAppPage');
  expect(tutorElement).toBeInTheDocument();
})

test('moved to create Profile', () =>{
  render(<App />);
  fireEvent.click(screen.getByTestId('CreateProfileButton'));
  const profileElement = screen.getByTestId('createProfilePage');
  expect(profileElement).toBeInTheDocument();
})

test('moved to log in', () =>{
  render(<App />);
  fireEvent.click(screen.getByTestId('LogInButton'));
  const loginElement = screen.getByTestId('loginFormPage')
  expect(loginElement).toBeInTheDocument();
})