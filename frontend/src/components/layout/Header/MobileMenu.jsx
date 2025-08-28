// / src/components / layout / Header / MobileMenu.jsx
import React from 'react';
import { Link } from 'react-router-dom';
// import  Button  from '../../ui/Button';
import { Button } from '../../ui/Button';
import styles from './Header.module.css';

const navigationLinks = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/docs', label: 'Documentation', icon: '📚' },
    { path: '/playground', label: 'Playground', icon: '🚀' },
    { path: '/sdks', label: 'SDKs', icon: '⚡' },
    { path: '/pricing', label: 'Pricing', icon: '💎' }
];

const MobileMenu = ({ isOpen, onClose, currentPath }) => {
    return (
        <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
            <div className={styles.mobileMenuContent}>
                <nav className={styles.mobileNav}>
                    {navigationLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`${styles.mobileNavLink} ${currentPath === link.path ? styles.active : ''
                                }`}
                            onClick={onClose}
                        >
                            <span className={styles.navIcon}>{link.icon}</span>
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className={styles.mobileActions}>
                    <Button variant="outline" size="md" className={styles.mobileBtn}>
                        Login
                    </Button>
                    <Button variant="primary" size="md" className={styles.mobileBtn}>
                        Get Started
                    </Button>
                </div>

                <div className={styles.mobileFooter}>
                    <span>Made with ❤️ for developers</span>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;
