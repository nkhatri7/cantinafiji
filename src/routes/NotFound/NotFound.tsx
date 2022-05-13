import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './NotFound.scss';

const NotFound = () => {
    return (
        <div className="not-found">
            <Header currentPage='Not Found' />
            <main className='flex-column-centre'>
                <h1>Oops! Page Not Found</h1>
                <p className="body-text">
                    It seems like this page doesn't exist or maybe even never 
                    existing in the first place (ouch), let us help you get 
                    back to the homepage.
                </p>
                <Link to='/' className='cta flex-centre'>Return to homepage</Link>
            </main>
            <Footer />
        </div>
    );
}

export default NotFound;
