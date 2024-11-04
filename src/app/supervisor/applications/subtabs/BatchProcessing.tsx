'use client';

import { useState } from 'react';

interface Batch {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  totalCandidates: number;
  status: string;
  progress: number;
}

interface BatchProcessingProps {
  batches: Batch[];
}

export default function BatchProcessing({ batches }: BatchProcessingProps) {
  const [] = useState<Batch[]>([
    {
      id: '1',
      name: "Batch 2024-A",
      startDate: "2024-01-15",
      endDate: "2024-03-15",
      totalCandidates: 25,
      status: "in-progress",
      progress: 75
    },
    {
      id: '2',
      name: "Batch 2024-B",
      startDate: "2024-02-01",
      endDate: "2024-04-01",
      totalCandidates: 30,
      status: "upcoming",
      progress: 0
    },
    // Add more mock data
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Batch Processing</h2>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Create New Batch
        </button>
      </div>

      <div className="grid gap-6">
        {batches.map((batch) => (
          <div
            key={batch.id}
            className="bg-white p-6 rounded-lg shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold">{batch.name}</h3>
                <p className="text-sm text-gray-600">
                  {batch.startDate} - {batch.endDate}
                </p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                batch.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                'bg-yellow-100 text-yellow-800'
              }`}>
                {batch.status}
              </span>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progress</span>
                <span>{batch.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${batch.progress}%` }}
                />
              </div>
            </div>

            <div className="mt-4 flex justify-between items-center">
              <div className="text-sm text-gray-600">
                Total Candidates: {batch.totalCandidates}
              </div>
              <div className="space-x-2">
                <button className="px-3 py-1 text-sm text-blue-600 hover:text-blue-800">
                  View Details
                </button>
                <button className="px-3 py-1 text-sm text-blue-600 hover:text-blue-800">
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}