import { render, screen} from '@testing-library/react';
import TutorApply from './TutorApply';
import userEvent from '@testing-library/user-event';


//UI testing
test('Tutor application rendered', () =>{
    render(<TutorApply/>);
    const applictionElement = screen.getByTestId("applicationPage")
    expect(applicationElement).toBeInTheDocument();
})

//Event Testing
//state testing after submission

test('Tutor application accepted after submit button', () => {
    render(<Tutor/>);
    const firstName = screen.getByTestId("nameField");
    const lastName = screen.getByTestId("lastNameField");
    const submit_btn = screen.getByTestId("applySubmit")
    userEvent.type(firstName, "hannah");
    userEvent.type(lastName,"Yelle");
    userEvent.click(submit_btn);

    const submittedScreen = screen.getByText("successful Submition")
    expect(submittedtScreen).toBeInTheDocument();
})
