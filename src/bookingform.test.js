import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BookingForm, availableTimes, BookingSlots } from "./components/booking/BookingForm";
import { fetchAPI } from "./api";
import { BrowserRouter } from 'react-router-dom';

describe("test BookingForm component", () => {

    it("renders the label for choose time dropdown", () => {
        render(<BrowserRouter><BookingForm /></BrowserRouter>);
        const labelElement = screen.getByText("Choose time");
        expect(labelElement).toBeInTheDocument();
    });

    it("calls initializeTimes with the default date (today's date) if bookingData is empty.", () => {
        const initializeTimes = jest.fn();
        const bookingData = [];
        render(<BookingSlots bookingData={bookingData} initializeTimes={initializeTimes} />);
        const today = new Date();
        expect(initializeTimes).toHaveBeenCalledWith(today);
    });

    it("should return a new array of dates (of type string) from the fetchAPI function when updateTimes is dispatched via the availableTimes reducer. Only the first item in the returned array should be an empty string.", () => {
        const currentBookingData = ["", "17:00", "18:00", "19:00"];
        const selectedDate = new Date("2023-05-30");
        const action = {
            type: "update",
            payload: selectedDate
        }

        const updatedTimes = availableTimes(currentBookingData, action);
        const updatedBookingData = fetchAPI(selectedDate);

        expect(updatedTimes.length).toEqual(updatedBookingData.length + 1);
        expect(typeof updatedTimes).toBe("object"); // "object" = array in js
        updatedTimes.forEach(item => expect(typeof item).toBe("string"));
        expect(updatedTimes[0]).toBeFalsy();
        updatedTimes.slice(1, -1).forEach(item => expect(item).not.toBeFalsy());
        // check that date strings are in 24-hour time format with leading 0 (HH:MM)
        updatedTimes.slice(1, -1).forEach(item => expect(item).toMatch(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/));
    });

    it("validates all input elements have the correct type attribute to enable native client-side HTML5 form validation", () => {
        render(<BrowserRouter><BookingForm /></BrowserRouter>);

        const firstNameInput = screen.getByTestId("res-fname");
        const lastNameInput = screen.getByTestId("res-lname");
        const emailInput = screen.getByTestId("res-email");
        const dateInput = screen.getByTestId("res-date");
        const guestsInput = screen.getByTestId("res-guests");
        const termsInput = screen.getByTestId("res-terms");
        const submitInput = screen.getByTestId("res-submit");

        expect(firstNameInput).toHaveAttribute("type", "text");
        expect(lastNameInput).toHaveAttribute("type", "text");
        expect(emailInput).toHaveAttribute("type", "email");
        expect(dateInput).toHaveAttribute("type", "date");
        expect(guestsInput).toHaveAttribute("type", "number");
        expect(termsInput).toHaveAttribute("type", "checkbox");
        expect(submitInput).toHaveAttribute("type", "submit");
    });

    it("verifies invalid states of required form fields (with no default values), checks that error messages/input styling are displayed accordingly, and ensures book table button is disabled", () => {
        render(<BrowserRouter><BookingForm /></BrowserRouter>);

        const firstNameInput = screen.getByTestId("res-fname");
        const lastNameInput = screen.getByTestId("res-lname");
        const emailInput = screen.getByTestId("res-email");
        const timeInput = screen.getByTestId("res-time");
        const termsInput = screen.getByTestId("res-terms");
        const submitInput = screen.getByTestId("res-submit");

        userEvent.type(firstNameInput, "");
        expect(firstNameInput).toBeInvalid();

        userEvent.type(lastNameInput, "");
        expect(lastNameInput).toBeInvalid();

        userEvent.type(emailInput, "hello");
        expect(emailInput).toHaveClass("invalid-input");
        expect(screen.getByText(/Please enter a valid email address./)).toBeInTheDocument();
        expect(submitInput).toBeDisabled();

        userEvent.selectOptions(timeInput, "");
        expect(timeInput).toHaveClass("invalid-input");
        expect(screen.getByText(/Please select a time from the dropdown./)).toBeInTheDocument();
        expect(screen.getByText(/Please select a time from the dropdown./)).toHaveClass("error-msg");

        userEvent.type(termsInput, false);
        expect(submitInput).toHaveAttribute("title", "Please complete all required fields.");
    });

    it("verifies valid states of form fields, checks that book table button is enabled", () => {
        render(<BrowserRouter><BookingForm /></BrowserRouter>);

        const firstNameInput = screen.getByTestId("res-fname");
        const lastNameInput = screen.getByTestId("res-lname");
        const emailInput = screen.getByTestId("res-email");
        const dateInput = screen.getByTestId("res-date");
        const timeInput = screen.getByTestId("res-time");
        const termsInput = screen.getByTestId("res-terms");
        const submitInput = screen.getByTestId("res-submit");

        const inputElements = [firstNameInput, lastNameInput, emailInput, termsInput];

        const currentBookingData = ["", "17:00", "18:00", "19:00"];
        const dateSelection = new Date("2023-07-04");
        const action = {
            type: "update",
            payload: dateSelection
        }
        const updatedBookingData = availableTimes(currentBookingData, action);

        userEvent.type(firstNameInput, "Charlie");
        userEvent.type(lastNameInput, "Brown");
        userEvent.type(emailInput, "hello@gmail.com");

        // change default date to reset available times
        userEvent.type(dateInput, dateSelection);
        // select first available date returned from fetchAPI
        userEvent.selectOptions(timeInput, updatedBookingData[1]);

        // agree to terms & conditions
        userEvent.type(termsInput, true);

        inputElements.forEach(input => expect(input).toBeValid());

        // ensure input fields are not styled with a red border when inputs are valid
        inputElements.forEach(input => expect(input).not.toHaveClass("invalid-input"));

        // ensure error messages do not show when inputs are valid
        expect(screen.queryByText(/Please enter your first name./)).not.toBeInTheDocument();
        expect(screen.queryByText(/Please enter your last name./)).not.toBeInTheDocument();
        expect(screen.queryByText(/Please enter a valid email address./)).not.toBeInTheDocument();
        expect(screen.queryByText(/Please select a time from the dropdown./)).not.toBeInTheDocument();

        // ensure correct tooltip shows when button is enabled
        expect(submitInput).toHaveAttribute("title", "Submit form.");
        expect(submitInput).toBeEnabled();
    });
});