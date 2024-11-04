'use client'

import { useState } from 'react'
import { 
  MonitorPlay,
  Users,
  BookOpen,
  Calendar,
  Search,
  Filter,
  Download,
  Award,
  GraduationCap
} from 'lucide-react'

// Types
interface CourseData {
  name: string
  platform: string
  duration: string
  startDate: string
  status: string
  instructor: string
}

// Sample Data
const onlineCourses: CourseData[] = [
  {
    name: "Hospitality Management Fundamentals",
    platform: "Coursera",
    duration: "8 weeks",
    startDate: "2024-04-01",
    status: "Enrolling",
    instructor: "Dr. Sarah Johnson"
  },
  {
    name: "Tourism Marketing Strategies",
    platform: "edX",
    duration: "6 weeks",
    startDate: "2024-04-15",
    status: "In Progress",
    instructor: "Prof. Michael Chen"
  },
  {
    name: "Customer Service Excellence",
    platform: "Udemy",
    duration: "4 weeks",
    startDate: "2024-05-01",
    status: "Upcoming",
    instructor: "Emma Thompson"
  },
  {
    name: "Hotel Revenue Management",
    platform: "Coursera",
    duration: "10 weeks",
    startDate: "2024-05-15",
    status: "Upcoming",
    instructor: "Dr. Robert Lee"
  }
]

const offlineCourses: CourseData[] = [
  {
    name: "Front Desk Operations",
    platform: "Hotel Training Center",
    duration: "2 weeks",
    startDate: "2024-04-10",
    status: "Enrolling",
    instructor: "James Wilson"
  },
  {
    name: "Food & Beverage Service",
    platform: "Culinary Institute",
    duration: "3 weeks",
    startDate: "2024-04-20",
    status: "Upcoming",
    instructor: "Chef Maria Rodriguez"
  },
  {
    name: "Event Management Workshop",
    platform: "Tourism Academy",
    duration: "1 week",
    startDate: "2024-05-05",
    status: "Enrolling",
    instructor: "David Brown"
  },
  {
    name: "Housekeeping Management",
    platform: "Hotel School",
    duration: "2 weeks",
    startDate: "2024-05-10",
    status: "Upcoming",
    instructor: "Patricia White"
  }
]

// Components
const StatsCard = ({ title, value, icon: Icon, color, percentage }: { 
    title: string
    value: string | number
    icon: any
    color: string
    percentage?: number 
  }) => (
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
    'Enrolling': 'bg-green-100 text-green-800',
    'In Progress': 'bg-yellow-100 text-yellow-800',
    'Upcoming': 'bg-blue-100 text-blue-800',
    'Completed': 'bg-gray-100 text-gray-800'
  }
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${colors[status] || 'bg-gray-100 text-gray-800'}`}>
      {status}
    </span>
  )
}

export default function WorkshopsPage() {
  const [activeTab, setActiveTab] = useState('Online Courses')
  const [searchTerm, setSearchTerm] = useState('')

  const renderCourseTable = (courses: CourseData[]) => {
    const filteredCourses = courses.filter(course =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.platform.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
      <div className="mt-4">
        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-white border rounded-lg hover:bg-gray-50 flex items-center gap-2">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
            <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 flex items-center gap-2">
              <Download className="w-4 h-4" />
              <span>Export</span>
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Course Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Platform</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Duration</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Start Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Instructor</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredCourses.map((course, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                        <BookOpen className="h-5 w-5" />
                      </div>
                      <div className="ml-4 text-sm font-medium text-gray-900">{course.name}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{course.platform}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{course.duration}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{course.startDate}</td>
                  <td className="px-6 py-4">
                    <StatusBadge status={course.status} />
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{course.instructor}</td>
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
      </div>
    )
  }

  const tabs = [
    { name: 'Online Courses', icon: MonitorPlay },
    { name: 'Offline Courses', icon: Users }
  ]

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Workshop Programs</h1>
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {activeTab === 'Online Courses' ? (
            <>
              <StatsCard title="Total Courses" value="15" icon={MonitorPlay} color="bg-blue-500" percentage={12} />
              <StatsCard title="Active Learners" value="234" icon={Users} color="bg-green-500" percentage={8} />
              <StatsCard title="Completion Rate" value="87%" icon={Award} color="bg-purple-500" percentage={5} />
              <StatsCard title="Avg. Duration" value="6 weeks" icon={Calendar} color="bg-yellow-500" percentage={0} />
            </>
          ) : (
            <>
              <StatsCard title="Total Workshops" value="8" icon={Users} color="bg-indigo-500" percentage={15} />
              <StatsCard title="Active Batches" value="5" icon={GraduationCap} color="bg-green-500" percentage={10} />
              <StatsCard title="Completion Rate" value="92%" icon={Award} color="bg-purple-500" percentage={7} />
              <StatsCard title="This Month" value="3" icon={Calendar} color="bg-yellow-500" percentage={0} />
            </>
          )}
        </div>
        {activeTab === 'Online Courses' ? renderCourseTable(onlineCourses) : renderCourseTable(offlineCourses)}
      </div>
    </div>
  )
}