export default function AddUserForm({ onClose }) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <div className="bg-white rounded-xl p-6 w-[380px] shadow-xl">
  
          <h2 className="text-xl font-bold mb-4">Add New User</h2>
  
          <div className="flex flex-col gap-3">
            <input className="border p-2 rounded" placeholder="First name" />
            <input className="border p-2 rounded" placeholder="Last name" />
            <input className="border p-2 rounded" placeholder="Role" />
            <input className="border p-2 rounded" placeholder="Email" />
          </div>
  
          <div className="flex justify-end gap-2 mt-4">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Cancel
            </button>
  
            <button className="px-4 py-2 bg-[#1f2041] text-white rounded">
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }
  