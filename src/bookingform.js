import { useState, useReducer, useEffect } from 'react';
import { fetchAPI, submitAPI } from "./bookingsAPI.js";
import { useNavigate, Link } from 'react-router-dom';
import { isFormValid, isInputValid, validateEmail } from './bookingvalidation.js';
import { getTodaysDate } from './util.js';

const availableTimes = (state, action) => {
    switch (action.type) {
        case "initialize":
            const dates = fetchAPI(action.payload);
            return ["", ...dates];
        case "update":
            const updatedDates = fetchAPI(action.payload);
            return ["", ...updatedDates];
        default:
            return state;
    }
}

const BookingSlots = ({ bookingData, initializeTimes }) => {
    // wrapping initializeTimes inside useEffect resolves "cannot update a component while rendering a different component" error
    useEffect(() => {
        if (bookingData.length === 0) {
            initializeTimes(new Date());
        }
    });
    return <>
        {bookingData.map(time => <option key={time}>{time}</option>)}
    </>
}

const BookingForm = () => {
    const navigate = useNavigate();
    const today = getTodaysDate();

    const [bookingData, dispatch] = useReducer(
        availableTimes,
        []
    );

    const [form, setForm] = useState(() => {
        const form = JSON.parse(localStorage.getItem("form"));
        if (form) {
            // previously selected time may no longer be available
            // if unavailable - override localStorage empty string value to keep submit button disabled
            // if available - keep as is
            return {
                ...form,
                date: // revert to default date (today) if user clears date input before navigating away from page, override empty string
                    form.date === "" ? today : form.date,
                time:
                    form.time || ""
            };
        } else {
            return {
                firstName: "",
                lastName: "",
                email: "",
                date: today,
                time: "",
                guests: 2,
                occasion: ""
            };
        }
    });

    const [isTermsChecked, setIsTermsChecked] = useState(false);

    const [isTouched, setIsTouched] = useState({
        firstName: false,
        lastName: false,
        email: false,
        time: false
    });

    // set up localStorage ///////////////////////////////
    useEffect(() => {
        localStorage.setItem("form", JSON.stringify(form));
    }, [form]);

    // DISPATCH FUNCTIONS ///////////////////////////////
    const initializeTimes = (date) => {
        dispatch({
            type: "initialize",
            payload: date
        })
    }

    const updateTimes = (selection) => {
        dispatch({
            type: "update",
            payload: selection
        })
    }

    // EVENT HANDLERS /////////////////////////////
    const submitForm = (form) => {
        submitAPI(form) && navigate("/confirmed-booking", { state: form });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.clear();
        submitForm(form);
        console.log(form);
    }

    const handleDateChange = e => {
        setForm({
            ...form,
            date: e.target.value,
            time: ""
        });
        updateTimes(new Date(e.target.value));
    }


    return (
        <form onSubmit={handleSubmit}>

            <div className="form-details">
                {/* NAME /////////////////////////////////////////////// */}
                <div className="form-field">
                    <label htmlFor="res-fname">First Name<sup>*</sup></label>
                    <div className="form-required-field">
                        <input
                            className={(isTouched.firstName && !isInputValid(form.firstName)) ? "invalid-input" : undefined}
                            data-testid="res-fname"
                            id="res-fname"
                            minLength="1"
                            name="res-fname"
                            onChange={e => {
                                setForm({
                                    ...form,
                                    firstName: e.target.value
                                });
                                setIsTouched({
                                    ...isTouched,
                                    firstName: true
                                });
                            }}
                            type="text"
                            value={form.firstName}
                            required
                        />
                        {(isTouched.firstName && !isInputValid(form.firstName)) && <p className="error-msg">⚠️ Please enter your first name.</p>}
                    </div>
                </div>

                <div className="form-field">
                    <label htmlFor="res-lname">Last Name<sup>*</sup></label>
                    <div className="form-required-field">
                        <input
                            className={(isTouched.lastName && !isInputValid(form.lastName)) ? "invalid-input" : undefined}
                            data-testid="res-lname"
                            id="res-lname"
                            minLength="1"
                            name="res-lname"
                            onChange={e => {
                                setForm({
                                    ...form,
                                    lastName: e.target.value
                                });
                                setIsTouched({
                                    ...isTouched,
                                    lastName: true
                                });
                            }}
                            type="text"
                            value={form.lastName}
                            required
                        />
                        {(isTouched.lastName && !isInputValid(form.lastName)) && <p className="error-msg">⚠️ Please enter your last name.</p>}
                    </div>
                </div>

                {/* EMAIL /////////////////////////////////////////////// */}
                <div className="form-field">
                    <label htmlFor="res-email">Email<sup>*</sup></label>
                    <div className="form-required-field">
                        <input
                            className={(isTouched.email && !validateEmail(form.email)) ? "invalid-input" : undefined}
                            data-testid="res-email"
                            id="res-email"
                            name="res-email"
                            onChange={e => {
                                setForm({
                                    ...form,
                                    email: e.target.value
                                });
                                setIsTouched({
                                    ...isTouched,
                                    email: true
                                });
                            }}
                            placeholder="example@domain.com"
                            type="email"
                            value={form.email}
                            required
                        />
                        {(isTouched.email && !validateEmail(form.email)) && <p className="error-msg">⚠️ Please enter a valid email address.</p>}
                    </div>
                </div>

                {/* DATE /////////////////////////////////////////////// */}
                <div className="form-field">
                    <label htmlFor="res-date">Choose date<sup>*</sup></label>
                    <div className="form-required-field">
                        <input
                            data-testid="res-date"
                            id="res-date"
                            min={today}
                            name="res-date"
                            onChange={handleDateChange}
                            type="date"
                            value={form.date}
                            required
                        />
                    </div>
                </div>

                {/* TIME /////////////////////////////////////////////// */}
                <div className="form-field">
                    <label htmlFor="res-time">Choose time<sup>*</sup></label>
                    <div className="form-required-field">
                        <select
                            className={(isTouched.time && !isInputValid(form.time)) ? "invalid-input" : undefined}
                            data-testid="res-time"
                            id="res-time"
                            name="res-time"
                            onChange={e => {
                                setForm({
                                    ...form,
                                    time: e.target.value
                                });
                                setIsTouched({
                                    ...isTouched,
                                    time: true
                                });
                            }}
                            value={form.time}
                            required
                        >
                            <BookingSlots bookingData={bookingData} initializeTimes={initializeTimes} /> :
                        </select>
                        {(isTouched.time && !isInputValid(form.time)) && <p className="error-msg">⚠️ Please select a time from the dropdown.</p>}
                    </div>
                </div>

                {/* GUESTS /////////////////////////////////////////////// */}
                <div className="form-field">
                    <label htmlFor="guests">Number of guests<sup>*</sup></label>
                    <div className="form-required-field">
                        <input
                            data-testid="res-guests"
                            id="guests"
                            name="guests"
                            onChange={e => {
                                setForm({
                                    ...form,
                                    guests: e.target.value
                                });
                            }}
                            min="1"
                            max="10"
                            placeholder="1"
                            type="number"
                            value={form.guests}
                            required
                        />
                    </div>
                </div>

                {/* OCCASION /////////////////////////////////////////////// */}
                <div className="form-field">
                    <label htmlFor="occasion">Occasion</label>
                    <select
                        id="occasion"
                        name="occasion"
                        onChange={e => {
                            setForm({
                                ...form,
                                occasion: e.target.value
                            });
                        }}
                        value={form.occasion}
                    >
                        <option></option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>Other</option>
                    </select>
                </div>

                {/* terms & conditions  ////////////////////////////*/}
                <div className="form-field form-terms">
                    <input
                        data-testid="res-terms"
                        id="res-terms"
                        name="res-terms"
                        onChange={() => setIsTermsChecked(!isTermsChecked)}
                        type="checkbox"
                        value={isTermsChecked}
                        required
                    />
                    <label htmlFor="res-terms">I agree to <Link to="/terms">&nbsp;terms & conditions.</Link><sup>*</sup></label>
                </div>

                <input
                    aria-label="Submit form."
                    data-testid="res-submit"
                    className="button"
                    title={isFormValid(form, isTermsChecked) ? "Submit form." : "Please complete all required fields."}
                    type="submit"
                    value="Book Table"
                    disabled={!isFormValid(form, isTermsChecked)}
                />
            </div>
        </form>
    );
}

export { BookingForm, availableTimes, BookingSlots };