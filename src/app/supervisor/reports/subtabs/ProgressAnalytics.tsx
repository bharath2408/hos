import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

const data = [
  { month: 'Jan', completed: 45, inProgress: 30, notStarted: 25 },
  { month: 'Feb', completed: 50, inProgress: 35, notStarted: 15 },
  { month: 'Mar', completed: 65, inProgress: 25, notStarted: 10 },
  { month: 'Apr', completed: 70, inProgress: 20, notStarted: 10 },
]

export default function ProgressAnalytics() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-medium mb-4">Progress Analytics</h2>
      
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm">Total Programs</h3>
          <p className="text-2xl font-bold">248</p>
          <span className="text-green-500 text-sm">↑ 12% from last month</span>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm">Average Completion Time</h3>
          <p className="text-2xl font-bold">18 days</p>
          <span className="text-red-500 text-sm">↓ 3 days slower</span>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm">Active Programs</h3>
          <p className="text-2xl font-bold">85</p>
          <span className="text-green-500 text-sm">↑ 5 more active</span>
        </div>
      </div>

      {/* Progress Chart */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium mb-4">Monthly Progress Breakdown</h3>
        <BarChart width={800} height={400} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="completed" fill="#4ade80" name="Completed" />
          <Bar dataKey="inProgress" fill="#fbbf24" name="In Progress" />
          <Bar dataKey="notStarted" fill="#ef4444" name="Not Started" />
        </BarChart>
      </div>
    </div>
  )
}