import { render, screen, userEvent } from '@testing-library/react';
import LoginForm from './LoginForm';

/*UI testing */
test('tutor application rendered', () => {
    render(<LoginForm />);
    const homeElement = screen.getByText('Welcome to Tutor Zone 3000!');
    expect(linkElement).toBeInTheDocument();
  });

/*Event Testing*/
//state testing after submission
test('login form accepted after submit button', () => {
    render(<LoginForm/>);
    const emailfield = screen.getByTestId("new_email");
    const passwordfield = screen.getByTestId("new_password");
    const submit_btn = screen.getByTestId("submitButton")
    userEvent.type(emailfield, "hannah@me.com");
    userEvent.type(passwordfield,"hello");
    userEvent.click(submit_btn);

    

})
  