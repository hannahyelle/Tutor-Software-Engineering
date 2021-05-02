import { render, screen} from '@testing-library/react';
import homeScreen from './homeScreen';
import userEvent from '@testing-library/user-event';
//UI testing 
test('homescreen rendered', () => {
    render(<homeScreen />);
    const homeScreenElement = screen.getByText('Create a Listing to Connect With Tutors');
    expect(selectElement).toBeInTheDocument();
  });


test('Homescreen buttons work', () => {
    render(<homeScreen />);
    const homeScreenElement = screen.getByText('Welcome to Tutor Zone 3000!');
    expect(selectElement).toBeInTheDocument();
    userEvent.click("Tutor Application");
    expect('Tutor Application').toBeInTheDocument();
  });