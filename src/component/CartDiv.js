import React, { useState } from 'react';

const CartDiv = ({ item }) => {
    let [num, setNum] = useState(1);
    let [price, setPrice] = useState(item.price);
    let incNum = () => {
        if (num < 10) {
            setNum(Number(num) + 1);
        }
    };
    let decNum = () => {
        if (num > 0) {
            setNum(num - 1);
        }
    };
    let handleChange = e => {
        // console.log(e);
        setNum(e.target.value);
    };

    let sum = (a, b) => {
        return a * b;
    };

    return (
        <div className="card card-dish" key={item.id}>
            <img
                className="card-img-top"
                src={item.image}
                alt="Card image cap"
            />
            <div className="card-body">
                <div className="card-title-price">
                    <h5 className="card-title">{item.name}</h5>
                    <span className="price">{price}</span>
                </div>
                <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic example"
                >
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={decNum}
                    >
                        -
                    </button>
                    <input
                        type="text"
                        value={num}
                        readOnly
                        className="input-counter"
                        onChange={handleChange}
                    />
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={incNum}
                    >
                        +
                    </button>
                </div>
                <br />
                <p className="card-text">{item.desc}</p>
                <br />
                <div className="apply-remove-button-group">
                    <button
                        className="btn btn-outline-success"
                        onClick={() => {
                            setPrice(num * item.price);
                            setNum(1);
                        }}
                    >
                        Apply
                    </button>
                    <button className="btn btn-outline-danger">Remove</button>
                </div>
            </div>
        </div>
    );
};

export default CartDiv;
