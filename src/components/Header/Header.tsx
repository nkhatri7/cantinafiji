import React, { useRef, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import blackLogo from '../../assets/cantina-logo-black.png';
import whiteLogo from '../../assets/cantina-logo-white.png';
import './Header.scss';

type HeaderProps = {
    isLandingPage: boolean,
    currentPage: string
};

type NavItem = {
    link: string,
    page: string
};

const Header = ({ isLandingPage, currentPage }: HeaderProps) => {

    const menuBtn = useRef<HTMLButtonElement>(null);
    const nav = useRef<HTMLElement>(null);

    const handleMenuToggle = () => {
        menuBtn.current?.classList.toggle('menu-btn-open');
        nav.current?.classList.toggle('nav-open');
    }

    const NavLink = ({ link, page }: NavItem): ReactElement => (
        <li className="nav-item">
            <Link 
                to={link} 
                className={`nav-link ${page === currentPage ? 'current-nav-link' : ''}`}
                onClick={handleMenuToggle}
            >
                {page}
            </Link>
        </li>
    ); 

    return (
        <header className='space-between'>
            <Link to='/'>
                <img src={isLandingPage ? whiteLogo : blackLogo} alt="Cantina Logo" className="logo" />
            </Link>
            <button className="menu-btn" aria-label='Menu' ref={menuBtn} onClick={handleMenuToggle}>
                <span className="hidden" aria-hidden="true">Menu</span>
            </button>
            <nav className='nav' ref={nav}>
                <ul className='flex-column-centre'>
                    <NavLink link='/' page='Home' />
                    <NavLink link='/' page='About Us' />
                    <NavLink link='/' page='Menu' />
                    <NavLink link='/' page="What's On" />
                    <NavLink link='/' page='Reservations' />
                    <NavLink link='/' page='Contact' />
                </ul>
            </nav>
        </header>
    );
}

export default Header;
