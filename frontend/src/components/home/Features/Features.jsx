import React, { useState, useEffect, useRef } from 'react';
import  FeatureCard  from './FeatureCard';
import { Badge } from '../../ui/Badge';
import styles from './Features.module.css';

const Features = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const features = [
        {
            icon: '🔐',
            title: 'Complete Authentication',
            description: 'JWT-based auth with login, register, password reset, and role management. Ready-to-use middleware included.',
            highlights: ['JWT Tokens', 'Role-based Access', 'Password Encryption', 'Session Management'],
            code: `// Login API
POST /api/auth/login
{
  "email": "user@example.com",
  "password": "password123"
}`,
            color: 'blue'
        },
        {
            icon: '🛍️',
            title: 'Product Management',
            description: 'Full CRUD operations for products with categories, search, filtering, and inventory management.',
            highlights: ['CRUD Operations', 'Search & Filter', 'Categories', 'Inventory Tracking'],
            code: `// Get Products
GET /api/products?category=electronics&page=1

// Add Product (Admin)
POST /api/products`,
            color: 'green'
        },
        {
            icon: '🛒',
            title: 'Smart Cart System',
            description: 'Persistent cart with quantity updates, price calculations, and guest cart support.',
            highlights: ['Persistent Storage', 'Auto Calculations', 'Guest Support', 'Multi-device Sync'],
            code: `// Add to Cart
POST /api/cart/add
{
  "productId": "123",
  "quantity": 2
}`,
            color: 'purple'
        },
        {
            icon: '📦',
            title: 'Order Management',
            description: 'Complete order lifecycle from creation to delivery tracking with status updates.',
            highlights: ['Order Tracking', 'Status Updates', 'Invoice Generation', 'Email Notifications'],
            code: `// Create Order
POST /api/orders
{
  "items": [...],
  "shippingAddress": {...}
}`,
            color: 'orange'
        },
        {
            icon: '💳',
            title: 'Payment Integration',
            description: 'Stripe and PayPal ready integrations with webhook support and transaction tracking.',
            highlights: ['Stripe Integration', 'PayPal Support', 'Webhooks', 'Transaction History'],
            code: `// Process Payment
POST /api/payments/process
{
  "orderId": "123",
  "paymentMethod": "stripe"
}`,
            color: 'pink'
        },
        {
            icon: '⭐',
            title: 'Reviews & Ratings',
            description: 'User reviews with ratings, moderation, and helpful vote system for better trust.',
            highlights: ['Star Ratings', 'Review Moderation', 'Helpful Votes', 'Average Calculations'],
            code: `// Add Review
POST /api/reviews
{
  "productId": "123",
  "rating": 5,
  "comment": "Great product!"
}`,
            color: 'yellow'
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section
            id="features"
            ref={sectionRef}
            className={`${styles.features} ${isVisible ? styles.visible : ''}`}
        >
            <div className={styles.container}>
                <div className={styles.header}>
                    <Badge variant="primary" size="sm" className={styles.badge}>
                        ✨ Complete API Suite
                    </Badge>

                    <h2 className={styles.title}>
                        Everything You Need for
                        <span className={styles.highlight}> E-Commerce Success</span>
                    </h2>

                    <p className={styles.subtitle}>
                        Production-ready APIs covering every aspect of e-commerce.
                        From user authentication to payment processing, we've got you covered.
                    </p>

                    <div className={styles.stats}>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>20+</span>
                            <span className={styles.statLabel}>API Endpoints</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>99.9%</span>
                            <span className={styles.statLabel}>Uptime</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}> 100ms</span>
                            <span className={styles.statLabel}>Response Time</span>
                        </div>
                    </div>
                </div>

                <div className={styles.grid}>
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            feature={feature}
                            index={index}
                            isVisible={isVisible}
                        />
                    ))}
                </div>

                <div className={styles.footer}>
                    <div className={styles.footerContent}>
                        <h3 className={styles.footerTitle}>
                            Ready to start building?
                        </h3>
                        <p className={styles.footerSubtitle}>
                            Get started with our comprehensive documentation and interactive playground.
                        </p>
                        <div className={styles.footerActions}>
                            <button className={styles.primaryAction}>
                                View Documentation →
                            </button>
                            <button className={styles.secondaryAction}>
                                Try Playground
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.backgroundElements}>
                <div className={styles.floatingShape1}></div>
                <div className={styles.floatingShape2}></div>
                <div className={styles.gridOverlay}></div>
            </div>
        </section>
    );
};

export default Features;