import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

const data = [
  { week: 'W1', rate: 78 },
  { week: 'W2', rate: 82 },
  { week: 'W3', rate: 85 },
  { week: 'W4', rate: 89 },
]

export default function CompletionRates() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-medium mb-4">Completion Rates</h2>

      {/* Completion Rate Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm">Overall Completion Rate</h3>
          <p className="text-2xl font-bold">89%</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '89%' }}></div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm">On-Time Completion</h3>
          <p className="text-2xl font-bold">76%</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '76%' }}></div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm">Delayed Programs</h3>
          <p className="text-2xl font-bold">15%</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-red-500 h-2.5 rounded-full" style={{ width: '15%' }}></div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm">Early Completion</h3>
          <p className="text-2xl font-bold">32%</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '32%' }}></div>
          </div>
        </div>
      </div>

      {/* Trend Chart */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium mb-4">Weekly Completion Trend</h3>
        <LineChart width={800} height={400} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="week" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="rate" stroke="#3b82f6" />
        </LineChart>
      </div>
    </div>
  )
}