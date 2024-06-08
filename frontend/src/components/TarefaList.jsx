import React, { useEffect, useState } from 'react';
import { getTarefas, updateTarefa, deleteTarefa, createTarefa } from '../services/api';
import Modal from './Modal';
import DescriptionModal from './DescriptionModal';
import '../styles/TarefaList.css'

const TarefaList = () => {
    const [tarefas, setTarefas] = useState([]);
    const [descricao, setDescricao] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [descriptionModalIsOpen, setDescriptionModalIsOpen] = useState(false);
    const [currentTarefa, setCurrentTarefa] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [selectedTarefaId, setSelectedTarefaId] = useState(null);

    useEffect(() => {
        loadTarefas();
    }, []);

    const loadTarefas = async () => {
        const response = await getTarefas();
        setTarefas(response.data);
    };

    const handleClick = (tarefa) => {
        setDescricao(tarefa.descricao);
        setSelectedTarefaId(tarefa.id);
        setDescriptionModalIsOpen(true);
    };

    const handleDelete = async (id) => {
        await deleteTarefa(id);
        loadTarefas();
        if (descricao && tarefas.find(tarefa => tarefa.id === id)?.descricao === descricao) {
            setDescriptionModalIsOpen(false);
            setDescricao('');
            setSelectedTarefaId(null);
        }
    };

    const handleFinalizarTarefa = async (id) => {
        const response = await updateTarefa(id, { finalizada: true });
        if (response.status === 200) {
            loadTarefas();
        } else {
            console.error('Erro ao finalizar tarefa');
        }
    };

    const handleEdit = (tarefa) => {
        setCurrentTarefa(tarefa);
        setIsEditing(true);
        setModalIsOpen(true);
    };

    const handleCreate = () => {
        setCurrentTarefa(null);
        setIsEditing(false);
        setModalIsOpen(true);
    };

    const handleSave = async (tarefa) => {
        try {
            if (isEditing) {
                await updateTarefa(tarefa.id, tarefa);
            } else {
                await createTarefa(tarefa);
            }
            loadTarefas();
            setModalIsOpen(false);
        } catch (error) {
            console.error('Erro ao salvar tarefa:', error);
        }
    };

    return (
        <div className='task-layer'>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Prioridade</th>
                        <th>Status</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {tarefas.map(tarefa => (
                        <React.Fragment key={tarefa.id}>
                            <tr>
                                <td onClick={() => handleClick(tarefa)}>
                                    {tarefa.nome}
                                </td>
                                <td>{tarefa.prioridade}</td>
                                <td>{tarefa.finalizada ? 'Finalizada' : 'Pendente'}</td>
                                <td className='buttons-task'>
                                    <button onClick={() => handleEdit(tarefa)}>Editar</button>
                                    <button onClick={() => handleDelete(tarefa.id)}>Excluir</button>
                                    {!tarefa.finalizada && <button onClick={() => handleFinalizarTarefa(tarefa.id)}>Finalizar</button>}
                                </td>
                            </tr>
                            {selectedTarefaId === tarefa.id && descriptionModalIsOpen && (
                                <tr>
                                    <td colSpan="4">
                                        <DescriptionModal 
                                            isOpen={descriptionModalIsOpen} 
                                            onClose={() => {
                                                setDescriptionModalIsOpen(false);
                                                setSelectedTarefaId(null);
                                            }} 
                                            descricao={descricao} 
                                        />
                                    </td>
                                </tr>
                            )}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
            <div className='new-task'>
                <p onClick={handleCreate}>Criar Nova Tarefa</p>
            </div>
            <Modal 
                isOpen={modalIsOpen} 
                onClose={() => setModalIsOpen(false)} 
                tarefa={currentTarefa} 
                onSave={handleSave} 
                isEditing={isEditing}
            />
        </div>
    );
};
export default TarefaList;
