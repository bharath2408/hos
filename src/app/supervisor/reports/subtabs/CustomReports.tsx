export default function CustomReports() {
    return (
      <div className="space-y-6">
        <h2 className="text-xl font-medium mb-4">Custom Reports</h2>
  
        {/* Report Builder */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-4">Report Builder</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Report Name</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Trainee Analysis"
              />
            </div>
  
            <div>
              <label className="block text-sm font-medium text-gray-700">Select Metrics</label>
              <select multiple className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                <option>Completion Rate</option>
                <option>Time Spent</option>
                <option>Issue Count</option>
                <option>Resource Utilization</option>
                <option>Cost Analysis</option>
              </select>
            </div>
  
            <div>
              <label className="block text-sm font-medium text-gray-700">Date Range</label>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="date"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                <input
                  type="date"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
  
            <div>
              <label className="block text-sm font-medium text-gray-700">Chart Type</label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                <option>Bar Chart</option>
                <option>Line Chart</option>
                <option>Pie Chart</option>
                <option>Table</option>
              </select>
            </div>
  
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Generate Report
            </button>
          </form>
        </div>
  
        {/* Saved Reports */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-4">Saved Reports</h3>
          <div className="space-y-4">
            {['Monthly Performance Overview', 'Resource Utilization Report', 'Cost Analysis Summary'].map((report) => (
              <div key={report} className="flex items-center justify-between p-4 border rounded-lg">
                <span className="font-medium">{report}</span>
                <div className="space-x-2">
                  <button className="text-blue-600 hover:text-blue-800">Edit</button>
                  <button className="text-blue-600 hover:text-blue-800">Download</button>
                  <button className="text-red-600 hover:text-red-800">Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }