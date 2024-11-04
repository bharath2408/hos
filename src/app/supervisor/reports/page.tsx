'use client'

import { useState } from 'react'
import ProgressAnalytics from '@/app/supervisor/reports/subtabs/ProgressAnalytics'
import CompletionRates from '@/app/supervisor/reports/subtabs/CompletionRates'
import IssueAnalysis from '@/app/supervisor/reports/subtabs/IssueAnalysis'
import CustomReports from '@/app/supervisor/reports/subtabs/CustomReports'

export default function ReportsPage() {
  const [activeTab, setActiveTab] = useState('Progress analytics')

  const tabs = [
    'Progress analytics',
    'Completion rates',
    'Issue analysis',
    'Custom reports'
  ]

  const getTabContent = () => {
    switch (activeTab) {
      case 'Progress analytics':
        return <ProgressAnalytics />
      case 'Completion rates':
        return <CompletionRates />
      case 'Issue analysis':
        return <IssueAnalysis />
      case 'Custom reports':
        return <CustomReports />
      default:
        return <ProgressAnalytics />
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Reports</h1>
      </div>
      
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium
                ${
                  tab === activeTab
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }
              `}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        {getTabContent()}
      </div>
    </div>
  );
}