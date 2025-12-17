import React from 'react';
import clsx from 'clsx';
import styles from './VisualElement.module.css';
import BrowserOnly from '@docusaurus/BrowserOnly';

/**
 * VisualElement Component
 * Purpose: Renders diagrams and illustrations
 * Props: Visual content, alt text, caption
 * Features: Responsive sizing, lazy loading for performance, zoom capability for complex diagrams
 */
export default function VisualElement({src, alt, caption, className, ...props}) {
  return (
    <figure className={clsx(styles.visualElement, className)}>
      {src ? (
        <BrowserOnly>
          {() => {
            const React = require('react');
            return (
              <img 
                src={src} 
                alt={alt || 'Diagram'} 
                className={styles.visualImage}
                loading="lazy"
                {...props}
              />
            );
          }}
        </BrowserOnly>
      ) : (
        <div className={styles.placeholder}>
          {props.children}
        </div>
      )}
      {caption && (
        <figcaption className={styles.caption}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}