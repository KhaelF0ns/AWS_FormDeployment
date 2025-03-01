import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    fechaNacimiento: "",
    contraseña: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${process.env.REACT_APP_API_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Usuario registrado");
      setFormData({ nombres: "", apellidos: "", fechaNacimiento: "", contraseña: "" });
      navigate("/usuarios");
    } else {
      alert("Error en el registro");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-center">Registro</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="nombres" placeholder="Nombres" onChange={handleChange} required className="w-full p-2 border rounded-md"/>
        <input type="text" name="apellidos" placeholder="Apellidos" onChange={handleChange} required className="w-full p-2 border rounded-md"/>
        <input type="date" name="fechaNacimiento" onChange={handleChange} required className="w-full p-2 border rounded-md"/>
        <input type="password" name="contraseña" placeholder="Contraseña" onChange={handleChange} required className="w-full p-2 border rounded-md"/>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default Form;
