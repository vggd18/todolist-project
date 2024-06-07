import { Link } from "react-router-dom";
import '../styles/Navbar.css'

const Navbar = () => {
    return (
      <nav>
        <Link to="/tarefas">Listar Tarefas</Link>
        <Link to="/">Home</Link>
        <Link to="/membros">Criar Membro</Link>
      </nav>
    );
}

export default Navbar;