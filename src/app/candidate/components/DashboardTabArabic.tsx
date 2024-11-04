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
import { getArabicTextClass } from '@/utils/textUtils';

// Helper function for combining classes
const cx = (...classes: string[]) => classes.filter(Boolean).join(' ');

const arabicContent = {
  totalProgress: {
    title: "التقدم الكلي",
    subtitle: "معدل الإنجاز",
    progress: "التقدم"
  },
  traineeDetails: {
    title: "تفاصيل المتدرب",
    program: "تدريب مكتب الاستقبال",
    department: "القسم",
    departmentValue: "مكتب الاستقبال",
    trainer: "المدرب",
    trainerName: "جون سميث",
    batch: "الدفعة",
    batchValue: "مارس 2024",
    period: "فترة التدريب",
    periodValue: "3 أشهر"
  },
  recentActivities: {
    title: "الأنشطة الأخيرة",
    activities: [
      {
        title: "اكتمال وحدة خدمة العملاء",
        time: "قبل ساعتين"
      },
      {
        title: "تم تقديم التقرير الأسبوعي",
        time: "قبل 5 ساعات"
      },
      {
        title: "بدء دورة تدريبية جديدة",
        time: "أمس"
      },
      {
        title: "اكتمال تدريب السلامة",
        time: "قبل يومين"
      },
      {
        title: "تحديث المعلومات الشخصية",
        time: "قبل 3 أيام"
      }
    ]
  },
  upcomingSessions: {
    title: "الجلسات القادمة",
    sessions: [
      {
        title: "تدريب عمليات مكتب الاستقبال",
        type: "تدريب",
        date: "اليوم",
        time: "10:00 ص - 11:30 ص",
        instructor: "جون سميث",
        location: "قاعة التدريب أ",
        status: "قادم"
      },
      {
        title: "ورشة عمل التميز في خدمة العملاء",
        type: "ورشة عمل",
        date: "غداً",
        time: "2:30 م - 4:00 م",
        instructor: "سارة جونسون",
        location: "قاعة المؤتمرات ب",
        status: "قادم"
      },
      {
        title: "تدريب برنامج إدارة الفنادق",
        type: "تقن��",
        date: "الاثنين القادم",
        time: "9:00 ص - 12:00 م",
        instructor: "مايك ويلسون",
        location: "معمل الحاسوب",
        status: "مجدول"
      }
    ]
  }
};

export function DashboardTabArabic() {
  return (
    <div className="grid gap-6" dir="rtl">
      {/* First row of cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Total Progress Card */}
        <Card className="bg-white rounded-xl shadow-sm col-span-1">
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className={cx(
                  "text-gray-600 mb-1",
                  getArabicTextClass('ar', 'base')
                )}>
                  {arabicContent.totalProgress.title}
                </p>
                <h2 className="text-4xl font-bold">856</h2>
              </div>
              <div className="bg-blue-100 p-2 rounded-lg">
                <UserCircle className="h-6 w-6 text-[#0047CC]" />
              </div>
            </div>
            <div className="space-y-2">
              <p className={cx(
                "text-sm text-gray-600",
                getArabicTextClass('ar', 'sm')
              )}>
                {arabicContent.totalProgress.subtitle}
              </p>
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div className="w-[65%] h-2 bg-[#0047CC] rounded-full"></div>
              </div>
              <div className="flex justify-between text-sm">
                <span className={cx(
                  "text-gray-600",
                  getArabicTextClass('ar', 'sm')
                )}>
                  {arabicContent.totalProgress.progress}
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
                <p className={cx(
                  "text-gray-600 mb-1",
                  getArabicTextClass('ar', 'base')
                )}>
                  {arabicContent.traineeDetails.title}
                </p>
                <h2 className={cx(
                  "text-xl font-bold",
                  getArabicTextClass('ar', 'lg')
                )}>
                  {arabicContent.traineeDetails.program}
                </h2>
              </div>
              <div className="bg-purple-100 p-2 rounded-lg">
                <GraduationCap className="h-6 w-6 text-purple-600" />
              </div>
            </div>
            <div className="space-y-3">
              {[
                { label: arabicContent.traineeDetails.department, value: arabicContent.traineeDetails.departmentValue },
                { label: arabicContent.traineeDetails.trainer, value: arabicContent.traineeDetails.trainerName },
                { label: arabicContent.traineeDetails.batch, value: arabicContent.traineeDetails.batchValue },
                { label: arabicContent.traineeDetails.period, value: arabicContent.traineeDetails.periodValue }
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className={cx(
                    "text-sm text-gray-600",
                    getArabicTextClass('ar', 'sm')
                  )}>{item.label}</span>
                  <span className={cx(
                    "text-sm font-medium",
                    getArabicTextClass('ar', 'sm')
                  )}>{item.value}</span>
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
            <CardTitle className={cx(
              "text-lg font-semibold",
              getArabicTextClass('ar', 'lg')
            )}>
              {arabicContent.recentActivities.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 overflow-auto custom-scrollbar py-2">
            <div className="space-y-2">
              {arabicContent.recentActivities.activities.map((activity, i) => (
                <div key={i} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-3.5 w-3.5 text-blue-600" />
                  </div>
                  <div>
                    <p className={cx(
                      "font-medium text-gray-800 text-sm",
                      getArabicTextClass('ar', 'sm')
                    )}>{activity.title}</p>
                    <p className={cx(
                      "text-xs text-gray-500",
                      getArabicTextClass('ar', 'sm')
                    )}>{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Sessions Card */}
        <Card className="bg-white rounded-xl shadow-sm h-[400px] flex flex-col">
          <CardHeader className="border-b border-gray-100 py-4">
            <CardTitle className={cx(
              "text-lg font-semibold",
              getArabicTextClass('ar', 'lg')
            )}>
              {arabicContent.upcomingSessions.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 overflow-auto custom-scrollbar py-2">
            <div className="space-y-2">
              {arabicContent.upcomingSessions.sessions.map((session, index) => (
                <div key={index} className="p-3 border border-gray-100 rounded-lg hover:border-blue-100 hover:bg-blue-50/50 transition-colors">
                  <div className="flex justify-between items-start mb-1.5">
                    <div>
                      <h4 className={cx(
                        "font-medium text-gray-800 text-sm",
                        getArabicTextClass('ar', 'sm')
                      )}>{session.title}</h4>
                      <p className={cx(
                        "text-xs text-gray-500",
                        getArabicTextClass('ar', 'sm')
                      )}>{session.type}</p>
                    </div>
                    <span className={cx(
                      "text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-600",
                      getArabicTextClass('ar', 'sm')
                    )}>
                      {session.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-2 text-xs">
                    <div className={cx(
                      "flex items-center gap-1.5 text-gray-600",
                      getArabicTextClass('ar', 'sm')
                    )}>
                      <Clock className="h-3.5 w-3.5" />
                      <span>{session.time}</span>
                    </div>
                    <div className={cx(
                      "flex items-center gap-1.5 text-gray-600",
                      getArabicTextClass('ar', 'sm')
                    )}>
                      <UserCircle className="h-3.5 w-3.5" />
                      <span>{session.date}</span>
                    </div>
                    <div className={cx(
                      "flex items-center gap-1.5 text-gray-600",
                      getArabicTextClass('ar', 'sm')
                    )}>
                      <UserCircle className="h-3.5 w-3.5" />
                      <span>{session.instructor}</span>
                    </div>
                    <div className={cx(
                      "flex items-center gap-1.5 text-gray-600",
                      getArabicTextClass('ar', 'sm')
                    )}>
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