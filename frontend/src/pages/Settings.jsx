import React from "react";
import MainLayout from "../components/layout/MainLayout";

export default function Settings() {
  return (
    <MainLayout>
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      {/* Profile Settings */}
      <div className="bg-white shadow p-4 rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>

        <div className="flex flex-col gap-3 w-1/2">
          <input
            type="text"
            placeholder="Full Name"
            className="border p-2 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded"
          />
          <button className="bg-green-600 text-white px-4 py-2 rounded w-32">
            Save
          </button>
        </div>
      </div>

      {/* System Settings */}
      <div className="bg-white shadow p-4 rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-4">System Settings</h2>

        <div className="flex flex-col gap-4 w-1/2">
          <label className="flex items-center gap-3">
            <span>Enable Notifications</span>
            <input type="checkbox" className="w-5 h-5" />
          </label>

          <label className="flex items-center gap-3">
            <span>Dark Mode</span>
            <input type="checkbox" className="w-5 h-5" />
          </label>

          <label className="flex items-center gap-2">
            Data Refresh Rate:
            <select className="border p-2 rounded">
              <option>1 second</option>
              <option>5 seconds</option>
              <option>10 seconds</option>
            </select>
          </label>
        </div>
      </div>
    </MainLayout>
  );
}
