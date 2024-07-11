import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './SocialMediaLinks.css';

function SocialMediaLinks() {
    return (
        <div className="social-media-links">
            <a href="https://www.facebook.com/share/F9Gi8GCcT4YA2uiR/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>

            <a href="https://www.instagram.com/raymond_investment_limited?igsh=a3VzbHhibXhoenRx&utm_source=qr" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://wa.me/message/A4DYG2RT44DLJ1" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </a>
        </div>
    );
}

export default SocialMediaLinks;
