import './App.css';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Hero from './hero';
import Specials from './specials';
import Testimonials from './testimonials';
import About from './about';


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
            <Specials />
            <Testimonials />
            <About />
        </div>
    );
}

export default Home;