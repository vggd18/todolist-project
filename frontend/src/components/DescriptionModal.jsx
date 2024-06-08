import React from 'react';

const DescriptionModal = ({ isOpen, onClose, descricao }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Descrição da Tarefa</h2>
                <p>{descricao}</p>
                <button onClick={onClose}>Fechar</button>
            </div>
        </div>
    );
};

export default DescriptionModal;
