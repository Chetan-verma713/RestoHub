import React, { useState } from 'react';

const Cart = ({ items }) => {
    const [total, setTotal] = useState(0);
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
                    <div className="card card-dish" key={s.id}>
                        <img
                            className="card-img-top"
                            src={s.image}
                            alt="Card image cap"
                        />
                        <div className="card-body">
                            <h5 className="card-title">{s.name}</h5>
                            <span className="price">{s.price}</span>
                            <p className="card-text">{s.desc}</p>

                            <div
                                className="btn-group"
                                role="group"
                                aria-label="Basic example"
                            >
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                >
                                    -
                                </button>
                                <input type="text" value={1} readOnly className='input-counter'/>
                                <button
                                    type="button"
                                    className="btn btn-success"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
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
