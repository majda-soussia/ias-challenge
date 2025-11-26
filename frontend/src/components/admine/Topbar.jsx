import "./style/topbar.css";

export default function Topbar() {
    return (
      <div className="topbar">
        <span className="menu-icon">☰</span>
        <span className="notif-icon">🔔</span>
  
        <div className="profile">
          <p>Admin</p>
          <img src="https://i.pravatar.cc/40" alt="user"/>
        </div>
      </div>
    );
  }
  