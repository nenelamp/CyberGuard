import React, { useState } from 'react';
import { Clock, BookOpen, CheckCircle, XCircle, ArrowRight, ArrowLeft, Award, Target, Play, Star, Trophy } from 'lucide-react';

interface TrainingModuleProps {
  onNavigate: (view: string) => void;
}

const TrainingModule: React.FC<TrainingModuleProps> = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: string}>({});
  const [showResults, setShowResults] = useState(false);
  const [moduleComplete, setModuleComplete] = useState(false);

  const trainingContent = {
    title: 'Phishing Awareness: Protect Yourself and Your Organization',
    duration: '4 minutes',
    slides: [
      {
        type: 'introduction',
        title: 'What is Phishing?',
        content: 'Phishing is a cybercrime where attackers impersonate legitimate organizations to steal sensitive information like passwords, credit card numbers, or personal data.',
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=center',
        keyPoints: [
          'Attackers disguise themselves as trustworthy entities',
          'Common targets: login credentials, financial info, personal data',
          '91% of cyber attacks start with a phishing email'
        ]
      },
      {
        type: 'content',
        title: 'Common Phishing Techniques',
        content: 'Cybercriminals use various methods to trick users into revealing sensitive information.',
        techniques: [
          {
            name: 'Email Phishing',
            description: 'Fraudulent emails that appear to be from legitimate sources',
            example: 'Fake bank emails asking you to verify account details'
          },
          {
            name: 'Spear Phishing',
            description: 'Targeted attacks aimed at specific individuals or organizations',
            example: 'Personalized emails using your name and company information'
          },
          {
            name: 'Smishing (SMS)',
            description: 'Phishing attacks via text messages',
            example: 'Texts claiming your package delivery needs verification'
          },
          {
            name: 'Vishing (Voice)',
            description: 'Phone calls from fake representatives',
            example: 'Calls claiming to be from your bank asking for PIN verification'
          }
        ]
      },
      {
        type: 'interactive',
        title: 'Spot the Red Flags',
        content: 'Learn to identify common warning signs in suspicious emails:',
        redFlags: [
          { flag: 'Urgent language', description: 'Phrases like "Act now!" or "Limited time offer!"' },
          { flag: 'Generic greetings', description: '"Dear Customer" instead of your actual name' },
          { flag: 'Suspicious links', description: 'URLs that don\'t match the claimed sender' },
          { flag: 'Grammar mistakes', description: 'Poor spelling and grammar in professional emails' },
          { flag: 'Unexpected attachments', description: 'Files you weren\'t expecting to receive' },
          { flag: 'Requests for sensitive info', description: 'Asking for passwords, SSN, or financial details' }
        ]
      },
      {
        type: 'quiz',
        title: 'Knowledge Check',
        question: 'You receive an email from your "bank" requesting immediate verification of your account. The email has your correct name but asks you to click a link to update your password. What should you do?',
        options: [
          'Click the link immediately to secure your account',
          'Forward the email to colleagues to warn them',
          'Delete the email and contact your bank directly using their official website or phone number',
          'Reply to the email asking for more information'
        ],
        correct: 2,
        explanation: 'Always verify suspicious requests through official channels. Banks never ask for sensitive information via email.'
      },
      {
        type: 'scenario',
        title: 'Real-World Scenario',
        content: 'You\'re working late and receive an urgent email from your "CEO" asking you to immediately wire transfer funds to a vendor for an emergency purchase. The email looks legitimate and mentions a recent company meeting.',
        choices: [
          {
            text: 'Process the transfer immediately to help the CEO',
            outcome: 'Wrong! This is a classic CEO fraud scam. Always verify unusual requests through a separate communication channel.',
            correct: false
          },
          {
            text: 'Call or text the CEO directly to confirm the request',
            outcome: 'Correct! Always verify unusual requests, especially involving money or sensitive data, through a separate communication channel.',
            correct: true
          },
          {
            text: 'Ask for more details via email reply',
            outcome: 'Not ideal. Email replies can be intercepted. Use a separate communication method to verify.',
            correct: false
          }
        ]
      },
      {
        type: 'tips',
        title: 'Best Practices for Prevention',
        content: 'Follow these guidelines to protect yourself and your organization:',
        tips: [
          {
            category: 'Email Safety',
            practices: [
              'Verify sender identity through separate channels',
              'Don\'t click suspicious links or download unexpected attachments',
              'Check email addresses carefully for subtle misspellings',
              'Use email filters and security software'
            ]
          },
          {
            category: 'Web Browsing',
            practices: [
              'Type URLs directly instead of clicking links',
              'Look for HTTPS and valid security certificates',
              'Be cautious with public Wi-Fi for sensitive activities',
              'Keep browsers and plugins updated'
            ]
          },
          {
            category: 'General Security',
            practices: [
              'Use strong, unique passwords with a password manager',
              'Enable two-factor authentication when available',
              'Regular security awareness training',
              'Report suspicious emails to IT security team'
            ]
          }
        ]
      }
    ]
  };

  const handleAnswerSelect = (questionIndex: number, answer: string) => {
    setSelectedAnswers({ ...selectedAnswers, [questionIndex]: answer });
  };

  const handleQuizSubmit = () => {
    setShowResults(true);
  };

  const handleNext = () => {
    if (currentSlide < trainingContent.slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
      setShowResults(false);
    } else {
      setModuleComplete(true);
    }
  };

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      setShowResults(false);
    }
  };

  const renderSlideContent = () => {
    const slide = trainingContent.slides[currentSlide];

    switch (slide.type) {
      case 'introduction':
        return (
          <div className="space-y-8">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img 
                src={slide.image} 
                alt="Phishing concept" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed font-medium">{slide.content}</p>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl border border-blue-100">
              <h4 className="font-bold text-blue-900 mb-6 text-lg flex items-center">
                <Star className="h-6 w-6 mr-3 text-blue-600" />
                Key Points:
              </h4>
              <ul className="space-y-4">
                {slide.keyPoints?.map((point, index) => (
                  <li key={index} className="flex items-start group">
                    <div className="bg-blue-500 p-2 rounded-xl shadow-lg mr-4 group-hover:scale-110 transition-transform duration-200">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-blue-800 font-medium leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );

      case 'content':
        return (
          <div className="space-y-8">
            <p className="text-xl text-gray-700 leading-relaxed font-medium">{slide.content}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {slide.techniques?.map((technique, index) => (
                <div key={index} className="card-elevated p-8 group hover:scale-105 transition-all duration-300">
                  <div className="bg-gradient-to-r from-red-500 to-pink-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                    <Target className="h-7 w-7 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">{technique.name}</h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">{technique.description}</p>
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-2xl border-l-4 border-orange-400">
                    <p className="text-sm text-orange-800 font-medium">
                      <strong className="text-orange-900">Example:</strong> {technique.example}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'interactive':
        return (
          <div className="space-y-8">
            <p className="text-xl text-gray-700 leading-relaxed font-medium">{slide.content}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {slide.redFlags?.map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-100 rounded-3xl p-6 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-start">
                    <div className="bg-gradient-to-r from-red-500 to-pink-500 p-3 rounded-2xl shadow-lg mr-4 group-hover:scale-110 transition-transform duration-200">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-red-900 mb-2 text-lg">{item.flag}</h4>
                      <p className="text-red-700 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'quiz':
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 border-2 border-yellow-200 rounded-3xl p-8">
              <h4 className="font-bold text-yellow-900 mb-4 text-lg flex items-center">
                <Trophy className="h-6 w-6 mr-3 text-yellow-600" />
                Knowledge Check:
              </h4>
              <p className="text-yellow-800 text-lg leading-relaxed">{slide.question}</p>
            </div>
            
            <div className="space-y-4">
              {slide.options?.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(currentSlide, index.toString())}
                  className={`w-full text-left p-6 border-2 rounded-3xl transition-all duration-300 transform hover:scale-102 ${
                    selectedAnswers[currentSlide] === index.toString()
                      ? 'border-blue-500 bg-gradient-to-r from-blue-50 to-indigo-50 shadow-lg'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50 hover:shadow-md'
                  }`}
                >
                  <span className="flex items-center">
                    <span className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl w-10 h-10 flex items-center justify-center text-lg font-bold mr-4">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="text-lg">{option}</span>
                  </span>
                </button>
              ))}
            </div>

            {selectedAnswers[currentSlide] && !showResults && (
              <button
                onClick={handleQuizSubmit}
                className="btn-primary text-lg"
              >
                Submit Answer
              </button>
            )}

            {showResults && (
              <div className={`p-6 rounded-3xl border-2 ${
                parseInt(selectedAnswers[currentSlide]) === slide.correct
                  ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-200'
                  : 'bg-gradient-to-br from-red-50 to-pink-50 border-red-200'
              }`}>
                <div className="flex items-center mb-4">
                  {parseInt(selectedAnswers[currentSlide]) === slide.correct ? (
                    <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
                  ) : (
                    <XCircle className="h-8 w-8 text-red-600 mr-3" />
                  )}
                  <span className={`font-bold text-xl ${
                    parseInt(selectedAnswers[currentSlide]) === slide.correct
                      ? 'text-green-900'
                      : 'text-red-900'
                  }`}>
                    {parseInt(selectedAnswers[currentSlide]) === slide.correct ? 'Excellent!' : 'Not quite right'}
                  </span>
                </div>
                <p className={`text-lg leading-relaxed ${
                  parseInt(selectedAnswers[currentSlide]) === slide.correct
                    ? 'text-green-800'
                    : 'text-red-800'
                }`}>
                  {slide.explanation}
                </p>
              </div>
            )}
          </div>
        );

      case 'scenario':
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 border-2 border-purple-200 rounded-3xl p-8">
              <h4 className="font-bold text-purple-900 mb-4 text-lg flex items-center">
                <Play className="h-6 w-6 mr-3 text-purple-600" />
                Real-World Scenario:
              </h4>
              <p className="text-purple-800 text-lg leading-relaxed">{slide.content}</p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-bold text-gray-900 text-xl">What would you do?</h4>
              {slide.choices?.map((choice, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(currentSlide, index.toString())}
                  className={`w-full text-left p-6 border-2 rounded-3xl transition-all duration-300 transform hover:scale-102 ${
                    selectedAnswers[currentSlide] === index.toString()
                      ? 'border-purple-500 bg-gradient-to-r from-purple-50 to-violet-50 shadow-lg'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50 hover:shadow-md'
                  }`}
                >
                  <span className="text-lg">{choice.text}</span>
                </button>
              ))}
            </div>

            {selectedAnswers[currentSlide] && (
              <div className={`p-6 rounded-3xl border-2 ${
                slide.choices?.[parseInt(selectedAnswers[currentSlide])]?.correct
                  ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-200'
                  : 'bg-gradient-to-br from-red-50 to-pink-50 border-red-200'
              }`}>
                <div className="flex items-center mb-4">
                  {slide.choices?.[parseInt(selectedAnswers[currentSlide])]?.correct ? (
                    <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
                  ) : (
                    <XCircle className="h-8 w-8 text-red-600 mr-3" />
                  )}
                  <span className={`font-bold text-xl ${
                    slide.choices?.[parseInt(selectedAnswers[currentSlide])]?.correct
                      ? 'text-green-900'
                      : 'text-red-900'
                  }`}>
                    {slide.choices?.[parseInt(selectedAnswers[currentSlide])]?.correct ? 'Perfect choice!' : 'Let\'s think about this...'}
                  </span>
                </div>
                <p className={`text-lg leading-relaxed ${
                  slide.choices?.[parseInt(selectedAnswers[currentSlide])]?.correct
                    ? 'text-green-800'
                    : 'text-red-800'
                }`}>
                  {slide.choices?.[parseInt(selectedAnswers[currentSlide])]?.outcome}
                </p>
              </div>
            )}
          </div>
        );

      case 'tips':
        return (
          <div className="space-y-8">
            <p className="text-xl text-gray-700 leading-relaxed font-medium">{slide.content}</p>
            <div className="space-y-6">
              {slide.tips?.map((category, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-3xl p-8">
                  <h4 className="font-bold text-green-900 mb-6 text-xl flex items-center">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-2 rounded-xl mr-3">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    {category.category}
                  </h4>
                  <ul className="space-y-3">
                    {category.practices.map((practice, practiceIndex) => (
                      <li key={practiceIndex} className="flex items-start group">
                        <div className="bg-green-500 p-2 rounded-xl shadow-lg mr-4 group-hover:scale-110 transition-transform duration-200">
                          <CheckCircle className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-green-800 font-medium leading-relaxed">{practice}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (moduleComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-elevated p-12 text-center">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
              <Award className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Outstanding Work!</h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              You've successfully completed the Phishing Awareness training module and demonstrated excellent security knowledge.
            </p>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-3xl p-8 mb-8">
              <h3 className="font-bold text-blue-900 mb-6 text-xl">Congratulations! You've earned:</h3>
              <div className="flex items-center justify-center space-x-8">
                <div className="text-center group">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <Award className="h-10 w-10 text-white" />
                  </div>
                  <p className="text-blue-800 font-bold text-lg">Phishing Detective</p>
                  <p className="text-blue-600 text-sm">Security Badge</p>
                </div>
                <div className="text-center group">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-2xl">+50</span>
                  </div>
                  <p className="text-orange-800 font-bold text-lg">Security Points</p>
                  <p className="text-orange-600 text-sm">Experience Gained</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => onNavigate('employee')}
                className="btn-primary text-lg"
              >
                Return to Dashboard
              </button>
              <button
                onClick={() => onNavigate('training')}
                className="btn-secondary text-lg"
              >
                Next Training Module
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="card-elevated p-8 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{trainingContent.title}</h1>
              <div className="flex items-center space-x-6 text-gray-600">
                <span className="flex items-center bg-blue-100 px-4 py-2 rounded-2xl">
                  <Clock className="h-5 w-5 mr-2 text-blue-600" />
                  <span className="font-medium">{trainingContent.duration}</span>
                </span>
                <span className="flex items-center bg-green-100 px-4 py-2 rounded-2xl">
                  <BookOpen className="h-5 w-5 mr-2 text-green-600" />
                  <span className="font-medium">{trainingContent.slides.length} sections</span>
                </span>
              </div>
            </div>
            <button
              onClick={() => onNavigate('employee')}
              className="btn-secondary"
            >
              Exit Training
            </button>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-8">
            <div className="flex justify-between text-lg text-gray-600 mb-4">
              <span className="font-medium">Progress</span>
              <span className="font-bold">{currentSlide + 1} of {trainingContent.slides.length}</span>
            </div>
            <div className="progress-modern h-4">
              <div 
                className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-500 ease-out shadow-lg"
                style={{ width: `${((currentSlide + 1) / trainingContent.slides.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="card-elevated p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            {trainingContent.slides[currentSlide].title}
          </h2>
          
          {renderSlideContent()}

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t-2 border-gray-100">
            <button
              onClick={handlePrevious}
              disabled={currentSlide === 0}
              className={`flex items-center px-6 py-3 rounded-2xl font-medium text-lg transition-all duration-200 ${
                currentSlide === 0
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 hover:shadow-md transform hover:scale-105'
              }`}
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Previous
            </button>

            <div className="flex space-x-3">
              {trainingContent.slides.map((_, index) => (
                <div
                  key={index}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-500 scale-125 shadow-lg' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                ></div>
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={
                (trainingContent.slides[currentSlide].type === 'quiz' && !showResults) ||
                (trainingContent.slides[currentSlide].type === 'scenario' && !selectedAnswers[currentSlide])
              }
              className={`flex items-center px-6 py-3 rounded-2xl font-medium text-lg transition-all duration-200 ${
                (trainingContent.slides[currentSlide].type === 'quiz' && !showResults) ||
                (trainingContent.slides[currentSlide].type === 'scenario' && !selectedAnswers[currentSlide])
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'btn-primary'
              }`}
            >
              {currentSlide === trainingContent.slides.length - 1 ? 'Complete Training' : 'Continue'}
              <ArrowRight className="h-5 w-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingModule;