'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface Program {
  id: string
  title: string
  videos: number
  duration: number
  assignedTrainees: number
  completionRate: number
  status: 'Active' | 'Draft' | 'Archived'
}

export default function SupervisorProgramsPage() {
  const router = useRouter()
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const programs: Program[] = [
    {
      id: '1',
      title: 'Introduction to Hospitality',
      videos: 8,
      duration: 120,
      assignedTrainees: 15,
      completionRate: 75,
      status: 'Active'
    },
    {
      id: '2',
      title: 'Customer Service Excellence',
      videos: 12,
      duration: 180,
      assignedTrainees: 20,
      completionRate: 45,
      status: 'Active'
    },
    {
      id: '3',
      title: 'Food Safety & Hygiene',
      videos: 10,
      duration: 150,
      assignedTrainees: 18,
      completionRate: 60,
      status: 'Draft'
    },
    {
      id: '4',
      title: 'Hotel Management Basics',
      videos: 15,
      duration: 200,
      assignedTrainees: 25,
      completionRate: 30,
      status: 'Archived'
    }
  ]

  const filteredPrograms = programs.filter(program => {
    if (activeFilter !== 'all' && program.status.toLowerCase() !== activeFilter) return false
    if (searchQuery && !program.title.toLowerCase().includes(searchQuery.toLowerCase())) return false
    return true
  })

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Training Programs Management</h1>
        <button 
          onClick={() => router.push('/supervisor/programs/subtabs/new-program')}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Create New Program
        </button>
      </div>

      <div className="flex gap-4 mb-6">
        <select
          value={activeFilter}
          onChange={(e) => setActiveFilter(e.target.value)}
          className="border rounded-lg px-3 py-2 w-40"
        >
          <option value="all">All Programs</option>
          <option value="active">Active</option>
          <option value="draft">Draft</option>
          <option value="archived">Archived</option>
        </select>
        <input
          type="text"
          placeholder="Search programs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border rounded-lg px-3 py-2 flex-1"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPrograms.map((program) => (
          <div key={program.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold">{program.title}</h3>
                <span className={`text-xs px-2 py-1 rounded-full mt-1 inline-block
                  ${program.status === 'Active' ? 'bg-green-100 text-green-800' : 
                    program.status === 'Draft' ? 'bg-yellow-100 text-yellow-800' : 
                    'bg-gray-100 text-gray-800'}`}
                >
                  {program.status}
                </span>
              </div>
              <button 
                onClick={() => router.push(`/supervisor/programs/subtabs/edit-program/${program.id}`)}
                className="text-blue-600"
              >
                <span role="img" aria-label="edit">📝</span>
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Videos:</span>
                <span>{program.videos}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Duration:</span>
                <span>{program.duration} mins</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Assigned Trainees:</span>
                <span>{program.assignedTrainees}</span>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-600">Completion Rate:</span>
                  <span>{program.completionRate}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 rounded-full h-2" 
                    style={{ width: `${program.completionRate}%` }}
                  />
                </div>
              </div>

              <div className="flex gap-4 pt-2">
                <button 
                  onClick={() => router.push(`/supervisor/programs/subtabs/assigntraine`)}
                  className="flex-1 bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
                >
                  Assign Trainees
                </button>
                <button 
                  onClick={() => router.push(`/supervisor/programs/subtabs/progresspage`)}
                  className="flex-1 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                >
                  View Progress
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}