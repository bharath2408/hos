'use client';

import React from 'react';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/app/candidate/components/ui/card";
import { Badge } from "@/app/candidate/components/ui/badge";
import { Button } from "@/app/candidate/components/ui/button";
import { Progress } from "@/app/candidate/components/ui/progress";
import { Textarea } from "@/app/candidate/components/ui/textarea";
import { 
  Award, 
  Download, 
  CheckCircle2, 
  Clock, 
  Star,
  MessageSquare,
  FileCheck,
  ThumbsUp
} from 'lucide-react';
import { getArabicTextClass } from '@/utils/textUtils';

// Add translations
const translations = {
  en: {
    finalAssessment: "Final Assessment Status",
    overallProgress: "Overall Progress",
    completeModules: "Complete all modules to unlock certificate",
    complete: "Complete",
    modulesCompleted: "Modules Completed",
    timeRemaining: "Time Remaining",
    averageScore: "Average Score",
    days: "Days",
    certificate: "Certificate of Completion",
    congratulations: "Congratulations!",
    programComplete: "You have successfully completed the Hospitality Training Program",
    downloadCertificate: "Download Certificate",
    programFeedback: "Program Feedback",
    overallRating: "Overall Rating",
    shareExperience: "Share your experience",
    feedbackPlaceholder: "Tell us about your learning experience...",
    recommend: "Would you recommend this program?",
    yes: "Yes",
    no: "No",
    submitFeedback: "Submit Feedback"
  },
  ar: {
    finalAssessment: "حالة التقييم النهائي",
    overallProgress: "التقدم العام",
    completeModules: "أكمل جميع الوحدات لفتح الشهادة",
    complete: "مكتمل",
    modulesCompleted: "الوحدات المكتملة",
    timeRemaining: "الوقت المتبقي",
    averageScore: "متوسط الدرجات",
    days: "أيام",
    certificate: "شهادة إتمام",
    congratulations: "تهانينا!",
    programComplete: "لقد أكملت بنجاح برنامج التدريب الفندقي",
    downloadCertificate: "تحميل الشهادة",
    programFeedback: "تقييم البرنامج",
    overallRating: "التقييم العام",
    shareExperience: "شاركنا تجربتك",
    feedbackPlaceholder: "أخبرنا عن تجربتك التعليمية...",
    recommend: "هل توصي بهذا البرنامج؟",
    yes: "نعم",
    no: "لا",
    submitFeedback: "إرسال التقييم"
  }
};

export function ProgramCompletionTab({ language = 'en' }: { language?: 'en' | 'ar' }) {
  const [rating, setRating] = useState<number>(0);
  const t = translations[language];

  // Helper function for combining classes
  const cx = (...classes: string[]) => classes.filter(Boolean).join(' ');

  return (
    <div className="space-y-6" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Final Assessment Status */}
      <Card>
        <CardHeader>
          <CardTitle className={cx(
            "flex items-center gap-2",
            getArabicTextClass(language, 'lg')
          )}>
            <FileCheck className="h-5 w-5" />
            {t.finalAssessment}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className={cx(
                  "font-medium",
                  getArabicTextClass(language, 'base')
                )}>{t.overallProgress}</h3>
                <p className={cx(
                  "text-sm text-gray-500",
                  getArabicTextClass(language, 'sm')
                )}>{t.completeModules}</p>
              </div>
              <Badge className={cx(
                "bg-green-100 text-green-800",
                getArabicTextClass(language, 'sm')
              )}>95% {t.complete}</Badge>
            </div>
            
            <Progress value={95} className="h-2" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: t.modulesCompleted, value: "19/20", icon: CheckCircle2, color: "text-green-600" },
                { title: t.timeRemaining, value: `2 ${t.days}`, icon: Clock, color: "text-orange-600" },
                { title: t.averageScore, value: "92%", icon: Award, color: "text-blue-600" }
              ].map((stat, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-lg">
                      <stat.icon className={`h-5 w-5 ${stat.color}`} />
                    </div>
                    <div>
                      <p className={cx(
                        "text-sm text-gray-600",
                        getArabicTextClass(language, 'sm')
                      )}>{stat.title}</p>
                      <p className={cx(
                        "text-lg font-semibold",
                        getArabicTextClass(language, 'base')
                      )}>{stat.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Certificate Download */}
      <Card>
        <CardHeader>
          <CardTitle className={cx(
            "flex items-center gap-2",
            getArabicTextClass(language, 'lg')
          )}>
            <Award className="h-5 w-5" />
            {t.certificate}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 text-center">
            <div className="mb-4">
              <Award className="h-12 w-12 text-blue-600 mx-auto" />
            </div>
            <h3 className={cx(
              "text-lg font-semibold mb-2",
              getArabicTextClass(language, 'lg')
            )}>{t.congratulations}</h3>
            <p className={cx(
              "text-gray-600 mb-4",
              getArabicTextClass(language, 'base')
            )}>{t.programComplete}</p>
            <Button className={cx(
              "bg-blue-600 hover:bg-blue-700",
              getArabicTextClass(language, 'base')
            )}>
              <Download className="h-4 w-4 mr-2" />
              {t.downloadCertificate}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Program Feedback */}
      <Card>
        <CardHeader>
          <CardTitle className={cx(
            "flex items-center gap-2",
            getArabicTextClass(language, 'lg')
          )}>
            <MessageSquare className="h-5 w-5" />
            {t.programFeedback}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Rating Section */}
            <div className="space-y-3">
              <label className={cx(
                "text-sm font-medium text-gray-700",
                getArabicTextClass(language, 'base')
              )}>{t.overallRating}</label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRating(star)}
                    className="text-yellow-400 hover:text-yellow-500 transition-colors"
                  >
                    <Star 
                      className={`h-6 w-6 ${rating >= star ? 'fill-current' : 'fill-none'}`} 
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Written Feedback */}
            <div className="space-y-3">
              <label className={cx(
                "text-sm font-medium text-gray-700",
                getArabicTextClass(language, 'base')
              )}>
                {t.shareExperience}
              </label>
              <Textarea 
                placeholder={t.feedbackPlaceholder}
                className={cx(
                  "min-h-[120px]",
                  getArabicTextClass(language, 'base')
                )}
              />
            </div>

            {/* Recommendation */}
            <div className="space-y-3">
              <label className={cx(
                "text-sm font-medium text-gray-700",
                getArabicTextClass(language, 'base')
              )}>
                {t.recommend}
              </label>
              <div className="flex gap-3">
                <Button variant="outline" className={cx(
                  "flex-1",
                  getArabicTextClass(language, 'base')
                )}>
                  <ThumbsUp className="h-4 w-4 mr-2" />
                  {t.yes}
                </Button>
                <Button variant="outline" className={cx(
                  "flex-1",
                  getArabicTextClass(language, 'base')
                )}>
                  <ThumbsUp className="h-4 w-4 mr-2 rotate-180" />
                  {t.no}
                </Button>
              </div>
            </div>

            <Button className={cx(
              "w-full bg-blue-600 hover:bg-blue-700",
              getArabicTextClass(language, 'base')
            )}>
              {t.submitFeedback}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 