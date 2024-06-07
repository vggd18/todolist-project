import { Link } from "react-router-dom";
import './style/Navbar.css'

const Navbar = () => {
    return (
        <nav>
        <Link to="/tarefas">Listar Tarefas</Link>
        <Link>Criar Membro</Link>
      </nav>
    );
}

export default Navbar;