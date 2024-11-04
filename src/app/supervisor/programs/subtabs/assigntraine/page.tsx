'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface Trainee {
  id: string
  name: string
  email: string
  department: string
}

export default function AssignTrainee() {
  const router = useRouter()
  const [selectedTrainees, setSelectedTrainees] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState('')

  const trainees: Trainee[] = [
    { 
      id: '1', 
      name: 'John Doe', 
      email: 'john@example.com', 
      department: 'Front Desk' 
    },
    { 
      id: '2', 
      name: 'Jane Smith', 
      email: 'jane@example.com', 
      department: 'Housekeeping' 
    },
    { 
      id: '3', 
      name: 'Mike Johnson', 
      email: 'mike@example.com', 
      department: 'Restaurant' 
    },
    { 
      id: '4', 
      name: 'Sarah Williams', 
      email: 'sarah@example.com', 
      department: 'Maintenance' 
    },
    { 
      id: '5', 
      name: 'Tom Brown', 
      email: 'tom@example.com', 
      department: 'Security' 
    }
  ]

  const filteredTrainees = trainees.filter(trainee => 
    trainee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    trainee.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    trainee.department.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleAssign = () => {
    // Add your assignment logic here
    console.log('Assigned trainees:', selectedTrainees)
    router.push('/supervisor/programs')
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Assign Trainees</h1>
        <button
          onClick={() => router.back()}
          className="text-gray-600 hover:text-gray-800"
        >
          ← Back
        </button>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search trainees by name, email, or department..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="bg-white rounded-lg shadow-md">
        <div className="p-4 border-b">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">Available Trainees</h2>
            <span className="text-sm text-gray-600">
              Selected: {selectedTrainees.length}
            </span>
          </div>
        </div>

        <div className="p-4 space-y-4">
          {filteredTrainees.map((trainee) => (
            <div 
              key={trainee.id} 
              className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors duration-150"
            >
              <div className="flex items-center space-x-4">
                <input
                  type="checkbox"
                  checked={selectedTrainees.includes(trainee.id)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedTrainees([...selectedTrainees, trainee.id])
                    } else {
                      setSelectedTrainees(selectedTrainees.filter(id => id !== trainee.id))
                    }
                  }}
                  className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                />
                <div>
                  <h3 className="font-medium text-gray-900">{trainee.name}</h3>
                  <p className="text-sm text-gray-600">{trainee.email}</p>
                </div>
              </div>
              <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                {trainee.department}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex space-x-4">
        <button
          onClick={() => router.back()}
          className="flex-1 bg-gray-100 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-150 font-medium"
        >
          Cancel
        </button>
        <button
          onClick={handleAssign}
          disabled={selectedTrainees.length === 0}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors duration-150
            ${selectedTrainees.length === 0
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-green-600 text-white hover:bg-green-700'
            }`}
        >
          Assign Selected Trainees
        </button>
      </div>
    </div>
  )
}