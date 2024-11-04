'use client'

import { useState, useEffect } from 'react'
import { 
  Plane, Shield, Stamp, MapPin, GraduationCap, Award,
  Download, Calendar, Search, Filter, RefreshCw,
  Bell, X, Check, AlertTriangle, Globe, Building2, BookOpen
} from 'lucide-react'

// Types
interface StatsCardProps {
  title: string
  value: string | number
  icon: any
  color: string
  percentage?: number
}

interface VisaData {
  name: string
  destination: string
  visaType: string
  status: string
  date: string
}

interface InsuranceData {
  name: string
  provider: string
  coverage: string
  duration: string
  status: string
}

interface TicketData {
  name: string
  flight: string
  departure: string
  arrival: string
  status: string
}

interface AddressData {
  name: string
  company: string
  location: string
  duration: string
  accommodation: string
  contact: string
}

interface TrainingData {
  name: string
  program: string
  startDate: string
  endDate: string
  department: string
  supervisor: string
}

interface WorkshopData {
  name: string
  workshop: string
  date: string
  status: string
  certification: string
}

// Sample Data
const visaData: VisaData[] = [
  {
    name: "John Smith",
    destination: "France",
    visaType: "Training Visa",
    status: "Processing",
    date: "2024-03-15"
  },
  {
    name: "Maria Garcia",
    destination: "Spain",
    visaType: "Work-Study Visa",
    status: "Approved",
    date: "2024-03-10"
  },
  {
    name: "David Chen",
    destination: "Germany",
    visaType: "Training Visa",
    status: "Pending",
    date: "2024-03-18"
  }
]

const insuranceData: InsuranceData[] = [
  {
    name: "John Smith",
    provider: "Global Insurance Co.",
    coverage: "Comprehensive",
    duration: "3 months",
    status: "Active"
  },
  {
    name: "Maria Garcia",
    provider: "SafeTravel Insurance",
    coverage: "Premium",
    duration: "6 months",
    status: "Pending"
  }
]

const ticketData: TicketData[] = [
  {
    name: "John Smith",
    flight: "AF1234",
    departure: "2024-04-01 10:00",
    arrival: "2024-04-01 22:30",
    status: "Confirmed"
  },
  {
    name: "Maria Garcia",
    flight: "IB5678",
    departure: "2024-04-15 14:00",
    arrival: "2024-04-16 06:45",
    status: "Processing"
  }
]

const addressData: AddressData[] = [
  {
    name: "John Smith",
    company: "Le Grand Hotel Paris",
    location: "Paris, France",
    duration: "3 months",
    accommodation: "Staff Housing",
    contact: "Sophie Martin"
  },
  {
    name: "Maria Garcia",
    company: "Hotel Marina Barcelona",
    location: "Barcelona, Spain",
    duration: "6 months",
    accommodation: "Corporate Apartment",
    contact: "Carlos Rodriguez"
  }
]

const trainingData: TrainingData[] = [
  {
    name: "John Smith",
    program: "Hotel Operations",
    startDate: "2024-04-15",
    endDate: "2024-07-15",
    department: "Front Office",
    supervisor: "Marie Laurent"
  },
  {
    name: "Maria Garcia",
    program: "Restaurant Management",
    startDate: "2024-05-01",
    endDate: "2024-10-31",
    department: "F&B Service",
    supervisor: "Antonio Silva"
  }
]

const workshopData: WorkshopData[] = [
  {
    name: "John Smith",
    workshop: "Cultural Orientation",
    date: "2024-03-01",
    status: "Completed",
    certification: "COE-2024-001"
  },
  {
    name: "Maria Garcia",
    workshop: "Language Proficiency",
    date: "2024-03-05",
    status: "In Progress",
    certification: "LPC-2024-045"
  }
]

