import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts'

const data = [
  { name: 'Critical', value: 15 },
  { name: 'High', value: 25 },
  { name: 'Medium', value: 35 },
  { name: 'Low', value: 25 },
]

const COLORS = ['#ef4444', '#f97316', '#fbbf24', '#22c55e']

export default function IssueAnalysis() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-medium mb-4">Issue Analysis</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Issue Distribution */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-4">Issue Distribution</h3>
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx={200}
              cy={200}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>

        {/* Issue Summary */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-4">Issue Summary</h3>
          <div className="space-y-4">
            {data.map((item, index) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div 
                    className="w-3 h-3 rounded-full mr-2"
                    style={{ backgroundColor: COLORS[index] }}
                  ></div>
                  <span>{item.name} Priority</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="font-medium">{item.value}</span>
                  <span className="text-gray-500 text-sm">
                    {Math.round((item.value / 100) * 100)}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Issues Table */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium mb-4">Recent Issues</h3>
        <table className="min-w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2">Issue ID</th>
              <th className="text-left py-2">Description</th>
              <th className="text-left py-2">Priority</th>
              <th className="text-left py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2">#1234</td>
              <td className="py-2">Server performance degradation</td>
              <td className="py-2"><span className="px-2 py-1 bg-red-100 text-red-800 rounded">Critical</span></td>
              <td className="py-2">In Progress</td>
            </tr>
            <tr className="border-b">
              <td className="py-2">#1235</td>
              <td className="py-2">UI rendering bug</td>
              <td className="py-2"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded">Medium</span></td>
              <td className="py-2">Open</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}