// import { useState } from 'react';

'use client'
interface SubNavigationProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const SubNavigation = ({ tabs, activeTab, onTabChange }: SubNavigationProps) => {
  return (
    <nav className="border-b border-gray-200">
      <div className="flex space-x-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`
              py-4 px-1 border-b-2 font-medium text-sm
              ${activeTab === tab
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }
            `}
          >
            {tab}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default SubNavigation;