import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
const Welcome = ({ bestDishes }) => {
    return (
        <>
            <div
                id="myCarousel"
                className="carousel slide dishes"
                data-ride="carousel"
            >
                {bestDishes.map(s => (
                    <div key={s.id}>
                        <ul className="carousel-indicators">
                            <li
                                data-target="#myCarousel"
                                data-slide-to={s.id}
                            ></li>
                        </ul>
                        <div className="dish-summury" key={s.id}>
                            <div className="container left-welcome">
                                <div className="left-welcome-desc">
                                    <h4>One Special Dish</h4>
                                    <h2>{s.name}</h2>
                                    <div className="desc">
                                        <p>{s.desc}</p>
                                    </div>
                                    <div className="order-button">
                                        <button
                                            type="button"
                                            className="btn btn-outline-danger option-button"
                                        >
                                            Order
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="right-welcome my-5 mx-5">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img
                                            src={s.image}
                                            alt="khana"
                                            className="image-welcome"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <a
                            className="carousel-control-prev"
                            href="#myCarousel"
                            data-slide="prev"
                        >
                            <span className="carousel-control-prev-icon">
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </span>
                        </a>
                        <a
                            className="carousel-control-next"
                            href="#myCarousel"
                            data-slide="next"
                        >
                            <span className="carousel-control-next-icon">
                                <FontAwesomeIcon icon={faChevronRight} />
                            </span>
                        </a>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Welcome;
