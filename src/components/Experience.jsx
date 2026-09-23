import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaCode, FaDatabase } from 'react-icons/fa';
import './Experience.css';

const experiences = [
    {
        title: 'Student Software Developer',
        icon: <FaLaptopCode />,
        description: 'As an IT student and project developer, I have gained practical experience through academic and personal software projects across web, mobile, and database development.',
    },
    {
        title: 'Full-Stack Web Projects',
        icon: <FaCode />,
        description: 'My project work includes developing complete applications with authentication, role-based access, database integration, online booking, payment gateways, dashboards, API integrations, PDF generation, and responsive user interfaces.',
    },
    {
        title: 'Continuous Learning',
        icon: <FaDatabase />,
        description: 'I continuously practice software development by building projects and exploring new technologies and development tools across web, mobile, and database domains.',
    },
];

const Experience = () => {
    return (
        <section id="experience" className="experience-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    My <span>Experience</span>
                </motion.h2>

                <div className="timeline-container">
                    <div className="timeline-line"></div>
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <div className="timeline-dot">
                                {exp.icon}
                            </div>
                            <div className="timeline-content glass">
                                <h3 className="timeline-title">{exp.title}</h3>
                                <p className="timeline-description">{exp.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
