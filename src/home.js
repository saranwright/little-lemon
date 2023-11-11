import './App.css';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Hero from './hero';


function Home(){

    const {hash, key} = useLocation()
        useEffect(()=>{
            if(hash){
            const targetElement = document.getElementById(hash.substring(1))
                targetElement?.scrollIntoView({behavior: 'smooth'})
            }
        }, [key, hash])


    return(

        <div className="home">
            <Hero />
            <div className="main">
            <Link to={{pathname: '/home', hash: '#test'}}>Test</Link>
            <p>One</p>
            <p>Two</p>
            <p>Three</p>
            <p>Four</p>
            <a href="#test" className="button" id="test">Text</a>
            </div>
        </div>
    );
}

export default Home;