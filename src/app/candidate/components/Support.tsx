"use client";

import React, { useState } from 'react';
import { Search, Plus, Clock, MessageSquare, Paperclip } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/support/components/ui/card';
import { Badge } from '@/app/support/components/ui/badge';
import { Input } from '@/app/support/components/ui/input';
import { Button } from '@/app/support/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/app/support/components/ui/dialog';

import { NewTicketForm } from '@/app/support/components/ui/ticket';


type Priority = 'Low' | 'Medium' | 'High' | 'Urgent';
type Status = 'Open' | 'In Progress' | 'Resolved' | 'Closed';
type Category = 'Technical' | 'Course Content' | 'Assessment' | 'General' | 'Administrative';

interface Attachment {
    id: string;
    name: string;
    size: string;
    type: string;
    url: string;
}

interface TicketResponse {
    id: string;
    from: string;
    role: string;
    message: string;
    time: string;
    attachments?: Attachment[];
}

interface Ticket {
    id: string;
    subject: string;
    status: Status;
    priority: Priority;
    category: Category;
    created: string;
    updated: string;
    description: string;
    attachments: Attachment[];
    responses: TicketResponse[];
    assignedTo?: string;
    tags: string[];
}

// Mock data with more realistic tourism training scenarios
const mockTickets: Ticket[] = [
    {
        id: "TKT-001",
        subject: "Clarification on Local Tour Guide Certification Process",
        status: "Open",
        priority: "High",
        category: "Course Content",
        created: "2024-03-30T10:30:00",
        updated: "2024-03-30T11:45:00",
        description: "I need detailed information about the certification requirements for becoming a local tour guide. Specifically, what practical assessments are involved?",
        attachments: [
            {
                id: "att-001",
                name: "current_certification.pdf",
                size: "2.4MB",
                type: "application/pdf",
                url: "/attachments/cert.pdf"
            }
        ],
        responses: [
            {
                id: "resp-001",
                from: "Sarah Johnson",
                role: "Course Mentor",
                message: "I'll provide you with the complete certification guideline document. Let's schedule a call to discuss the practical assessment components in detail.",
                time: "2024-03-30T11:45:00",
                attachments: [
                    {
                        id: "att-002",
                        name: "certification_guidelines.pdf",
                        size: "1.8MB",
                        type: "application/pdf",
                        url: "/attachments/guidelines.pdf"
                    }
                ]
            }
        ],
        assignedTo: "Sarah Johnson",
        tags: ["certification", "practical-assessment", "tour-guide"]
    },
    {
        id: "TKT-002",
        subject: "Technical Issues with Virtual Tour Module",
        status: "In Progress",
        priority: "Urgent",
        category: "Technical",
        created: "2024-03-29T15:20:00",
        updated: "2024-03-30T09:15:00",
        description: "Unable to access the virtual tour practice module. Getting error 404 when trying to load the interactive map component.",
        attachments: [
            {
                id: "att-003",
                name: "error_screenshot.png",
                size: "856KB",
                type: "image/png",
                url: "/attachments/error.png"
            }
        ],
        responses: [],
        assignedTo: "Tech Support",
        tags: ["technical-issue", "virtual-tour", "urgent"]
    },
    {
        id: "TKT-003",
        subject: "Feedback on Tourism Marketing Assessment",
        status: "Resolved",
        priority: "Medium",
        category: "Assessment",
        created: "2024-03-28T14:00:00",
        updated: "2024-03-29T16:30:00",
        description: "Requesting detailed feedback on my tourism marketing strategy assignment. Particularly interested in improving the digital marketing section.",
        attachments: [],
        responses: [
            {
                id: "resp-002",
                from: "Mark Wilson",
                role: "Marketing Instructor",
                message: "I've reviewed your assignment and added detailed comments. Your social media strategy is strong, but the SEO section needs more depth.",
                time: "2024-03-29T16:30:00"
            }
        ],
        assignedTo: "Mark Wilson",
        tags: ["assessment", "marketing", "feedback"]
    }
];

// Add this interface near your other interfaces
interface NewTicketData {
    subject: string;
    priority: Priority;
    category: Category;
    description: string;
}

