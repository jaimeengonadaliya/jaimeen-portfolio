import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';
import './Certifications.css';

const certificationsList = [
    {
        title: "Deloitte Australia Data Analytics Job Simulation",
        issuer: "Forage",
        link: "#"
    },
    {
        title: "Oracle Cloud Database Services Certified Professional",
        issuer: "Oracle",
        link: "#"
    },
    {
        title: "Oracle DBA 11g/12c Database Administration",
        issuer: "Oracle",
        link: "#"
    },
];

const Certifications = () => {
    return (
        <section id="certifications" className="certifications-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    My <span>Certifications</span>
                </motion.h2>

                <div className="certifications-grid">
                    {certificationsList.map((cert, index) => (
                        <Tilt
                            key={index}
                            perspective={800}
                            glareEnable={true}
                            glareMaxOpacity={0.15}
                            scale={1.05}
                            className="cert-tilt-wrapper"
                        >
                            <motion.div
                                className="cert-card glass"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="cert-content">
                                    <div className="cert-icon-bg">
                                        <FaAward className="cert-icon" />
                                    </div>
                                    <h3 className="cert-title">{cert.title}</h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginTop: '0.4rem' }}>{cert.issuer}</p>
                                    <div className="cert-badge">Verified</div>
                                </div>
                            </motion.div>
                        </Tilt>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
