import React, { useState, useEffect } from 'react';
import { CodeBlock } from '../../ui/CodeBlock';
import { Button } from '../../ui/Button';
import { Badge } from '../../ui/Badge';
import { Tabs } from '../../ui/Tabs';
import styles from './QuickDemo.module.css';

const QuickDemo = () => {
    const [activeDemo, setActiveDemo] = useState('auth');
    const [isRunning, setIsRunning] = useState(false);
    const [response, setResponse] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    const demos = {
        auth: {
            title: 'User Authentication',
            description: 'Complete login system with JWT tokens',
            request: `// Login Request
fetch('https://api.ecommerce-platform.dev/auth/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email: 'demo@example.com',
    password: 'demo123'
  })
})
.then(res => res.json())
.then(data => console.log(data));`,
            mockResponse: {
                success: true,
                message: 'Login successful',
                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
                user: {
                    id: '60f7b1b3b3f4b40015e4b123',
                    email: 'demo@example.com',
                    name: 'Demo User',
                    role: 'customer'
                },
                expiresIn: '7d'
            }
        },
        products: {
            title: 'Product Listing',
            description: 'Fetch products with pagination and filters',
            request: `// Get Products with Filters
fetch('https://api.ecommerce-platform.dev/products', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer ' + token
  }
})
.then(res => res.json())
.then(data => console.log(data));`,
            mockResponse: {
                success: true,
                products: [
                    {
                        id: '60f7b1b3b3f4b40015e4b124',
                        name: 'Premium Headphones',
                        price: 199.99,
                        category: 'Electronics',
                        inStock: true,
                        rating: 4.8
                    },
                    {
                        id: '60f7b1b3b3f4b40015e4b125',
                        name: 'Wireless Mouse',
                        price: 49.99,
                        category: 'Electronics',
                        inStock: true,
                        rating: 4.6
                    }
                ],
                pagination: {
                    page: 1,
                    limit: 10,
                    total: 150,
                    pages: 15
                }
            }
        },
        cart: {
            title: 'Cart Operations',
            description: 'Add items to cart and manage quantities',
            request: `// Add Item to Cart
fetch('https://api.ecommerce-platform.dev/cart/add', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + token
  },
  body: JSON.stringify({
    productId: '60f7b1b3b3f4b40015e4b124',
    quantity: 2
  })
})
.then(res => res.json())
.then(data => console.log(data));`,
            mockResponse: {
                success: true,
                message: 'Item added to cart',
                cart: {
                    id: '60f7b1b3b3f4b40015e4b126',
                    items: [
                        {
                            product: {
                                id: '60f7b1b3b3f4b40015e4b124',
                                name: 'Premium Headphones',
                                price: 199.99
                            },
                            quantity: 2,
                            subtotal: 399.98
                        }
                    ],
                    total: 399.98,
                    itemCount: 2
                }
            }
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        const section = document.querySelector('#quick-demo');
        if (section) {
            observer.observe(section);
        }

        return () => {
            if (section) {
                observer.unobserve(section);
            }
        };
    }, []);

    const runDemo = async () => {
        setIsRunning(true);
        setResponse(null);

        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        setResponse(demos[activeDemo].mockResponse);
        setIsRunning(false);
    };

    return (
        <section
            id="quick-demo"
            className={`${styles.quickDemo} ${isVisible ? styles.visible : ''}`}
        >
            <div className={styles.container}>
                <div className={styles.header}>
                    <Badge variant="primary" size="sm">
                        🚀 Live Demo
                    </Badge>

                    <h2 className={styles.title}>
                        See It In Action
                    </h2>

                    <p className={styles.subtitle}>
                        Try our APIs right here. No setup required - just click and see real responses.
                    </p>
                </div>

                <div className={styles.demoContainer}>
                    <div className={styles.demoTabs}>
                        <Tabs value={activeDemo} onChange={setActiveDemo}>
                            <div className={styles.tabList}>
                                <button
                                    className={`${styles.tab} ${activeDemo === 'auth' ? styles.active : ''}`}
                                    onClick={() => setActiveDemo('auth')}
                                >
                                    🔐 Authentication
                                </button>
                                <button
                                    className={`${styles.tab} ${activeDemo === 'products' ? styles.active : ''}`}
                                    onClick={() => setActiveDemo('products')}
                                >
                                    🛍️ Products
                                </button>
                                <button
                                    className={`${styles.tab} ${activeDemo === 'cart' ? styles.active : ''}`}
                                    onClick={() => setActiveDemo('cart')}
                                >
                                    🛒 Cart
                                </button>
                            </div>
                        </Tabs>
                    </div>

                    <div className={styles.demoContent}>
                        <div className={styles.leftPanel}>
                            <div className={styles.demoInfo}>
                                <h3 className={styles.demoTitle}>
                                    {demos[activeDemo].title}
                                </h3>
                                <p className={styles.demoDescription}>
                                    {demos[activeDemo].description}
                                </p>
                            </div>

                            <div className={styles.codeSection}>
                                <div className={styles.codeHeader}>
                                    <span className={styles.codeLabel}>Request</span>
                                    <Badge variant="secondary" size="xs">JavaScript</Badge>
                                </div>

                                <CodeBlock
                                    code={demos[activeDemo].request}
                                    language="javascript"
                                    showLineNumbers={true}
                                    className={styles.codeBlock}
                                />
                            </div>

                            <div className={styles.runSection}>
                                <Button
                                    variant="primary"
                                    size="lg"
                                    onClick={runDemo}
                                    disabled={isRunning}
                                    className={styles.runButton}
                                >
                                    {isRunning ? (
                                        <>
                                            <div className={styles.spinner}></div>
                                            Running...
                                        </>
                                    ) : (
                                        <>
                                            ▶ Run Demo
                                        </>
                                    )}
                                </Button>

                                <div className={styles.endpoint}>
                                    <span className={styles.method}>POST</span>
                                    <span className={styles.url}>
                                        https://api.ecommerce-platform.dev/{activeDemo === 'auth' ? 'auth/login' : activeDemo}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.rightPanel}>
                            <div className={styles.responseSection}>
                                <div className={styles.responseHeader}>
                                    <span className={styles.responseLabel}>Response</span>
                                    {response && (
                                        <Badge variant="success" size="xs">
                                            200 OK
                                        </Badge>
                                    )}
                                </div>

                                <div className={styles.responseContainer}>
                                    {isRunning ? (
                                        <div className={styles.loadingResponse}>
                                            <div className={styles.loadingDots}>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                            <p>Executing API call...</p>
                                        </div>
                                    ) : response ? (
                                        <CodeBlock
                                            code={JSON.stringify(response, null, 2)}
                                            language="json"
                                            showLineNumbers={false}
                                            className={styles.responseBlock}
                                        />
                                    ) : (
                                        <div className={styles.placeholderResponse}>
                                            <div className={styles.placeholderIcon}>📡</div>
                                            <p>Click "Run Demo" to see the API response</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {response && (
                                <div className={styles.responseStats}>
                                    <div className={styles.stat}>
                                        <span className={styles.statLabel}>Response Time</span>
                                        <span className={styles.statValue}>~85ms</span>
                                    </div>
                                    <div className={styles.stat}>
                                        <span className={styles.statLabel}>Status</span>
                                        <span className={styles.statValue}>Success</span>
                                    </div>
                                    <div className={styles.stat}>
                                        <span className={styles.statLabel}>Size</span>
                                        <span className={styles.statValue}>2.1kb</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className={styles.footer}>
                    <div className={styles.footerContent}>
                        <h3 className={styles.footerTitle}>
                            Ready to integrate?
                        </h3>
                        <p className={styles.footerText}>
                            Get your API key and start building in minutes.
                        </p>
                        <div className={styles.footerActions}>
                            <Button variant="primary" size="lg">
                                Get API Key →
                            </Button>
                            <Button variant="outline" size="lg">
                                View All Endpoints
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QuickDemo;