const TraineeTickets = () => {
    const [tickets, setTickets] = useState<Ticket[]>(mockTickets);
    const [showNewTicketForm, setShowNewTicketForm] = useState(false);
    const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterStatus, setFilterStatus] = useState<Status | 'All'>('All');
    const [filterPriority, setFilterPriority] = useState<Priority | 'All'>('All');
    const [isTicketDialogOpen, setIsTicketDialogOpen] = useState(false);

    const getStatusColor = (status: Status) => {
        switch (status) {
            case 'Open': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
            case 'In Progress': return 'bg-blue-100 text-blue-800 border-blue-300';
            case 'Resolved': return 'bg-green-100 text-green-800 border-green-300';
            case 'Closed': return 'bg-gray-100 text-gray-800 border-gray-300';
            default: return '';
        }
    };

    const handleTicketClick = (ticket: Ticket) => {
        setSelectedTicket(ticket);
        setIsTicketDialogOpen(true);
    };

    const handleNewTicket = (ticketData: NewTicketData) => {
        const newTicket: Ticket = {
            id: `TKT-${(tickets.length + 1).toString().padStart(3, '0')}`,
            subject: ticketData.subject,
            status: 'Open',
            priority: ticketData.priority,
            category: ticketData.category,
            created: new Date().toISOString(),
            updated: new Date().toISOString(),
            description: ticketData.description,
            attachments: [],
            responses: [],
            tags: []
        };
        
        setTickets([...tickets, newTicket]);
        setShowNewTicketForm(false);
    };

    const filteredTickets = tickets.filter(ticket => {
        const matchesSearch = ticket.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
            ticket.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStatus = filterStatus === 'All' || ticket.status === filterStatus;
        const matchesPriority = filterPriority === 'All' || ticket.priority === filterPriority;

        return matchesSearch && matchesStatus && matchesPriority;
    });

    const stats = {
        open: tickets.filter(t => t.status === 'Open').length,
        inProgress: tickets.filter(t => t.status === 'In Progress').length,
        resolved: tickets.filter(t => t.status === 'Resolved').length,
        urgent: tickets.filter(t => t.priority === 'Urgent').length
    };


    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Support Tickets</h1>
                        <p className="text-gray-500">Manage your training support requests</p>
                    </div>
                    <Button
                        onClick={() => setShowNewTicketForm(true)}
                        className="bg-blue-600 hover:bg-blue-700"
                    >
                        <Plus className="w-4 h-4 mr-2" />
                        New Ticket
                    </Button>
                </div>

                {/* Statistics Cards */}
                <div className="grid grid-cols-4 gap-4 mb-6">
                    <Card className="bg-white hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1">
                        <CardHeader className="pb-2 bg-blue-50 rounded-t-lg">
                            <CardTitle className="text-sm text-blue-700">Open Tickets</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-blue-600">{stats.open}</div>
                        </CardContent>
                    </Card>
                    <Card className="bg-white hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1">
                        <CardHeader className="pb-2 bg-purple-50 rounded-t-lg">
                            <CardTitle className="text-sm text-purple-700">In Progress</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-purple-600">{stats.inProgress}</div>
                        </CardContent>
                    </Card>
                    <Card className="bg-white hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1">
                        <CardHeader className="pb-2 bg-green-50 rounded-t-lg">
                            <CardTitle className="text-sm text-green-700">Resolved</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-green-600">{stats.resolved}</div>
                        </CardContent>
                    </Card>
                    <Card className="bg-white hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1">
                        <CardHeader className="pb-2 bg-red-50 rounded-t-lg">
                            <CardTitle className="text-sm text-red-700">Urgent</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-red-600">{stats.urgent}</div>
                        </CardContent>
                    </Card>
                </div>

                {/* Search and Filters */}
                <div className="flex gap-4 mb-6">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input
                            placeholder="Search tickets..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-9"
                        />
                    </div>
                    <select
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value as Status | 'All')}
                        className="border rounded-md px-3 py-2"
                    >
                        <option value="All">All Status</option>
                        <option value="Open">Open</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Resolved">Resolved</option>
                        <option value="Closed">Closed</option>
                    </select>
                    <select
                        value={filterPriority}
                        onChange={(e) => setFilterPriority(e.target.value as Priority | 'All')}
                        className="border rounded-md px-3 py-2"
                    >
                        <option value="All">All Priority</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                        <option value="Urgent">Urgent</option>
                    </select>
                </div>

                {/* Ticket List */}
                <div className="space-y-4">
                    {filteredTickets.map(ticket => (
                        <Card
                            key={ticket.id}
                            className="cursor-pointer hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1"
                            onClick={() => handleTicketClick(ticket)}
                        >
                            <CardContent className="p-4">
                                <div className="flex justify-between items-start">
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <h3 className="font-medium text-lg">{ticket.subject}</h3>
                                            <Badge variant={
                                                ticket.priority === 'Urgent' ? 'destructive' :
                                                ticket.priority === 'High' ? 'secondary' :
                                                'default'
                                            }>
                                                {ticket.priority}
                                            </Badge>
                                        </div>
                                        <p className="text-sm text-gray-500">#{ticket.id} • {ticket.category}</p>
                                    </div>
                                    <Badge className={`${getStatusColor(ticket.status)} px-3 py-1`}>
                                        {ticket.status}
                                    </Badge>
                                </div>
                                <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
                                    <div className="flex items-center">
                                        <Clock className="w-4 h-4 mr-1" />
                                        {new Date(ticket.updated).toLocaleDateString()}
                                    </div>
                                    {ticket.responses.length > 0 && (
                                        <div className="flex items-center">
                                            <MessageSquare className="w-4 h-4 mr-1" />
                                            {ticket.responses.length} responses
                                        </div>
                                    )}
                                    {ticket.attachments.length > 0 && (
                                        <div className="flex items-center">
                                            <Paperclip className="w-4 h-4 mr-1" />
                                            {ticket.attachments.length} files
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Ticket Detail Dialog */}
                <Dialog open={isTicketDialogOpen} onOpenChange={setIsTicketDialogOpen}>
                    <DialogContent className="max-w-2xl">
                        <DialogHeader>
                            <DialogTitle>{selectedTicket?.subject}</DialogTitle>
                        </DialogHeader>
                        <div className="p-4">
                            <div className="space-y-4">
                                <div className="flex items-center gap-2">
                                    <Badge className={getStatusColor(selectedTicket?.status || 'Open')}>
                                        {selectedTicket?.status}
                                    </Badge>
                                    <Badge variant="outline">{selectedTicket?.priority}</Badge>
                                </div>
                                <p className="text-gray-600">{selectedTicket?.description}</p>
                                <div className="space-y-4 mt-6">
                                    <h3 className="font-semibold">Responses</h3>
                                    {selectedTicket?.responses.map(response => (
                                        <div key={response.id} className="bg-gray-50 p-4 rounded-lg">
                                            <div className="flex justify-between">
                                                <span className="font-medium">{response.from}</span>
                                                <span className="text-sm text-gray-500">
                                                    {new Date(response.time).toLocaleString()}
                                                </span>
                                            </div>
                                            <p className="mt-2">{response.message}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
            <NewTicketForm 
                    open={showNewTicketForm}
                    onOpenChange={setShowNewTicketForm}
                onSubmit={handleNewTicket}
            />
        </div>
    );
};

export default TraineeTickets;