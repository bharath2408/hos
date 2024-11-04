'use client';

import { useState } from 'react';
import { Trainee } from '@/app/supervisor/trainees/page'

interface ProgressTrackingProps {
  trainees: Trainee[];
}

interface TraineeProgress {
  id: number;
  traineeName: string;
  module: string;
  completion: number;
  lastUpdated: string;
  status: string;
}

export default function ProgressTracking({ }: ProgressTrackingProps) {
  const [progress] = useState<TraineeProgress[]>([
    {
      id: 1,
      traineeName: "Alex Johnson",
      module: "Core Training",
      completion: 75,
      lastUpdated: "2024-03-15",
      status: "In Progress"
    },
    // Add more mock data
  ]);

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Progress Tracking</h2>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {progress.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium">{item.traineeName}</h3>
              <span className="text-sm text-gray-500">{item.lastUpdated}</span>
            </div>
            <p className="text-gray-600 mb-2">{item.module}</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${item.completion}%` }}
              ></div>
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-sm text-gray-600">{item.completion}% Complete</span>
              <span className="text-sm font-medium text-blue-600">{item.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}