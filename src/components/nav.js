import '../App.css';
import logo from '../assets/Logo.svg';
import hamburger from '../assets/hamburger.png';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function Nav(){

    const {hash, key} = useLocation()
        useEffect(()=>{
            if(hash){
            const targetElement = document.getElementById(hash.substring(1))
                targetElement?.scrollIntoView({behavior: 'smooth'})
            }
        }, [key, hash]);

    function toggleNav() {
        if (document.getElementById("mobileNav").checked == true) {
            document.getElementById("topNav").style.height = "180px";
        } else {
            document.getElementById("topNav").style.height = "1px";
        }
    }

    return(
        <nav className="topNav" id="topNav">
            <input type="checkbox" id="mobileNav" onClick={toggleNav}></input>
            <label htmlFor="mobileNav"><img src={hamburger} alt="menu icon"/></label>
            <ul className="navContent">
                <li><Link to="/home"><img src={logo} alt="Little Lemon Logo" /></Link></li>
                <li><Link to="/home">HOME</Link></li>
                <li><Link to={{pathname: '/home', hash: '#about'}}>ABOUT</Link></li>
                <li><Link to={{pathname: '/home', hash: '#menu'}}>MENU</Link></li>
                <li><Link to="/reservations">RESERVATIONS</Link></li>
                <li><Link to={{pathname: '/home', hash: '#menu'}}>ORDER&nbsp;ONLINE</Link></li>
                <li><Link to="/home">LOGIN</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;