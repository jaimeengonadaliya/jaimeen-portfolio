import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', to: 'hero' },
        { name: 'AboutMe', to: 'about' },
        { name: 'Education', to: 'education' },
        { name: 'Skills', to: 'skills' },
        { name: 'Services', to: 'services' },
        { name: 'Projects', to: 'projects' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <motion.header
            className={`navbar-wrapper ${scrolled ? 'nav-scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <nav className="navbar glass-pill">
                <Link to="hero" smooth={true} duration={500} className="logo mono-tag">
                    &lt;JG /&gt;
                </Link>

                <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            spy={true}
                            activeClass="active"
                            className="mono-tag nav-link-item"
                            onClick={() => setMenuOpen(false)}
                        >
                            <span className="bracket">&#123; </span>
                            {link.name === 'Home' ? 'Home' : `/${link.name}`}
                            <span className="bracket"> &#125;</span>
                        </Link>
                    ))}
                </div>

                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
                </div>
            </nav>
        </motion.header>
    );
};

export default Navbar;
