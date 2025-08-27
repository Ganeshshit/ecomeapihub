import React, { useState, useEffect, useRef } from 'react';
import { Button } from '../../ui/Button';
import { Badge } from '../../ui/Badge';
import { CodeBlock } from '../../ui/CodeBlock';
import styles from './CTA.module.css';

const CallToAction = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubscribed, setIsSubscribed] = useState(false);
    const sectionRef = useRef(null);

    const quickStartCode = `// 1. Install the SDK
npm install @ecommerce-api/sdk

// 2. Initialize with your API key
import { ECommerceAPI } from '@ecommerce-api/sdk';

const api = new ECommerceAPI({
  apiKey: 'your-api-key-here',
  environment: 'production' // or 'sandbox'
});

// 3. Start building!
const products = await api.products.getAll();
console.log('Products:', products);

// Ready to build your e-commerce app! 🚀`;

    const features = [
        {
            icon: '⚡',
            title: 'Instant Setup',
            description: 'Get started in under 5 minutes'
        },
        {
            icon: '🔒',
            title: 'Enterprise Security',
            description: 'Bank-level encryption & compliance'
        },
        {
            icon: '📈',
            title: 'Auto Scaling',
            description: 'Handles millions of requests'
        },
        {
            icon: '🛠️',
            title: 'Developer Tools',
            description: 'SDKs, docs, and playground'
        },
        {
            icon: '💰',
            title: 'Flexible Pricing',
            description: 'Free tier + pay as you grow'
        },
        {
            icon: '🎯',
            title: '24/7 Support',
            description: 'Expert help when you need it'
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
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

    const handleEmailSubmit = async (e) => {
        e.preventDefault();
        if (!email) return;

        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubscribed(true);
        setIsSubmitting(false);
        setEmail('');

        // Reset success state after 3 seconds
        setTimeout(() => setIsSubscribed(false), 3000);
    };

    return (
        <section
            ref={sectionRef}
            className={`${styles.cta} ${isVisible ? styles.visible : ''}`}
        >
            <div className={styles.container}>
                <div className={styles.mainContent}>
                    <div className={styles.leftSection}>
                        <div className={styles.header}>
                            <Badge variant="primary" size="sm" className={styles.badge}>
                                🚀 Start Building Today
                            </Badge>

                            <h2 className={styles.title}>
                                Transform Your Ideas Into
                                <span className={styles.highlight}> E-Commerce Reality</span>
                            </h2>

                            <p className={styles.subtitle}>
                                Join thousands of developers who've accelerated their projects with our
                                production-ready APIs. No backend complexity, just clean, powerful endpoints
                                that scale with your business.
                            </p>
                        </div>

                        <div className={styles.benefits}>
                            <div className={styles.benefitsList}>
                                <div className={styles.benefit}>
                                    <span className={styles.checkIcon}>✅</span>
                                    <span>Free tier with generous limits</span>
                                </div>
                                <div className={styles.benefit}>
                                    <span className={styles.checkIcon}>✅</span>
                                    <span>Complete e-commerce functionality</span>
                                </div>
                                <div className={styles.benefit}>
                                    <span className={styles.checkIcon}>✅</span>
                                    <span>Production-ready from day one</span>
                                </div>
                                <div className={styles.benefit}>
                                    <span className={styles.checkIcon}>✅</span>
                                    <span>Comprehensive documentation</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.actions}>
                            <div className={styles.primaryActions}>
                                <Button
                                    variant="primary"
                                    size="lg"
                                    className={styles.getStartedBtn}
                                >
                                    Get API Key Free →
                                </Button>

                                <Button
                                    variant="outline"
                                    size="lg"
                                    className={styles.docsBtn}
                                >
                                    📚 View Documentation
                                </Button>
                            </div>

                            <div className={styles.secondaryActions}>
                                <button className={styles.playgroundBtn}>
                                    <span className={styles.playIcon}>▶</span>
                                    Try Interactive Playground
                                </button>

                                <button className={styles.scheduleBtn}>
                                    <span className={styles.calendarIcon}>📅</span>
                                    Schedule Demo Call
                                </button>
                            </div>
                        </div>

                        <div className={styles.socialProof}>
                            <div className={styles.stats}>
                                <div className={styles.statItem}>
                                    <span className={styles.statNumber}>50K+</span>
                                    <span className={styles.statLabel}>API Calls/day</span>
                                </div>
                                <div className={styles.statItem}>
                                    <span className={styles.statNumber}>2.5K+</span>
                                    <span className={styles.statLabel}>Developers</span>
                                </div>
                                <div className={styles.statItem}>
                                    <span className={styles.statNumber}>99.9%</span>
                                    <span className={styles.statLabel}>Uptime</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.rightSection}>
                        <div className={styles.codeDemo}>
                            <div className={styles.codeDemoHeader}>
                                <div className={styles.windowControls}>
                                    <span className={styles.control}></span>
                                    <span className={styles.control}></span>
                                    <span className={styles.control}></span>
                                </div>
                                <span className={styles.filename}>quick-start.js</span>
                                <Badge variant="success" size="xs">Live</Badge>
                            </div>

                            <CodeBlock
                                code={quickStartCode}
                                language="javascript"
                                showLineNumbers={true}
                                className={styles.codeBlock}
                            />

                            <div className={styles.codeDemoFooter}>
                                <span className={styles.runTime}>⚡ Ready in ~2 minutes</span>
                                <Button variant="ghost" size="sm">
                                    Copy Code
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.featuresGrid}>
                    <div className={styles.gridHeader}>
                        <h3 className={styles.gridTitle}>Everything You Need to Succeed</h3>
                    </div>

                    <div className={styles.features}>
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={styles.featureItem}
                                style={{ '--delay': `${index * 0.1}s` }}
                            >
                                <div className={styles.featureIcon}>{feature.icon}</div>
                                <h4 className={styles.featureTitle}>{feature.title}</h4>
                                <p className={styles.featureDescription}>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.newsletter}>
                    <div className={styles.newsletterContent}>
                        <div className={styles.newsletterHeader}>
                            <h3 className={styles.newsletterTitle}>
                                Stay Updated with New Features
                            </h3>
                            <p className={styles.newsletterSubtitle}>
                                Get notified about new APIs, features, and developer resources.
                            </p>
                        </div>

                        <form onSubmit={handleEmailSubmit} className={styles.newsletterForm}>
                            <div className={styles.inputGroup}>
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={styles.emailInput}
                                    required
                                />
                                <Button
                                    type="submit"
                                    variant="primary"
                                    disabled={isSubmitting || isSubscribed}
                                    className={styles.subscribeBtn}
                                >
                                    {isSubmitting ? (
                                        <div className={styles.spinner}></div>
                                    ) : isSubscribed ? (
                                        '✓ Subscribed!'
                                    ) : (
                                        'Subscribe'
                                    )}
                                </Button>
                            </div>

                            <p className={styles.privacyNote}>
                                No spam, unsubscribe at any time. We respect your privacy.
                            </p>
                        </form>
                    </div>
                </div>

                <div className={styles.finalCall}>
                    <div className={styles.finalCallContent}>
                        <h3 className={styles.finalCallTitle}>
                            Ready to Build Something Amazing?
                        </h3>
                        <p className={styles.finalCallText}>
                            Join the developer community that's building the future of e-commerce.
                        </p>
                        <Button variant="primary" size="xl" className={styles.finalCallBtn}>
                            Start Your Free Project Now 🚀
                        </Button>
                    </div>
                </div>
            </div>

            <div className={styles.backgroundElements}>
                <div className={styles.gradientOrb1}></div>
                <div className={styles.gradientOrb2}></div>
                <div className={styles.gridPattern}></div>
            </div>
        </section>
    );
};

export default CallToAction;