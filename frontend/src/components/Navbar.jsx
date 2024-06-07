import { Link } from "react-router-dom";
import './style/Navbar.css'

const Navbar = () => {
    return (
        <nav>
        <Link to="/tarefas/nova">Criar Nova Tarefa</Link>
        <Link to="/tarefas">Listar Tarefas</Link>
      </nav>
    );
}

export default Navbar;