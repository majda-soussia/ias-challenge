import React from "react";
import "./style/UserInfoPanel.css";

export default function UserInfoPanel({ userName = "Analyst" }) {
  return (
    <div className="user-info-panel d-flex align-items-center gap-2">

      {/* Avatar */}
      <img
        src="https://i.pravatar.cc/40"
        alt="User Avatar"
        className="user-info-avatar"
      />

      {/* User Info */}
      <div className="d-flex flex-column">
        <span className="user-info-name">{userName}</span>
      </div>

    </div>
  );
}
