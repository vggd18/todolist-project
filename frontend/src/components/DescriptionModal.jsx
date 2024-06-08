import React from 'react';
import '../styles/DescriptionModal.css'

const DescriptionModal = ({ isOpen, onClose, descricao }) => {
    if (!isOpen) return null;

    return (
        <div className="description-overlay">
            <div className="description-content">
                <h2>Descrição da tarefa</h2>
                <div className="description-box">
                    <p>{descricao}</p>
                </div>
                <button onClick={onClose}>Fechar</button>
            </div>
        </div>


    );
};

export default DescriptionModal;
