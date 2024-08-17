import { Link } from "react-router-dom"
export const Navbar = () => (
    <nav>
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Contact">Contato</Link></li>
        <li><Link to="/Project">Projeto</Link></li>
    </ul>
</nav>
)