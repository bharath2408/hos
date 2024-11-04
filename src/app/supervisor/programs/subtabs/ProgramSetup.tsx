'use client'

'use client'

export default function ProgramSetup() {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Program Details</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Program Name</label>
              <input 
                type="text" 
                defaultValue="Hotel Management" 
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Duration (months)</label>
              <input 
                type="number" 
                defaultValue={6} 
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <input 
                type="text" 
                defaultValue={'This is a trainee program.'} 
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" 
              />
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Create Program
            </button>
          </form>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Active Programs</h2>
          <ul className="list-disc pl-5">
            <li>
              <strong>Hotel Management</strong> - 6 months, This is a trainee program.
            </li><br></br>
            <li>
              <strong>Trainee Management</strong> - 8 months, This is a trainee program.
            </li><br></br>
            <li>
              <strong>Restaurant Management</strong> - 6 months, This is a trainee program.
            </li><br></br>
            {/* Add more programs here */}
          </ul>
        </div>
      </div>
    </div>
  )
}