import './App.css';
import Customer from './assets/circle-user-light.svg';
import Star from './assets/star-light.svg';
import HalfStar from './assets/star-half-light.svg';

function Testimonials(){
    return(
        <div className="testimonials">
            <h2>Testimonials</h2>
            <div className="ratings">
                <div className="ratingBox">
                    <p><img src={Star} alt="star" /><img src={Star} alt="star" /><img src={Star} alt="star" /><img src={HalfStar} alt="star" /></p>
                    <div className="customer">
                        <img src={Customer} alt="user icon"/>
                        <p>Name</p>
                    </div>
                    <div className="review">
                        “Review text.”
                    </div>
                </div>
                <div className="ratingBox">
                    <p><img src={Star} alt="star" /><img src={Star} alt="star" /><img src={Star} alt="star" /><img src={Star} alt="star" /></p>
                        <div className="customer">
                            <img src={Customer} alt="user icon"/>
                            <p>Name</p>
                        </div>
                        <div className="review">
                            “Review text.”
                        </div>
                </div>
                <div className="ratingBox">
                    <p><img src={Star} alt="star" /><img src={Star} alt="star" /><img src={Star} alt="star" /><img src={Star} alt="star" /><img src={Star} alt="star" /></p>
                        <div className="customer">
                            <img src={Customer} alt="user icon"/>
                            <p>Name</p>
                        </div>
                        <div className="review">
                            “Review text.”
                        </div>
                </div>
                <div className="ratingBox">
                    <p><img src={Star} alt="star" /><img src={Star} alt="star" /><img src={Star} alt="star" /><img src={Star} alt="star" /></p>
                        <div className="customer">
                            <img src={Customer} alt="user icon"/>
                            <p>Name</p>
                        </div>
                        <div className="review">
                            “Review text.”
                        </div>
                </div>

            </div>
        </div>
    );
}

export default Testimonials;