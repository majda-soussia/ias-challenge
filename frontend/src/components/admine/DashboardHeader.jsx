import React, { useState } from "react";
import AddUserModal from "./AddUserModal";
export function DashboardHeader({ onAddUser }) {
    return (
      <div className="mb-8">
        <h2 className="text-xl font-medium text-gray-500">Hello, Admin 👋</h2>
        <h1 className="text-3xl font-bold text-[#1f2041]">Users Dashboard</h1>
  
        <div className="flex items-center gap-4 mt-6">
  
          <button
            className="bg-[#1f2041] text-white px-4 py-2 rounded-md shadow hover:bg-[#2b2c54] transition"
            onClick={onAddUser}
          >
            Add User
          </button>
  
          <button className="bg-[#1f2041] text-white px-4 py-2 rounded-md shadow hover:bg-[#2b2c54] transition">
            Export
          </button>
  
          <div className="ml-auto flex items-center gap-2 border rounded-md px-3 py-2 bg-white shadow-sm">
            🔍
            <input
              placeholder="Search user..."
              className="ml-1 outline-none text-sm w-48"
            />
          </div>
        </div>
      </div>
    );
  }
  