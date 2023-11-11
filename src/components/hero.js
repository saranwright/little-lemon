import '../App.css';
import { Link } from 'react-router-dom';
import heroImage from '../assets/restaurantfood.jpg';

function Hero(){
    return(
        <div className="hero">
            <div className="main">
                <div className="heroText">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>&nbsp;</p>
                    <p className="leadText">We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <p><Link to="/reservations" className="button">Reserve a Table</Link><a id="reservations"></a></p>
                </div>
                <div className="heroImage">
                    <img src={heroImage} alt="bruschetta" />
                </div>
            </div>
        </div>
    );
}

export default Hero;