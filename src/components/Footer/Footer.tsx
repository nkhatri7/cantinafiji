import React from 'react';
import './Footer.scss';
import cantinaLogo from '../../assets/cantina-logo-white.png';
import { ReactComponent as InstagramIcon } from '../../assets/instagram-icon.svg';
import { ReactComponent as FacebookIcon } from '../../assets/facebook-icon.svg';

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
            <section className="footer-socials flex-centre">
                <a 
                    href="https://www.instagram.com/cantinafiji" 
                    target="_blank" 
                    rel='noopener noreferrer'
                    aria-label='Follow Cantina Fiji on Instagram'
                    className='footer-link footer-social-link'
                >
                    <InstagramIcon />
                </a>
                <a 
                    href="https://www.facebook.com/cantinafiji/" 
                    target="_blank" 
                    rel='noopener noreferrer'
                    aria-label='Follow Cantina Fiji on Facebook'
                    className='footer-link footer-social-link'
                >
                    <FacebookIcon />
                </a>
            </section>
        </footer>
    )
}

export default Footer;
