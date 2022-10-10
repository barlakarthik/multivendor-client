import React from 'react';
import Footer from '../../footer/Footer';
import Header from '../../header/Header';
import Latest from '../../latest/Latest';
import Slider from '../../slider/Slider';
import './Home.css';
const Home = () => {
    return (
        <div className='wrapper'>
            <header className='header-container'>
                <Header />
            </header>
            <main className='main-container'>
                <Slider />
                <Latest />
            </main>
            <footer className='footer-container'>
                <Footer />
            </footer>
        </div>
    )
}

export default Home