import { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/users`)
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-center">Usuarios Registrados</h2>
      <ul className="list-disc pl-5">
        {users.length > 0 ? users.map((user, index) => <li key={index}>{user.nombres} {user.apellidos}</li>) : <p>No hay usuarios aún.</p>}
      </ul>
    </div>
  );
};

export default UserList;
