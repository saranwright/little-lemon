import './App.css';
import Owners from './assets/Owners.png';

function About(){
    return(
        <div className="about">
            <div className="info">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>&nbsp;</p>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <p>&nbsp;</p>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
            </div>
            <div>
                <img src={Owners} alt="Mario and Adrian, owners of Little Lemon" />
            </div>
        </div>
    );
}

export default About;