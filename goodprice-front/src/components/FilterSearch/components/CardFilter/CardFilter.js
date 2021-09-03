import React from 'react';
import { 
    Card
} from 'react-bootstrap';
import './CardFilter.scss';

const CardFilter = () => {

    return (
        <div className="filter-vertical">
            <Card border-color="primary" className="filtercard">
                <Card.Body>
                    <Card.Title>Price</Card.Title>
                    <div>
                        <input type="radio" id="100d" name="price" value="$100" />
                        <label for="100d">Up to $100</label>
                    </div>

                    <div>
                        <input type="radio" id="300d" name="price" value="$300" />
                        <label for="300d">$100 to $300</label>
                    </div>

                    <div>
                        <input type="radio" id="500d" name="price" value="$500" />
                        <label for="500d">$300 to $500</label>
                    </div>

                    <div>
                        <input type="radio" id="1000d" name="price" value="$1000" />
                        <label for="1000d">$500 to $1000</label>
                    </div>

                    <div>
                        <input type="radio" id="over1000d" name="price" value="$2000" />
                        <label for="over1000d">Over $1000</label>
                    </div>

                    <div className="rangebar">
                        <input type="text" placeholder="$ Min" className="pricerange" />
                        - &nbsp;&nbsp;
                        <input type="text" placeholder="$ Max" className="pricerange" />
                    </div>
                </Card.Body>
            </Card>
            <Card border-color="primary" className="filtercard">
                <Card.Body>
                    <Card.Title>Condition</Card.Title>
                    <div>
                        <input type="checkbox" id="new" name="condition" value="new" />
                        <label for="new">New</label>
                    </div>

                    <div>
                        <input type="checkbox" id="used" name="condition" value="used" />
                        <label for="used">Used</label>
                    </div>
                </Card.Body>
            </Card>
            <Card border-color="primary" className="filtercard">
                <Card.Body>
                    <Card.Title>Delivery</Card.Title>
                    <div>
                        <input type="checkbox" id="free" name="delivery" value="free" />
                        <label for="free">Free Delivery</label>
                    </div>
                </Card.Body>
            </Card>
            <Card border-color="primary" className="filtercard">
                <Card.Body>
                    <Card.Title>Department</Card.Title>
                    <div>
                        <input type="checkbox" id="kids" name="department" value="kids" />
                        <label for="kids">Kids</label>
                    </div>

                    <div>
                        <input type="checkbox" id="women" name="department" value="women" />
                        <label for="women">Women</label>
                    </div>

                    <div>
                        <input type="checkbox" id="men" name="department" value="men" />
                        <label for="men">Men</label>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default CardFilter;
