import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: "What is the eligibility to apply for Tourism and Hospitality Management courses?",
    answer: "A high school diploma or equivalent is required, with some programs needing entrance exams or interviews.",
  },
  {
    question: "What types of courses are offered in Tourism and Hospitality Management?",
    answer: "Courses include Hotel Management, Event Planning, Travel Management, Tourism Marketing, and Hospitality Operations."
  },
  {
    question: "Are there any online programs available?",
    answer: "Yes, many institutions offer online programs in tourism and hospitality management for flexibility."
  },
  {
    question: "What are the job prospects for graduates in Tourism and Hospitality Management?",
    answer: "Graduates can find employment in hotels, resorts, travel agencies, event planning companies, and more."
  },
  {
    question: "Do I need any prior experience in tourism or hospitality?",
    answer: "No prior experience is typically needed, though a passion for customer service and travel is beneficial."
  },
  {
    question: "What skills are essential for success in tourism and hospitality?",
    answer: "Key skills include communication, problem-solving, cultural awareness, and customer service."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white py-4 rounded-lg shadow-md">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4 max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg hover:shadow-md transition-shadow">
            <button
              className="w-full p-4 text-left flex justify-between items-center"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-medium text-blue-800">{faq.question}</span>
              <ChevronDown className={`transform transition-transform text-blue-600 ${
                openIndex === index ? 'rotate-180' : ''
              }`} />
            </button>
            {openIndex === index && (
              <div className="p-4 pt-0 text-gray-600 bg-purple-50">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 