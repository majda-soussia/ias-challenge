import { NavLink } from "react-router-dom";
import "./style/Sidebar.css";

export default function SidebarNavigation() {
    const sidebarItems = [
        { label: "Dashboard", path: "/dashboard", icon: "/icon/dash.png" },
        { label: "Digital Twin", path: "/digital-twin", icon: "/icon/T.png"},
        { label: "Events", path: "/events", icon: "/icon/events.png" },
        { label: "Reports", path: "/reports", icon: "/icon/report.png" },
        { label: "Settings", path: "/settings", icon:"/icon/settings.png" },
        { isTitle: true, label: "Admin Only" },
        { label: "Cybersecurity Center", path: "/cybersecurity", icon: "/icon/cyber.png" },
        { label: "Safety Center", path: "/safety", icon: "/icon/saftey.png"},
        { label: "Energy Management", path: "/energy", icon: "/icon/energy.png" },
      ];
      
  return (
    <div className="sidebar d-flex flex-column text-white p-4">
      <div className="mb-4">
        <h5 className="fw-bold">
          ⚡ INDUSTRIAL <br />
          MONITORING SYSTEM
        </h5>
      </div>
      <ul className="nav flex-column mb-auto">
  {sidebarItems.map((item, index) => {
    if (item.isTitle) {
      return (
        <div
          key={index}
          className="text-secondary text-uppercase small mt-4 mb-2 px-2"
        >
          {item.label}
        </div>
      );
    }

    return (
      <SidebarLink
        key={item.path}
        to={item.path}
        icon={item.icon}
        label={item.label}
      />
    );
  })}
</ul>

    </div>
  );
}

function SidebarLink({ to, icon, label }) {
    return (
      <li className="nav-item">
        <NavLink
          to={to}
          className={({ isActive }) =>
            `nav-link d-flex align-items-center gap-2 sidebar-link ${
              isActive ? "active" : ""
            }`
          }
        >
          {icon && (
            typeof icon === "string" && icon.startsWith("/") ? (
              <img src={icon} alt={label} className="sidebar-icon" />
            ) : (
              <span>{icon}</span>
            )
          )}
          <span>{label}</span>
        </NavLink>
      </li>
    );
  }
  
