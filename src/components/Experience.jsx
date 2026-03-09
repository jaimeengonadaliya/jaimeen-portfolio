import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaCogs, FaDatabase, FaProjectDiagram } from 'react-icons/fa';
import './Experience.css';

const experiences = [
    {
        title: 'Software Development',
        icon: <FaLaptopCode />,
        description: 'Developing scalable and robust software applications using C# and .NET ecosystem to solve real-world problems.'
    },
    {
        title: 'Web Application Development',
        icon: <FaCogs />,
        description: 'Building dynamic, responsive full-stack applications with ASP.NET Core MVC and modern front-end technologies.'
    },
    {
        title: 'Database Design',
        icon: <FaDatabase />,
        description: 'Designing efficient relation database architectures using SQL Server with optimized queries for performance.'
    },
    {
        title: 'Agile Project Management',
        icon: <FaProjectDiagram />,
        description: 'Working in Scrum setups utilizing Jira for sprint planning, roadmap development, and dependency tracking.'
    }
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
                    My <span>Expertise</span>
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
