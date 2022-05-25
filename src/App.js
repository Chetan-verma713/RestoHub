import React from 'react';
import './App.css';
import Nabvar from './component/Nabvar';
import Welcome from './component/Welcome';
import Dishes from './component/Dishes';
import About from './component/About';
import Cart from './component/Cart';

function App() {
    const bestDishes = [
        {
            id: 1,
            name: 'Pizza',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sit corrupti laborum',
            image: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/vlyqnkzj0u7x4kfjlxlg',
        },
        {
            id: 2,
            name: 'Burger',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sit corrupti laborum',
            image: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/a0wuoj7u872eyvhngz4y',
        },
        {
            id: 3,
            name: 'Kadhai Paneer',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sit corrupti laborum',
            image: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/nylv65fvkk3qlwc5o3u7',
        },
    ];

    const dishes = [
        {
            id: 1,
            name: 'Pizza',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sit corrupti laborum',
            price: '$5.50',
            image: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/vlyqnkzj0u7x4kfjlxlg',
        },
        {
            id: 2,
            name: 'Burger',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sit corrupti laborum',
            price: '$2.50',
            image: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/a0wuoj7u872eyvhngz4y',
        },
        {
            id: 3,
            name: 'Kadhai Paneer',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sit corrupti laborum',
            price: '$3.50',
            image: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/nylv65fvkk3qlwc5o3u7',
        },
        {
            id: 4,
            name: 'Chawmein',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sit corrupti laborum',
            price: '$1.50',
            image: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/cwg23wja88mhk6lbasi3',
        },
        {
            id: 5,
            name: 'Matar Paneer',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sit corrupti laborum',
            price: '$4.50',
            image: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/wzvrqkidrlp4nexghtip',
        },
        {
            id: 6,
            name: 'Dosa',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sit corrupti laborum',
            price: '$5.00',
            image: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/znwi6ff5wlwvoolkhdlg',
        },
    ];

    const cart = [
        {
            id: 1,
            name: 'Pizza',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sit corrupti laborum',
            price: '$5.50',
            image: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/vlyqnkzj0u7x4kfjlxlg',
        },
        {
            id: 2,
            name: 'Burger',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sit corrupti laborum',
            price: '$2.50',
            image: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/a0wuoj7u872eyvhngz4y',
        },
    ];

    return (
        <div className="App ">
            <Nabvar />
            {/* <Welcome bestDishes={bestDishes} />
            <Dishes dishes={dishes} />
            <About /> */}
            <Cart items={cart} />
        </div>
    );
}

export default App;
