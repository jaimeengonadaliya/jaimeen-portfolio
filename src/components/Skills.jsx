import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaMobileAlt, FaLaptopCode, FaDatabase, FaTools, FaLightbulb } from 'react-icons/fa';
import './Skills.css';

const skillCategories = [
    { title: "Languages", icon: <FaCode />, skills: ['C', 'C++', 'Python', 'Java', 'JavaScript', 'C#', 'PHP'] },
    { title: "Mobile", icon: <FaMobileAlt />, skills: ['Android App Development'] },
    { title: "Frontend", icon: <FaLaptopCode />, skills: ['HTML', 'CSS', 'JavaScript', 'PHP'] },
    { title: "Database", icon: <FaDatabase />, skills: ['MySQL', 'Firebase', 'MongoDB'] },
    { title: "Tools", icon: <FaTools />, skills: ['Apache Server', 'NetBeans IDE', 'Android Studio', 'Visual Studio', 'VS Code'] },
    { title: "Other", icon: <FaLightbulb />, skills: ['Problem Solving', 'Software Development', 'Debugging', 'Project Development'] }
];

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="tag-bracket">&#123;</span> /Skills <span className="tag-bracket">&#125;</span>
                </motion.h2>

                <div className="skills-grid">
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={catIndex}
                            className="skill-category-card glass"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                        >
                            <div className="skill-icon-wrapper">
                                {category.icon}
                            </div>
                            <h3 className="mono-tag">{category.title}</h3>
                            <div className="tech-pills">
                                {category.skills.map((skill, index) => (
                                    <span key={index} className="tech-pill">{skill}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
