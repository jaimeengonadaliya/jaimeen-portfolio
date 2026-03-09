import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FaExternalLinkAlt, FaGithub, FaEnvelope } from 'react-icons/fa';
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
                                'Android Developer',
                                2000,
                                'Mobile App Developer',
                                2000,
                                'Software Developer',
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
                        "I am an IT student and aspiring Android Developer with a strong interest in mobile application development. I enjoy building practical software projects and continuously learning new technologies to improve my development skills. My goal is to become a professional Android developer and build innovative, user-friendly mobile applications."
                    </p>

                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-primary">
                            <FaExternalLinkAlt /> View Projects
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
                            <div className="tech-badge badge-1 mono-tag">&#123; Android Developer &#125; </div>
                            <div className="tech-badge badge-4 mono-tag">&#123; Software Developer &#125; </div>
                        </div>
                    </Tilt>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
