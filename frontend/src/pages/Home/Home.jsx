import React from 'react';
import { SEOHead } from '../../components/common/SEO';
import { Hero } from '../../components/home/Hero';
import { Features } from '../../components/home/Features';
import { QuickDemo } from '../../components/home/QuickDemo';
import { Testimonials } from '../../components/home/Testimonials';
import { CallToAction } from '../../components/home/CTA';
import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.homePage}>
            <SEOHead
                title="E-Commerce API Platform - Ready-to-Use APIs for Developers"
                description="Complete e-commerce API platform with authentication, products, cart, orders, and payments. Copy-paste ready endpoints for frontend developers."
                keywords="ecommerce api, developer apis, rest api, frontend development, react apis"
            />

            <main className={styles.main}>
                <Hero />
                <Features />
                <QuickDemo />
                <Testimonials />
                <CallToAction />
            </main>
        </div>
    );
};

export default Home;