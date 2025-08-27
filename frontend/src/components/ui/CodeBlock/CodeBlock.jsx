import React, { useState } from 'react';
import styles from './CodeBlock.module.css';

const CodeBlock = ({
    code,
    language = 'javascript',
    showLineNumbers = false,
    className = '',
    ...props
}) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy code:', err);
        }
    };

    const lines = code.split('\n');

    return (
        <div className={`${styles.codeBlock} ${className}`} {...props}>
            <div className={styles.header}>
                <span className={styles.language}>{language}</span>
                <button
                    onClick={handleCopy}
                    className={styles.copyButton}
                    title="Copy code"
                >
                    {copied ? '✓ Copied' : '📋 Copy'}
                </button>
            </div>
            <pre className={styles.pre}>
                <code className={styles.code}>
                    {lines.map((line, index) => (
                        <div key={index} className={styles.line}>
                            {showLineNumbers && (
                                <span className={styles.lineNumber}>{index + 1}</span>
                            )}
                            <span className={styles.lineContent}>{line}</span>
                        </div>
                    ))}
                </code>
            </pre>
        </div>
    );
};

export default CodeBlock;