import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../ui/Button';
import { Badge } from '../../ui/Badge';
import styles from './Footer.module.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerSections = [
        {
            title: 'Product',
            links: [
                { label: 'Documentation', href: '/docs' },
                { label: 'API Playground', href: '/playground' },
                { label: 'SDKs', href: '/sdks' },
                { label: 'Status', href: '/status' },
                { label: 'Changelog', href: '/changelog' }
            ]
        },
        {
            title: 'Developers',
            links: [
                { label: 'Quick Start', href: '/docs/quick-start' },
                { label: 'API Reference', href: '/docs/api' },
                { label: 'Code Examples', href: '/docs/examples' },
                { label: 'SDKs & Libraries', href: '/sdks' },
                { label: 'Tutorials', href: '/docs/tutorials' }
            ]
        },
        {
            title: 'Company',
            links: [
                { label: 'About Us', href: '/about' },
                { label: 'Blog', href: '/blog' },
                { label: 'Careers', href: '/careers' },
                { label: 'Contact', href: '/contact' },
                { label: 'Press Kit', href: '/press' }
            ]
        },
        {
            title: 'Support',
            links: [
                { label: 'Help Center', href: '/help' },
                { label: 'Community', href: '/community' },
                { label: 'Discord', href: 'https://discord.gg/ecommerce-api' },
                { label: 'GitHub', href: 'https://github.com/ecommerce-api' },
                { label: 'Contact Support', href: '/support' }
            ]
        }
    ];

    const socialLinks = [
        { name: 'GitHub', icon: '🐙', href: 'https://github.com/ecommerce-api' },
        { name: 'Twitter', icon: '🐦', href: 'https://twitter.com/ecommerce_api' },
        { name: 'Discord', icon: '💬', href: 'https://discord.gg/ecommerce-api' },
        { name: 'LinkedIn', icon: '💼', href: 'https://linkedin.com/company/ecommerce-api' }
    ];

    return (
        <footer className={styles.footer}>
            {/* Main Footer Content */}
            <div className={styles.container}>
                {/* Footer Top Section */}
                <div className={styles.footerTop}>
                    <div className={styles.brandSection}>
                        <div className={styles.brand}>
                            <div className={styles.logoIcon}>
                                <span className={styles.logoSymbol}>⚡</span>
                            </div>
                            <div className={styles.brandInfo}>
                                <h3 className={styles.brandName}>ECommerce API</h3>
                                <Badge variant="success" size="xs">v2.0</Badge>
                            </div>
                        </div>
                        <p className={styles.brandDescription}>
                            Complete e-commerce API platform built for frontend developers.
                            Get production-ready APIs for authentication, products, cart,
                            orders, and payments in minutes.
                        </p>
                        <div className={styles.socialLinks}>
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialLink}
                                    aria-label={social.name}
                                >
                                    <span>{social.icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className={styles.ctaSection}>
                        <div className={styles.ctaContent}>
                            <h4 className={styles.ctaTitle}>Ready to start building?</h4>
                            <p className={styles.ctaDescription}>
                                Join thousands of developers using our APIs
                            </p>
                            <div className={styles.ctaActions}>
                                <Button variant="primary" size="md">
                                    Get Started Free
                                </Button>
                                <Button variant="outline" size="md">
                                    View Documentation
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Links */}
                <div className={styles.footerLinks}>
                    {footerSections.map((section) => (
                        <div key={section.title} className={styles.linkSection}>
                            <h4 className={styles.sectionTitle}>{section.title}</h4>
                            <ul className={styles.linkList}>
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        {link.href.startsWith('http') ? (
                                            <a
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.footerLink}
                                            >
                                                {link.label}
                                            </a>
                                        ) : (
                                            <Link to={link.href} className={styles.footerLink}>
                                                {link.label}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Newsletter Subscription */}
                <div className={styles.newsletter}>
                    <div className={styles.newsletterContent}>
                        <h4 className={styles.newsletterTitle}>Stay updated</h4>
                        <p className={styles.newsletterDescription}>
                            Get the latest API updates, features, and developer resources.
                        </p>
                    </div>
                    <div className={styles.newsletterForm}>
                        <div className={styles.inputGroup}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className={styles.newsletterInput}
                            />
                            <Button variant="primary" size="sm" className={styles.subscribeBtn}>
                                Subscribe
                            </Button>
                        </div>
                        <p className={styles.privacyNote}>
                            We respect your privacy. Unsubscribe at any time.
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className={styles.footerBottom}>
                <div className={styles.container}>
                    <div className={styles.bottomContent}>
                        <div className={styles.copyright}>
                            <p>&copy; {currentYear} ECommerce API. All rights reserved.</p>
                        </div>

                        <div className={styles.legalLinks}>
                            <Link to="/privacy" className={styles.legalLink}>Privacy Policy</Link>
                            <Link to="/terms" className={styles.legalLink}>Terms of Service</Link>
                            <Link to="/cookies" className={styles.legalLink}>Cookie Policy</Link>
                        </div>

                        <div className={styles.statusIndicator}>
                            <div className={styles.statusDot}></div>
                            <span className={styles.statusText}>All systems operational</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;