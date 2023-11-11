import './App.css';
import { Link } from 'react-router-dom';
import GreekSalad from './assets/greek salad.jpg';
import Bruschetta from './assets/bruschetta.jpg';
import Lemon from './assets/lemon dessert.jpg';
import Delivery from './assets/moped-solid.svg';

function Specials(){
    return(
        <div className="specials">
            <div className="main">
                <div className="specialsHeader">
                    <div>
                        <h2>Specials</h2>
                    </div>
                    <div>
                        <Link to="/" className="button">Online Menu</Link>
                    </div>
                </div>
                <div className="specialsBlocks">
                    <div className="dishes">
                        <div className="preview">
                            <img src={GreekSalad} alt="Greek Salad" />
                        </div>

                            <div className="dishesHeader">
                                <h5>Greek Salad</h5>
                                <p className="highlightText">$12.99</p>
                            </div>
                            <div className="description">
                                <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                            </div>
                            <div className="order">
                                <p><a href="/">Order a Delivery <img src={Delivery} alt="add to order" /></a></p>
                            </div>

                    </div>
                    <div className="dishes">
                        <div className="preview">
                            <img src={Bruschetta} alt="Bruschetta" />
                        </div>

                            <div className="dishesHeader">
                                <h5>Bruschetta</h5>
                                <p className="highlightText">$5.99</p>
                            </div>
                            <div className="description">
                                <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                            </div>
                            <div className="order">
                                <p><a href="/">Order a Delivery <img src={Delivery} alt="add to order" /></a></p>
                            </div>

                    </div>
                    <div className="dishes">
                        <div className="preview">
                                <img src={Lemon} alt="Lemon Dessert" />
                        </div>

                            <div className="dishesHeader">
                                <h5>Lemon Dessert</h5>
                                <p className="highlightText">$5.00</p>
                            </div>
                            <div className="description">
                                <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                            </div>
                            <div className="order">
                                <p><a href="/">Order a Delivery <img src={Delivery} alt="add to order" /></a></p>
                            </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Specials;