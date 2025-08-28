// src/components/layout/Header/ThemeToggle.jsx
import React, { useState, useEffect } from 'react';
import { Button } from '../../ui/Button';
import styles from './Header.module.css';

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Check for saved theme preference or default to light mode
        const savedTheme = localStorage.getItem('theme') || 'light';
        const isDarkMode = savedTheme === 'dark';
        setIsDark(isDarkMode);
        document.documentElement.dataset.theme = savedTheme;
    }, []);

    const toggleTheme = () => {
        const newTheme = isDark ? 'light' : 'dark';
        setIsDark(!isDark);
        document.documentElement.dataset.theme = newTheme;
        localStorage.setItem('theme', newTheme);
    };

    return (
        <Button
            variant="ghost"
            size="sm"
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        >
            <span className={styles.themeIcon}>
                {isDark ? '☀️' : '🌙'}
            </span>
        </Button>
    );
};

export default ThemeToggle;