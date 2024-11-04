"use client";

import { useState } from 'react';
import { Button } from "@/app/application/components/ui/button";
import { Input } from "@/app/application/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/application/components/ui/select";
import { User, Mail, Upload, MapPin, GraduationCap } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from "sonner";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/app/application/components/ui/dialog";


interface ApplicationFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  education: string;
  resume: File | null;
  documents: {
    id: string;
    file: File;
    type: string;
  }[];
  location: string;
  customLocation: string;
  trainerProgram: string;
}

const ApplicationForm: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<ApplicationFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    education: '',
    resume: null,
    documents: [],
    location: '',
    customLocation: '',
    trainerProgram: '',
  });
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Just show success dialog without storing data
      setShowSuccessDialog(true);
      
      // Optional: Log submission for development
      console.log('Form submitted:', formData);
      
    } catch (err: unknown) {
      toast.error("Something went wrong. Please try again.");
      console.error('Error submitting application:', err);
    }
  };

  const handleDocumentUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newDocuments = Array.from(e.target.files).map(file => ({
        id: Math.random().toString(36).substr(2, 9),
        file,
        type: file.type
      }));
      setFormData(prev => ({
        ...prev,
        documents: [...prev.documents, ...newDocuments]
      }));
    }
  };

  const handleDeleteDocument = (id: string) => {
    setFormData(prev => ({
      ...prev,
      documents: prev.documents.filter(doc => doc.id !== id)
    }));
  };

  // Add this function to handle cancel
  const handleCancel = () => {
    router.push('/');
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-3xl w-full p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center bg-blue-50 p-4 rounded">
          Tourism Training Program Application
        </h1>
        
        <form onSubmit={handleSubmit}>
          {/* Personal Information Section */}
          <section className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <User className="mr-2 text-blue-800" size={20} />
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name <span className="text-red-500">*</span>
                </label>
                <Input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="Enter first name"
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <Input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Enter last name"
                  className="w-full"
                />
              </div>
            </div>
          </section>

          {/* Contact Information Section */}
          <section className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <Mail className="mr-2 text-blue-800" size={20} />
              Contact Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone <span className="text-red-500">*</span>
                </label>
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+1 (555) 000-0000"
                  className="w-full"
                />
              </div>
            </div>
          </section>

          {/* Professional Information Section */}
          <section className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <GraduationCap className="mr-2 text-blue-800" size={20} />
              Professional Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Current Role <span className="text-red-500">*</span>
                </label>
                <Input
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  placeholder="Enter current position"
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Years of Experience <span className="text-red-500">*</span>
                </label>
                <Select
                  value={formData.experience}
                  onValueChange={(value) => handleSelectChange('experience', value)}
                >
                  <SelectTrigger className="w-full bg-white">
                    <SelectValue placeholder="Select years of experience" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="0-1">Less than 1 year</SelectItem>
                    <SelectItem value="1-2">1-2 years</SelectItem>
                    <SelectItem value="2-3">2-3 years</SelectItem>
                    <SelectItem value="3-4">3-4 years</SelectItem>
                    <SelectItem value="4+">4+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </section>

          {/* Program Preferences Section */}
          <section className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <MapPin className="mr-2 text-blue-800" size={20} />
              Program Preferences
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Location <span className="text-red-500">*</span>
                </label>
                <Select
                  value={formData.location}
                  onValueChange={(value) => handleSelectChange('location', value)}
                >
                  <SelectTrigger className="w-full bg-white">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="new_york">New York</SelectItem>
                    <SelectItem value="london">London</SelectItem>
                    <SelectItem value="singapore">Singapore</SelectItem>
                    <SelectItem value="tokyo">Tokyo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Program Duration <span className="text-red-500">*</span>
                </label>
                <Select
                  value={formData.trainerProgram}
                  onValueChange={(value) => handleSelectChange('trainerProgram', value)}
                >
                  <SelectTrigger className="w-full bg-white">
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="beginner">Beginner Training (2 weeks)</SelectItem>
                    <SelectItem value="intermediate">Intermediate Training (4 weeks)</SelectItem>
                    <SelectItem value="advanced">Advanced Training (8 weeks)</SelectItem>
                    <SelectItem value="specialized">Specialized Training (12 weeks)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </section>

          {/* Document Upload Section */}
          <section className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <Upload className="mr-2 text-blue-800" size={20} />
              Document Upload <span className="text-red-500">*</span>
            </h2>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Upload Documents <span className="text-red-500">*</span>
              </label>
              <Input
                type="file"
                multiple
                onChange={handleDocumentUpload}
                className="w-full"
              />
            </div>
            <ul className="mt-2">
              {formData.documents.map(doc => (
                <li key={doc.id} className="flex justify-between items-center py-2">
                  <span>{doc.file.name}</span>
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => handleDeleteDocument(doc.id)}
                  >
                    Delete
                  </Button>
                </li>
              ))}
            </ul>
          </section>

          <div className="flex justify-end space-x-4">
            <Button 
              type="button" 
              variant="outline" 
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button type="submit">Submit Application</Button>
          </div>
        </form>
      </div>

      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="sm:max-w-md bg-white">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-semibold">Registration Successful!</DialogTitle>
          </DialogHeader>
          <div className="text-center py-4 bg-white">
            <p className="mb-4">Thank you for registering with our Tourism Training Program!</p>
            <Button 
              onClick={() => router.push('/')}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Go to Home Page
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ApplicationForm;


