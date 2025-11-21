import React from "react";
import "./style/EnergyConsumptionCard.css";

export default function EnergyConsumptionCard({
  current = "325 kW",
  today = "2.4 MWh",
  status = "Normal"
}) {
  const statusColor = {
    Normal: "energy-green",
    High: "energy-yellow",
    Critical: "energy-red",
  }[status] || "energy-green";

  return (
    <div className="simple-card">
      <h3 className="simple-card-title">Energy Consumption</h3>

      <div className="simple-card-content">
        
        <div className="info-box">
          <span className="label">Current Usage</span>
          <span className="value">{current}</span>
        </div>

        <div className="info-box">
          <span className="label">Today</span>
          <span className="value">{today}</span>
        </div>

        <div className="info-box">
          <span className="label">Status</span>

          <div className="energy-wrapper">
            <span className={`energy-dot ${statusColor}`}></span>
            <span className="value">{status}</span>
          </div>
        </div>

      </div>
    </div>
  );
}
