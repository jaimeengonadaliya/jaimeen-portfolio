import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="tag-bracket">&lt;/</span>AboutMe<span className="tag-bracket">&gt;</span>
                </motion.h2>

                <Tilt
                    perspective={1000}
                    glareEnable={true}
                    glareMaxOpacity={0.05}
                    glareColor="#0ff4a4"
                    scale={1.02}
                    className="about-tilt-wrapper"
                >
                    <motion.div
                        className="about-card glass"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="about-content">
                            <p className="about-text mono-tag" style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1rem' }}>
                                // A brief introduction about my journey
                            </p>
                            <p className="about-text">
                                Hello! My name is <strong>Jaimeen Gondaliya</strong>. I am an IT student at <strong>UKA Tarsadia University</strong> with a strong passion for Android application development, software engineering, and web technologies.
                            </p>
                            <p className="about-text">
                                I enjoy building real-world projects that help improve systems and solve practical problems. Through academic and personal projects, I have developed strong programming knowledge and hands-on development experience. I focus on continuously improving my skills in Android development, mobile technologies, and modern software development tools.
                            </p>

                            <div className="highlights-grid">
                                <h3 className="mono-tag">&#123; Key Highlights &#125;</h3>
                                <ul>
                                    <li>Aspiring Android Developer</li>
                                    <li>Passionate about Mobile & Web Technologies</li>
                                    <li>Experience in Academic Software Projects</li>
                                    <li>Strong Problem Solving Skills</li>
                                    <li>Continuous Technology Learner</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </Tilt>
            </div>
        </section>
    );
};

export default About;
