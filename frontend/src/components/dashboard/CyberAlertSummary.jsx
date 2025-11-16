import React from "react";
import "./style/CyberAlertSummary.css";

export default function CyberAlertSummary({
  total = 18,
  critical = 2
}) {
  return (
    <div className="simple-card">
      <h3 className="simple-card-title">Cyber Alerts</h3>

      <div className="simple-card-content">

        <div className="info-box">
          <span className="label">Total Alerts</span>
          <span className="value">{total}</span>
        </div>

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
