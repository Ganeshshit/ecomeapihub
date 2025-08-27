import React from 'react';
import { Badge } from '../../ui/Badge';
import styles from './Testimonials.module.css';

const TestimonialCard = ({ testimonial, index, isVisible }) => {
    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (
            <span
                key={i}
                className={`${styles.star} ${i < rating ? styles.filled : ''}`}
            >
                ⭐
            </span>
        ));
    };

    return (
        <div
            className={`${styles.testimonialCard} ${isVisible ? styles.cardVisible : ''}`}
            style={{ '--delay': `${index * 0.2}s` }}
        >
            <div className={styles.cardHeader}>
                <div className={styles.userInfo}>
                    <div className={styles.avatar}>
                        <span className={styles.avatarEmoji}>{testimonial.avatar}</span>
                    </div>
                    <div className={styles.userDetails}>
                        <h4 className={styles.userName}>{testimonial.name}</h4>
                        <p className={styles.userRole}>{testimonial.role}</p>
                        <p className={styles.userCompany}>{testimonial.company}</p>
                    </div>
                </div>

                <div className={styles.rating}>
                    <div className={styles.stars}>
                        {renderStars(testimonial.rating)}
                    </div>
                </div>
            </div>

            <div className={styles.cardContent}>
                <blockquote className={styles.testimonialText}>
                    "{testimonial.text}"
                </blockquote>

                <div className={styles.projectInfo}>
                    <Badge variant="secondary" size="xs" className={styles.projectBadge}>
                        🚀 {testimonial.project}
                    </Badge>
                </div>

                <div className={styles.metrics}>
                    <div className={styles.metric}>
                        <span className={styles.metricValue}>{testimonial.metrics.timeSaved}</span>
                        <span className={styles.metricLabel}>Time Saved</span>
                    </div>
                    <div className={styles.metric}>
                        <span className={styles.metricValue}>{testimonial.metrics.linesOfCode}</span>
                        <span className={styles.metricLabel}>Lines Saved</span>
                    </div>
                    <div className={styles.metric}>
                        <span className={styles.metricValue}>{testimonial.metrics.features}</span>
                        <span className={styles.metricLabel}>APIs Used</span>
                    </div>
                </div>
            </div>

            <div className={styles.cardFooter}>
                <div className={styles.verified}>
                    <span className={styles.verifiedIcon}>✅</span>
                    <span className={styles.verifiedText}>Verified Developer</span>
                </div>

                <div className={styles.social}>
                    <button className={styles.socialButton} aria-label="LinkedIn">
                        💼
                    </button>
                    <button className={styles.socialButton} aria-label="Twitter">
                        🐦
                    </button>
                    <button className={styles.socialButton} aria-label="GitHub">
                        🔗
                    </button>
                </div>
            </div>

            <div className={styles.cardGlow}></div>
        </div>
    );
};

export default TestimonialCard;