import React from 'react';
import { Button } from '@/app/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/app/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

import { 
  Globe,
  Users,
  Building,
  Star,
  GraduationCap,
  Utensils,
  Clock,
  Calendar,
  CheckCircle,
  UserCircle
} from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-6">
          {/* Login Button Container */}
          <div className="flex justify-end mb-8">
            <Link href="/user">
              <Button 
                variant="outline" 
                className="bg-white text-blue-600 border-white hover:bg-blue-50 flex items-center gap-2 px-8 py-2.5 text-lg rounded-lg "
              >
                <UserCircle className="h-6 w-6" />
                Login
              </Button>
            </Link>
          </div>

          {/* Hero Content Container */}
          <div className="bg-blue-700/20 rounded-2xl p-8 backdrop-blur-sm ">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="md:w-1/2">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Global Tourism Excellence Program
                </h1>
                <p className="text-xl mb-8 text-blue-100">
                  Elevate your career with international training opportunities in tourism, hospitality, and customer service
                </p>
                <div className="flex gap-4">
                  <Link href="/application">
                    <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                      Apply Now
                    </Button>
                  </Link>
                  <Link href="/programInformation">
                    <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-700">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              {/* Enhanced Hero Image Container */}
              <div className="md:w-1/2">
                <div className="relative rounded-xl overflow-hidden ">
                  <Image 
                    src="/d.jpg"
                    alt="Tourism Training"
                    width={600}
                    height={400}
                    className="object-cover w-full h-[380px]"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
                  <div className="absolute inset-0 ring-1 ring-white/10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Program Features</h2>
            <p className="text-gray-600">Comprehensive training designed for tourism professionals</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="h-8 w-8 text-blue-600" />,
                title: "International Experience",
                description: "Train in leading tourism destinations worldwide"
              },
              {
                icon: <Clock className="h-8 w-8 text-blue-600" />,
                title: "Flexible Duration",
                description: "1-2 month programs tailored to your needs"
              },
              {
                icon: <GraduationCap className="h-8 w-8 text-blue-600" />,
                title: "Expert Training",
                description: "Learn from industry leaders and professionals"
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="mb-4 flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Training Programs */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Training Programs</h2>
            <p className="text-gray-600">Choose from our specialized training tracks</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Building className="h-8 w-8 text-blue-600" />,
                title: "Tourism Management",
                features: ["Destination Management", "Tourism Planning", "Cultural Tourism", "Sustainable Tourism"],
                duration: "8 weeks",
                href: "/programInformation?program=tourism-management"
              },
              {
                icon: <Utensils className="h-8 w-8 text-blue-600" />,
                title: "Restaurant Operations",
                features: ["Kitchen Management", "Service Excellence", "Menu Planning", "Quality Control"],
                duration: "6 weeks",
                href: "/programInformation?program=restaurant-operations"
              },
              {
                icon: <Users className="h-8 w-8 text-blue-600" />,
                title: "Tour Operations",
                features: ["Tour Planning", "Group Management", "Local Experiences", "Safety Protocols"],
                duration: "6 weeks",
                href: "/programInformation?program=tour-operations"
              }
            ].map((program, index) => (
              <Link key={index} href={program.href}>
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      {program.icon}
                      <CardTitle>{program.title}</CardTitle>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      {program.duration}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {program.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-2 text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-gray-600">Hear from our program alumni</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Tourism Director, Paris",
                quote: "The program transformed my career in tourism. The international exposure and hands-on training were invaluable."
              },
              {
                name: "Michael Chen",
                role: "Hotel Manager, Singapore",
                quote: "GTEP provided me with the skills and network I needed to advance in the hospitality industry."
              },
              {
                name: "Emma Rodriguez",
                role: "Tour Operations Manager, Barcelona",
                quote: "The practical experience and industry connections made this program truly exceptional."
              }
            ].map((story, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden">
                      <Image
                        src="/icon.jpg"
                        alt={story.name}
                        width={80}
                        height={80}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">{story.quote}</p>
                  <div className="text-center">
                    <h4 className="font-semibold">{story.name}</h4>
                    <p className="text-sm text-gray-500">{story.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Application Process */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Application Process</h2>
            <p className="text-gray-600">Simple steps to join our program</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Apply Online",
                description: "Complete the online application form with your details and preferences"
              },
              {
                step: "2",
                title: "Document Review",
                description: "Submit required documents for eligibility verification"
              },
              {
                step: "3",
                title: "Interview",
                description: "Participate in a selection interview with program coordinators"
              },
              {
                step: "4",
                title: "Onboarding",
                description: "Complete pre-departure preparation and documentation"
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-blue-200 -z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join our global network of tourism professionals
          </p>
          <Link href="/application"> 
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              Apply Now
            </Button>
          </Link>
        </div>
      </div>

      {/* Support Button */}
      <Link href="/loginSupport">
        <button
          className="fixed bottom-8 right-8 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-300 group flex items-center justify-center text-xl font-bold"
          aria-label="Support"
        >
          <span className="absolute scale-0 group-hover:scale-100 -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded text-sm whitespace-nowrap transition-transform duration-200">
            Need Help?
          </span>
          ?
        </button>
      </Link>
    </div>
  );
};

export default LandingPage;