// Components
const StatsCard = ({ title, value, icon: Icon, color, percentage }: StatsCardProps) => (
  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-500 text-sm font-medium">{title}</p>
        <p className="text-2xl font-bold mt-2">{value}</p>
        {percentage !== undefined && (
          <p className={`text-sm mt-2 ${percentage >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {percentage >= 0 ? '↑' : '↓'} {Math.abs(percentage)}% from last month
          </p>
        )}
      </div>
      <div className={`p-4 rounded-full ${color} bg-opacity-10`}>
        <Icon className={`w-6 h-6 ${color.replace('bg-', 'text-')}`} />
      </div>
    </div>
  </div>
)

const StatusBadge = ({ status }: { status: string }) => {
    const colors: { [key: string]: string } = {
      'Approved': 'bg-green-100 text-green-800',
      'Active': 'bg-green-100 text-green-800',
      'Completed': 'bg-green-100 text-green-800',
      'Confirmed': 'bg-green-100 text-green-800',
      'Processing': 'bg-yellow-100 text-yellow-800',
      'Pending': 'bg-yellow-100 text-yellow-800',
      'In Progress': 'bg-yellow-100 text-yellow-800',
      'Rejected': 'bg-red-100 text-red-800'
    }
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${colors[status] || 'bg-gray-100 text-gray-800'}`}>
        {status}
      </span>
    )
  }

// Main Component
export default function OnboardingPage() {
  const [activeTab, setActiveTab] = useState('Visa processing')
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)

  const tabs = [
    { name: 'Visa processing', icon: Stamp },
    { name: 'Insurance details', icon: Shield },
    { name: 'Travel tickets', icon: Plane },
    { name: 'Deployment address', icon: MapPin },
    { name: 'Training details', icon: GraduationCap },
    { name: 'Qualification workshop', icon: Award }
  ]

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setLoading(false), 1000)
  }, [])

  const handleExport = () => {
    console.log('Exporting data...')
  }
   // ... continuing from previous part

  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      )
    }

    const renderTable = (data: any[], columns: string[]) => (
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 p-4">
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-white border rounded-lg hover:bg-gray-50 flex items-center space-x-2">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
            <button 
              onClick={handleExport}
              className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 flex items-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>Export</span>
            </button>
          </div>
        </div>

        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((column, index) => (
                <th key={index} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {column}
                </th>
              ))}
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                {Object.values(item).map((value: any, valueIndex) => (
                  <td key={valueIndex} className="px-6 py-4 whitespace-nowrap">
                    {valueIndex === 0 ? (
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                          {value.charAt(0)}
                        </div>
                        <div className="ml-4 text-sm font-medium text-gray-900">{value}</div>
                      </div>
                    ) : typeof value === 'string' && ['Approved', 'Pending', 'Processing', 'Completed', 'Active', 'In Progress', 'Confirmed'].includes(value) ? (
                      <StatusBadge status={value} />
                    ) : (
                      <div className="text-sm text-gray-500">{value}</div>
                    )}
                  </td>
                ))}
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex space-x-3">
                    <button className="text-blue-600 hover:text-blue-800">View</button>
                    <button className="text-gray-600 hover:text-gray-800">Edit</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )

    switch (activeTab) {
      case 'Visa processing':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <StatsCard title="Total Applications" value="24" icon={Stamp} color="bg-blue-500" percentage={12} />
              <StatsCard title="Approved" value="18" icon={Check} color="bg-green-500" percentage={8} />
              <StatsCard title="Pending" value="4" icon={RefreshCw} color="bg-yellow-500" percentage={-5} />
              <StatsCard title="Rejected" value="2" icon={X} color="bg-red-500" percentage={-2} />
            </div>
            {renderTable(visaData, ['Name', 'Destination', 'Visa Type', 'Status', 'Date'])}
          </div>
        )

      case 'Insurance details':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <StatsCard title="Total Policies" value="32" icon={Shield} color="bg-purple-500" percentage={15} />
              <StatsCard title="Active" value="28" icon={Check} color="bg-green-500" percentage={10} />
              <StatsCard title="Pending" value="3" icon={AlertTriangle} color="bg-yellow-500" percentage={-2} />
              <StatsCard title="Expired" value="1" icon={X} color="bg-red-500" percentage={0} />
            </div>
            {renderTable(insuranceData, ['Name', 'Provider', 'Coverage', 'Duration', 'Status'])}
          </div>
        )

      case 'Travel tickets':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <StatsCard title="Total Bookings" value="45" icon={Plane} color="bg-indigo-500" percentage={20} />
              <StatsCard title="Confirmed" value="38" icon={Check} color="bg-green-500" percentage={15} />
              <StatsCard title="Processing" value="5" icon={RefreshCw} color="bg-yellow-500" percentage={-3} />
              <StatsCard title="This Month" value="12" icon={Calendar} color="bg-blue-500" percentage={8} />
            </div>
            {renderTable(ticketData, ['Name', 'Flight', 'Departure', 'Arrival', 'Status'])}
          </div>
        )

      case 'Deployment address':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <StatsCard title="Total Deployments" value="36" icon={MapPin} color="bg-rose-500" percentage={12} />
              <StatsCard title="Active" value="28" icon={Check} color="bg-green-500" percentage={5} />
              <StatsCard title="Countries" value="8" icon={Globe} color="bg-blue-500" percentage={25} />
              <StatsCard title="Partners" value="15" icon={Building2} color="bg-purple-500" percentage={10} />
            </div>
            {renderTable(addressData, ['Name', 'Company', 'Location', 'Duration', 'Accommodation', 'Contact'])}
          </div>
        )

      case 'Training details':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <StatsCard title="Active Trainees" value="42" icon={GraduationCap} color="bg-emerald-500" percentage={15} />
              <StatsCard title="Programs" value="8" icon={BookOpen} color="bg-blue-500" percentage={0} />
              <StatsCard title="Departments" value="6" icon={Building2} color="bg-indigo-500" percentage={20} />
              <StatsCard title="Completion Rate" value="94%" icon={Award} color="bg-purple-500" percentage={5} />
            </div>
            {renderTable(trainingData, ['Name', 'Program', 'Start Date', 'End Date', 'Department', 'Supervisor'])}
          </div>
        )

      case 'Qualification workshop':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <StatsCard title="Total Workshops" value="15" icon={Award} color="bg-amber-500" percentage={10} />
              <StatsCard title="Completed" value="12" icon={Check} color="bg-green-500" percentage={15} />
              <StatsCard title="In Progress" value="3" icon={RefreshCw} color="bg-yellow-500" percentage={0} />
              <StatsCard title="This Month" value="5" icon={Calendar} color="bg-blue-500" percentage={25} />
            </div>
            {renderTable(workshopData, ['Name', 'Workshop', 'Date', 'Status', 'Certification'])}
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Onboarding</h1>
      </div>
      
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`
                whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium flex items-center space-x-2
                ${activeTab === tab.name 
                  ? 'border-blue-500 text-blue-600' 
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}
              `}
            >
              <tab.icon className="w-5 h-5" />
              <span>{tab.name}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        {renderContent()}
      </div>
    </div>
  )
}