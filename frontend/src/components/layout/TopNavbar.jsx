import "./style/TopNavbar.css";
import React from "react";
import UserInfoPanel from "./UserInfoPanel";

export default function TopNavbar({
  pageTitle = "Dashboard",
  pageSubtitle = "Industrial Monitoring Overview",
  userName = "Analyst"
}) {
  return (
    <div className="top-navbar d-flex justify-content-between align-items-center p-3">

      {/* Left: Title & Subtitle */}
      <div className="page-info">
        <h2 className="page-title">{pageTitle}</h2>
        <p className="page-subtitle">{pageSubtitle}</p>
      </div>

      {/* Right: Notifications + User Panel */}
      <div className="user-actions d-flex align-items-center gap-3">

        {/* Notification */}
        <div className="notification position-relative">
          <img
            src="/icon/notification.png"
            alt="Notifications"
            className="bell-icon"
          />
          <span className="notification-dot"></span>
        </div>

        {/* User Info Panel */}
        <UserInfoPanel userName={userName} />
      </div>
    </div>
  );
}
