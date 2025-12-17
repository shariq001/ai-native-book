import React from 'react';
import clsx from 'clsx';
import styles from './ModuleContainer.module.css';

/**
 * ModuleContainer Component
 * Purpose: Renders the entire module with consistent layout following the VLA pipeline
 * Props: Module metadata, navigation status
 * Children: ChapterContent, NavigationControls, ProgressIndicator
 */
export default function ModuleContainer({children, title, description, moduleMetadata}) {
  return (
    <div className={clsx('container', styles.moduleContainer)}>
      <header className={styles.header}>
        <h1 className={styles.title}>{title || moduleMetadata?.title}</h1>
        {description && <p className={styles.description}>{description}</p>}
        {moduleMetadata && (
          <div className={styles.metadata}>
            <span className={styles.audience}>Target Audience: {moduleMetadata.targetAudience}</span>
            <span className={styles.duration}>Duration: {moduleMetadata.duration}</span>
          </div>
        )}
      </header>
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
}