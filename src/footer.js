import './App.css';
import footerImage from './assets/restaurantfood.jpg';

function Footer(){
    return(
        <div className="footer">
            <div>
                <img src={footerImage} alt="bruschetta dish" />
            </div>
            <div>
                <h4>Little Lemon Restaurant</h4>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/reservations">Reservations</a></li>
                    <li><a href="/order-online">Order Online</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </div>
            <div>
                <h4>Contact</h4>
                <p>Address</p>
                <p>Phone Number</p>
                <p>Email</p>
            </div>
            <div>
                <h4>Social Media Links</h4>
                <p>Social 1</p>
                <p>Social 2</p>
                <p>Social 3</p>
            </div>
        </div>
    );
}

export default Footer;