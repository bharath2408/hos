'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Trainee } from '@/app/supervisor/trainees/page'
// import PerformanceMetrics from '@/app/supervisor/trainees/progresstracking/page';

interface TraineeDirectoryProps {
  trainees: Trainee[];
  performanceData: {
    id: number;
    traineeName: string;
    metrics: {
      category: string;
      score: number;
    }[];
    overallRating: number;
    lastEvaluation: string;
  }[];
}

const TraineeDirectory = ({ trainees }: TraineeDirectoryProps) => {
  const router = useRouter();
  const [hoveredTrainee, setHoveredTrainee] = useState<number | null>(null);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Trainee Directory</h2>
      <div className="space-y-4">
        {trainees.map((trainee) => (
          <div key={trainee.id} className="relative p-4 border rounded-lg">
            <h3 
              className="font-medium text-blue-600 hover:text-blue-800 cursor-pointer"
              onClick={() => {
                router.push(`/supervisor/trainees/`);
              }}
              onMouseEnter={() => setHoveredTrainee(trainee.id)}
              onMouseLeave={() => setHoveredTrainee(null)}
            >
              {trainee.name}
            </h3>
            <p className="text-gray-600">Department: {trainee.department}</p>
            <p className="text-gray-600">Start Date: {trainee.startDate}</p>

            {/* Performance Tooltip */}
            {hoveredTrainee === trainee.id && (
              <div className="absolute bottom-full left-0 mb-2 z-10 bg-white border rounded-lg shadow-lg p-4 min-w-[300px]">
                <h4 className="font-semibold mb-2">Performance Metrics</h4>
                {trainee.performance.metrics.map((metric) => (
                  <div key={`${trainee.id}-${metric.category}`} className="mb-2">
                    <div className="flex justify-between">
                      <span>{metric.category}</span>
                      <span>{metric.score}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${metric.score}%` }}
                      />
                    </div>
                  </div>
                ))}
                <div className="mt-2 pt-2 border-t">
                  <div className="flex justify-between">
                    <span>Overall Rating</span>
                    <span className="font-semibold">
                      {trainee.performance.overallRating.toFixed(2)}%
                    </span>
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    Last Evaluated: {trainee.performance.lastEvaluation}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TraineeDirectory;