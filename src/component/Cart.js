import React, { useState } from 'react';
import CartDiv from './CartDiv';
import GetNum from './CartDiv';

const Cart = ({ items }) => {
    const [total, setTotal] = useState(0);
    // console.log(GetNum);
    return (
        <div className="dishes-container">
            <div className="item-place">
                <center>
                    <h1>Here is your choices</h1>
                </center>
            </div>
            <br />
            <div className="container container-dishes">
                {items.map(s => (
                    <CartDiv item={s} key={s.id} />
                ))}
            </div>
            <hr />
            <div className="sub-total">
                <div className="sub-total-name">
                    <h2>Price to pay:</h2>
                </div>
                <div className="sub-total-price">
                    <h5>
                        <b>$8.00</b>
                    </h5>
                </div>
                <div className="pay-button">
                    <a href="#" className="btn btn-outline-success">
                        Place Order
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Cart;
