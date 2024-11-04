'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/app/candidate/components/ui/card";
import { Badge } from "@/app/candidate/components/ui/badge";
import { Progress } from "@/app/candidate/components/ui/progress";
import { Button } from "@/app/candidate/components/ui/button";
import { 
  FileCheck, 
  Plane, 
  Calendar, 
  MapPin, 
  Clock, 
  Download, 
  ExternalLink,
  CheckCircle2,
  Timer,
  Building
} from 'lucide-react';

export function OnboardingTab() {
  return (
    <div className="space-y-6">
      {/* Document Checklist */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileCheck className="h-5 w-5" />
            Document Checklist
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { name: "Passport", status: "completed", date: "2024-02-15" },
              { name: "Educational Certificates", status: "completed", date: "2024-02-16" },
              { name: "Police Clearance", status: "pending", date: "2024-03-01" },
              { name: "Medical Certificate", status: "pending", date: "2024-03-01" },
              { name: "Employment Contract", status: "pending", date: "2024-03-15" }
            ].map((doc, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg border">
                <div className="flex items-center gap-3">
                  {doc.status === 'completed' ? (
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  ) : (
                    <Timer className="h-5 w-5 text-orange-500" />
                  )}
                  <div>
                    <p className="font-medium text-gray-900">{doc.name}</p>
                    <p className="text-sm text-gray-500">Due: {doc.date}</p>
                  </div>
                </div>
                <Badge
                  className={doc.status === 'completed' 
                    ? "bg-green-100 text-green-800"
                    : "bg-orange-100 text-orange-800"
                  }
                >
                  {doc.status === 'completed' ? 'Completed' : 'Pending'}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Visa Processing Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileCheck className="h-5 w-5" />
            Visa Processing Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-2">
              <div className="space-y-1">
                <p className="text-sm font-medium text-gray-900">Work Visa Application</p>
                <p className="text-sm text-gray-500">Application in progress</p>
              </div>
              <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>
            </div>
            <Progress value={60} className="h-2" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500">Application Date</p>
                <p className="font-medium">Feb 15, 2024</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500">Processing Time</p>
                <p className="font-medium">2-3 weeks</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500">Expected Completion</p>
                <p className="font-medium">March 7, 2024</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Travel Arrangements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plane className="h-5 w-5" />
            Travel Arrangements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Flight Details</p>
                    <p className="font-medium">Dubai → London</p>
                  </div>
                  <Plane className="h-5 w-5 text-gray-400" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Date</span>
                    <span className="text-sm font-medium">March 20, 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Flight</span>
                    <span className="text-sm font-medium">EK507</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Departure</span>
                    <span className="text-sm font-medium">10:30 AM GST</span>
                  </div>
                </div>
              </div>
              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Accommodation</p>
                    <p className="font-medium">Staff Housing</p>
                  </div>
                  <Building className="h-5 w-5 text-gray-400" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Check-in</span>
                    <span className="text-sm font-medium">March 20, 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Location</span>
                    <span className="text-sm font-medium">Central London</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Room</span>
                    <span className="text-sm font-medium">205B</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Deployment Details */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building className="h-5 w-5" />
            Deployment Details
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="h-5 w-5 text-gray-400" />
                <h3 className="font-medium">Location</h3>
              </div>
              <p className="text-gray-600">The Savoy Hotel, London</p>
              <p className="text-sm text-gray-500 mt-1">Strand, London WC2R 0EU</p>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="h-5 w-5 text-gray-400" />
                <h3 className="font-medium">Start Date</h3>
              </div>
              <p className="text-gray-600">March 25, 2024</p>
              <p className="text-sm text-gray-500 mt-1">Monday, 9:00 AM</p>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-5 w-5 text-gray-400" />
                <h3 className="font-medium">Schedule</h3>
              </div>
              <p className="text-gray-600">Morning Shift</p>
              <p className="text-sm text-gray-500 mt-1">40 hours/week</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Pre-training Materials */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileCheck className="h-5 w-5" />
            Pre-training Materials
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { name: "Employee Handbook", type: "PDF", size: "2.5 MB" },
              { name: "Safety Guidelines", type: "PDF", size: "1.8 MB" },
              { name: "Service Standards", type: "PDF", size: "3.2 MB" },
              { name: "Orientation Video", type: "MP4", size: "125 MB" }
            ].map((material, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg border">
                <div className="flex items-center gap-3">
                  <FileCheck className="h-5 w-5 text-blue-500" />
                  <div>
                    <p className="font-medium text-gray-900">{material.name}</p>
                    <p className="text-sm text-gray-500">{material.type} • {material.size}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 