'use client'

import { useState } from 'react';
import ApplicationList from '@/app/supervisor/applications/subtabs/ApplicationList';
import EvaluationForm from '@/app/supervisor/applications/subtabs/EvaluationForm';
import InterviewScheduling from '@/app/supervisor/applications/subtabs/InterviewScheduling';
import StatusManagement from '@/app/supervisor/applications/subtabs/StatusManagement';
import BatchProcessing from '@/app/supervisor/applications/subtabs/BatchProcessing';
import SubNavigation from '@/app/supervisor/components/SubNavigation';

// Define types for our data structures
interface Application {
  id: string;
  name: string;
  status: string;
  email: string;
  position: string;
  appliedDate: string;
}

interface Candidate {
  id: string;
  name: string;
  score?: number;
  position: string;
  status: 'selected' | 'rejected';
  date: string;
  reason?: string;
}

interface Batch {
  id: string;
  name: string;
  count: number;
  startDate: string;
  endDate: string;
  totalCandidates: number;
  status: string;
  progress: number;
}


// Mock data
const mockApplications: Application[] = [
  { id: '1', name: 'John Smith', status: 'pending', email: 'john@example.com', position: 'Hotel Management Trainee', appliedDate: '2024-03-20' },
  { id: '2', name: 'Jane Doe', status: 'shortlisted', email: 'jane@example.com', position: 'Travel Agency Trainee', appliedDate: '2024-03-21' },
];

const mockCandidates: Candidate[] = [
  { id: '1', name: 'John Smith', score: 85, position: 'Developer', status: 'selected', date: '2024-03-15' },
  { id: '2', name: 'Jane Doe', score: 92, position: 'Designer', status: 'rejected', date: '2024-03-14', reason: 'Insufficient experience' },
];

const mockBatches: Batch[] = [
  { 
    id: '1', 
    name: 'Batch 2024-A', 
    count: 25,
    startDate: '2024-03-01',
    endDate: '2024-03-31',
    totalCandidates: 25,
    status: 'active',
    progress: 80
  },
  { 
    id: '2', 
    name: 'Batch 2024-B', 
    count: 25,
    startDate: '2024-03-01',
    endDate: '2024-03-31',
    totalCandidates: 25,
    status: 'active',
    progress: 65
  },
];

const candidates: Candidate[] = [
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
];

export default function ApplicationsPage() {
  const [activeTab, setActiveTab] = useState('Application list');

  const renderContent = () => {
    switch (activeTab) {
      case 'Application list':
        return <ApplicationList applications={mockApplications} />;
        case 'Evaluation form':
          return <EvaluationForm candidates={mockCandidates} applicationId="1" />;
      case 'Interview scheduling':
        return <InterviewScheduling candidates={mockCandidates} />;
      case 'Status management':
        return <StatusManagement candidates ={candidates} />;
      case 'Batch processing':
        return <BatchProcessing batches={mockBatches} />;
      default:
        return null;
    }
  };

  const tabs = [
    'Application list',
    'Evaluation form',
    'Interview scheduling',
    'Status management',
    'Batch processing'
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Applications</h1>
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

