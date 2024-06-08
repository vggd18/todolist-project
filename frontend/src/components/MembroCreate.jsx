import React, { useState } from 'react';
import { createMembro } from '../services/api';
import '../styles/MembroCreate.css'
const MembroCreate = () => {
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const novoMembro = { email, nome };
        try {
            await createMembro(novoMembro);
            setEmail('');
            setNome('');
        } catch (error) {
            console.error('Erro ao criar membro:', error);
        }
    };

    return (
        <div className="membro-layer">
            <h2>Cadastro de Membros</h2>
            <form className="membro-form" onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Nome:
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Salvar</button>
            </form>
        </div>
    );
};

export default MembroCreate;
