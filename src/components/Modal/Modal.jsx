import React from 'react';
import './Modal.css';

const Modal = ({ article, onClose }) => {
    if (!article) return null;

    const handleBackgroundClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="modal" onClick={handleBackgroundClick}>
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>{article.title}</h2>
                <p>{article.abstract}</p>
                <a href={article.url} target="_blank" rel="noreferrer">Read Full Article</a>
            </div>
        </div>
    );
};

export default Modal;
