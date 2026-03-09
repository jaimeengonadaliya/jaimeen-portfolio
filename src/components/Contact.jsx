import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="tag-bracket">&lt;/</span>Contact<span className="tag-bracket">&gt;</span>
                </motion.h2>

                <div className="contact-container glass">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="mono-tag" style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Let's Collaborate</h3>
                        <p className="contact-desc">
                            I am currently open to new opportunities, projects, and collaborations. Feel free to reach out to discuss software engineering and application development.
                        </p>

                        <div className="contact-details">
                            <div className="contact-detail-item">
                                <div className="contact-icon"><FaEnvelope /></div>
                                <div>
                                    <h4 className="mono-tag" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Email</h4>
                                    <a href="mailto:gondaliyajaimeen@gmail.com">gondaliyajaimeen@gmail.com</a>
                                </div>
                            </div>

                            <div className="contact-detail-item">
                                <div className="contact-icon"><FaPhoneAlt /></div>
                                <div>
                                    <h4 className="mono-tag" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Phone</h4>
                                    <a href="tel:+919913690245">+91 9913690245</a>
                                </div>
                            </div>

                            <div className="contact-detail-item">
                                <div className="contact-icon"><FaMapMarkerAlt /></div>
                                <div>
                                    <h4 className="mono-tag" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Location</h4>
                                    <p>Surat, Gujarat, India</p>
                                </div>
                            </div>
                        </div>

                        <div className="social-links">
                            <a href="https://github.com/jaimeengondaliya" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/jaimeen-gondaliya-ab7155329/" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
                                <FaLinkedin />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        className="contact-form-container"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <label className="mono-tag">Name</label>
                                <input type="text" placeholder="Enter your name" required className="form-input" />
                            </div>
                            <div className="form-group">
                                <label className="mono-tag">Email</label>
                                <input type="email" placeholder="Enter your email" required className="form-input" />
                            </div>
                            <div className="form-group">
                                <label className="mono-tag">Message</label>
                                <textarea placeholder="Write your message here..." rows="5" required className="form-input"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary submit-btn">Send Message</button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
