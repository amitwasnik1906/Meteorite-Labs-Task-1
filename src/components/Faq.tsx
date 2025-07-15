import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  subtitle?: string;
  items: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ 
  title = "Your questions,", 
  subtitle = "answered",
  items 
}) => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="max-w-6xl mx-auto py-16">
      <div className="flex gap-12">
        {/* Left Title Section */}
        <div className="w-80 flex-shrink-0">
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            {title}
            <br />
            {subtitle}
          </h2>
        </div>

        {/* Right FAQ Items */}
        <div className="flex-1">
          <div className="space-y-6">
            {items.map((item) => (
              <div key={item.id} className="border-b border-gray-200 pb-6">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-center justify-between text-left group"
                >
                  <h3 className="text-gray-900 text-lg pr-4 group-hover:text-gray-700 transition-colors">
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openItems.includes(item.id) ? (
                      <ChevronUp className="w-6 h-6 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-500" />
                    )}
                  </div>
                </button>
                
                {openItems.includes(item.id) && (
                  <div className="mt-4 pr-10">
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Example usage with sample data
const FAQExample = () => {
  const faqData = [
    {
      id: 1,
      question: "How do I access the Guide and Map?",
      answer: "You can sign in using your email address, Facebook, or Google account. The guide page, including the map, is accessible through your mobile or computer browser. Additionally, offline access is available via the Rexby app!"
    },
    {
      id: 2,
      question: "Do I need internet connection?",
      answer: "When you download the Rexby app and purchase my guide, you can access it offline. If you're using a web browser, an internet connection is required."
    },
    {
      id: 3,
      question: "How long will I have access?",
      answer: "Once you buy access, it is forever."
    },
    {
      id: 4,
      question: "Can I share it with my travel buddy?",
      answer: "Yes, you can invite one travel buddy."
    }
  ];

  return <FAQ items={faqData} />;
};

export default FAQExample;