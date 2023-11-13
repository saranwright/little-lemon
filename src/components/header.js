import '../App.css';
import Logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <div className="headerLogo"><Link to="/home"><img src={Logo} alt="Little Lemon Logo" /></Link></div>
    );
}

export default Header;