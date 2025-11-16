import React from "react";
import "./style/SystemStatusCard.css";

export default function SystemStatusCard({
  uptime = "99.7%",
  sensorsActive = 128,
  status = "Operational"
}) {
  const statusColor = {
    Operational: "status-green",
    Warning: "status-yellow",
    Critical: "status-red",
  }[status] || "status-green";

  return (
    <div className="system-card">
      <h3 className="system-card-title">System Status</h3>

      <div className="system-card-content">

        {/* Uptime */}
        <div className="info-box">
          <span className="label">System Uptime</span>
          <span className="value">{uptime}</span>
        </div>

        {/* Active sensors */}
        <div className="info-box">
          <span className="label">Active Sensors</span>
          <span className="value">{sensorsActive}</span>
        </div>

        {/* Status */}
        <div className="status-box">
          <span className="label">Status</span>

          <div className="status-indicator">
            <span className={`status-dot ${statusColor}`}></span>
            <span className="status-text">{status}</span>
          </div>
        </div>

      </div>
    </div>
  );
}
