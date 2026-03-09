import React from 'react';
import { motion } from 'framer-motion';
import { FaFileDownload, FaGraduationCap, FaCode, FaLaptopCode, FaProjectDiagram } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import './Resume.css';

const Resume = () => {
    return (
        <section id="resume" className="resume-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    My <span>Resume</span>
                </motion.h2>

                <div className="resume-container">
                    <Tilt
                        perspective={1000}
                        glareEnable={true}
                        glareMaxOpacity={0.15}
                        scale={1.02}
                        tiltMaxAngleX={5}
                        tiltMaxAngleY={5}
                    >
                        <motion.div
                            className="resume-card glass"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="resume-header">
                                <h3>Professional Profile</h3>
                                <p>Download my comprehensive professional resume containing detailed academic background, technical skills, programming knowledge, and full project descriptions.</p>
                            </div>

                            <div className="resume-highlights">
                                <div className="highlight-item">
                                    <FaGraduationCap className="highlight-icon" />
                                    <span>Education Profile</span>
                                </div>
                                <div className="highlight-item">
                                    <FaLaptopCode className="highlight-icon" />
                                    <span>Technical Skills</span>
                                </div>
                                <div className="highlight-item">
                                    <FaProjectDiagram className="highlight-icon" />
                                    <span>Projects</span>
                                </div>
                                <div className="highlight-item">
                                    <FaCode className="highlight-icon" />
                                    <span>Programming Knowledge</span>
                                </div>
                            </div>

                            <div className="resume-action">
                                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary download-btn">
                                    <FaFileDownload /> Download Resume (PDF)
                                </a>
                            </div>
                        </motion.div>
                    </Tilt>
                </div>
            </div>
        </section>
    );
};

export default Resume;
