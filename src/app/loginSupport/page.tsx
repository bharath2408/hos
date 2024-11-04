'use client';
import { useState } from 'react';
import { SupportCard } from "@/app/loginSupport/components/help/SupportCard";
import { ChatWindow } from "@/app/loginSupport/components/help/ChatWindow";
import { FAQSection } from "@/app/loginSupport/components/help/FAQSection";
import { MessageCircle } from 'lucide-react';

export default function HelpCenterPage() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen relative bg-gray-50">
      {/* Login Icon */}
      <SupportCard />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How Can We Help You?
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Find answers and support for all your questions
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <FAQSection />
      </div>

      {/* Chat Button */}
      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-10"
        aria-label="Open chat"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Chat Window */}
      {isChatOpen && (
        <ChatWindow 
          onClose={() => setIsChatOpen(false)} 
        />
      )}
    </div>
  );
}