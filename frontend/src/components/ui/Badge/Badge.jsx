import React from 'react';
import styles from './Badge.module.css';

const Badge = ({
    children,
    variant = 'primary',
    size = 'sm',
    className = '',
    ...props
}) => {
    const badgeClass = `
    ${styles.badge} 
    ${styles[variant]} 
    ${styles[size]} 
    ${className}
  `.trim();

    return (
        <span className={badgeClass} {...props}>
            {children}
        </span>
    );
};

export default Badge;