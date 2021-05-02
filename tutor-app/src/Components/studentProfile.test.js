import { render, screen} from '@testing-library/react';
import StudentProfile from './studentProfile';
import userEvent from '@testing-library/user-event';

//UI testing 
test('Student Profile rendered', () => {
    render(<StudentProfile/>);
  });


test('Student Profile form accepted after pressing submit', () => {
    render(<StudentProfile/>);
    const fullName = screen.getByText("Full Name");
    const email = screen.getByText("Email");
    const phone = screen.getByText("Phone Number")
    const nationality = screen.getByText("Nationality");
    const address = screen.getByText("Address");
    const interests = screen.getByText("Interests")
    const button = screen.getByTestId("btn")

    userEvent.type(fullName, "Klei Bendo");
    userEvent.type(email,"kleition.bendo@maine.edu");
    userEvent.type(phone,"2556657060");
    userEvent.type(nationality,"Albania");
    userEvent.type(address,"124 Conch Street, Bikini Bottom, Pacific Ocean");
    userEvent.type(interests,"Math, Physics, Computer Science");
    userEvent.click(button);
  });