import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Projects.css';

const projectsData = [
    {
        title: 'Railway Reservation System',
        description: 'A web-based system that allows users to book train tickets, manage passenger details, and view reservation records. Features include ticket booking, passenger information management, and reservation tracking.',
        tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Apache Server', 'NetBeans IDE']
    },
    {
        title: 'WashMate – Laundry Management System',
        description: 'WashMate is an Android application designed to manage laundry services efficiently. Features include customer details management, laundry order tracking, service management, and real-time database operations.',
        tech: ['Java', 'Android Studio', 'XML', 'Firebase Database', 'Firebase Authentication']
    }
];

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="tag-bracket">&lt;/</span>Projects<span className="tag-bracket">&gt;</span>
                </motion.h2>

                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <Tilt
                            key={index}
                            perspective={1000}
                            glareEnable={true}
                            glareMaxOpacity={0.05}
                            glareColor="#0ff4a4"
                            scale={1.02}
                            tiltMaxAngleX={3}
                            tiltMaxAngleY={3}
                            className="project-tilt-wrapper"
                        >
                            <motion.div
                                className="project-card glass"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <div className="project-content">
                                    <div className="project-header">
                                        <h3 className="project-title mono-tag">{project.title}</h3>
                                        <div className="project-links">
                                            <a href="#" className="project-link" title="Code Repository"><FaGithub /></a>
                                            <a href="#" className="project-link" title="Live Demo"><FaExternalLinkAlt /></a>
                                        </div>
                                    </div>

                                    <p className="project-description">
                                        {project.description}
                                    </p>

                                    <ul className="project-tech-list">
                                        {project.tech.map((tech, techIndex) => (
                                            <li key={techIndex} className="project-tech-item mono-tag">
                                                &#123; {tech} &#125;
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        </Tilt>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
