// src/components/layout/Header/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../../ui/Button';
import { Badge } from '../../ui/Badge';
import Navigation from './Navigation';
import MobileMenu from './MobileMenu';
import ThemeToggle from './ThemeToggle';
import styles from './Header.module.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                {/* Logo Section */}
                <div className={styles.logo}>
                    <Link to="/" className={styles.logoLink}>
                        <div className={styles.logoIcon}>
                            <span className={styles.logoSymbol}>⚡</span>
                        </div>
                        <div className={styles.logoText}>
                            <span className={styles.logoName}>ECommerce API</span>
                            <Badge variant="success" size="xs" className={styles.logoBadge}>
                                v2.0
                            </Badge>
                        </div>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <Navigation currentPath={location.pathname} />

                {/* Actions Section */}
                <div className={styles.actions}>
                    <ThemeToggle />

                    <div className={styles.authButtons}>
                        <Button variant="ghost" size="sm">
                            Login
                        </Button>
                        <Button variant="primary" size="sm" className={styles.ctaButton}>
                            Get Started
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className={styles.mobileMenuBtn}
                        onClick={toggleMobileMenu}
                        aria-label="Toggle mobile menu"
                    >
                        <span className={`${styles.hamburger} ${isMobileMenuOpen ? styles.open : ''}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={closeMobileMenu}
                currentPath={location.pathname}
            />

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className={styles.overlay} onClick={closeMobileMenu}></div>
            )}
        </header>
    );
};

export default Header;