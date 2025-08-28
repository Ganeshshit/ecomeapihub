// src/components/layout/Layout/DocsLayout.jsx
import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
// import { Sidebar } from '../Sidebar';

import styles from './Layout.module.css';

const DocsLayout = ({ children, className = '' }) => {
    return (
        <div className={`${styles.docsLayout} ${className}`}>
            <Header />
            <div className={styles.docsContainer}>
                {/* <Sidebar /> */}
                <main className={styles.docsMain}>
                    {children}
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default DocsLayout;