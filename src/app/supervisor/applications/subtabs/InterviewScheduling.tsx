'use client';

import { useState, useEffect } from 'react';

interface Interview {
  id: number;
  candidateName: string;
  position: string;
  date: string;
  time: string;
  interviewer: string;
}

interface Candidate {
  id: string;
  name: string;
  position: string;
}

interface InterviewSchedulingProps {
  candidates: Candidate[];
}


export default function InterviewScheduling({ }: InterviewSchedulingProps) {
  const [interviews, setInterviews] = useState<Interview[]>(() => {
    // Load interviews from localStorage on component mount
    const savedInterviews = localStorage.getItem('interviews');
    return savedInterviews ? JSON.parse(savedInterviews) : [
      {
        id: '1',
        candidateName: "John Doe",
        position: "Software Engineer",
        date: "2024-03-20",
        time: "10:00 AM",
        interviewer: "Sarah Johnson"
      },
      {
        id: '2',
        candidateName: "Jane Smith",
        position: "Product Manager",
        date: "2024-03-21",
        time: "2:00 PM",
        interviewer: "Mike Wilson",      
      },
      // Add more mock data
    ];
  });

  // Update localStorage whenever interviews change
  useEffect(() => {
    localStorage.setItem('interviews', JSON.stringify(interviews));
  }, [interviews]);

  const [showForm, setShowForm] = useState(false);
  const [editingInterview, setEditingInterview] = useState<Interview | null>(null);
  const [newInterview, setNewInterview] = useState<Omit<Interview, 'id'>>({
    candidateName: '',
    position: '',
    date: '',
    time: '',
    interviewer: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingInterview) {
      // Update existing interview
      setInterviews(interviews.map(interview => 
        interview.id === editingInterview.id 
          ? { ...newInterview, id: editingInterview.id }
          : interview
      ));
    } else {
      // Add new interview
      const interview: Interview = {
        ...newInterview,
        id: interviews.length + 1
      };
      setInterviews([...interviews, interview]);
    }
    setShowForm(false);
    setEditingInterview(null);
    setNewInterview({ candidateName: '', position: '', date: '', time: '', interviewer: '' });
  };

  const handleEdit = (interview: Interview) => {
    setEditingInterview(interview);
    setNewInterview({
      candidateName: interview.candidateName,
      position: interview.position,
      date: interview.date,
      time: interview.time,
      interviewer: interview.interviewer,
    });
    setShowForm(true);
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this interview?')) {
      setInterviews(interviews.filter(interview => interview.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Interview Schedule</h2>
        <button 
          onClick={() => setShowForm(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Schedule New Interview
        </button>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">{editingInterview ? 'Edit Interview' : 'Schedule New Interview'}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Candidate Name</label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={newInterview.candidateName}
                  onChange={(e) => setNewInterview({...newInterview, candidateName: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Position</label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={newInterview.position}
                  onChange={(e) => setNewInterview({...newInterview, position: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Date</label>
                <input
                  type="date"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={newInterview.date}
                  onChange={(e) => setNewInterview({...newInterview, date: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Time</label>
                <input
                  type="time"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={newInterview.time}
                  onChange={(e) => setNewInterview({...newInterview, time: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Interviewer</label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={newInterview.interviewer}
                  onChange={(e) => setNewInterview({...newInterview, interviewer: e.target.value})}
                />
              </div>
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Candidate
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Position
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date & Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Interviewer
              </th>
              {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th> */}
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {interviews.map((interview) => (
              <tr key={interview.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {interview.candidateName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {interview.position}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {interview.date} {interview.time}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {interview.interviewer}
                </td>
                {/* <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    interview.status === 'scheduled' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {interview.status}
                  </span>
                </td> */}
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button 
                    onClick={() => handleEdit(interview)}
                    className="text-blue-600 hover:text-blue-900 mr-4"
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => handleDelete(interview.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Delete
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