import React from 'react';
import { useHistory } from 'react-router-dom';

import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Cart from './Cart.js';

const Nabvar = () => {
    const renderCart = () => {
        return console.log('hello') + <Cart />;
    };
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mx-5 d-flex">
            <a className="navbar-brand" href="#">
                <h3>
                    <b>!RestoHub.</b>
                </h3>
            </a>
            <div
                className="collapse navbar-collapse d-flex justify-content-center"
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav">
                    <li className="nav-item active mx-1">
                        <button
                            type="button"
                            className="btn btn-outline-success option-button"
                        >
                            Home
                        </button>
                    </li>
                    <li className="nav-item active mx-1">
                        <button
                            type="button"
                            className="btn btn-outline-success option-button"
                        >
                            Dishes
                        </button>
                    </li>
                    <li className="nav-item active mx-1">
                        <button
                            type="button"
                            className="btn btn-outline-success option-button"
                        >
                            About
                        </button>
                    </li>
                    <li className="nav-item active mx-1">
                        <button
                            type="button"
                            className="btn btn-outline-success option-button"
                        >
                            Menu
                        </button>
                    </li>
                    <li className="nav-item active mx-1">
                        <button
                            type="button"
                            className="btn btn-outline-success option-button"
                            onClick={renderCart}
                        >
                            Check Out
                        </button>
                    </li>
                </ul>
            </div>
            <div className="toggle-icons">
                <FontAwesomeIcon icon={faUser} className="fab-icon" />
                <h4>
                    <b> user_na...</b>
                </h4>
            </div>
        </nav>
    );
};

export default Nabvar;
