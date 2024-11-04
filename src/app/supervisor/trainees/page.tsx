'use client'

import { useState } from 'react';
import TraineeDirectory from './subtabs/TraineeDirectory';
import SubNavigation from '../components/SubNavigation';

export interface Trainee {
  id: number;
  name: string;
  department: string;
  startDate: string;
  performance: {
    metrics: {
      category: string;
      score: number;
    }[];
    overallRating: number;
    lastEvaluation: string;
  };
}

const trainees: Trainee[] = [
  {
    id: 1,
    name: "John Doe",
    department: "Hotel Management Trainee",
    startDate: "2024-01-15",
    performance: {
      metrics: [
        { category: "Technical Skills", score: 85 },
        { category: "Communication", score: 90 }
      ],
      overallRating: 87,
      lastEvaluation: "2024-03-01"
    }
  },
  {
    id: 2,
    name: "Jane Smith",
    department: "Travel Agency Trainee",
    startDate: "2024-02-20",
    performance: {
      metrics: [
        { category: "Marketing Strategy", score: 92 },
        { category: "Digital Marketing", score: 88 }
      ],
      overallRating: 90,
      lastEvaluation: "2024-03-15"
    }
  }
];

export default function TraineesPage() {
  const [activeTab, setActiveTab] = useState('Trainee directory');

  const tabs = [
    'Trainee directory',
    // 'Progress tracking',
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'Trainee directory':
        return <TraineeDirectory 
          trainees={trainees} 
          performanceData={trainees.map(t => ({
            ...t.performance,
            id: t.id,
            traineeName: t.name
          }))} 
        />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Trainees</h1>
      </div>

      <SubNavigation  
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <div className="p-6">
        {renderContent()}
      </div>
    </div>
  );
}