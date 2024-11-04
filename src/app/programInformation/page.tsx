// /components/ProgramInformation.js
"use client"; // Use this if you're using Next.js 13 app directory and want client-side rendering

import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  MapPin, 
  Calendar, 
  Users, 
  Clock,
  HelpCircle,
  Filter,
  Search
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import Link from 'next/link';

const ProgramInformation = () => {
  const [activeProgram, setActiveProgram] = useState<number | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [filterLocation, setFilterLocation] = useState('all');

  const programs = [
    {
      id: 1,
      title: "Tourism Management",
      duration: "8 Weeks",
      startDate: "June 1, 2024",
      locations: ["Dubai", "Abu Dhabi"],
      capacity: 30,
      description: "A comprehensive program covering the basics of tourism management, customer service, and local tourism industry knowledge.",
      eligibility: [
        "Bachelor's degree in any field",
        "Age between 21-35 years",
        "Fluent in English",
        "UAE National"
      ],
      modules: [
        "Introduction to Tourism Industry",
        "Customer Service Excellence",
        "Tourism Marketing",
        "Local Heritage and Culture"
      ]
    },
    {
      id: 2,
      title: "Tour Operations",
      duration: "6 Weeks",
      startDate: "July 15, 2024",
      locations: ["Dubai", "Sharjah"],
      capacity: 25,
      description: "The Tour Operations course is designed to equip aspiring and current professionals with the knowledge and skills to develop, coordinate, and manage successful tours that create memorable and engaging experiences for travelers. The course provides a comprehensive understanding of the tour industry, covering everything from itinerary design and destination research to logistics, risk management, and customer service.",
      eligibility: [
        "High school diploma or equivalent",
        "Age between 18-30 years",
        "Good communication skills",
        "UAE National"
      ],
      modules: [
        "Hotel Operations Management",
        "Event Planning and Coordination",
        "Guest Relations",
        "Food and Beverage Service",
        "Safety protocols"
      ]
    },
    {
        id: 3,
        title: "Restaurant Operations",
        duration: "6 Weeks",
        startDate: "July 15, 2024",
        locations: ["Dubai", "Sharjah"],
        capacity: 25,
        description: "The Restaurant Operations program is a foundational course designed to prepare individuals for a dynamic career in the restaurant and hospitality industry. This program covers essential areas of restaurant operations, including service standards, kitchen and front-of-house management, customer relations, and financial oversight. Participants will gain hands-on experience and practical skills in managing daily restaurant operations, providing excellent customer service, and implementing effective business strategies to drive success in a competitive market. This program is ideal for those aiming to build a successful career in restaurant management, from small cafes to fine-dining establishments.",
        eligibility: [
          "High school diploma or equivalent",
          "Age between 18-30 years",
          "Good communication skills",
          "UAE National or Resident"
        ],
        modules: [
          "Introduction to Restaurant Operations",
          "Customer Service Excellence",
          "Food and Beverage Management",
          "Financial Management and Cost Control",
          "Human Resources and Staff Management",
          "Health, Safety, and Sanitation Standards",
          "Marketing and Promotion",
          "Capstone Project: Restaurant Simulation"
        ]
      }
  ];

  const faqs = [
    {
      id: 1,
      question: "What documents are required for application?",
      answer: "Required documents include your CV, educational certificates, Emirates ID copy, and a letter of motivation. All documents should be submitted in PDF format through the online portal."
    },
    {
      id: 2,
      question: "Is there a stipend during the training period?",
      answer: "Yes, selected candidates receive a monthly stipend of AED 5,000 during the training period, plus transportation allowance."
    },
    {
      id: 3,
      question: "What are the working hours during training?",
      answer: "Training hours are from 9:00 AM to 5:00 PM, Sunday to Thursday. Some weekend activities may be required for special events."
    }
  ];

  const locations = [
    { id: 'all', name: 'All Locations' },
    { id: 'dubai', name: 'Dubai' },
    { id: 'abudhabi', name: 'Abu Dhabi' },
    { id: 'sharjah', name: 'Sharjah' }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Navigation Links */}
      <nav className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex gap-6">
          <Link 
            href="/" 
            className="text-gray-600 hover:text-gray-900 font-medium"
          >
            Home
          </Link>
          <Link 
            href="#faqs" 
            className="text-gray-600 hover:text-gray-900 font-medium"
          >
            FAQs
          </Link>
        </div>
      </nav>

      {/* Existing Header Section */}
      <div className="bg-blue-100 p-8 rounded-lg shadow-md border-l-4 border-blue-500">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Training Programs
        </h1>
        <p className="text-lg text-gray-600">
          Discover our comprehensive training programs designed to develop the next generation of tourism professionals.
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search programs..."
              className="pl-10 w-full p-2 border rounded-lg"
            />
          </div>
          <div className="flex gap-2 items-center">
            <Filter className="h-5 w-5 text-gray-500" />
            <select 
              value={filterLocation}
              onChange={(e) => setFilterLocation(e.target.value)}
              className="p-2 border rounded-lg"
            >
              {locations.map(location => (
                <option key={location.id} value={location.id}>
                  {location.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="space-y-4">
        {programs.map(program => (
          <Card key={program.id} className="bg-white">
            <CardHeader 
              className="cursor-pointer bg-green-50"
              onClick={() => setActiveProgram(activeProgram === program.id ? null : program.id)}
            >
              <div className="flex justify-between items-center">
                <CardTitle className="text-xl font-semibold">
                  {program.title}
                </CardTitle>
                {activeProgram === program.id ? 
                  <ChevronUp className="h-5 w-5" /> : 
                  <ChevronDown className="h-5 w-5" />
                }
              </div>
              <div className="flex gap-4 text-sm text-gray-500 mt-2">
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {program.duration}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {program.startDate}
                </span>
                <span className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  {program.capacity} seats
                </span>
              </div>
            </CardHeader>
            {activeProgram === program.id && (
              <CardContent className="pt-4 bg-blue-50">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Program Description</h3>
                    <p className="text-gray-600">{program.description}</p>
                    
                    <h3 className="font-semibold mt-4 mb-2">Program Modules</h3>
                    <ul className="list-disc pl-5 text-gray-600">
                      {program.modules.map((module, idx) => (
                        <li key={idx}>{module}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Eligibility Criteria</h3>
                    <ul className="list-disc pl-5 text-gray-600">
                      {program.eligibility.map((criteria, idx) => (
                        <li key={idx}>{criteria}</li>
                      ))}
                    </ul>

                    <h3 className="font-semibold mt-4 mb-2">Available Locations</h3>
                    <div className="space-y-2">
                      {program.locations.map((location, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-gray-600">
                          <MapPin className="h-4 w-4" />
                          {location}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-end">
                  <Link href="/application">
                    <button className="bg-[#1a1d21] text-white px-4 py-2 rounded-lg hover:bg-gray-800">
                    Apply Now
                  </button>
                  </Link>
                </div>
              </CardContent>
            )}
          </Card>
        ))}
      </div>

      {/* FAQs Section */}
      <Card id="faqs" className="bg-white">
        <CardHeader className="bg-purple-50">
          <CardTitle className="text-xl font-semibold flex items-center gap-2">
            <HelpCircle className="h-5 w-5" />
            Frequently Asked Questions
          </CardTitle>
        </CardHeader>
        <CardContent className="bg-purple-50">
          <div className="space-y-4">
            {faqs.map(faq => (
              <div key={faq.id} className="border-b last:border-b-0 pb-4">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => setActiveFaq(activeFaq === faq.id ? null : faq.id)}
                >
                  <h3 className="font-semibold">{faq.question}</h3>
                  {activeFaq === faq.id ? 
                    <ChevronUp className="h-5 w-5" /> : 
                    <ChevronDown className="h-5 w-5" />
                  }
                </div>
                {activeFaq === faq.id && (
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProgramInformation;
