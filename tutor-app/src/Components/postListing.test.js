import { render, screen} from '@testing-library/react';
import PostListing from './postListing';
import userEvent from '@testing-library/user-event';
import { SubjectSelect, TimeSelect } from './dropdownSelect';


//UI testing 
test('drop down select application rendered', () => {
    render(<PostListing />);
    const selectElement = screen.getByText('Create a Listing to Connect With Tutors');
    expect(selectElement).toBeInTheDocument();
  });


//selection testing
test('selections accepted after button press', () => {
    render(<PostListing />);
    const subjectselects = screen.getByTestId("Select Subjects");
    const timeselects = screen.getByTestId("Select Time Availabilities");
    userEvent.click(SubjectSelect[0]);
    userEvent.click(TimeSelect[0]);
    SubjectSelect.find('value: CAN, label: Canadian Studies').at(0).instance().selected = true;
    TimeSelect.find('value: CHE, label: Chemical Engineering').at(0).instance().selected = true;
    expect(subjectselects).toBeInTheDocument();
    expect(timeselects).toBeInTheDocument();
    expect(SubjectSelect).tobe(true);
    expect(TimeSelect).tobe(true);

});
