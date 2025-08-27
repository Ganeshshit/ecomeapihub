import React, { useState, useEffect } from 'react';
import { Button } from '../../ui/Button';
import { CodeBlock } from '../../ui/CodeBlock';
import { Badge } from '../../ui/Badge';
import styles from './Hero.module.css';

const Hero = () => {
    const [currentExample, setCurrentExample] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    const codeExamples = [
        {
            title: "Authentication",
            code: `// Login user
const response = await fetch('/api/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: 'user@example.com',
    password: 'password123'
  })
});

const { token, user } = await response.json();
localStorage.setItem('token', token);`,
            language: "javascript"
        },
        {
            title: "Products",
            code: `// Get all products
const products = await fetch('/api/products?page=1&limit=10', {
  headers: {
    'Authorization': \`Bearer \${token}\`
  }
}).then(res => res.json());

console.log(products); // { products: [...], total: 50 }`,
            language: "javascript"
        },
        {
            title: "Cart Management",
            code: `// Add to cart
await fetch('/api/cart/add', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': \`Bearer \${token}\`
  },
  body: JSON.stringify({
    productId: '60f7b1b3b3f4b40015e4b123',
    quantity: 2
  })
});`,
            language: "javascript"
        }
    ];

    useEffect(() => {
        setIsVisible(true);
        const interval = setInterval(() => {
            setCurrentExample((prev) => (prev + 1) % codeExamples.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const scrollToFeatures = () => {
        document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className={`${styles.hero} ${isVisible ? styles.visible : ''}`}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.textContent}>
                        <div className={styles.badges}>
                            <Badge variant="primary" size="sm">🚀 Ready to Use</Badge>
                            <Badge variant="secondary" size="sm">✨ No Backend Required</Badge>
                        </div>

                        <h1 className={styles.title}>
                            <span className={styles.gradient}>Complete E-Commerce APIs</span>
                            <br />
                            for Frontend Developers
                        </h1>

                        <p className={styles.subtitle}>
                            Skip the backend complexity. Get production-ready APIs for authentication,
                            products, cart, orders, and payments. Just copy, paste, and start building
                            your next e-commerce application.
                        </p>

                        <div className={styles.stats}>
                            <div className={styles.stat}>
                                <span className={styles.statNumber}>20+</span>
                                <span className={styles.statLabel}>Ready APIs</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.statNumber}>5min</span>
                                <span className={styles.statLabel}>Setup Time</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.statNumber}>100%</span>
                                <span className={styles.statLabel}>Frontend Focus</span>
                            </div>
                        </div>

                        <div className={styles.actions}>
                            <Button
                                variant="primary"
                                size="lg"
                                onClick={scrollToFeatures}
                                className={styles.primaryBtn}
                            >
                                Start Building →
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                onClick={() => window.open('/playground', '_blank')}
                                className={styles.secondaryBtn}
                            >
                                Try Playground
                            </Button>
                        </div>

                        <div className={styles.features}>
                            <span>🔐 JWT Auth</span>
                            <span>🛒 Cart & Orders</span>
                            <span>💳 Payments</span>
                            <span>⚡ Real-time</span>
                        </div>
                    </div>

                    <div className={styles.codeSection}>
                        <div className={styles.codeHeader}>
                            <div className={styles.tabs}>
                                {codeExamples.map((example, index) => (
                                    <button
                                        key={index}
                                        className={`${styles.tab} ${currentExample === index ? styles.active : ''}`}
                                        onClick={() => setCurrentExample(index)}
                                    >
                                        {example.title}
                                    </button>
                                ))}
                            </div>
                            <Badge variant="success" size="xs">Live API</Badge>
                        </div>

                        <div className={styles.codeContainer}>
                            <CodeBlock
                                code={codeExamples[currentExample].code}
                                language={codeExamples[currentExample].language}
                                showLineNumbers={false}
                                className={styles.codeBlock}
                            />
                        </div>

                        <div className={styles.codeFooter}>
                            <span className={styles.endpoint}>
                                🌍 https://api.ecommerce-platform.dev
                            </span>
                            <Button variant="ghost" size="sm">
                                Copy Endpoint
                            </Button>
                        </div>
                    </div>
                </div>

                <div className={styles.backgroundElements}>
                    <div className={styles.gridPattern}></div>
                    <div className={styles.floatingElement1}></div>
                    <div className={styles.floatingElement2}></div>
                    <div className={styles.floatingElement3}></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;