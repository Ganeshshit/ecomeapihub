// / src/components / layout / Header / Navigation.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const navigationLinks = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/docs', label: 'Documentation', icon: '📚' },
    { path: '/playground', label: 'Playground', icon: '🚀' },
    { path: '/sdks', label: 'SDKs', icon: '⚡' },
    { path: '/pricing', label: 'Pricing', icon: '💎' }
];

const Navigation = ({ currentPath }) => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                {navigationLinks.map((link) => (
                    <li key={link.path} className={styles.navItem}>
                        <Link
                            to={link.path}
                            className={`${styles.navLink} ${currentPath === link.path ? styles.active : ''
                                }`}
                        >
                            <span className={styles.navIcon}>{link.icon}</span>
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;