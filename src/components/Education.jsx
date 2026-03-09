import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import './Education.css';

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

                    <motion.div
                        className="timeline-item"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="timeline-dot">
                            <FaGraduationCap />
                        </div>
                        <div className="timeline-content glass">
                            <h3 className="degree mono-tag">Bachelor of Science in Information Technology (B.Sc. IT)</h3>
                            <h4 className="university">UKA Tarsadia University</h4>

                            <div className="timeline-meta">
                                <span><FaMapMarkerAlt /> Gujarat, India</span>
                                <span><FaCalendarAlt /> Expected: 2026</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Education;
