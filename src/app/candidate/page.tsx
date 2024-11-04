'use client';

import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/candidate/components/ui/tabs";
import { 
  User, 
  GraduationCap, 
  Bell,
  BarChart,
  HelpCircle,
  FileText,
  BookOpen,
  Award
} from 'lucide-react';
import { ProfileTab } from "@/app/candidate/components/ProfileTab";
import { TrainingTab } from "@/app/candidate/components/TrainingTab";
import { ApplicationsTab } from "@/app/candidate/components/ApplicationsTab";
import { OnboardingTab } from "@/app/candidate/components/OnboardingTab";
import { ProgramCompletionTab } from "@/app/candidate/components/ProgramCompletionTab";
import Support from "@/app/candidate/components/Support";
import { getArabicTextClass } from '@/utils/textUtils';
import { cx } from 'class-variance-authority';
import { DashboardTabArabic } from './components/DashboardTabArabic';
import { DashboardTabEnglish } from './components/DashboardTabEnglish';

export default function Home() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [language, setLanguage] = useState<'en' | 'ar'>('en');

  const translations = {
    en: {
      title: "Trainee Portal",
      search: "Search...",
      dashboard: "Dashboard",
      onboarding: "Onboarding",
      training: "Training",
      completion: "Completion",
      applications: "Applications",
      profile: "Profile",
      support: "Support",
      logout: 'Logout'
    },
    ar: {
      title: "بوابة المتدرب",
      search: "بحث...",
      dashboard: "لوحة التحكم",
      onboarding: "التعريف",
      training: "التدريب",
      completion: "الإتمام",
      applications: "الطلبات",
      profile: "الملف الشخصي",
      support: "الدعم",
      logout: 'تسجيل خروج'
    }
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const handleProfileClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    // Navigate to the logout page or perform logout logic
    window.location.href = '/user'; // Example navigation
  };

  return (
    <div className={`min-h-screen bg-[#f5f7fb] overflow-hidden ${language === 'ar' ? 'rtl' : 'ltr'}`} style={{ "--header-height": "72px", "--tabs-height": "48px" } as React.CSSProperties}>
      <Tabs defaultValue="dashboard" className="h-screen">
        {/* Fixed Header and Tabs Container */}
        <div className="fixed w-full z-30">
          {/* Fixed Header */}
          <header className="bg-white h-[var(--header-height)] border-b border-gray-100 shadow-sm">
            <div className="container mx-auto px-6 h-full">
              <div className="flex items-center justify-between h-full">
                <div className="flex items-center gap-8">
                  <h1 className={cx(
                    "text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent",
                    getArabicTextClass(language, 'xl')
                  )}>
                    {translations[language].title}
                  </h1>
                </div>
                
                <div className="flex items-center gap-6">
                  {/* Search Bar */}
                  <div className="hidden lg:flex items-center bg-gray-50 rounded-full px-4 py-1.5">
                    <input 
                      type="text" 
                      placeholder={translations[language].search}
                      className="bg-transparent border-none outline-none w-48 text-sm"
                    />
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>

                  {/* Notifications */}
                  <div className="relative">
                    <Bell className="h-5 w-5 text-gray-600 hover:text-blue-600 transition-colors" />
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
                  </div>

                  {/* Language Toggle */}
                  <button
                    onClick={toggleLanguage}
                    className="px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-sm font-medium"
                  >
                    {language === 'en' ? 'عربي' : 'ENG'}
                  </button>

                  {/* Profile */}
                  <div className="flex items-center gap-3 relative">
                    <div 
                      className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium cursor-pointer"
                      onClick={handleProfileClick}
                    >
                      M
                    </div>
                    <span className="hidden md:inline-block font-medium text-gray-700">Muhammad</span>
                    {isDropdownOpen && (
                      <div className="absolute right-20 mt-20 w-30 bg-white border border-gray-200 rounded-md shadow-lg">
                        <button 
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={handleLogout}
                        >
                          {translations[language].logout}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Tabs positioned below header */}
          <div className="bg-[#f5f7fb] pt-6 pb-2"> {/* Added padding and background */}
          <div className="container mx-auto bg-white max-w-7xl">
          <TabsList className="grid grid-cols-7 gap-4 bg-transparent h-auto p-0">
                {/* 1. Dashboard */}
                <TabsTrigger value="dashboard" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600 rounded-md px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all duration-200 flex-1">
                  <div className="flex items-center gap-2 justify-center">
                    <BarChart className="h-4 w-4" />
                    <span>{translations[language].dashboard}</span>
                  </div>
                </TabsTrigger>

                {/* 2. Onboarding */}
                <TabsTrigger value="onboarding" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600 rounded-md px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all duration-200 flex-1">
                  <div className="flex items-center gap-2 justify-center">
                    <BookOpen className="h-4 w-4" />
                    <span>{translations[language].onboarding}</span>
                  </div>
                </TabsTrigger>

                {/* 3. Training */}
                <TabsTrigger value="training" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600 rounded-md px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all duration-200 flex-1">
                  <div className="flex items-center gap-2 justify-center">
                    <GraduationCap className="h-4 w-4" />
                    <span>{translations[language].training}</span>
                  </div>
                </TabsTrigger>

                {/* 4. Completion */}
                <TabsTrigger value="completion" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600 rounded-md px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all duration-200 flex-1">
                  <div className="flex items-center gap-2 justify-center">
                    <Award className="h-4 w-4" />
                    <span>{translations[language].completion}</span>
                  </div>
                </TabsTrigger>

                {/* 5. Applications */}
                <TabsTrigger value="applications" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600 rounded-md px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all duration-200 flex-1">
                  <div className="flex items-center gap-2 justify-center">
                    <FileText className="h-4 w-4" />
                    <span>{translations[language].applications}</span>
                  </div>
                </TabsTrigger>

                {/* 6. Profile */}
                <TabsTrigger value="profile" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600 rounded-md px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all duration-200 flex-1">
                  <div className="flex items-center gap-2 justify-center">
                    <User className="h-4 w-4" />
                    <span>{translations[language].profile}</span>
                  </div>
                </TabsTrigger>

                {/* 7. Support */}
                <TabsTrigger value="support" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600 rounded-md px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all duration-200 flex-1">
                  <div className="flex items-center gap-2 justify-center">
                    <HelpCircle className="h-4 w-4" />
                    <span>{translations[language].support}</span>
                  </div>
                </TabsTrigger>
              </TabsList>
            </div>
          </div>
        </div>

        {/* Adjust main content padding */}
        <main className="pt-[calc(var(--header-height)+var(--tabs-height)+1.5rem)] h-screen overflow-y-auto no-scrollbar">
          <div className="container mx-auto px-6 py-6">
            <div className="mt-6">
              <TabsContent value="dashboard">
                {language === 'ar' ? <DashboardTabArabic /> : <DashboardTabEnglish />}
              </TabsContent>

              <TabsContent value="onboarding">
                <OnboardingTab />
              </TabsContent>

              <TabsContent value="training">
                <TrainingTab />
              </TabsContent>

              <TabsContent value="completion">
                <ProgramCompletionTab language={language} />
              </TabsContent>

              <TabsContent value="applications">
                <ApplicationsTab />
              </TabsContent>

              <TabsContent value="profile">
                <ProfileTab />
              </TabsContent>

              <TabsContent value="support">
                <Support />
              </TabsContent>
            </div>
          </div>
        </main>
      </Tabs>
    </div>
  );
}
