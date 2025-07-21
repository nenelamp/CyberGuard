import React, { useState } from 'react';
import { Clock, BookOpen, CheckCircle, XCircle, ArrowRight, ArrowLeft, Award, Users, Phone, Mail, MessageSquare, AlertTriangle } from 'lucide-react';

interface SocialEngineeringModuleProps {
  onComplete: () => void;
  onExit: () => void;
}

const SocialEngineeringModule: React.FC<SocialEngineeringModuleProps> = ({ onComplete, onExit }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: string}>({});
  const [showResults, setShowResults] = useState(false);

  const trainingContent = {
    title: 'Social Engineering: Recognizing Human-Based Attacks',
    duration: '5 minutes',
    slides: [
      {
        type: 'introduction',
        title: 'What is Social Engineering?',
        content: 'Social engineering is the art of manipulating people to divulge confidential information or perform actions that compromise security. It exploits human psychology rather than technical vulnerabilities.',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop&crop=center',
        keyPoints: [
          '98% of cyber attacks rely on social engineering',
          'Targets human emotions: fear, curiosity, helpfulness',
          'Often the first step in larger cyber attacks'
        ]
      },
      {
        type: 'content',
        title: 'Common Social Engineering Techniques',
        content: 'Attackers use various psychological tactics to manipulate their targets.',
        techniques: [
          {
            name: 'Pretexting',
            description: 'Creating a fabricated scenario to engage victims',
            example: 'Impersonating IT support to request login credentials',
            icon: Users
          },
          {
            name: 'Baiting',
            description: 'Offering something enticing to spark curiosity',
            example: 'Leaving infected USB drives in parking lots',
            icon: AlertTriangle
          },
          {
            name: 'Quid Pro Quo',
            description: 'Offering a service in exchange for information',
            example: 'Free tech support in exchange for remote access',
            icon: Phone
          },
          {
            name: 'Tailgating',
            description: 'Following someone into a restricted area',
            example: 'Following employees through secure doors',
            icon: Users
          }
        ]
      },
      {
        type: 'interactive',
        title: 'Red Flags in Communication',
        content: 'Learn to identify warning signs in suspicious communications:',
        redFlags: [
          { flag: 'Urgency and Pressure', description: 'Creating false deadlines to rush decisions', severity: 'high' },
          { flag: 'Authority Claims', description: 'Impersonating executives or IT personnel', severity: 'high' },
          { flag: 'Emotional Manipulation', description: 'Using fear, sympathy, or excitement', severity: 'medium' },
          { flag: 'Unusual Requests', description: 'Asking for information not normally shared', severity: 'high' },
          { flag: 'Verification Avoidance', description: 'Discouraging you from confirming their identity', severity: 'high' },
          { flag: 'Too Good to Be True', description: 'Offers that seem unrealistic or overly generous', severity: 'medium' }
        ]
      },
      {
        type: 'quiz',
        title: 'Scenario Recognition',
        question: 'You receive a call from someone claiming to be from IT saying there\'s a security breach and they need your password immediately to secure your account. What should you do?',
        options: [
          'Provide the password since it\'s an emergency',
          'Ask for their employee ID and call them back',
          'Hang up and contact IT through official channels',
          'Give them a fake password to test if they\'re legitimate'
        ],
        correct: 2,
        explanation: 'Always verify requests through official channels. Legitimate IT departments never ask for passwords over the phone.'
      },
      {
        type: 'scenario',
        title: 'Physical Social Engineering',
        content: 'You\'re leaving the office building when someone in a delivery uniform approaches you carrying packages. They say they have an urgent delivery for your CEO but the front desk is closed. They ask if you can let them in through the employee entrance.',
        choices: [
          {
            text: 'Help them since they seem legitimate and it\'s for the CEO',
            outcome: 'Dangerous! This is a classic tailgating attempt. Never let unknown individuals into secure areas.',
            correct: false
          },
          {
            text: 'Direct them to wait until morning or contact security',
            outcome: 'Correct! Always follow proper procedures for building access, regardless of the story.',
            correct: true
          },
          {
            text: 'Take the packages and deliver them yourself',
            outcome: 'Not safe! Unknown packages could contain malicious items or tracking devices.',
            correct: false
          }
        ]
      },
      {
        type: 'tips',
        title: 'Defense Against Social Engineering',
        content: 'Protect yourself and your organization with these strategies:',
        tips: [
          {
            category: 'Verification Procedures',
            practices: [
              'Always verify identity through independent channels',
              'Use callback procedures for sensitive requests',
              'Confirm unusual requests with supervisors',
              'Never provide sensitive information over unsolicited calls'
            ]
          },
          {
            category: 'Awareness and Training',
            practices: [
              'Stay informed about current social engineering tactics',
              'Practice skepticism with unsolicited communications',
              'Report suspicious contacts to security teams',
              'Participate in regular security awareness training'
            ]
          },
          {
            category: 'Physical Security',
            practices: [
              'Never let strangers into secure areas',
              'Challenge unfamiliar people in restricted zones',
              'Secure sensitive documents and devices',
              'Be cautious about information visible on screens'
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
      onComplete();
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
                alt="Social Engineering" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed font-medium">{slide.content}</p>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-3xl border border-orange-100">
              <h4 className="font-bold text-orange-900 mb-6 text-lg flex items-center">
                <AlertTriangle className="h-6 w-6 mr-3 text-orange-600" />
                Key Facts:
              </h4>
              <ul className="space-y-4">
                {slide.keyPoints?.map((point, index) => (
                  <li key={index} className="flex items-start group">
                    <div className="bg-orange-500 p-2 rounded-xl shadow-lg mr-4 group-hover:scale-110 transition-transform duration-200">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-orange-800 font-medium leading-relaxed">{point}</span>
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
              {slide.techniques?.map((technique, index) => {
                const Icon = technique.icon;
                return (
                  <div key={index} className="card-elevated p-8 group hover:scale-105 transition-all duration-300">
                    <div className="bg-gradient-to-r from-purple-500 to-violet-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-3 text-lg">{technique.name}</h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">{technique.description}</p>
                    <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-4 rounded-2xl border-l-4 border-purple-400">
                      <p className="text-sm text-purple-800 font-medium">
                        <strong className="text-purple-900">Example:</strong> {technique.example}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );

      case 'interactive':
        return (
          <div className="space-y-8">
            <p className="text-xl text-gray-700 leading-relaxed font-medium">{slide.content}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {slide.redFlags?.map((item, index) => (
                <div key={index} className={`border-2 rounded-3xl p-6 hover:shadow-lg transition-all duration-300 group ${
                  item.severity === 'high' ? 'bg-gradient-to-br from-red-50 to-pink-50 border-red-200' :
                  'bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200'
                }`}>
                  <div className="flex items-start">
                    <div className={`p-3 rounded-2xl shadow-lg mr-4 group-hover:scale-110 transition-transform duration-200 ${
                      item.severity === 'high' ? 'bg-gradient-to-r from-red-500 to-pink-500' :
                      'bg-gradient-to-r from-yellow-500 to-orange-500'
                    }`}>
                      <AlertTriangle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className={`font-bold mb-2 text-lg ${
                        item.severity === 'high' ? 'text-red-900' : 'text-yellow-900'
                      }`}>
                        {item.flag}
                      </h4>
                      <p className={`leading-relaxed ${
                        item.severity === 'high' ? 'text-red-700' : 'text-yellow-700'
                      }`}>
                        {item.description}
                      </p>
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
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-3xl p-8">
              <h4 className="font-bold text-blue-900 mb-4 text-lg flex items-center">
                <Phone className="h-6 w-6 mr-3 text-blue-600" />
                Scenario Test:
              </h4>
              <p className="text-blue-800 text-lg leading-relaxed">{slide.question}</p>
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
                <Users className="h-6 w-6 mr-3 text-purple-600" />
                Physical Security Scenario:
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
              onClick={onExit}
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

export default SocialEngineeringModule;