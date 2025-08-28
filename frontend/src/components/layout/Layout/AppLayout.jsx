// src/components/layout/Layout/AppLayout.jsx
import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import styles from './Layout.module.css';

const AppLayout = ({ children, className = '' }) => {
    return (
        <div className={`${styles.appLayout} ${className}`}>
            <Header />
            <main className={styles.main}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default AppLayout;