'use client';

import { useState } from 'react';

interface Candidate {
  id: string;
  name: string;
  position: string;
  status: 'selected' | 'rejected';
  date: string;
  reason?: string;
}

interface StatusManagementProps {
  candidates : Candidate[];
}

export default function StatusManagement({ }: StatusManagementProps) {
  const [activeTab, setActiveTab] = useState<'selected' | 'rejected'>('selected');
  const [candidates] = useState<Candidate[]>([
    {
      id: '1',
      name: "John Doe",
      position: "Travel Agency Trainee",
      status: "selected",
      date: "2024-03-15"
    },
    {
      id: '2',
      name: "Jane Smith",
      position: "Hotel Management Trainee",
      status: "rejected",
      date: "2024-03-14",
      reason: "Insufficient experience"
    },
    // Add more mock data
  ]);

  const filteredCandidates = candidates.filter(c => c.status === activeTab);

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Applications</h2>
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('selected')}
            className={`${
              activeTab === 'selected'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            Selected
          </button>
          <button
            onClick={() => setActiveTab('rejected')}
            className={`${
              activeTab === 'rejected'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            Rejected
          </button>
        </nav>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-3 px-6 text-left font-medium text-gray-700">Name</th>
              <th className="py-3 px-6 text-left font-medium text-gray-700">Position</th>
              <th className="py-3 px-6 text-left font-medium text-gray-700">Date</th>
              {activeTab === 'rejected' && <th className="py-3 px-6 text-left font-medium text-gray-700">Reason</th>}
              <th className="py-3 px-6 text-left font-medium text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCandidates.map((candidate) => (
              <tr key={candidate.id} className="border-b">
                <td className="py-3 px-6 text-gray-900">{candidate.name}</td>
                <td className="py-3 px-6 text-gray-900">{candidate.position}</td>
                <td className="py-3 px-6 text-gray-900">{candidate.date}</td>
                {activeTab === 'rejected' && (
                  <td className="py-3 px-6 text-red-600">{candidate.reason}</td>
                )}
                <td className="py-3 px-6">
                  <button className="text-blue-600 hover:text-blue-800">
                    Change Status
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}