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
                                I'm <strong>Jaimeen Gondaliya</strong>, an M.Sc. Information Technology student at <strong>Charotar University of Science and Technology (CHARUSAT)</strong> and a passionate software developer.
                            </p>
                            <p className="about-text">
                                My primary interests include software development, mobile application development, web development, database management, and building practical solutions for real-world problems.
                            </p>
                            <p className="about-text">
                                Through my academic and personal projects, I have gained hands-on experience developing applications with features such as user authentication, role-based access control, online booking, payment integration, dashboards, database management, PDF generation, OTP verification, and responsive user interfaces.
                            </p>
                            <p className="about-text">
                                I work with technologies including Java, C#, PHP, JavaScript, Dart, Flutter, HTML, CSS, MySQL, Firebase, and other development tools. I enjoy learning new technologies, improving my development skills, and turning ideas into functional software solutions.
                            </p>
                            <p className="about-text">
                                My goal is to grow as a professional software developer and contribute to meaningful projects while continuously expanding my technical knowledge.
                            </p>

                            <div className="highlights-grid">
                                <h3 className="mono-tag">&#123; Key Highlights &#125;</h3>
                                <ul>
                                    <li>M.Sc. IT Student at CHARUSAT</li>
                                    <li>Passionate about Mobile & Web Development</li>
                                    <li>Hands-on experience with full-stack web projects</li>
                                    <li>Experience with payment integration & API development</li>
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
