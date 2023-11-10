import './App.css';
import logo from './assets/Logo.svg';
import hamburger from './assets/hamburger.png';

function Nav(){
    return(
        <nav className="topNav">
            <input type="checkbox" id="mobileNav"></input>
            <label htmlFor="mobileNav"><img src={hamburger} alt="menu icon"></img></label>
            <ul className="navContent">
                <li><img src={logo} alt="Little Lemon Logo" /></li>
                <li><a href="/">HOME</a></li>
                <li><a href="/about">ABOUT</a></li>
                <li><a href="/menu">MENU</a></li>
                <li><a href="/reservations">RESERVATIONS</a></li>
                <li><a href="/order-online">ORDER&nbsp;ONLINE</a></li>
                <li><a href="/login">LOGIN</a></li>
            </ul>
        </nav>
    );
}

export default Nav;