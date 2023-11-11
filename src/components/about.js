import '../App.css';
import Owners from '../assets/Owners.png';

function About(){
    return(
        <div className="about">
            <div className="info">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>&nbsp;</p>
                <p><a id="about"></a>Mario and Adrian are two best friends who moved to Chicago to pursue their shared dream of owning a restaurant. They both grew up surrounded by food and family, and they developed a deep love for Mediterranean cuisine.</p>
                <p>&nbsp;</p>
                <p>Today, Little Lemon is a thriving restaurant that is known for its delicious food, friendly service, and warm atmosphere. Mario and Adrian are proud to be able to share their love of Mediterranean cuisine with the people of Chicago, and they are committed to providing their customers with an unforgettable dining experience.</p>
            </div>
            <div>
                <img src={Owners} alt="Mario and Adrian, owners of Little Lemon" />
            </div>
        </div>
    );
}

export default About;