import React, { useState, useEffect } from 'react';

const Modal = ({ isOpen, onClose, tarefa, onSave, onDelete }) => {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [dataTermino, setDataTermino] = useState('');
    const [prioridade, setPrioridade] = useState('Baixa');

    useEffect(() => {
        if (tarefa) {
            setNome(tarefa.nome);
            setDescricao(tarefa.descricao);
            setDataTermino(tarefa.dataTermino);
            setPrioridade(tarefa.prioridade);
        } else {
            setNome('');
            setDescricao('');
            setDataTermino('');
            setPrioridade('Baixa');
        }
    }, [tarefa]);

    const handleSubmit = () => {
        const updatedTarefa = {
            ...tarefa,
            nome,
            descricao,
            prioridade,
        };
        onSave(updatedTarefa);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Editar Tarefa</h2>
                <label>
                    Nome:
                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                </label>
                <label>
                    Descrição:
                    <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)}></textarea>
                </label>
                <label>
                    Data de Término:
                    <input type="date" value={dataTermino} disabled />
                </label>
                <label>
                    Prioridade:
                    <select value={prioridade} onChange={(e) => setPrioridade(e.target.value)}>
                        <option value="Baixa">Baixa</option>
                        <option value="Média">Média</option>
                        <option value="Alta">Alta</option>
                    </select>
                </label>
                <button onClick={handleSubmit}>Salvar</button>
                <button onClick={onClose}>Cancelar</button>
            </div>
        </div>
    );
};

export default Modal;
