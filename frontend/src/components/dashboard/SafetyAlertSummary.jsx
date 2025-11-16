import React from "react";
import "./style/SafetyAlertSummary.css";

export default function SafetyAlertSummary({ total = 10, critical = 2 }) {
  return (
    <div className="simple-card">
      <h3 className="simple-card-title">Safety Alerts</h3>

      <div className="simple-card-content">
        {/* Total Alerts */}
        <div className="info-box">
          <span className="label">Total Alerts</span>
          <span className="value">{total}</span>
        </div>

        {/* Critical Alerts */}
        <div className="info-box">
          <span className="label">Critical Alerts</span>
          <div className="critical-wrapper">
            <span className="critical-dot"></span>
            <span className="value">{critical}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
