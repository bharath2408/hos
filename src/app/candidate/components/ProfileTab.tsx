'use client';
import React, { useState } from 'react';
import { Edit2, Save, X, FileText, Download, Upload, Eye, Trash2, FileCheck, FileWarning, Calendar, Plus, Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/app/candidate/components/ui/card";
import { Input } from "@/app/candidate/components/ui/input";
import { Label } from "@/app/candidate/components/ui/label";
import { Button } from "@/app/candidate/components/ui/button";
// import { Textarea } from "@/app/candidate/components/ui/textarea";
import { Badge } from "@/app/candidate/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/candidate/components/ui/select"

interface Education {
  level: string;
  institution: string;
  field: string;
  year: string;
  grade: string;
}

interface Certificate {
  name: string;
  issuer: string;
  date: string;
  status: string;
}

export function ProfileTab() {
  const [isEditing, setIsEditing] = useState({
    personal: false,
    education: false,
    skills: false
  });
  const [educationList, setEducationList] = useState<Education[]>([
    {
      level: "High School/Secondary",
      institution: "Government National College",
      field: "Science",
      year: "2020",
      grade: "85%"
    }
  ]);
  const [newEducation, setNewEducation] = useState<Education>({
    level: '',
    institution: '',
    field: '',
    year: '',
    grade: ''
  });
  const [showAddForm, setShowAddForm] = useState(false);
  const [skills, setSkills] = useState([
    "Customer Service",
    "Food & Beverage",
    "Hotel Management",
    "Front Office Operations",
    "Housekeeping",
    "Restaurant Service"
  ]);
  const [showAddSkill, setShowAddSkill] = useState(false);
  const [newSkill, setNewSkill] = useState("");
  const [showAddCertificate, setShowAddCertificate] = useState(false);
  const [certificates, setCertificates] = useState([
    {
      name: "Food Safety Certificate",
      issuer: "ServSafe",
      date: "2024",
      status: "Valid"
    },
    {
      name: "First Aid Certification",
      issuer: "Red Cross",
      date: "2023",
      status: "Valid"
    }
  ]);
  const [newCertificate, setNewCertificate] = useState({
    name: '',
    issuer: '',
    date: '',
    status: 'Valid'
  });
  const [editingSkill, setEditingSkill] = useState<{ index: number; value: string } | null>(null);
  const [editingCertificate, setEditingCertificate] = useState<{ index: number; certificate: Certificate } | null>(null);

  const EditButton = ({ section }: { section: keyof typeof isEditing }) => (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setIsEditing(prev => ({ ...prev, [section]: !prev[section] }))}
      className="text-gray-500 hover:text-blue-600"
    >
      {isEditing[section] ? (
        <>
          <X className="h-4 w-4 mr-1" /> Cancel
        </>
      ) : (
        <>
          <Edit2 className="h-4 w-4 mr-1" /> Edit
        </>
      )}
    </Button>
  );

  const handleAddEducation = () => {
    if (newEducation.level && newEducation.institution) {
      setEducationList([...educationList, newEducation]);
      setNewEducation({
        level: '',
        institution: '',
        field: '',
        year: '',
        grade: ''
      });
      setShowAddForm(false);
    }
  };

  const handleDeleteEducation = (index: number) => {
    setEducationList(educationList.filter((_, i) => i !== index));
  };

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
      setShowAddSkill(false);
    }
  };

  const handleDeleteSkill = (indexToDelete: number) => {
    setSkills(skills.filter((_, index) => index !== indexToDelete));
  };

  const handleAddCertificate = () => {
    if (newCertificate.name && newCertificate.issuer) {
      setCertificates([...certificates, newCertificate]);
      setNewCertificate({
        name: '',
        issuer: '',
        date: '',
        status: 'Valid'
      });
      setShowAddCertificate(false);
    }
  };

  const handleDeleteCertificate = (index: number) => {
    setCertificates(certificates.filter((_, i) => i !== index));
  };

  const handleUpdateSkill = (index: number, newValue: string) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = newValue;
    setSkills(updatedSkills);
    setEditingSkill(null);
  };

  const handleUpdateCertificate = (index: number, updatedCertificate: Certificate) => {
    const updatedCertificates = [...certificates];
    updatedCertificates[index] = updatedCertificate;
    setCertificates(updatedCertificates);
    setEditingCertificate(null);
  };

  return (
    <div className="grid gap-6">
      {/* Personal Information */}
      <Card className="shadow-sm border-gray-100">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div className="space-y-1">
            <CardTitle>Personal Information</CardTitle>
            {/* <p className="text-sm text-gray-500">Update your personal details here.</p> */}
          </div>
          <EditButton section="personal" />
        </CardHeader>
        <CardContent className="space-y-4 pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input 
                id="firstName" 
                defaultValue="Sarah" 
                readOnly={!isEditing.personal}
                className={!isEditing.personal ? "bg-gray-50" : ""}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input 
                id="lastName" 
                defaultValue="Parker" 
                readOnly={!isEditing.personal}
                className={!isEditing.personal ? "bg-gray-50" : ""}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                defaultValue="sarah.parker@example.com" 
                readOnly={!isEditing.personal}
                className={!isEditing.personal ? "bg-gray-50" : ""}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input 
                id="phone" 
                type="tel" 
                defaultValue="+1 234 567 890" 
                readOnly={!isEditing.personal}
                className={!isEditing.personal ? "bg-gray-50" : ""}
              />
            </div>
          </div>
          {isEditing.personal && (
            <div className="flex justify-end gap-2">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Save className="h-4 w-4 mr-1" /> Save Changes
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Enrolled Courses */}
      <Card>
        <CardHeader>
          <CardTitle>Course Enrollment</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="font-medium text-gray-900">Front Desk Training</h4>
                  <p className="text-sm text-gray-500">Professional Certificate</p>
                </div>
                <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>
              </div>
              
              <div className="grid grid-cols-2 gap-y-4 text-sm">
                <div>
                  <span className="text-gray-500">Department</span>
                  <p className="font-medium text-gray-900 mt-1">Front Office</p>
                </div>
                <div>
                  <span className="text-gray-500">Trainer</span>
                  <p className="font-medium text-gray-900 mt-1">John Smith</p>
                </div>
                <div>
                  <span className="text-gray-500">Batch</span>
                  <p className="font-medium text-gray-900 mt-1">March 2024</p>
                </div>
                <div>
                  <span className="text-gray-500">Training Period</span>
                  <p className="font-medium text-gray-900 mt-1">3 months</p>
                </div>
                <div>
                  <span className="text-gray-500">Start Date</span>
                  <p className="font-medium text-gray-900 mt-1">March 1, 2024</p>
                </div>
                <div>
                  <span className="text-gray-500">End Date</span>
                  <p className="font-medium text-gray-900 mt-1">May 31, 2024</p>
                </div>
              </div>

              {/* <div className="mt-4 pt-4 border-t">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500">Course Progress</span>
                  <span className="text-sm font-medium text-blue-600">25%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: '25%' }}
                  />
                </div>
              </div> */}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Education */}
      <Card className="shadow-sm border-gray-100">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div className="space-y-1">
            <CardTitle>Educational Qualification</CardTitle>
          </div>
          <Button 
            variant="outline" 
            onClick={() => setShowAddForm(true)}
            className="text-blue-600 hover:bg-blue-50"
          >
            + Add Education
          </Button>
        </CardHeader>
        <CardContent className="space-y-4 pt-4">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse mb-4">
              <thead>
                <tr>
                  <th className="text-left p-3 bg-gray-50 border text-sm font-medium text-gray-600">
                    Level of Education
                  </th>
                  <th className="text-left p-3 bg-gray-50 border text-sm font-medium text-gray-600">
                    Institution Name
                  </th>
                  <th className="text-left p-3 bg-gray-50 border text-sm font-medium text-gray-600">
                    Field of Study
                  </th>
                  <th className="text-left p-3 bg-gray-50 border text-sm font-medium text-gray-600">
                    Year of Completion
                  </th>
                  <th className="text-left p-3 bg-gray-50 border text-sm font-medium text-gray-600">
                    Percentage/Grade
                  </th>
                  <th className="text-left p-3 bg-gray-50 border text-sm font-medium text-gray-600">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {educationList.map((edu, index) => (
                  <tr key={index}>
                    <td className="border p-3 text-sm text-gray-600">{edu.level}</td>
                    <td className="border p-3 text-sm text-gray-600">{edu.institution}</td>
                    <td className="border p-3 text-sm text-gray-600">{edu.field}</td>
                    <td className="border p-3 text-sm text-gray-600">{edu.year}</td>
                    <td className="border p-3 text-sm text-gray-600">{edu.grade}</td>
                    <td className="border p-3">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-red-500 hover:text-red-700"
                        onClick={() => handleDeleteEducation(index)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Add Education Form - Only shown when showAddForm is true */}
            {showAddForm && (
              <div className="border rounded-lg p-4 mt-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-sm font-medium text-gray-700">Add New Education</h3>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setShowAddForm(false)}
                    className="text-gray-500"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Level of Education</Label>
                    <Select onValueChange={(value) => setNewEducation({ ...newEducation, level: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="high-school">High School/Secondary</SelectItem>
                        <SelectItem value="undergraduate">Undergraduate Degree</SelectItem>
                        <SelectItem value="postgraduate">Postgraduate Degree</SelectItem>
                        <SelectItem value="other">Other Certifications/Diplomas</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Institution Name</Label>
                    <Input 
                      placeholder="Enter institution name"
                      onChange={(e) => setNewEducation({ ...newEducation, institution: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Field of Study</Label>
                    <Input 
                      placeholder="Enter field of study"
                      onChange={(e) => setNewEducation({ ...newEducation, field: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Year of Completion</Label>
                    <Input 
                      placeholder="Enter year"
                      type="number"
                      onChange={(e) => setNewEducation({ ...newEducation, year: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Percentage/Grade</Label>
                    <Input 
                      placeholder="Enter grade"
                      onChange={(e) => setNewEducation({ ...newEducation, grade: e.target.value })}
                    />
                  </div>
                </div>
                
                <div className="flex justify-end mt-4">
                  <Button 
                    className="bg-blue-600 hover:bg-blue-700"
                    onClick={handleAddEducation}
                  >
                    Add Education
                  </Button>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Skills & Certifications */}
      <Card className="shadow-sm border-gray-100">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div className="space-y-1">
            <CardTitle>Skills & Certifications</CardTitle>
          </div>
          <Button 
            variant="outline" 
            onClick={() => setShowAddSkill(true)}
            className="text-blue-600 hover:bg-blue-50"
          >
            <Plus className="h-4 w-4 mr-2" /> Add Skill
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Skills */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-2 px-3 py-1.5 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200"
                  >
                    {editingSkill?.index === index ? (
                      <div className="flex gap-2">
                        <Input
                          value={editingSkill.value}
                          onChange={(e) => setEditingSkill({ index, value: e.target.value })}
                          className="h-6 w-[150px] text-sm"
                        />
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleUpdateSkill(index, editingSkill.value)}
                          className="h-6 px-2 text-green-600"
                        >
                          <Check className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => setEditingSkill(null)}
                          className="h-6 px-2 text-gray-500"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ) : (
                      <>
                        <span className="text-sm text-gray-700">{skill}</span>
                        <div className="hidden group-hover:flex items-center gap-1">
                          <button
                            onClick={() => setEditingSkill({ index, value: skill })}
                            className="p-1 hover:bg-gray-200 rounded"
                          >
                            <Edit2 className="h-3 w-3 text-gray-500" />
                          </button>
                          <button
                            onClick={() => handleDeleteSkill(index)}
                            className="p-1 hover:bg-red-100 rounded"
                          >
                            <X className="h-3 w-3 text-red-500" />
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Add Skill Form */}
            {showAddSkill && (
              <div className="border rounded-lg p-4 mt-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-sm font-medium text-gray-700">Add New Skill</h3>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setShowAddSkill(false)}
                    className="text-gray-500"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter skill"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    className="flex-1"
                  />
                  <Button 
                    onClick={handleAddSkill}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Add
                  </Button>
                </div>
              </div>
            )}

            {/* Certifications */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-sm font-medium text-gray-700">Certifications</h3>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setShowAddCertificate(true)}
                  className="text-blue-600 hover:bg-blue-50"
                >
                  <Plus className="h-4 w-4 mr-2" /> Add Certificate
                </Button>
              </div>
              
              <div className="space-y-3">
                {certificates.map((cert, index) => (
                  <div
                    key={index}
                    className="group flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 hover:border-blue-200"
                  >
                    {editingCertificate?.index === index ? (
                      <div className="w-full space-y-3">
                        <div className="grid grid-cols-2 gap-3">
                          <Input
                            placeholder="Certificate name"
                            value={editingCertificate.certificate.name}
                            onChange={(e) => setEditingCertificate({
                              index,
                              certificate: { ...editingCertificate.certificate, name: e.target.value }
                            })}
                          />
                          <Input
                            placeholder="Issuer"
                            value={editingCertificate.certificate.issuer}
                            onChange={(e) => setEditingCertificate({
                              index,
                              certificate: { ...editingCertificate.certificate, issuer: e.target.value }
                            })}
                          />
                          <Input
                            type="month"
                            value={editingCertificate.certificate.date}
                            onChange={(e) => setEditingCertificate({
                              index,
                              certificate: { ...editingCertificate.certificate, date: e.target.value }
                            })}
                          />
                          <Select
                            value={editingCertificate.certificate.status}
                            onValueChange={(value) => setEditingCertificate({
                              index,
                              certificate: { ...editingCertificate.certificate, status: value }
                            })}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Status" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Valid">Valid</SelectItem>
                              <SelectItem value="Expired">Expired</SelectItem>
                              <SelectItem value="Pending">Pending</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="flex justify-end gap-2">
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleUpdateCertificate(index, editingCertificate.certificate)}
                            className="text-green-600"
                          >
                            <Check className="h-4 w-4 mr-1" /> Save
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => setEditingCertificate(null)}
                            className="text-gray-500"
                          >
                            <X className="h-4 w-4 mr-1" /> Cancel
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50">
                            <FileCheck className="h-5 w-5 text-blue-500" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{cert.name}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-sm text-gray-500">{cert.issuer}</span>
                              <span className="text-gray-300">•</span>
                              <span className="text-sm text-gray-500">{cert.date}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-green-100 text-green-800">
                            {cert.status}
                          </Badge>
                          <div className="hidden group-hover:flex items-center gap-1">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setEditingCertificate({ index, certificate: cert })}
                              className="text-gray-500 hover:text-blue-600"
                            >
                              <Edit2 className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleDeleteCertificate(index)}
                              className="text-gray-500 hover:text-red-600"
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>

              {/* Add Certificate Form */}
              {showAddCertificate && (
                <div className="border rounded-lg p-4 mt-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-sm font-medium text-gray-700">Add New Certificate</h3>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => setShowAddCertificate(false)}
                      className="text-gray-500"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Certificate Name</Label>
                      <Input
                        placeholder="Enter certificate name"
                        value={newCertificate.name}
                        onChange={(e) => setNewCertificate({
                          ...newCertificate,
                          name: e.target.value
                        })}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Issuing Organization</Label>
                      <Input
                        placeholder="Enter issuer name"
                        value={newCertificate.issuer}
                        onChange={(e) => setNewCertificate({
                          ...newCertificate,
                          issuer: e.target.value
                        })}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Date of Issue</Label>
                      <Input
                        type="month"
                        value={newCertificate.date}
                        onChange={(e) => setNewCertificate({
                          ...newCertificate,
                          date: e.target.value
                        })}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Status</Label>
                      <Select 
                        value={newCertificate.status}
                        onValueChange={(value) => setNewCertificate({
                          ...newCertificate,
                          status: value
                        })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Valid">Valid</SelectItem>
                          <SelectItem value="Expired">Expired</SelectItem>
                          <SelectItem value="Pending">Pending</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="flex justify-end mt-4">
                    <Button 
                      onClick={handleAddCertificate}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      Add Certificate
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Document Repository */}
      <Card className="bg-white rounded-xl shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Document Repository</CardTitle>
            {/* <p className="text-sm text-gray-500">Important documents and certifications</p> */}
          </div>
          <Button variant="outline" size="sm">
            <Upload className="h-4 w-4 mr-2" />
            Upload New
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Personal Information Documents */}
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-3 flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Personal Information Documents
              </h3>
              <div className="space-y-2">
                {[
                  {
                    name: "Passport",
                    type: "PDF",
                    date: "2024-02-20",
                    size: "2.1 MB",
                    status: "Verified",
                    tags: ["Identity"]
                  },
                  {
                    name: "Proof of Address",
                    type: "PDF",
                    date: "2024-02-15",
                    size: "1.2 MB",
                    status: "Pending",
                    tags: ["Address"]
                  },
                  {
                    name: "Passport Photo",
                    type: "JPG",
                    date: "2024-02-15",
                    size: "500 KB",
                    status: "Current",
                    tags: ["Photo"]
                  }
                ].map((doc, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100 hover:border-blue-100 hover:bg-blue-50/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100">
                        <FileText className="h-5 w-5 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">{doc.name}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-gray-500">{doc.date}</span>
                          <span className="text-xs text-gray-400">•</span>
                          <span className="text-xs text-gray-500">{doc.size}</span>
                          <div className="flex gap-1">
                            {doc.tags.map((tag, idx) => (
                              <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                        {doc.status}
                      </span>
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4 text-gray-400" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4 text-gray-400" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-600">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Educational Background */}
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-3 flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Educational Background
              </h3>
              <div className="space-y-2">
                {[
                  {
                    name: "Bachelor's Degree Certificate",
                    type: "PDF",
                    date: "2024-02-15",
                    size: "1.8 MB",
                    status: "Verified",
                    tags: ["Education"]
                  },
                  {
                    name: "Academic Transcripts",
                    type: "PDF",
                    date: "2024-02-15",
                    size: "2.2 MB",
                    status: "Verified",
                    tags: ["Education"]
                  },
                  {
                    name: "Training Certificates",
                    type: "PDF",
                    date: "2024-01-30",
                    size: "1.5 MB",
                    status: "Current",
                    tags: ["Training"]
                  }
                ].map((doc, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100 hover:border-blue-100 hover:bg-blue-50/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100">
                        <FileText className="h-5 w-5 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">{doc.name}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-gray-500">{doc.date}</span>
                          <span className="text-xs text-gray-400">•</span>
                          <span className="text-xs text-gray-500">{doc.size}</span>
                          <div className="flex gap-1">
                            {doc.tags.map((tag, idx) => (
                              <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                        {doc.status}
                      </span>
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4 text-gray-400" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4 text-gray-400" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-600">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Experience */}
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-3 flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Professional Experience
              </h3>
              <div className="space-y-2">
                {[
                  {
                    name: "Resume/CV",
                    type: "PDF",
                    date: "2024-02-20",
                    size: "890 KB",
                    status: "Current",
                    tags: ["Profile"]
                  },
                  {
                    name: "First Aid Certificate",
                    type: "PDF",
                    date: "2024-01-30",
                    size: "1.1 MB",
                    status: "Valid",
                    tags: ["Certification"]
                  },
                  {
                    name: "Food Safety Certificate",
                    type: "PDF",
                    date: "2024-01-30",
                    size: "1.3 MB",
                    status: "Valid",
                    tags: ["Certification"]
                  }
                ].map((doc, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100 hover:border-blue-100 hover:bg-blue-50/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100">
                        <FileText className="h-5 w-5 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">{doc.name}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-gray-500">{doc.date}</span>
                          <span className="text-xs text-gray-400">•</span>
                          <span className="text-xs text-gray-500">{doc.size}</span>
                          <div className="flex gap-1">
                            {doc.tags.map((tag, idx) => (
                              <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                        {doc.status}
                      </span>
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4 text-gray-400" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4 text-gray-400" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-600">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Required Documents (Missing) */}
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-3 flex items-center gap-2">
                <FileWarning className="h-4 w-4" />
                Missing Required Documents
              </h3>
              <div className="space-y-2">
                {[
                  {
                    name: "Health Certificate",
                    type: "PDF",
                    deadline: "2024-04-01",
                    status: "Required",
                    description: "Medical clearance certificate from an authorized healthcare provider"
                  },
                  {
                    name: "Police Clearance",
                    type: "PDF",
                    deadline: "2024-04-01",
                    status: "Required",
                    description: "Background check certificate from local authorities"
                  }
                ].map((doc, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-100"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-red-100">
                        <FileWarning className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">{doc.name}</p>
                        <p className="text-sm text-gray-600 mt-1">{doc.description}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Calendar className="h-3 w-3 text-red-500" />
                          <span className="text-xs text-red-500">Due by {doc.deadline}</span>
                        </div>
                      </div>
                    </div>
                    <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                      <Upload className="h-4 w-4 mr-2" />
                      Upload Now
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
