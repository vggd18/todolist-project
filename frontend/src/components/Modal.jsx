import React, { useState, useEffect } from 'react';
import '../styles/Modal.css'

const Modal = ({ isOpen, onClose, tarefa, onSave, isEditing }) => {
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
            dataTermino: isEditing ? tarefa.dataTermino : dataTermino,
            prioridade,
        };
        onSave(updatedTarefa);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <h2>{isEditing ? 'Editar Tarefa' : 'Criar Nova Tarefa'}</h2>
            <form className="modal-content">
                <label>
                    Nome
                    <input 
                        type="text" 
                        value={nome} 
                        onChange={(e) => setNome(e.target.value)} 
                        required
                    />
                </label>
                <label>
                    Descrição
                    <textarea 
                        value={descricao} 
                        onChange={(e) => setDescricao(e.target.value)}
                    ></textarea>
                </label>
                <label>
                    Data de Término
                    <input type="date"
                    value={dataTermino}
                    onChange={(e) => setDataTermino(e.target.value)}
                    disabled={isEditing}
                    />
                </label>
                <label>
                    Prioridade
                    <select 
                        value={prioridade}
                        onChange={(e) =>
                        setPrioridade(e.target.value)}
                    >
                        <option value="Baixa">Baixa</option>
                        <option value="Média">Média</option>
                        <option value="Alta">Alta</option>
                    </select>
                </label>
                <button onClick={handleSubmit} className='save'>Salvar</button>
                <button onClick={onClose} className='cancel'>Cancelar</button>
            </form>
        </div>
    );
};

export default Modal;
