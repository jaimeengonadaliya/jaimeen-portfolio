import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Projects.css';

const projectsData = [
    {
        number: '01',
        title: 'ParkNova',
        subtitle: 'Smart Parking Reservation & Management System',
        description: 'A smart parking management and reservation platform that enables users to find parking locations, check real-time slot availability, reserve parking spaces, and manage bookings.',
        tech: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'AJAX', 'Razorpay', 'QR Code', 'Maps'],
        type: 'Web Application',
        github: 'https://github.com/jaimeengonadaliya/ParkNova',
        live: 'https://github.com/jaimeengonadaliya/ParkNova',
    },
    {
        number: '02',
        title: 'RailTicketHub',
        subtitle: 'Railway Ticket Reservation & Management System',
        description: 'A web-based railway reservation system that provides train search, ticket booking, passenger management, booking history, cancellation, secure authentication, and digital e-ticket generation.',
        tech: ['PHP 8.x', 'MySQL/MariaDB', 'HTML5', 'CSS3', 'JavaScript ES6+', 'PHPMailer', 'Razorpay', 'FPDF'],
        type: 'Web Application',
        github: 'https://github.com/jaimeengonadaliya/RailTicketHub',
        live: 'https://github.com/jaimeengonadaliya/RailTicketHub',
    },
    {
        number: '03',
        title: 'WashMate',
        subtitle: 'Laundry Management System',
        description: 'An Android-based laundry management application that connects customers, laundry shops, delivery personnel, and laundry staff through a centralized digital workflow.',
        tech: ['Android Studio', 'Java', 'XML', 'Firebase', 'Database'],
        type: 'Android Mobile Application',
        github: '#',
        live: '#',
    },
    {
        number: '04',
        title: 'TailorWalla',
        subtitle: 'Digital Tailoring Service Application',
        description: 'A Flutter-based application designed to digitize tailoring-related services with a modern cross-platform interface and Firebase-powered cloud data and storage.',
        tech: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'Firebase Storage'],
        type: 'Cross-Platform Application',
        github: '#',
        live: '#',
    },
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
                            scale={1.01}
                            tiltMaxAngleX={2}
                            tiltMaxAngleY={2}
                            className="project-tilt-wrapper"
                        >
                            <motion.div
                                className="project-card glass"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                            >
                                <div className="project-content">
                                    <div className="project-header">
                                        <div>
                                            <span className="project-number mono-tag">{project.number}</span>
                                            <h3 className="project-title mono-tag">{project.title}</h3>
                                            <p className="project-subtitle">{project.subtitle}</p>
                                        </div>
                                        <div className="project-links">
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" title="GitHub Repository">
                                                <FaGithub />
                                            </a>
                                            <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link" title="Live Demo">
                                                <FaExternalLinkAlt />
                                            </a>
                                        </div>
                                    </div>

                                    <p className="project-description">{project.description}</p>

                                    <ul className="project-tech-list">
                                        {project.tech.map((tech, techIndex) => (
                                            <li key={techIndex} className="project-tech-item mono-tag">
                                                &#123; {tech} &#125;
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="project-meta mono-tag">
                                        Type: {project.type}
                                    </div>

                                    <div className="project-action-buttons">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline project-btn">
                                            <FaGithub /> GitHub
                                        </a>
                                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary project-btn">
                                            <FaExternalLinkAlt /> Live Demo
                                        </a>
                                    </div>
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
