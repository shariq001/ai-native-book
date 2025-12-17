import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './NavigationControls.module.css';

/**
 * NavigationControls Component
 * Purpose: Provides pagination controls between chapters
 * Props: Current chapter index, total chapters, navigation callbacks
 * Features: Keyboard navigation support, disabled states for first/last chapters
 */
export default function NavigationControls({currentIndex, totalChapters, onNext, onPrev, nextUrl, prevUrl}) {
  const isFirst = currentIndex === 1;
  const isLast = currentIndex === totalChapters;

  return (
    <div className={clsx(styles.navigationContainer)}>
      <div className={styles.navButtonGroup}>
        {!isFirst && prevUrl ? (
          <Link 
            to={prevUrl} 
            className={clsx('button button--secondary button--lg', styles.navButton)}
            aria-label={`Previous chapter: ${currentIndex - 1}`}
          >
            ← Previous
          </Link>
        ) : (
          <span className={clsx('button button--secondary button--lg button--disabled', styles.navButton, styles.disabledButton)}>
            ← Previous
          </span>
        )}
        
        <span className={styles.progressIndicator}>
          Chapter {currentIndex} of {totalChapters}
        </span>
        
        {!isLast && nextUrl ? (
          <Link 
            to={nextUrl} 
            className={clsx('button button--primary button--lg', styles.navButton)}
            aria-label={`Next chapter: ${currentIndex + 1}`}
          >
            Next →
          </Link>
        ) : (
          <span className={clsx('button button--primary button--lg button--disabled', styles.navButton, styles.disabledButton)}>
            Next →
          </span>
        )}
      </div>
    </div>
  );
}