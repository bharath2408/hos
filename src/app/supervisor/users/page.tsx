'use client'

import { Users, UserPlus, Search, Edit2, X, Trash2 } from 'lucide-react'
import { useState } from 'react'

type User = {
  id: number
  fullName: string
  email: string
  password: string
  position?: 'supervisor' | 'trainee'
  createdAt: string
}

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)

  // Your complete data with state management
  const [users, setUsers] = useState<User[]>([
    {
      id: 6,
      fullName: "sharieff",
      email: "sharieff23@gmail.com",
      position: "supervisor",
      password: "1234567890",
      createdAt: "2024-10-30T09:50:31.862Z"
    },
    {
      id: 7,
      fullName: "kirthy rajan",
      email: "kirthyrajang@gmail.com",
      position: "supervisor",
      password: "kirthyeorrfh",
      createdAt: "2024-10-30T10:13:37.239Z"
    },
    {
      id: 8,
      fullName: "srini",
      email: "srini1111@gmail.com",
      position: "supervisor",
      password: "kirthyeorrfh",
      createdAt: "2024-10-30T10:13:37.239Z"
    },
    {
      id: 11,
      fullName: "kirthy rajan",
      email: "kirthyrajang@gmail.com",
      position: "supervisor",
      password: "kirthyeorrfh",
      createdAt: "2024-10-30T10:13:37.239Z"
    },
    {
      id: 12,
      fullName: "saravanan",
      email: "saravana@gmail.com",
      position: "supervisor",
      password: "1234567890",
      createdAt: "2024-10-30T10:13:37.239Z"
    },
    {
      id: 5,
      fullName: "rohit",
      email: "rohit@gmail.com",
      position: "trainee",
      password: "1234567890-",
      createdAt: "2024-10-30T09:42:04.814Z"
    },
    {
      id: 9,
      fullName: "rohit",
      email: "rohit@gmail.com",
      position: "trainee",
      password: "1234567890-",
      createdAt: "2024-10-30T09:42:04.814Z"
    }
  ])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const handleEdit = (user: User) => {
    setSelectedUser(user)
    setIsEditModalOpen(true)
  }

  const handleDelete = (userId: number) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(user => user.id !== userId))
    }
  }

  // Filter users by position and search term
  const filterUsers = (position: string) => {
    return users.filter(user => 
      user.position === position && 
      (user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
       user.email.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  }

  // Define the order of positions
  const positions = ['supervisor', 'trainee']

  const renderTable = (position: string) => {
    const filteredUsers = filterUsers(position)
    if (filteredUsers.length === 0) return null

    return (
      <div key={position} className="bg-white rounded-lg shadow overflow-hidden mb-6">
        <div className="bg-gray-50 px-6 py-3 border-b">
          <h2 className="text-lg font-semibold text-gray-900">
            {position.charAt(0).toUpperCase() + position.slice(1)}s
            <span className="ml-2 text-sm text-gray-500">({filteredUsers.length})</span>
          </h2>
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Join Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                      <Users className="h-5 w-5 text-gray-500" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{user.fullName}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {formatDate(user.createdAt)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex items-center space-x-3">
                    <button 
                      onClick={() => handleEdit(user)}
                      className="text-indigo-600 hover:text-indigo-900 flex items-center gap-1"
                    >
                      <Edit2 className="w-4 h-4" />
                      Edit
                    </button>
                    <button 
                      onClick={() => handleDelete(user.id)}
                      className="text-red-600 hover:text-red-900 flex items-center gap-1"
                    >
                      <Trash2 className="w-4 h-4" />
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Users Management</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2">
          <UserPlus className="w-4 h-4" />
          Add User
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search users..."
          className="pl-10 pr-4 py-2 w-full border rounded-lg"
        />
      </div>

      {/* Tables in specific order */}
      {positions.map(position => renderTable(position))}

      {/* Edit Modal */}
      {isEditModalOpen && selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Edit User</h2>
              <button onClick={() => setIsEditModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  defaultValue={selectedUser.fullName}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  defaultValue={selectedUser.email}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Position</label>
                <select
                  defaultValue={selectedUser.position}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                >
                  <option value="supervisor">Supervisor</option>
                  <option value="trainee">Trainee</option>
                </select>
              </div>
              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={() => setIsEditModalOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    // Handle save changes here
                    setIsEditModalOpen(false)
                  }}
                  className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}