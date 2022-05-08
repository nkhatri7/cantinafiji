import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as InstagramIcon } from '../../assets/instagram-icon.svg';
import { ReactComponent as FacebookIcon } from '../../assets/facebook-icon.svg';
import Header from '../../components/Header/Header';
import './Home.scss';

const Home = () => {
  return (
    <div className="home">
        <div className="landing-page-wrapper">
            <Header isLandingPage={true} currentPage="Home" />
            <main>
                <h1>Experience Fiji's Own Mexico</h1>
                <div className="landing-page-btns-container flex-centre">
                    <Link to="/" className='secondary-cta'>View Menu</Link>
                    <Link to="/" className='cta'>Book A Table</Link>
                </div>
            </main>
            <footer className='flex-column-centre'>
                <p className='landing-page-footer-text'>Port Denarau, Nadi, Fiji</p>
                <p className='landing-page-footer-text'>
                    <a href="mailto:info@cantinafiji.com">info@cantinafiji.com</a>
                    <span className="separator">|</span>
                    +679 8922943
                </p>
                <p className="landing-page-footer-text">
                    MON-SUN 11AM-9:30PM
                </p>
                <p className="landing-page-footer-text">
                    (open for takeaway and delivery too)
                </p>
                <div className="socials-container flex-centre">
                    <a 
                        href="https://www.instagram.com/cantinafiji" 
                        target="_blank" 
                        rel='noopener noreferrer'
                        aria-label='Follow Cantina Fiji on Instagram'
                        className='social-icon'
                    >
                        <InstagramIcon />
                    </a>
                    <a 
                        href="https://www.facebook.com/cantinafiji/" 
                        target="_blank" 
                        rel='noopener noreferrer'
                        aria-label='Follow Cantina Fiji on Facebook'
                        className='social-icon'
                    >
                        <FacebookIcon />
                    </a>
                </div>
            </footer>
        </div>
    </div>
  );
}

export default Home;
