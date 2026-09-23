import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaMobileAlt, FaLaptopCode, FaDatabase, FaTools, FaGlobe } from 'react-icons/fa';
import './Skills.css';

const skillCategories = [
    {
        title: "Programming Languages",
        icon: <FaCode />,
        skills: ['C', 'C++', 'Java', 'Python', 'C#', 'JavaScript', 'PHP', 'Dart']
    },
    {
        title: "Web Development",
        icon: <FaGlobe />,
        skills: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'ASP.NET MVC', 'Bootstrap', 'Responsive Web Design']
    },
    {
        title: "Mobile Development",
        icon: <FaMobileAlt />,
        skills: ['Flutter', 'Dart', 'Android Studio', 'Java', 'Firebase', 'XML']
    },
    {
        title: "Database",
        icon: <FaDatabase />,
        skills: ['MySQL', 'MariaDB', 'SQL', 'Oracle', 'SQL Server', 'Firebase Firestore', 'MongoDB']
    },
    {
        title: "Tools & Technologies",
        icon: <FaTools />,
        skills: ['Git', 'GitHub', 'Visual Studio', 'VS Code', 'Android Studio', 'NetBeans', 'XAMPP', 'Apache', 'REST APIs', 'Razorpay', 'PHPMailer', 'FPDF']
    },
    {
        title: "Frontend",
        icon: <FaLaptopCode />,
        skills: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Responsive Design']
    },
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
