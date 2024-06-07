import React, { useEffect, useState } from 'react';
import { getTarefas, updateTarefa, deleteTarefa } from '../services/api';
import Modal from './Modal';
import DescriptionModal from './DescriptionModal';

const TarefaList = () => {
    const [tarefas, setTarefas] = useState([]);
    const [descricao, setDescricao] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [descriptionModalIsOpen, setDescriptionModalIsOpen] = useState(false);
    const [currentTarefa, setCurrentTarefa] = useState(null);

    useEffect(() => {
        loadTarefas();
    }, []);

    const loadTarefas = async () => {
        const response = await getTarefas();
        setTarefas(response.data);
    };

    const handleClick = (descricao) => {
        setDescricao(descricao);
        setDescriptionModalIsOpen(true);
    };

    const handleDelete = async (id) => {
        await deleteTarefa(id);
        loadTarefas();
        // Se a tarefa excluída tiver a descrição atualmente mostrada, feche o modal de descrição
        if (descricao && tarefas.find(tarefa => tarefa.id === id)?.descricao === descricao) {
            setDescriptionModalIsOpen(false);
            setDescricao('');
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
        setModalIsOpen(true);
    };

    const handleSave = async (tarefa) => {
        try {
            console.log('Handle Save Tarefa:', tarefa);
            await updateTarefa(tarefa.id, tarefa);
            loadTarefas();
            setModalIsOpen(false);
        } catch (error) {
            console.error('Erro ao salvar tarefa:', error);
        }
    };

    return (
        <div>
            <h2>Listagem de Tarefas</h2>
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
                        <tr key={tarefa.id}>
                            <td onClick={() => handleClick(tarefa.descricao)}>
                                {tarefa.nome}
                            </td>
                            <td>{tarefa.prioridade}</td>
                            <td>{tarefa.finalizada ? 'Finalizada' : 'Pendente'}</td>
                            <td>
                                <button onClick={() => handleEdit(tarefa)}>Editar</button>
                                <button onClick={() => handleDelete(tarefa.id)}>Excluir</button>
                                {!tarefa.finalizada && <button onClick={() => handleFinalizarTarefa(tarefa.id)}>Finalizar</button>}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Modal 
                isOpen={modalIsOpen} 
                onClose={() => setModalIsOpen(false)} 
                tarefa={currentTarefa} 
                onSave={handleSave} 
                onDelete={handleDelete}
            />
            <DescriptionModal 
                isOpen={descriptionModalIsOpen} 
                onClose={() => setDescriptionModalIsOpen(false)} 
                descricao={descricao} 
            />
        </div>
    );
};
export default TarefaList;