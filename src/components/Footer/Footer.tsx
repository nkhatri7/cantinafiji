import React from 'react';
import './Footer.scss';
import cantinaLogo from '../../assets/cantina-logo-white.png';

const Footer = () => {
    return (
        <footer className='website-footer'>
            <img src={cantinaLogo} alt="Cantina Logo" className='footer-logo' />
            <section className='flex-centre'>
                <a 
                    href="mailto:info@cantinafiji.com" 
                    className='footer-link footer-text'
                >
                    info@cantinafiji.com
                </a>
                <span className="separator">|</span>
                <p className='footer-text'>+679 8922943</p>
            </section>
        </footer>
    )
}

export default Footer;
