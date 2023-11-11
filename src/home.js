import './App.css';
import Hero from './hero';
import Specials from './specials';
import Testimonials from './testimonials';
import About from './about';


function Home(){

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