import { render, screen} from '@testing-library/react';
import LoginForm from './LoginForm';
import userEvent from '@testing-library/user-event';

//UI testing 
test('tutor application rendered', () => {
    render(<LoginForm />);
    const homeElement = screen.getByText('Log In to Tutor Zone 3000!');
    expect(homeElement).toBeInTheDocument();
  });

//Event Testing
//state testing after submission
test('login form accepted after submit button', () => {
    render(<LoginForm/>);
    const emailfield = screen.getByTestId("new_email");
    const passwordfield = screen.getByTestId("new_password");
    const submit_btn = screen.getByTestId("submitButton")
    userEvent.type(emailfield, "hannah@me.com");
    userEvent.type(passwordfield,"hello");
    userEvent.click(submit_btn);

    const loggedInScreen = screen.getByTestId("Tutor Zone 3000 Landing Page")
    expect(loggedInScreen).toBeInTheDocument();
})

