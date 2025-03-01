import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-center space-x-4">
      <Link to="/" className="hover:underline">Registro</Link>
      <Link to="/usuarios" className="hover:underline">Usuarios</Link>
    </nav>
  );
};

export default Navbar;
