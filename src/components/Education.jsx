import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import './Education.css';

const educationData = [
    {
        degree: 'M.Sc. Information Technology',
        university: 'Charotar University of Science and Technology (CHARUSAT)',
        location: 'Changa, Gujarat',
        period: '2026 – 2028',
        description: 'Currently pursuing M.Sc. IT with a focus on software development, application development, databases, and modern information technology.'
    },
    {
        degree: 'B.Sc. Information Technology',
        university: 'UKA Tarsadia University',
        location: 'Gujarat',
        period: '2023 – 2026',
        description: 'Studied programming, web development, database management, software engineering, application development, and information technology fundamentals.'
    }
];

const Education = () => {
    return (
        <section id="education" className="education-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="tag-bracket">&lt;/</span>Education<span className="tag-bracket">&gt;</span>
                </motion.h2>

                <div className="timeline-container">
                    <div className="timeline-line"></div>

                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            className="timeline-item"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <div className="timeline-dot">
                                <FaGraduationCap />
                            </div>
                            <div className="timeline-content glass">
                                <h3 className="degree mono-tag">{edu.degree}</h3>
                                <h4 className="university">{edu.university}</h4>

                                <div className="timeline-meta">
                                    <span><FaMapMarkerAlt /> {edu.location}</span>
                                    <span><FaCalendarAlt /> {edu.period}</span>
                                </div>
                                {edu.description && (
                                    <p style={{ marginTop: '0.75rem', color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                                        {edu.description}
                                    </p>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
