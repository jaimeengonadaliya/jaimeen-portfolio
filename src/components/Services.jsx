import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FaLaptopCode, FaMobileAlt, FaDatabase } from 'react-icons/fa';
import './Services.css';

const servicesData = [
    {
        title: "Web Development",
        description: "Building responsive and functional web applications using PHP, JavaScript, HTML, CSS, and ASP.NET technologies.",
        icon: <FaLaptopCode />
    },
    {
        title: "Mobile Development",
        description: "Developing user-friendly Android and Flutter applications with modern interfaces and integrated backend services.",
        icon: <FaMobileAlt />
    },
    {
        title: "Database Development",
        description: "Designing and managing structured databases and integrating applications with MySQL, Firebase, SQL Server, Oracle, and other database technologies.",
        icon: <FaDatabase />
    },
];

const Services = () => {
    return (
        <section id="services" className="services-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="tag-bracket">&lt;/</span>Services<span className="tag-bracket">&gt;</span>
                </motion.h2>

                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <Tilt
                            key={index}
                            perspective={1000}
                            glareEnable={true}
                            glareMaxOpacity={0.05}
                            glareColor="#0ff4a4"
                            scale={1.03}
                            tiltMaxAngleX={5}
                            tiltMaxAngleY={5}
                            className="service-tilt-wrapper"
                        >
                            <motion.div
                                className="service-card glass"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="service-icon">
                                    {service.icon}
                                </div>
                                <h3 className="mono-tag" style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-primary)', lineHeight: '1.4' }}>
                                    {service.title}
                                </h3>
                                <p>{service.description}</p>
                            </motion.div>
                        </Tilt>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
