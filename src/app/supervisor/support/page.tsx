"use client";

import React, { useState, useEffect } from 'react';
// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';
import { Search, Filter, Plus, Clock, AlertTriangle, CheckCircle, ArrowUpRight, Book } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/support/components/ui/card';
import { Alert, AlertDescription } from '@/app/support/components/ui/alert';

const metricsData = [
    { name: 'Mon', tickets: 20, resolved: 15 },
    { name: 'Tue', tickets: 30, resolved: 25 },
    { name: 'Wed', tickets: 25, resolved: 22 },
    { name: 'Thu', tickets: 40, resolved: 30 },
    { name: 'Fri', tickets: 35, resolved: 28 },
    { name: 'Sat', tickets: 15, resolved: 12 },
    { name: 'Sun', tickets: 10, resolved: 8 },
];


const tickets = [
    { id: 1, subject: "Login Issue", priority: "High", status: "Open", customer: "John Doe", created: "2024-04-01", responseTime: "2h" },
    { id: 2, subject: "Payment Failed", priority: "Medium", status: "In Progress", customer: "Jane Smith", created: "2024-04-01", responseTime: "1h" },
    { id: 3, subject: "Account Access", priority: "Low", status: "Pending", customer: "Bob Wilson", created: "2024-04-01", responseTime: "3h" }
];

const kbArticles = [
    { id: 1, title: "Common Login Issues", views: 234, helpful: 45 },
    { id: 2, title: "Password Reset Guide", views: 189, helpful: 38 },
    { id: 3, title: "Billing FAQ", views: 156, helpful: 29 }
];

