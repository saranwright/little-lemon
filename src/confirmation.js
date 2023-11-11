import './App.css';
import { useLocation, Link } from 'react-router-dom';
import { reformatDate, reformatTime } from './util';

function Confirmation() {

    const location = useLocation();
    const form = location.state;
    const date = reformatDate(form.date);
    const time = reformatTime(form.time);

    return(
        <div className="confirmation">
            <div className="main">
                <h2>Your reservation is confirmed!</h2>
                <p>Your table is booked! We look forward to seeing you soon.</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <h3>Confirmation Details</h3>
                <p><strong>Date:</strong> {date}</p>
                <p><strong>Time:</strong> {time}</p>
                <p>{form.guests} guests</p>
            </div>
        </div>
    );
}

export default Confirmation;