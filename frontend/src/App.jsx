import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import DigitalTwin from "./pages/DigitalTwin";
import Events from "./pages/Events";
import Settings from "./pages/Settings";
import Reports from "./pages/Reports";
import Admine from "./pages/Admine"
import Register from "./pages/Register";
import Login from "./pages/Login";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/digital-twin" element={<DigitalTwin />} />
      <Route path="/events" element={<Events />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/admin" element={<Admine />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
    </Routes>
  );
}
