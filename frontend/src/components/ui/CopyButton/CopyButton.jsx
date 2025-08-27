import React, { useState } from 'react';
import styles from './CopyButton.module.css';

const CopyButton = ({
    text,
    size = 'md',
    variant = 'ghost',
    className = '',
    children,
    ...props
}) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text:', err);
        }
    };

    const buttonClass = `
    ${styles.copyButton} 
    ${styles[variant]} 
    ${styles[size]} 
    ${className}
  `.trim();

    return (
        <button
            onClick={handleCopy}
            className={buttonClass}
            title={copied ? 'Copied!' : 'Copy to clipboard'}
            {...props}
        >
            {copied ? (
                <>
                    <span className={styles.icon}>✓</span>
                    {children || 'Copied'}
                </>
            ) : (
                <>
                    <span className={styles.icon}>📋</span>
                    {children || 'Copy'}
                </>
            )}
        </button>
    );
};

export default CopyButton;