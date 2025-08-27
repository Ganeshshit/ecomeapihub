import React, { useState, useEffect, useRef } from 'react';
import  TestimonialCard  from './TestimonialCard';
import { Badge } from '../../ui/Badge';
import styles from './Testimonials.module.css';

const Testimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const sectionRef = useRef(null);

    const testimonials = [
        {
            id: 1,
            name: 'Sarah Chen',
            role: 'Frontend Developer',
            company: 'TechStart Inc.',
            avatar: '👩‍💻',
            rating: 5,
            text: 'This API platform saved me weeks of backend development. The authentication system worked perfectly out of the box, and the documentation is incredibly clear. My e-commerce app was up and running in just 2 days!',
            project: 'Fashion Store App',
            metrics: {
                timeSaved: '3 weeks',
                linesOfCode: '500+',
                features: '8 APIs'
            }
        },
        {
            id: 2,
            name: 'Marcus Rodriguez',
            role: 'Full Stack Developer',
            company: 'Freelancer',
            avatar: '👨‍💼',
            rating: 5,
            text: 'As a freelancer, I need to deliver projects fast. This platform lets me focus on the frontend while providing rock-solid backend APIs. The payment integration alone saved me countless hours of Stripe setup.',
            project: 'Multi-vendor Marketplace',
            metrics: {
                timeSaved: '2 weeks',
                linesOfCode: '800+',
                features: '12 APIs'
            }
        },
        {
            id: 3,
            name: 'Emma Thompson',
            role: 'Product Manager',
            company: 'StartupCo',
            avatar: '👩‍🚀',
            rating: 5,
            text: 'Our team was able to prototype and launch our MVP in record time. The APIs are well-documented, reliable, and the playground feature made testing so much easier. Highly recommend for any e-commerce project!',
            project: 'B2B E-commerce Platform',
            metrics: {
                timeSaved: '4 weeks',
                linesOfCode: '1200+',
                features: '15 APIs'
            }
        },
        {
            id: 4,
            name: 'David Kim',
            role: 'React Developer',
            company: 'Digital Agency',
            avatar: '👨‍💻',
            rating: 5,
            text: 'The code examples are fantastic and work exactly as shown. I love how everything is production-ready with proper error handling. The cart and order management APIs are particularly well-designed.',
            project: 'Luxury Goods Store',
            metrics: {
                timeSaved: '2.5 weeks',
                linesOfCode: '600+',
                features: '10 APIs'
            }
        },
        {
            id: 5,
            name: 'Lisa Wang',
            role: 'Tech Lead',
            company: 'GrowthCorp',
            avatar: '👩‍🔬',
            rating: 5,
            text: 'We evaluated several API platforms, and this one stands out for its completeness and ease of integration. The JWT authentication system and role-based access control work flawlessly with our React app.',
            project: 'Enterprise E-commerce Suite',
            metrics: {
                timeSaved: '5 weeks',
                linesOfCode: '1500+',
                features: '20 APIs'
            }
        },
        {
            id: 6,
            name: 'Alex Johnson',
            role: 'Indie Developer',
            company: 'Solo Project',
            avatar: '🧑‍💻',
            rating: 5,
            text: 'Perfect for indie developers! I built my entire e-commerce platform using these APIs. The pricing is fair, the uptime is excellent, and the support team is responsive. Couldn\'t ask for more.',
            project: 'Handmade Crafts Store',
            metrics: {
                timeSaved: '6 weeks',
                linesOfCode: '400+',
                features: '7 APIs'
            }
        }
    ];

    const stats = {
        totalUsers: '2,500+',
        averageTime: '3 weeks',
        satisfaction: '99.2%',
        projects: '1,200+'
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

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 2));
            }, 4000);
            return () => clearInterval(interval);
        }
    }, [isPaused, testimonials.length]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 2));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + Math.ceil(testimonials.length / 2)) % Math.ceil(testimonials.length / 2));
    };

    return (
        <section
            ref={sectionRef}
            className={`${styles.testimonials} ${isVisible ? styles.visible : ''}`}
        >
            <div className={styles.container}>
                <div className={styles.header}>
                    <Badge variant="primary" size="sm">
                        💬 Developer Stories
                    </Badge>

                    <h2 className={styles.title}>
                        Loved by <span className={styles.highlight}>Developers</span> Worldwide
                    </h2>

                    <p className={styles.subtitle}>
                        Join thousands of developers who've accelerated their e-commerce projects
                        with our production-ready APIs.
                    </p>

                    <div className={styles.stats}>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>{stats.totalUsers}</span>
                            <span className={styles.statLabel}>Happy Developers</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>{stats.averageTime}</span>
                            <span className={styles.statLabel}>Time Saved</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>{stats.satisfaction}</span>
                            <span className={styles.statLabel}>Satisfaction Rate</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>{stats.projects}</span>
                            <span className={styles.statLabel}>Projects Built</span>
                        </div>
                    </div>
                </div>

                <div
                    className={styles.carousel}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div
                        className={styles.carouselTrack}
                        style={{
                            transform: `translateX(-${currentSlide * 100}%)`,
                            transition: 'transform 0.5s ease-in-out'
                        }}
                    >
                        {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, slideIndex) => (
                            <div key={slideIndex} className={styles.slide}>
                                <div className={styles.slideContent}>
                                    {testimonials.slice(slideIndex * 2, slideIndex * 2 + 2).map((testimonial, index) => (
                                        <TestimonialCard
                                            key={testimonial.id}
                                            testimonial={testimonial}
                                            index={index}
                                            isVisible={isVisible}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.carouselControls}>
                        <button
                            className={styles.controlButton}
                            onClick={prevSlide}
                            aria-label="Previous testimonial"
                        >
                            ←
                        </button>

                        <div className={styles.dots}>
                            {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, index) => (
                                <button
                                    key={index}
                                    className={`${styles.dot} ${currentSlide === index ? styles.active : ''}`}
                                    onClick={() => goToSlide(index)}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            className={styles.controlButton}
                            onClick={nextSlide}
                            aria-label="Next testimonial"
                        >
                            →
                        </button>
                    </div>
                </div>

                <div className={styles.footer}>
                    <div className={styles.footerContent}>
                        <h3 className={styles.footerTitle}>
                            Ready to join them?
                        </h3>
                        <p className={styles.footerText}>
                            Start building your e-commerce application today with our comprehensive API suite.
                        </p>
                        <div className={styles.footerActions}>
                            <button className={styles.primaryAction}>
                                Get Started Free →
                            </button>
                            <button className={styles.secondaryAction}>
                                View Success Stories
                            </button>
                        </div>
                    </div>

                    <div className={styles.socialProof}>
                        <div className={styles.trustedBy}>
                            <span className={styles.trustedLabel}>Trusted by developers at:</span>
                            <div className={styles.companies}>
                                <span>Google</span>
                                <span>Microsoft</span>
                                <span>Shopify</span>
                                <span>Stripe</span>
                                <span>Airbnb</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;