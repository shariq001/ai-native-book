import React from 'react';
import clsx from 'clsx';
import styles from './ChapterContent.module.css';
import BrowserOnly from '@docusaurus/BrowserOnly';

/**
 * ChapterContent Component
 * Purpose: Displays individual chapter content with appropriate styling
 * Props: Chapter content, learning objectives, visual elements
 * Features: Responsive media display, visual element integration
 */
export default function ChapterContent({children, title, objectives, content}) {
  return (
    <div className={clsx(styles.chapterContainer)}>
      {title && <h1 className={styles.chapterTitle}>{title}</h1>}
      
      {objectives && objectives.length > 0 && (
        <section className={styles.learningObjectives}>
          <h2>Learning Objectives</h2>
          <ul>
            {objectives.map((objective, index) => (
              <li key={index}>{objective}</li>
            ))}
          </ul>
        </section>
      )}
      
      <div className={styles.content}>
        {content ? content : children}
      </div>
    </div>
  );
}