const MetricsCard = ({ title, value, change }: { title: string; value: string; change: string }) => (
    <Card>
        <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-500">{title}</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="flex items-baseline space-x-2">
                <span className="text-2xl font-bold">{value}</span>
                <span className={`text-sm ${change.includes('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {change}
                </span>
            </div>
        </CardContent>
    </Card>
);

const SupportDashboard = () => {
    const [activeTab, setActiveTab] = useState('dashboard');

    useEffect(() => {
        // Any client-side only logic
    }, []);

    const TabButton = ({ id, label }: { id: string; label: string }) => (
        <button
            onClick={() => setActiveTab(id)}
            className={`px-4 py-2 rounded-lg ${activeTab === id ? 'bg-blue-600 text-white' : 'bg-white'
                }`}
        >
            {label}
        </button>
    );

    const DashboardView = () => (
        <div className="space-y-6">
            <div className="grid grid-cols-4 gap-4">
                <MetricsCard title="Open Tickets" value="24" change="+2.5%" />
                <MetricsCard title="Avg Response Time" value="1.8h" change="+0.3h" />
                <MetricsCard title="Resolution Rate" value="92%" change="+3%" />
                <MetricsCard title="KB Articles" value="156" change="+12" />
            </div>


            {/* Progress Chart */}
            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-medium mb-4">Weekly Ticket Metrics</h3>
                <div style={{ width: '100%', height: 400 }}>
                    <BarChart 
                        width={800}
                        height={400}
                        data={metricsData}
                        margin={{ top: 20, right: 50, left: 40, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="tickets" fill="#3b82f6" name="Total Tickets" />
                        <Bar dataKey="resolved" fill="#22c55e" name="Resolved Tickets" />
                    </BarChart>
                </div>
            </div>

            <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                    3 tickets require immediate attention due to SLA breach risk
                </AlertDescription>
            </Alert>

            <Card>
                <CardHeader>
                    <CardTitle>Recent Tickets</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b">
                                    <th className="text-left py-3 px-4">ID</th>
                                    <th className="text-left py-3 px-4">Subject</th>
                                    <th className="text-left py-3 px-4">Priority</th>
                                    <th className="text-left py-3 px-4">Status</th>
                                    <th className="text-left py-3 px-4">Customer</th>
                                    <th className="text-left py-3 px-4">Response Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tickets.map(ticket => (
                                    <tr key={ticket.id} className="border-b">
                                        <td className="py-3 px-4">#{ticket.id}</td>
                                        <td className="py-3 px-4">{ticket.subject}</td>
                                        <td className="py-3 px-4">
                                            <span className={`px-2 py-1 rounded-full text-xs ${ticket.priority === 'High' ? 'bg-red-100 text-red-800' :
                                                ticket.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                                                    'bg-green-100 text-green-800'
                                                }`}>
                                                {ticket.priority}
                                            </span>
                                        </td>
                                        <td className="py-3 px-4">
                                            <span className={`px-2 py-1 rounded-full text-xs ${ticket.status === 'Open' ? 'bg-blue-100 text-blue-800' :
                                                ticket.status === 'In Progress' ? 'bg-purple-100 text-purple-800' :
                                                    'bg-gray-100 text-gray-800'
                                                }`}>
                                                {ticket.status}
                                            </span>
                                        </td>
                                        <td className="py-3 px-4">{ticket.customer}</td>
                                        <td className="py-3 px-4">{ticket.responseTime}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );

    const TicketManagementView = () => (
        <Card>
            <CardHeader>
                <CardTitle>Ticket Queue</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex space-x-4 mb-4">
                    <button className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg">
                        All Tickets
                    </button>
                    <button className="px-4 py-2 bg-white rounded-lg">
                        Assigned to Me
                    </button>
                    <button className="px-4 py-2 bg-white rounded-lg">
                        Unassigned
                    </button>
                    <button className="px-4 py-2 bg-white rounded-lg flex items-center">
                        <Filter className="w-4 h-4 mr-2" />
                        Filters
                    </button>
                </div>

                <div className="space-y-4">
                    {tickets.map(ticket => (
                        <div key={ticket.id} className="p-4 bg-white rounded-lg border hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="font-medium">{ticket.subject}</h3>
                                    <p className="text-sm text-gray-500">Customer: {ticket.customer}</p>
                                </div>
                                <div className="flex space-x-2">
                                    <button className="p-2 hover:bg-gray-100 rounded">
                                        <Clock className="w-4 h-4" />
                                    </button>
                                    <button className="p-2 hover:bg-gray-100 rounded">
                                        <ArrowUpRight className="w-4 h-4" />
                                    </button>
                                    <button className="p-2 hover:bg-gray-100 rounded">
                                        <CheckCircle className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );

    const KnowledgeBaseView = () => (
        <Card>
            <CardHeader>
                <CardTitle>Knowledge Base Articles</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex space-x-4 mb-4">
                    <button className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg">
                        All Articles
                    </button>
                    <button className="px-4 py-2 bg-white rounded-lg">
                        Published
                    </button>
                    <button className="px-4 py-2 bg-white rounded-lg">
                        Drafts
                    </button>
                    <div className="flex-1 flex justify-end">
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center">
                            <Plus className="w-4 h-4 mr-2" />
                            New Article
                        </button>
                    </div>
                </div>

                <div className="space-y-4">
                    {kbArticles.map(article => (
                        <div key={article.id} className="p-4 bg-white rounded-lg border hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="font-medium">{article.title}</h3>
                                    <p className="text-sm text-gray-500">
                                        {article.views} views • {article.helpful} found helpful
                                    </p>
                                </div>
                                <div className="flex space-x-2">
                                    <button className="px-3 py-1 text-sm border rounded-lg">
                                        Edit
                                    </button>
                                    <button className="px-3 py-1 text-sm border rounded-lg">
                                        Preview
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="mb-6 flex space-x-4">
                <TabButton id="dashboard" label="Dashboard" />
                <TabButton id="tickets" label="Ticket Management" />
                <TabButton id="knowledge" label="Knowledge Base" />
            </div>

            <div className="mb-6 flex space-x-4">
                
                <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg">
                    <Book className="w-4 h-4 mr-2" />
                    New Article
                </button>
                <div className="flex-1 flex justify-end">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search tickets..."
                            className="w-64 px-4 py-2 rounded-lg border"
                        />
                        <Search className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
                    </div>
                </div>
            </div>

            {activeTab === 'dashboard' && <DashboardView />}
            {activeTab === 'tickets' && <TicketManagementView />}
            {activeTab === 'knowledge' && <KnowledgeBaseView />}
        </div>
    );
};

export default SupportDashboard;
