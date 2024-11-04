'use client'
 
import { useState } from 'react'
import { useRouter } from 'next/navigation'
 
interface TraineeProgress {
  id: string
  name: string
  progress: number
  lastAccessed: string
  status: 'completed' | 'in_progress' | 'not_started'
}
 
export default function ProgramProgressPage({ }: { params: { id: string } }) {
  const router = useRouter()
  const [progress] = useState({
    totalTrainees: 25,
    completedTrainees: 15,
    averageScore: 78,
    traineesProgress: [
      {
        id: '1',
        name: 'John Doe',
        progress: 100,
        lastAccessed: '2024-03-15',
        status: 'completed'
      },
      {
        id: '2',
        name: 'Jane Smith',
        progress: 65,
        lastAccessed: '2024-03-14',
        status: 'in_progress'
      },
      // Add more trainees as needed
    ] as TraineeProgress[]
  })
 
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Program Progress</h1>
        <button
          onClick={() => router.back()}
          className="text-gray-600 hover:text-gray-800"
        >
          ← Back
        </button>
      </div>
 
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-gray-600 mb-2">Total Trainees</h3>
          <p className="text-3xl font-bold">{progress.totalTrainees}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-gray-600 mb-2">Completed</h3>
          <p className="text-3xl font-bold text-green-600">
            {progress.completedTrainees}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-gray-600 mb-2">Average Score</h3>
          <p className="text-3xl font-bold text-blue-600">
            {progress.averageScore}%
          </p>
        </div>
      </div>
 
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-4 border-b">
          <h2 className="font-semibold">Trainee Progress</h2>
        </div>
        <div className="p-4">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-600">
                <th className="pb-4">Trainee</th>
                <th className="pb-4">Progress</th>
                <th className="pb-4">Last Accessed</th>
                <th className="pb-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {progress.traineesProgress.map((trainee) => (
                <tr key={trainee.id} className="hover:bg-gray-50">
                  <td className="py-4">{trainee.name}</td>
                  <td className="py-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-full bg-gray-200 rounded-full h-2 max-w-[200px]">
                        <div
                          className="bg-blue-600 rounded-full h-2"
                          style={{ width: `${trainee.progress}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-600">
                        {trainee.progress}%
                      </span>
                    </div>
                  </td>
                  <td className="py-4 text-gray-600">
                    {new Date(trainee.lastAccessed).toLocaleDateString()}
                  </td>
                  <td className="py-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        trainee.status === 'completed'
                          ? 'bg-green-100 text-green-800'
                          : trainee.status === 'in_progress'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {trainee.status.replace('_', ' ')}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}