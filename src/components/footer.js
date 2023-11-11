import '../App.css';
import footerImage from '../assets/Asset 22@4x.png';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function Footer(){

    const {hash, key} = useLocation()
    useEffect(()=>{
        if(hash){
        const targetElement = document.getElementById(hash.substring(1))
            targetElement?.scrollIntoView({behavior: 'smooth'})
        }
    }, [key, hash]);

    return(
        <div className="footer">
            <div className="main">
                <div>
                    <img src={footerImage} alt="bruschetta dish" />
                </div>
                <div>
                    <h4>Little Lemon Restaurant</h4>
                    <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to={{pathname: '/home', hash: '#about'}}>About</Link></li>
                    <li><Link to={{pathname: '/home', hash: '#menu'}}>Menu</Link></li>
                    <li><Link to="/reservations">Reservations</Link></li>
                    <li><Link to={{pathname: '/home', hash: '#menu'}}>Order&nbsp;Online</Link></li>
                    <li><Link to="/home">Login</Link></li>
                    </ul>
                </div>
                <div>
                    <h4>Contact</h4>
                    <p>1234 Restaurant Row</p>
                    <p>(000) 000-0000</p>
                    <p><a href="mailto:food@littlelemon.com">food@littlelemon.com</a></p>
                </div>
                <div>
                    <h4>Social Media</h4>
                    <p>Twitter</p>
                    <p>Instagram</p>
                    <p>TikTok</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;