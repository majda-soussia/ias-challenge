import { useState } from "react";
import { Sidebar } from "../components/admine/Sidebar";
import Topbar from "../components/admine/Topbar";
import { DashboardHeader } from "../components/admine/DashboardHeader";
import { UserTable } from "../components/admine/UserTable";
import AddUserForm from "../components/admine/AddUserModal"; // new import
import "./Admine.css";

export default function Admin() {
  const [openForm, setOpenForm] = useState(false);

  return (
    <div className="admin-layout">

      <Sidebar />

      <div className="admin-content">
        <Topbar />

        <main className="admin-main">
          <DashboardHeader onAddUser={() => setOpenForm(true)} />
          <UserTable />
        </main>
      </div>

      {openForm && <AddUserForm onClose={() => setOpenForm(false)} />}
    </div>
  );
}
