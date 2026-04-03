import React, { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('greeting');
  const [animateElements, setAnimateElements] = useState(false);

  useEffect(() => {
    setAnimateElements(true);
  }, []);

  const greetings = [
    { arabic: 'السلام عليكم', english: 'Assalamu Alaikum', meaning: 'Peace be upon you' },
    { arabic: 'كيف حالك', english: 'Kaifa Halak', meaning: 'How are you?' },
    { arabic: 'صباح الخير', english: 'Sabah Al-Khair', meaning: 'Good morning' },
    { arabic: 'مساء الخير', english: 'Masaa Al-Khair', meaning: 'Good evening' },
  ];

  const messages = [
    'May Allah bless you with happiness and good health',
    'May your days be filled with peace and tranquility',
    'May Allah grant you wisdom and strength',
    'May you always be guided on the right path',
    'May your life be filled with joy and contentment',
  ];

  const islamicQuotes = [
    { quote: 'Indeed, with hardship comes ease', reference: 'Quran 94:5' },
    { quote: 'The best of you are those who are best to their families', reference: 'Hadith' },
    { quote: 'Kindness is a mark of faith', reference: 'Hadith' },
    { quote: 'A good word is like a good tree', reference: 'Quran 14:24' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-emerald-50 to-blue-50 font-serif overflow-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="relative pt-12 pb-8 text-center">
        <div className={`transform transition-all duration-1000 ${animateElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-emerald-700 via-blue-700 to-emerald-700 bg-clip-text text-transparent mb-2">
            السلام عليكم
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light">Assalamu Alaikum</p>
          <div className="mt-6 flex justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <div 
                key={i}
                className="w-2 h-2 rounded-full bg-emerald-500"
                style={{
                  animation: 'pulse 2s ease-in-out infinite',
                  animationDelay: `${i * 100}ms`
                }}
              ></div>
            ))}
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="relative flex justify-center gap-4 px-4 mb-12 flex-wrap">
        {['greeting', 'messages', 'quotes', 'about'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 capitalize ${
              activeTab === tab
                ? 'bg-emerald-600 text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>

      {/* Content Area */}
      <main className="relative max-w-4xl mx-auto px-4 pb-16">
        {/* Greeting Tab */}
        {activeTab === 'greeting' && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Islamic Greetings</h2>
              <p className="text-gray-600 text-lg">Share the beauty of Islamic expressions</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {greetings.map((greeting, idx) => (
                <div
                  key={idx}
                  className="group cursor-pointer"
                  style={{
                    animation: animateElements ? `slideUp 0.6s ease-out forwards` : 'none',
                    animationDelay: `${idx * 100}ms`,
                    opacity: 0,
                  }}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-emerald-100 hover:border-emerald-300">
                    <div className="text-5xl md:text-6xl font-bold text-emerald-600 mb-4" style={{fontFamily: "'Amiri', serif"}}>
                      {greeting.arabic}
                    </div>
                    <div className="text-2xl font-semibold text-gray-800 mb-2">
                      {greeting.english}
                    </div>
                    <p className="text-gray-600 text-lg italic">"{greeting.meaning}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Messages Tab */}
        {activeTab === 'messages' && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Heartfelt Wishes</h2>
              <p className="text-gray-600 text-lg">May these wishes bring you comfort and joy</p>
            </div>

            <div className="space-y-6">
              {messages.map((message, idx) => (
                <div
                  key={idx}
                  className="group"
                  style={{
                    animation: animateElements ? `slideIn 0.6s ease-out forwards` : 'none',
                    animationDelay: `${idx * 150}ms`,
                    opacity: 0,
                  }}
                >
                  <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-8 border-l-4 border-emerald-500 hover:shadow-lg transition-all duration-300">
                    <div className="flex gap-4">
                      <div className="text-3xl">✨</div>
                      <p className="text-xl text-gray-800 leading-relaxed">{message}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Quotes Tab */}
        {activeTab === 'quotes' && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Islamic Wisdom</h2>
              <p className="text-gray-600 text-lg">Words to inspire and guide</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {islamicQuotes.map((item, idx) => (
                <div
                  key={idx}
                  className="group"
                  style={{
                    animation: animateElements ? `slideUp 0.6s ease-out forwards` : 'none',
                    animationDelay: `${idx * 100}ms`,
                    opacity: 0,
                  }}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-300">
                    <div className="text-blue-500 text-5xl mb-4">"</div>
                    <p className="text-2xl font-medium text-gray-800 mb-6 leading-relaxed">{item.quote}</p>
                    <p className="text-gray-500 italic text-lg">— {item.reference}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* About Tab */}
        {activeTab === 'about' && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">About This Greeting</h2>
              <p className="text-gray-600 text-lg">A respectful celebration of Islamic traditions</p>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-emerald-100">
              <div className="space-y-6 text-gray-800 text-lg leading-relaxed">
                <p>
                  This greeting website has been created with respect and appreciation for Islamic traditions and values. It celebrates the beauty of Islamic expressions, wisdom, and the spirit of care and consideration.
                </p>
                
                <p>
                  <strong>Islamic Greetings</strong> are more than just words—they carry deep spiritual meaning and are integral to Muslim culture and communication.
                </p>

                <p>
                  <strong>Islamic Wisdom</strong> offers guidance and inspiration drawn from the Quran and Hadith, providing timeless teachings for living a meaningful life.
                </p>

                <p className="pt-4 text-emerald-700 font-semibold text-xl">
                  May Allah bless you with wisdom, health, and happiness. 🌙
                </p>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="relative mt-20 pt-12 border-t border-gray-200 text-center pb-8">
        <p className="text-gray-600 mb-2">Created with respect for Islamic traditions</p>
        <p className="text-sm text-gray-500">🤝 A greeting of care and consideration</p>
      </footer>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-in {
          animation: fadeIn 0.5s ease-in;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
