import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FaExternalLinkAlt, FaFileDownload, FaEnvelope } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="greeting mono-tag">Namaste(); I'm</span>
                    <h1 className="name">Jaimeen Gondaliya</h1>

                    <h2 className="title mono-tag">
                        <span className="title-prefix">&gt; </span>
                        <TypeAnimation
                            sequence={[
                                'Software Developer',
                                2000,
                                'Android Developer',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            className="text-accent"
                            repeat={Infinity}
                        />
                        <span className="cursor-blink">_</span>
                    </h2>

                    <p className="intro-text">
                        I'm Jaimeen Gondaliya, an M.Sc. IT student and software developer passionate about creating modern, practical, and user-focused applications.
                        I build web and mobile applications with a focus on clean interfaces, reliable functionality, database integration, and real-world problem solving.
                    </p>

                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-primary">
                            <FaExternalLinkAlt /> View My Work
                        </a>
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                            <FaFileDownload /> Download Resume
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            <FaEnvelope /> Contact Me
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-image-container"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="glow-sphere"></div>
                    <Tilt
                        className="parallax-effect"
                        perspective={1000}
                        tiltMaxAngleX={10}
                        tiltMaxAngleY={10}
                        gyroscope={true}
                    >
                        <div className="profile-3d-card glass">
                            <div className="inner-card-content">
                                <img
                                    src="/profile.png"
                                    alt="Jaimeen Gondaliya Profile"
                                    className="profile-img"
                                />
                            </div>
                            <div className="tech-badge badge-1 mono-tag">&#123; Mobile Developer &#125; </div>
                            <div className="tech-badge badge-4 mono-tag">&#123; Software Developer &#125; </div>
                        </div>
                    </Tilt>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
