import React, { useState } from 'react';
import { CodeBlock } from '../../ui/CodeBlock';
import { Badge } from '../../ui/Badge';
import { CopyButton } from '../../ui/CopyButton';
import styles from './Features.module.css';

const FeatureCard = ({ feature, index, isVisible }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const colorClasses = {
        blue: styles.colorBlue,
        green: styles.colorGreen,
        purple: styles.colorPurple,
        orange: styles.colorOrange,
        pink: styles.colorPink,
        yellow: styles.colorYellow
    };

    return (
        <div
            className={`${styles.featureCard} ${colorClasses[feature.color]} ${isVisible ? styles.cardVisible : ''}`}
            style={{ '--delay': `${index * 0.1}s` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={styles.cardHeader}>
                <div className={styles.iconContainer}>
                    <span className={styles.icon}>{feature.icon}</span>
                    <div className={styles.iconGlow}></div>
                </div>

                <div className={styles.headerContent}>
                    <h3 className={styles.cardTitle}>{feature.title}</h3>
                    <p className={styles.cardDescription}>{feature.description}</p>
                </div>
            </div>

            <div className={styles.highlights}>
                {feature.highlights.map((highlight, i) => (
                    <Badge key={i} variant="secondary" size="xs" className={styles.highlightBadge}>
                        {highlight}
                    </Badge>
                ))}
            </div>

            <div className={styles.codeSection}>
                <div className={styles.codeHeader}>
                    <span className={styles.codeLabel}>API Example</span>
                    <CopyButton text={feature.code} size="sm" />
                </div>

                <CodeBlock
                    code={feature.code}
                    language="javascript"
                    showLineNumbers={false}
                    className={styles.codeBlock}
                />
            </div>

            <div className={styles.cardFooter}>
                <button
                    className={styles.expandButton}
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    {isExpanded ? 'Show Less' : 'Learn More'}
                </button>

                <div className={styles.cardActions}>
                    <button className={styles.tryButton}>
                        Try Now →
                    </button>
                </div>
            </div>

            {isExpanded && (
                <div className={styles.expandedContent}>
                    <div className={styles.moreInfo}>
                        <h4>Key Benefits:</h4>
                        <ul>
                            <li>Production-ready implementation</li>
                            <li>Comprehensive error handling</li>
                            <li>Built-in validation</li>
                            <li>Detailed documentation</li>
                        </ul>
                    </div>
                </div>
            )}

            <div className={styles.cardGlow}></div>
        </div>
    );
};
export default FeatureCard