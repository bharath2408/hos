'use client'

export default function ResourceAllocation() {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Available Resources</h2>
          <div className="space-y-2">
            <div className="border rounded-md p-4">
              <h3 className="font-medium">Mentor 1</h3>
              {/* Add instructor list here */}
            </div>
            <div className="border rounded-md p-4">
              <h3 className="font-medium">Mentor 2</h3>
              {/* Add facilities list here */}
            </div>
            <div className="border rounded-md p-4">
              <h3 className="font-medium">Mentor 3</h3>
              {/* Add equipment list here */}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Resource Assignment</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Program</label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                <option>Trainee Management</option>
                <option>Hotel Management</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Resource Type</label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                <option>Mentor 1</option>
                <option>Mentor 2</option>
                <option>Mentor 3</option>
              </select>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Assign Resource
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}