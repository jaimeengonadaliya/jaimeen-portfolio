import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            background: 'var(--bg-color)',
            borderTop: '1px solid var(--card-border)',
            padding: '2.5rem 0',
            textAlign: 'center',
            color: 'var(--text-secondary)'
        }}>
            <h4 className="mono-tag" style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--primary-color)' }}>Jaimeen Gondaliya</h4>
            <p style={{ marginBottom: '1rem', opacity: 0.8 }}>Android Developer | Software Developer</p>
            <p className="mono-tag" style={{ fontSize: '0.9rem', opacity: 0.7 }}>
                &copy; 2026 Jaimeen Gondaliya. All Rights Reserved.
            </p>
        </footer>
    );
};

export default Footer;
