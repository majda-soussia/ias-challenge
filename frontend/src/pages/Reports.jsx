import React from "react";
import MainLayout from "../components/layout/MainLayout";

export default function Reports() {
  return (
    <MainLayout>
      <h1 className="text-2xl font-bold mb-4">Reports</h1>

      <div className="bg-white shadow p-4 rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-2">Generate Reports</h2>
        <p className="text-gray-600 mb-4">Select the type of report and date range.</p>

        <div className="flex gap-4">
          <select className="border p-2 rounded w-1/3">
            <option>System Events Report</option>
            <option>Cybersecurity Alerts Report</option>
            <option>Safety Incidents Report</option>
            <option>User Activity Report</option>
          </select>

          <input type="date" className="border p-2 rounded" />
          <input type="date" className="border p-2 rounded" />

          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Generate
          </button>
        </div>
      </div>

      <div className="bg-white shadow p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Recent Reports</h2>
        <ul className="text-gray-700">
          <li className="border-b py-2">Safety Report - 12/01/2025</li>
          <li className="border-b py-2">Cybersecurity Summary - 10/01/2025</li>
          <li className="border-b py-2">System Activity - 08/01/2025</li>
        </ul>
      </div>
    </MainLayout>
  );
}
