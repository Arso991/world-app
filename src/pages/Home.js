import React from 'react';
import Header from '../components/Header';
import Countries from '../components/Countries';

const Home = () => {
    return (
        <div>
            <Header />
            <h1 className='title' >Welcom in your world</h1>
            <Countries />
        </div>
    );
};

export default Home;