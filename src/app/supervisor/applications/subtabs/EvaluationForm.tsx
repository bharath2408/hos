'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Candidate {
  id: string;
  name: string;
  position: string;
  // Add other candidate properties as needed
}

interface EvaluationFormProps {
  candidates: Candidate[];
  applicationId: string;
  initialData?: {
    name: string;
    position: string;
  };
}

export default function EvaluationForm({ candidates, applicationId }: EvaluationFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: 'John Smith',	
    position: 'Developer',
    technicalSkills: '3',
    communicationSkills: '4',
    comments: 'Good candidate',
    recommendation: 'Hire'
  });

  useEffect(() => {
    // Find the candidate based on applicationId
    const candidate = candidates.find(c => c.id === applicationId);
    if (candidate) {
      setFormData(prev => ({
        ...prev,
        name: candidate.name,
        position: candidate.position,
        technicalSkills: '3',
        communicationSkills: '4',
        comments: 'Good candidate',
        recommendation: 'Hire'
        // You can add other initial values here if they exist in your candidate data
      }));
    }
  }, [candidates, applicationId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting evaluation:', formData);
    // Add your submission logic here
    router.push('/supervisor/applications'); // Navigate back after submit
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold mb-6">Candidate Evaluation Form</h2>
      
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Candidate Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              readOnly
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Position Applied For
            </label>
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              readOnly
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Technical Skills (1-5)
            </label>
            <select 
              name="technicalSkills"
              value={formData.technicalSkills}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Select rating</option>
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Communication Skills (1-5)
            </label>
            <select 
              name="communicationSkills"
              value={formData.communicationSkills}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Select rating</option>
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Comments
            </label>
            <textarea
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Recommendation
            </label>
            <select 
              name="recommendation"
              value={formData.recommendation}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              {/* <option value="">Select recommendation</option> */}
              <option value="hire">Hire</option>
              <option value="reject">Reject</option>
              <option value="hold">Hold</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Submit Evaluation
          </button>
        </div>
      </form>
    </div>
  );
}