import React from 'react';

const Dishes = ({ dishes }) => {
    return (
        <div className="dishes-container">
            <div className="item-place">
                <center>
                    <h1>Dishes</h1>
                </center>
            </div>
            <div className="container container-dishes">
                {dishes.map(s => (
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

                            <a href="#" className="btn btn-outline-danger">
                                Add to cart
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dishes;
