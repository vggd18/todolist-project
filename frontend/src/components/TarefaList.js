import React, { useEffect, useState } from 'react';
import { getTarefas, updateTarefa } from '../services/api';

const TarefaList = () => {
    const [tarefas, setTarefas] = useState([]);
    const [descricao, setDescricao] = useState('');

    useEffect(() => {
        loadTarefas();
    }, []);

    const loadTarefas = async () => {
        const response = await getTarefas();
        setTarefas(response.data);
    };

    const handleClick = (descricao) => {
        setDescricao(descricao);
    };

    const handleFinalizarTarefa = async (id) => {
        const response = await updateTarefa(id, { finalizada: true });
        if (response.status === 200) {
            loadTarefas();
        } else {
            console.error('Erro ao finalizar tarefa');
        }
    };

    return (
        <div>
            <h2>Listagem de Tarefas</h2>
            <ul>
                {tarefas.map(tarefa => (
                    <li key={tarefa.id}>
                        <span onClick={() => handleClick(tarefa.descricao)}>
                            {tarefa.nome} - {tarefa.prioridade} - {tarefa.finalizada ? 'Finalizada' : 'Pendente'}
                        </span>
                        <button>Excluir</button>
                        {!tarefa.finalizada && <button onClick={() => handleFinalizarTarefa(tarefa.id)}>Finalizar</button>}
                    </li>
                ))}
            </ul>
            {descricao && <p>{descricao}</p>}
        </div>
    );
};

export default TarefaList;

