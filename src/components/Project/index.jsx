import React from 'react';
import Link from '@docusaurus/Link';
import './styles.css';

export default function Project({
    title,
    description,
    technologies = [],
    docsLink,
    githubLink,
    demoLink,
    children
}) {
    return (
        <div className="project-section">
            <h3>{title}</h3>
            <p>{description}</p>

            {technologies.length > 0 && (
                <div className="project-tech-stack">
                    {technologies.join(' • ')}
                </div>
            )}

            <div className="project-links">
                {docsLink && (
                    <Link to={docsLink}>Documentation</Link>
                )}
                {githubLink && (
                    <Link to={githubLink}>GitHub</Link>
                )}
                {demoLink && (
                    <Link to={demoLink}>Live Demo</Link>
                )}
            </div>

            {children}
        </div>
    );
} 