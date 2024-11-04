"use client";

import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/app/support/components/ui/dialog';
import { Button } from '@/app/support/components/ui/button';
import { Input } from '@/app/support/components/ui/input';
import { Textarea } from '@/app/support/components/ui/textarea';
import { Label } from '@/app/support/components/ui/label';

interface TicketData {
    subject: string;
    description: string;
    priority: 'Low' | 'Medium' | 'High' | 'Urgent';
    category: 'Technical' | 'Course Content' | 'Assessment' | 'General' | 'Administrative';
}

interface NewTicketFormProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onSubmit: (ticketData: TicketData) => void;
}

export const NewTicketForm = ({ open, onOpenChange, onSubmit }: NewTicketFormProps) => {
    const [formData, setFormData] = useState({
        subject: '',
        description: '',
        priority: 'Medium',
        category: 'General'
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData as TicketData);
        setFormData({
            subject: '',
            description: '',
            priority: 'Medium',
            category: 'General'
        });
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle>Create New Support Ticket</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                            id="subject"
                            value={formData.subject}
                            onChange={(e) => setFormData({...formData, subject: e.target.value})}
                            placeholder="Enter ticket subject"
                            required
                        />
                    </div>
                    
                    <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                            id="description"
                            value={formData.description}
                            onChange={(e) => setFormData({...formData, description: e.target.value})}
                            placeholder="Describe your issue"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="priority">Priority</Label>
                            <select
                                id="priority"
                                className="w-full border rounded-md px-3 py-2"
                                value={formData.priority}
                                onChange={(e) => setFormData({...formData, priority: e.target.value as TicketData['priority']})}
                            >
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                                <option value="Urgent">Urgent</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="category">Category</Label>
                            <select
                                id="category"
                                className="w-full border rounded-md px-3 py-2"
                                value={formData.category}
                                onChange={(e) => setFormData({...formData, category: e.target.value})}
                            >
                                <option value="Technical">Technical</option>
                                <option value="Course Content">Course Content</option>
                                <option value="Assessment">Assessment</option>
                                <option value="General">General</option>
                                <option value="Administrative">Administrative</option>
                            </select>
                        </div>
                    </div>

                    <Button type="submit" className="w-full">Submit Ticket</Button>
                </form>
            </DialogContent>
        </Dialog>
    );
};