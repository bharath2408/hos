'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/supervisor/components/ui/card';
import { 
  ArrowUp, ArrowDown, Users, BookOpen, CheckCircle, AlertCircle,
  GraduationCap, Calendar, Gift, Bell, Fuel
} from 'lucide-react';
import { useState } from 'react';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('Overview');

  const metrics = [
    {
      title: "Total Trainees",
      value: "2,350",
      change: "+12%",
      trend: "up",
      icon: Users
    },
    {
      title: "Active Programs",
      value: "45",
      change: "+3",
      trend: "up",
      icon: BookOpen
    },
    {
      title: "Completion Rate",
      value: "89%",
      change: "-2%",
      trend: "down",
      icon: CheckCircle
    },
    {
      title: "Pending Actions",
      value: "12",
      change: "+4",
      trend: "up",
      icon: AlertCircle
    }
  ];

  const programData = [
    { name: 'Jan', active: 40, completed: 24 },
    { name: 'Feb', active: 30, completed: 28 },
    { name: 'Mar', active: 45, completed: 32 },
    { name: 'Apr', active: 50, completed: 35 },
  ];

  const traineeMetrics = [
    {
      title: "Total Trainees",
      value: "513",
      icon: GraduationCap,
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      title: "Active Courses",
      value: "382",
      icon: BookOpen,
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      title: "Events",
      value: "24",
      icon: Calendar,
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      title: "Fuel Stock",
      value: "85%",
      icon: Fuel,
      bgColor: "bg-red-50",
      iconColor: "text-red-600"
    },
    {
      title: "Rewards",
      value: "156",
      icon: Gift,
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-600"
    },
    {
      title: "Notifications",
      value: "8",
      icon: Bell,
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header with Tabs */}
      <div className="border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-semibold px-4 py-2 text-black rounded-lg">
            Dashboard
          </h1>
        </div>
        
        {/* Tabs */}
        <nav className="-mb-px flex space-x-8">
          {['Overview', 'Trainee Progress'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm
                ${tab === activeTab
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }
              `}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === 'Overview' ? (
        <div className="space-y-6">
          {/* Metrics Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map((metric) => (
              <Card key={metric.title}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <metric.icon className="h-8 w-8 text-gray-400" />
                    <span className={`text-sm ${metric.trend === 'up' ? 'text-green-500' : 'text-red-500'} flex items-center`}>
                      {metric.trend === 'up' ? <ArrowUp className="h-4 w-4 mr-1" /> : <ArrowDown className="h-4 w-4 mr-1" />}
                      {metric.change}
                    </span>
                  </div>
                  <div className="mt-4">
                    <h2 className="text-2xl font-bold">{metric.value}</h2>
                    <p className="text-gray-500 text-sm">{metric.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Program Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={programData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="active" fill="#4F46E5" name="Active Programs" />
                      <Bar dataKey="completed" fill="#10B981" name="Completed Programs" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Activity items */}
                  <div className="flex items-center p-2 hover:bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <div>
                      <p className="text-sm font-medium">New program started: Hotel Management</p>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center p-2 hover:bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <div>
                      <p className="text-sm font-medium">15 trainees completed Restaurant Service course</p>
                      <p className="text-xs text-gray-500">5 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center p-2 hover:bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                    <div>
                      <p className="text-sm font-medium">New assessment scheduled for Culinary Arts</p>
                      <p className="text-xs text-gray-500">1 day ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Trainee Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {traineeMetrics.map((metric) => (
              <Card key={metric.title} className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-500 text-sm">{metric.title}</p>
                      <h3 className="text-2xl font-bold mt-2">{metric.value}</h3>
                    </div>
                    <div className={`p-3 rounded-lg ${metric.bgColor}`}>
                      <metric.icon className={`w-6 h-6 ${metric.iconColor}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Progress Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Training Completion Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={programData}
                        dataKey="completed"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        startAngle={90}
                        endAngle={-270}
                        fill="#10B981"
                      >
                        {programData.map((entry, index) => (
                          <Cell 
                            key={`cell-${index}`} 
                            fill={['#FF6B00', '#FFB800', '#10B981', '#FF3B30'][index % 4]} 
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Active Training Sessions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {['Hotel Management', 'Restaurant Service', 'Culinary Arts'].map((course) => (
                    <div key={course} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="font-medium">{course}</span>
                      </div>
                      <span className="text-sm text-gray-500">In Progress</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}