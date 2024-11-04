'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/app/candidate/components/ui/card";
import { Badge } from "@/app/candidate/components/ui/badge";
import { Button } from "@/app/candidate/components/ui/button";
import {
  Building2,
  Calendar,
  MapPin,
  DollarSign,
  ChevronRight,
  CheckCircle,
  XCircle,
  Clock4
} from 'lucide-react';

type JobApplication = {
  id: number;
  position: string;
  company: string;
  location: string;
  salary: string;
  posted: string;
  deadline: string;
  status: 'pending' | 'accepted' | 'rejected' | 'interview';
  description: string;
};

export function ApplicationsTab() {
  const applications: JobApplication[] = [
    {
      id: 1,
      position: "Front Desk Manager",
      company: "Hilton Hotels",
      location: "New York, NY",
      salary: "$45,000 - $55,000",
      posted: "2024-02-15",
      deadline: "2024-03-30",
      status: 'interview',
      description: "Looking for an experienced Front Desk Manager to join our team..."
    },
    {
      id: 2,
      position: "Restaurant Supervisor",
      company: "Marriott International",
      location: "Los Angeles, CA",
      salary: "$40,000 - $48,000",
      posted: "2024-02-20",
      deadline: "2024-03-25",
      status: 'pending',
      description: "Seeking a dynamic Restaurant Supervisor to oversee daily operations..."
    },
    {
      id: 3,
      position: "Hotel Operations Manager",
      company: "Hyatt Hotels",
      location: "Chicago, IL",
      salary: "$55,000 - $65,000",
      posted: "2024-02-10",
      deadline: "2024-03-15",
      status: 'accepted',
      description: "Join our team as a Hotel Operations Manager..."
    },
    {
      id: 4,
      position: "Guest Services Coordinator",
      company: "Four Seasons Hotels",
      location: "Miami, FL",
      salary: "$35,000 - $42,000",
      posted: "2024-02-25",
      deadline: "2024-04-01",
      status: 'rejected',
      description: "Seeking an enthusiastic Guest Services Coordinator..."
    },
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      pending: { color: "bg-yellow-100 text-yellow-800", icon: Clock4 },
      accepted: { color: "bg-green-100 text-green-800", icon: CheckCircle },
      rejected: { color: "bg-red-100 text-red-800", icon: XCircle },
      interview: { color: "bg-blue-100 text-blue-800", icon: Calendar }
    };

    const config = statusConfig[status as keyof typeof statusConfig];
    const Icon = config.icon;

    return (
      <Badge className={`${config.color} flex items-center gap-1 capitalize`}>
        <Icon className="h-3 w-3" />
        {status}
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      {/* Applications Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{applications.length}</div>
              <p className="text-sm text-gray-500">Total Applications</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {applications.filter(app => app.status === 'interview').length}
              </div>
              <p className="text-sm text-gray-500">Interviews Scheduled</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {applications.filter(app => app.status === 'accepted').length}
              </div>
              <p className="text-sm text-gray-500">Accepted</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">
                {applications.filter(app => app.status === 'pending').length}
              </div>
              <p className="text-sm text-gray-500">Pending Review</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Applications List */}
      <Card>
        <CardHeader>
          <CardTitle>Your Applications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {applications.map((application) => (
              <div
                key={application.id}
                className="border rounded-lg p-4 hover:border-blue-200 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <h3 className="font-medium text-lg text-gray-900">
                      {application.position}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Building2 className="h-4 w-4" />
                      <span>{application.company}</span>
                    </div>
                  </div>
                  {getStatusBadge(application.status)}
                </div>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span>{application.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <DollarSign className="h-4 w-4" />
                    <span>{application.salary}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span>Deadline: {application.deadline}</span>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <p className="text-sm text-gray-600 line-clamp-1">
                    {application.description}
                  </p>
                  <Button variant="ghost" size="sm" className="text-blue-600">
                    View Details
                    <ChevronRight className="h-4 w-4 ml-1" />
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