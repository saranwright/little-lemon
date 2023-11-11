import './App.css';
import { BookingForm } from './bookingform';
import { useReducer } from 'react';
import { fetchAPI } from './bookingsAPI';

function Booking() {

    function updateTimes(date) {
        return fetchAPI(date);
    }

    const output = fetchAPI(new Date());

    const [availableTimes, dispatch] = useReducer(updateTimes, output);

    return (
        <div className="booking">
            <div className="main">
                <h2>Make a Reservation</h2>
                <BookingForm />
            </div>
        </div>
    );
}

export default Booking;