 
import React from "react";

const users = [
  {
    id: 1,
    name: "Arjun Sharma",
    email: "arjun@gmail.com",
    status: "active",
  },
  {
    id: 2,
    name: "Sana Reddy",
    email: "sana@gmail.com",
    status: "blocked",
  },
  {
    id: 3,
    name: "john doe",
    email: "john@gmail.com",
    status: "blocked",
  },
  {
    id: 4,
    name: "Samuel",
    email: "samuel@gmail.com",
    status: "active",
  },
];

const ManageUser = () => {
  return (
    <div className="w-full min-h-screen p-6">
      
      {/* Top header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-500">Manage Users</h1>

        <input
          type="text"
          placeholder="Search users..."
          className="border px-4 py-2 rounded-lg w-60 text-gray-500"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto mt-8 bg-white rounded-lg shadow border border-gray-400">
        <table className="w-full text-left">
          <thead className="border-b">
            <tr className="text-gray-500">
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Status</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr className="border-b border-gray-400 text-gray-500" key={user.id}>
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>

                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      user.status === "active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>

                <td className="p-3 flex items-center justify-end gap-3">
                  
                  {user.status === "active" ? (
                    <button className="px-3 py-1 bg-yellow-500 text-white rounded-lg text-sm">
                      Block
                    </button>
                  ) : (
                    <button className="px-3 py-1 bg-green-500 text-white rounded-lg text-sm">
                      Unblock
                    </button>
                  )}

                  <button className="px-3 py-1 bg-red-600 text-white rounded-lg text-sm">
                    Delete
                  </button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
