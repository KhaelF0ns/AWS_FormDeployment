import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import UserList from "./components/UserList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/usuarios" element={<UserList />} />
      </Routes>
    </Router>
  );
}

export default App;
