import React, { useState } from 'react';
import { Clock, BookOpen, CheckCircle, XCircle, ArrowRight, ArrowLeft, Award, Shield, Smartphone, Key, Lock, QrCode } from 'lucide-react';

interface MFAModuleProps {
  onComplete: () => void;
  onExit: () => void;
}

const MFAModule: React.FC<MFAModuleProps> = ({ onComplete, onExit }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: string}>({});
  const [showResults, setShowResults] = useState(false);

  const trainingContent = {
    title: 'Multi-Factor Authentication: Adding Extra Security Layers',
    duration: '3 minutes',
    slides: [
      {
        type: 'introduction',
        title: 'What is Multi-Factor Authentication?',
        content: 'Multi-Factor Authentication (MFA) adds an extra layer of security by requiring two or more verification factors to gain access to an account. It significantly reduces the risk of unauthorized access.',
        image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=400&h=300&fit=crop&crop=center',
        keyPoints: [
          'Blocks 99.9% of automated attacks',
          'Required by most compliance frameworks',
          'Simple to set up and use daily'
        ]
      },
      {
        type: 'content',
        title: 'The Three Authentication Factors',
        content: 'MFA combines multiple types of authentication factors for maximum security.',
        factors: [
          {
            name: 'Something You Know',
            description: 'Knowledge factors like passwords or PINs',
            examples: ['Passwords', 'Security questions', 'PIN codes'],
            icon: Key
          },
          {
            name: 'Something You Have',
            description: 'Possession factors like phones or tokens',
            examples: ['Smartphone apps', 'Hardware tokens', 'Smart cards'],
            icon: Smartphone
          },
          {
            name: 'Something You Are',
            description: 'Inherence factors based on biometrics',
            examples: ['Fingerprints', 'Face recognition', 'Voice patterns'],
            icon: Shield
          }
        ]
      },
      {
        type: 'interactive',
        title: 'MFA Methods Comparison',
        content: 'Different MFA methods offer varying levels of security and convenience:',
        methods: [
          { 
            method: 'SMS Text Messages', 
            security: 'Low', 
            convenience: 'High', 
            description: 'Codes sent via text message',
            pros: ['Easy to use', 'Works on any phone'],
            cons: ['Vulnerable to SIM swapping', 'Requires cell service']
          },
          { 
            method: 'Authenticator Apps', 
            security: 'High', 
            convenience: 'High', 
            description: 'Time-based codes from mobile apps',
            pros: ['Works offline', 'Very secure', 'Free to use'],
            cons: ['Requires smartphone', 'Can lose access if phone is lost']
          },
          { 
            method: 'Hardware Tokens', 
            security: 'Very High', 
            convenience: 'Medium', 
            description: 'Physical devices that generate codes',
            pros: ['Extremely secure', 'No phone required'],
            cons: ['Can be lost', 'Additional cost']
          },
          { 
            method: 'Biometric Authentication', 
            security: 'High', 
            convenience: 'Very High', 
            description: 'Fingerprint, face, or voice recognition',
            pros: ['Very convenient', 'Hard to replicate'],
            cons: ['Requires compatible hardware', 'Privacy concerns']
          }
        ]
      },
      {
        type: 'quiz',
        title: 'MFA Knowledge Check',
        question: 'Your company requires MFA for all accounts. Which combination provides the strongest security?',
        options: [
          'Password + SMS text message',
          'Password + authenticator app + fingerprint',
          'Password + security questions',
          'Password + authenticator app'
        ],
        correct: 1,
        explanation: 'Using three different factor types (knowledge + possession + inherence) provides the strongest security. This combines something you know, have, and are.'
      },
      {
        type: 'scenario',
        title: 'MFA Setup Decision',
        content: 'Your organization is implementing MFA for all email accounts. As the IT administrator, you need to choose the best method for 200 employees with varying technical skills. What would you recommend?',
        choices: [
          {
            text: 'SMS text messages for simplicity',
            outcome: 'Not the best choice. While simple, SMS is vulnerable to attacks and not recommended for business use.',
            correct: false
          },
          {
            text: 'Authenticator apps with backup codes',
            outcome: 'Excellent choice! Authenticator apps are secure, user-friendly, and backup codes ensure access recovery.',
            correct: true
          },
          {
            text: 'Hardware tokens for everyone',
            outcome: 'Very secure but expensive and may be overkill for most users. Better for high-privilege accounts.',
            correct: false
          }
        ]
      },
      {
        type: 'tips',
        title: 'MFA Best Practices',
        content: 'Follow these guidelines to implement and use MFA effectively:',
        tips: [
          {
            category: 'Setup and Configuration',
            practices: [
              'Enable MFA on all critical accounts (email, banking, work)',
              'Use authenticator apps instead of SMS when possible',
              'Set up backup authentication methods',
              'Store backup codes in a secure location'
            ]
          },
          {
            category: 'Daily Usage',
            practices: [
              'Keep your authentication device secure and updated',
              'Don\'t share MFA codes with anyone',
              'Report lost or stolen devices immediately',
              'Regularly review and update MFA settings'
            ]
          },
          {
            category: 'Organizational Implementation',
            practices: [
              'Provide clear setup instructions and training',
              'Offer multiple MFA options for different user needs',
              'Have a process for account recovery',
              'Monitor and audit MFA usage regularly'
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

  const getSecurityColor = (level: string) => {
    switch (level) {
      case 'Very High': return 'bg-green-100 text-green-800';
      case 'High': return 'bg-blue-100 text-blue-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
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
                alt="Multi-Factor Authentication" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed font-medium">{slide.content}</p>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-3xl border border-green-100">
              <h4 className="font-bold text-green-900 mb-6 text-lg flex items-center">
                <Shield className="h-6 w-6 mr-3 text-green-600" />
                MFA Benefits:
              </h4>
              <ul className="space-y-4">
                {slide.keyPoints?.map((point, index) => (
                  <li key={index} className="flex items-start group">
                    <div className="bg-green-500 p-2 rounded-xl shadow-lg mr-4 group-hover:scale-110 transition-transform duration-200">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-green-800 font-medium leading-relaxed">{point}</span>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {slide.factors?.map((factor, index) => {
                const Icon = factor.icon;
                return (
                  <div key={index} className="card-elevated p-8 group hover:scale-105 transition-all duration-300">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-3 text-lg">{factor.name}</h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">{factor.description}</p>
                    <div className="space-y-2">
                      {factor.examples.map((example, exampleIndex) => (
                        <span key={exampleIndex} className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-2 rounded-xl mr-2 font-medium">
                          {example}
                        </span>
                      ))}
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
              {slide.methods?.map((method, index) => (
                <div key={index} className="card-elevated p-8 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-bold text-gray-900 text-lg">{method.method}</h4>
                    <div className="flex space-x-2">
                      <span className={`px-3 py-1 rounded-xl text-sm font-bold ${getSecurityColor(method.security)}`}>
                        {method.security} Security
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{method.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-bold text-green-900 mb-2 text-sm">Pros:</h5>
                      <ul className="space-y-1">
                        {method.pros.map((pro, proIndex) => (
                          <li key={proIndex} className="flex items-center text-sm text-green-700">
                            <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-bold text-red-900 mb-2 text-sm">Cons:</h5>
                      <ul className="space-y-1">
                        {method.cons.map((con, conIndex) => (
                          <li key={conIndex} className="flex items-center text-sm text-red-700">
                            <XCircle className="h-4 w-4 mr-2 text-red-500" />
                            {con}
                          </li>
                        ))}
                      </ul>
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
                <Lock className="h-6 w-6 mr-3 text-blue-600" />
                Security Assessment:
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
                <QrCode className="h-6 w-6 mr-3 text-purple-600" />
                Implementation Scenario:
              </h4>
              <p className="text-purple-800 text-lg leading-relaxed">{slide.content}</p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-bold text-gray-900 text-xl">What would you recommend?</h4>
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
                      <Shield className="h-6 w-6 text-white" />
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

export default MFAModule;