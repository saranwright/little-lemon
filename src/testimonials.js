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
                        <p>S. Jones</p>
                    </div>
                    <div className="review">
                        “Little Lemon is the best Mediterranean restaurant in Chicago! The food is always fresh and delicious, and the service is impeccable.”
                    </div>
                </div>
                <div className="ratingBox">
                    <p><img src={Star} alt="star" /><img src={Star} alt="star" /><img src={Star} alt="star" /><img src={Star} alt="star" /></p>
                        <div className="customer">
                            <img src={Customer} alt="user icon"/>
                            <p>David Smith</p>
                        </div>
                        <div className="review">
                            “I recently had dinner at Little Lemon and I was blown away! The food was even better than I expected.”
                        </div>
                </div>
                <div className="ratingBox">
                    <p><img src={Star} alt="star" /><img src={Star} alt="star" /><img src={Star} alt="star" /><img src={Star} alt="star" /><img src={Star} alt="star" /></p>
                        <div className="customer">
                            <img src={Customer} alt="user icon"/>
                            <p>Emily Brown</p>
                        </div>
                        <div className="review">
                            “I've been to Little Lemon several times and I've always had a great experience. The food is consistently delicious and the service is always top-notch.”
                        </div>
                </div>
                <div className="ratingBox">
                    <p><img src={Star} alt="star" /><img src={Star} alt="star" /><img src={Star} alt="star" /><img src={Star} alt="star" /></p>
                        <div className="customer">
                            <img src={Customer} alt="user icon"/>
                            <p>M. Williams</p>
                        </div>
                        <div className="review">
                            “I highly recommend Little Lemon to anyone looking for a delicious and authentic Mediterranean meal in Chicago. You won't be disappointed!”
                        </div>
                </div>

            </div>
        </div>
    );
}

export default Testimonials;