'use client'

import { useState, useEffect } from 'react';

export default function ProgramSetup() {
  const [programs, setPrograms] = useState<string[]>(['Trainee Management', 'Hotel Management', 'Restaurant Management']);
  const [newProgramName, setNewProgramName] = useState('');
  const [newModuleName, setNewModuleName] = useState('');
  const [modules, setModules] = useState<string[]>([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const savedPrograms = JSON.parse(localStorage.getItem('programs') || '[]');
    if (savedPrograms.length > 0) {
      setPrograms(savedPrograms);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('programs', JSON.stringify(programs));
  }, [programs]);

  const addProgram = () => {
    if (newProgramName) {
      setPrograms([...programs, newProgramName]);
      setNewProgramName('');
      setModules([]);
      setShowForm(false);
    }
  };

  const addModule = () => {
    if (newModuleName) {
      setModules([...modules, newModuleName]);
      setNewModuleName('');
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-semibold">Programs</h2>
      <div className="space-y-4">
        <ul className="list-disc pl-5">
          {programs.map((program, index) => (
            <li key={index} className="text-black-500">
              {program}
            </li>
          ))}
        </ul>
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Add Program
        </button>
      </div>

      {showForm && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Add New Program</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Program Name</label>
              <input
                type="text"
                value={newProgramName}
                onChange={(e) => setNewProgramName(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Module Name</label>
              <input
                type="text"
                value={newModuleName}
                onChange={(e) => setNewModuleName(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={addModule}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mt-2"
              >
                Add Module
              </button>
            </div>

          </form>
          <div>
            <h3 className="text-lg font-semibold">Modules</h3>
            <ul className="list-disc pl-5">
              {modules.map((module, index) => (
                <li key={index}>{module}</li>
              ))}
            </ul>
          </div>
          <button
              type="button"
              onClick={addProgram}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Save Program
            </button>
        </div>
      )}
    </div>
  );
}