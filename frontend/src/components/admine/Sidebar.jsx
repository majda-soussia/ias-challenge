import "./style/sidebar.css";
import { Link, useLocation } from "react-router-dom";
export function Sidebar() {
    const { pathname } = useLocation();
  
    const items = [
      { label: "Users dashboard", path: "/admin", icon: "/icon/user.svg" },
      { label: "Safety Center", path: "/safety", icon: "/icon/safety.svg" },
      { label: "Cybersecurity Center", path: "/cybersecurity", icon: "/icon/cyber.svg" },
      { label: "Energy management", path: "/energy", icon: "/icon/energy.svg" },
    ];
  
    return (
      <aside className="sidebar">
        <h1 className="sidebar-title">Admin<br />Panel</h1>
  
        <nav className="sidebar-menu">
          {items.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`sidebar-item ${pathname === item.path ? "active" : ""}`}
            >
              <img src={item.icon} className="icon" />
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
    );
  }
  