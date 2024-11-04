'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/app/candidate/components/ui/card";
import { 
  UserCircle,
  CheckCircle2,
  MapPin,
  Clock,
  GraduationCap
} from 'lucide-react';

const englishContent = {
  totalProgress: {
    title: "Total Progress",
    subtitle: "Completion Rate",
    progress: "Progress"
  },
  traineeDetails: {
    title: "Trainee Details",
    program: "Front Desk Training",
    department: "Department",
    departmentValue: "Front Office",
    trainer: "Trainer",
    trainerName: "John Smith",
    batch: "Batch",
    batchValue: "March 2024",
    period: "Training Period",
    periodValue: "3 months"
  },
  recentActivities: {
    title: "Recent Activities",
    activities: [
      {
        title: "Completed Customer Service Module",
        time: "2 hours ago"
      },
      {
        title: "Submitted Weekly Report",
        time: "5 hours ago"
      },
      {
        title: "Started New Training Course",
        time: "Yesterday"
      },
      {
        title: "Completed Safety Training",
        time: "2 days ago"
      },
      {
        title: "Updated Personal Information",
        time: "3 days ago"
      }
    ]
  },
  upcomingSessions: {
    title: "Upcoming Sessions",
    sessions: [
      {
        title: "Front Desk Operations Training",
        type: "Training",
        date: "Today",
        time: "10:00 AM - 11:30 AM",
        instructor: "John Smith",
        location: "Training Room A",
        status: "Upcoming"
      },
      {
        title: "Customer Service Excellence Workshop",
        type: "Workshop",
        date: "Tomorrow",
        time: "2:30 PM - 4:00 PM",
        instructor: "Sarah Johnson",
        location: "Conference Room B",
        status: "Upcoming"
      },
      {
        title: "Hotel Management Software Training",
        type: "Technical",
        date: "Next Monday",
        time: "9:00 AM - 12:00 PM",
        instructor: "Mike Wilson",
        location: "Computer Lab",
        status: "Scheduled"
      }
    ]
  }
};

export function DashboardTabEnglish() {
  return (
    <div className="grid gap-6">
      {/* First row of cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Total Progress Card */}
        <Card className="bg-white rounded-xl shadow-sm col-span-1">
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-gray-600 mb-1">
                  {englishContent.totalProgress.title}
                </p>
                <h2 className="text-4xl font-bold">856</h2>
              </div>
              <div className="bg-blue-100 p-2 rounded-lg">
                <UserCircle className="h-6 w-6 text-[#0047CC]" />
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                {englishContent.totalProgress.subtitle}
              </p>
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div className="w-[65%] h-2 bg-[#0047CC] rounded-full"></div>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">
                  {englishContent.totalProgress.progress}
                </span>
                <span className="text-[#0047CC] font-medium">65%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Trainee Details Card */}
        <Card className="bg-white rounded-xl shadow-sm col-span-1">
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-gray-600 mb-1">
                  {englishContent.traineeDetails.title}
                </p>
                <h2 className="text-xl font-bold">
                  {englishContent.traineeDetails.program}
                </h2>
              </div>
              <div className="bg-purple-100 p-2 rounded-lg">
                <GraduationCap className="h-6 w-6 text-purple-600" />
              </div>
            </div>
            <div className="space-y-3">
              {[
                { label: englishContent.traineeDetails.department, value: englishContent.traineeDetails.departmentValue },
                { label: englishContent.traineeDetails.trainer, value: englishContent.traineeDetails.trainerName },
                { label: englishContent.traineeDetails.batch, value: englishContent.traineeDetails.batchValue },
                { label: englishContent.traineeDetails.period, value: englishContent.traineeDetails.periodValue }
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{item.label}</span>
                  <span className="text-sm font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activities and Upcoming Sessions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recent Activities Card */}
        <Card className="bg-white rounded-xl shadow-sm h-[400px] flex flex-col">
          <CardHeader className="border-b border-gray-100 py-4">
            <CardTitle className="text-lg font-semibold">
              {englishContent.recentActivities.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 overflow-auto custom-scrollbar py-2">
            <div className="space-y-2">
              {englishContent.recentActivities.activities.map((activity, i) => (
                <div key={i} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-3.5 w-3.5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 text-sm">{activity.title}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Sessions Card */}
        <Card className="bg-white rounded-xl shadow-sm h-[400px] flex flex-col">
          <CardHeader className="border-b border-gray-100 py-4">
            <CardTitle className="text-lg font-semibold">
              {englishContent.upcomingSessions.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 overflow-auto custom-scrollbar py-2">
            <div className="space-y-2">
              {englishContent.upcomingSessions.sessions.map((session, index) => (
                <div key={index} className="p-3 border border-gray-100 rounded-lg hover:border-blue-100 hover:bg-blue-50/50 transition-colors">
                  <div className="flex justify-between items-start mb-1.5">
                    <div>
                      <h4 className="font-medium text-gray-800 text-sm">{session.title}</h4>
                      <p className="text-xs text-gray-500">{session.type}</p>
                    </div>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-600">
                      {session.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-2 text-xs">
                    <div className="flex items-center gap-1.5 text-gray-600">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{session.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-600">
                      <UserCircle className="h-3.5 w-3.5" />
                      <span>{session.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-600">
                      <UserCircle className="h-3.5 w-3.5" />
                      <span>{session.instructor}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-600">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{session.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 