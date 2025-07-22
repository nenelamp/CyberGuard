import React, { useState } from 'react';
import { Clock, BookOpen, CheckCircle, XCircle, ArrowRight, ArrowLeft, Award, Mail, AlertTriangle, Eye, Shield, Target, Link } from 'lucide-react';

interface PhishingAwarenessModuleProps {
  onComplete: () => void;
  onExit: () => void;
}

const PhishingAwarenessModule: React.FC<PhishingAwarenessModuleProps> = ({ onComplete, onExit }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: string}>({});
  const [showResults, setShowResults] = useState(false);

  const trainingContent = {
    title: 'Phishing Awareness: Recognizing and Avoiding Email Threats',
    duration: '4 minutes',
    slides: [
      {
        type: 'introduction',
        title: 'Understanding Phishing Attacks',
        content: 'Phishing is a cybercrime where attackers impersonate legitimate organizations to steal sensitive information like passwords, credit card numbers, or personal data through deceptive emails, websites, or messages.',
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=center',
        keyPoints: [
          '91% of cyber attacks start with a phishing email',
          'Phishing attempts occur every 30 seconds globally',
          'Average cost of a successful phishing attack is $4.91 million'
        ]
      },
      {
        type: 'content',
        title: 'Types of Phishing Attacks',
        content: 'Phishing attacks come in various forms, each designed to exploit different vulnerabilities and trust relationships.',
        types: [
          {
            name: 'Email Phishing',
            description: 'Mass emails sent to many recipients impersonating trusted brands',
            example: 'Fake bank emails requesting account verification',
            icon: Mail
          },
          {
            name: 'Spear Phishing',
            description: 'Targeted attacks aimed at specific individuals or organizations',
            example: 'Personalized emails using your name and company details',
            icon: Target
          },
          {
            name: 'Whaling',
            description: 'High-value targets like executives and senior management',
            example: 'CEO fraud requesting urgent wire transfers',
            icon: AlertTriangle
          },
          {
            name: 'Clone Phishing',
            description: 'Legitimate emails replicated with malicious links or attachments',
            example: 'Copied newsletters with infected attachments',
            icon: Link
          }
        ]
      },
      {
        type: 'interactive',
        title: 'Phishing Red Flags Checklist',
        content: 'Learn to identify common warning signs in suspicious emails:',
        redFlags: [
          { 
            flag: 'Urgent or Threatening Language', 
            description: 'Creates false sense of urgency to bypass critical thinking',
            example: '"Your account will be closed in 24 hours!"',
            severity: 'high' 
          },
          { 
            flag: 'Generic Greetings', 
            description: 'Uses "Dear Customer" instead of your actual name',
            example: '"Dear Valued Customer" or "Dear Sir/Madam"',
            severity: 'medium' 
          },
          { 
            flag: 'Suspicious Sender Address', 
            description: 'Email address doesn\'t match the claimed organization',
            example: 'paypaI-security@gmail.com (note the capital i)',
            severity: 'high' 
          },
          { 
            flag: 'Unexpected Attachments', 
            description: 'Unsolicited files, especially executables or macros',
            example: 'Invoice.pdf.exe or Document.docm files',
            severity: 'high' 
          },
          { 
            flag: 'Suspicious Links', 
            description: 'URLs that don\'t match the legitimate website',
            example: 'amazon-security.phishing-site.com',
            severity: 'high' 
          },
          { 
            flag: 'Poor Grammar and Spelling', 
            description: 'Professional organizations rarely have obvious errors',
            example: 'Multiple typos and awkward phrasing',
            severity: 'medium' 
          }
        ]
      },
      {
        type: 'quiz',
        title: 'Phishing Email Analysis',
        question: 'You receive an email from "security@paypal.com" saying your account has been compromised and you need to click a link to verify your identity immediately. The link shows "paypal-verification.secure-site.net" when you hover over it. What should you do?',
        options: [
          'Click the link since it\'s from PayPal\'s security team',
          'Forward the email to colleagues to warn them',
          'Delete the email and log into PayPal directly through their official website',
          'Reply to ask for more information about the compromise'
        ],
        correct: 2,
        explanation: 'Never click suspicious links! The URL doesn\'t match PayPal\'s official domain. Always access your accounts directly through the official website or app.'
      },
      {
        type: 'scenario',
        title: 'Real-World Phishing Scenario',
        content: 'You receive an email that appears to be from your company\'s IT department saying there\'s been a security breach and you need to change your password immediately by clicking the provided link. The email includes your name and department, making it seem legitimate.',
        choices: [
          {
            text: 'Click the link since it has my personal information and seems urgent',
            outcome: 'Dangerous! Attackers often gather personal information from social media and company websites to make emails seem legitimate.',
            correct: false
          },
          {
            text: 'Contact IT directly through official channels to verify the request',
            outcome: 'Perfect! Always verify suspicious requests through independent communication channels, even if they seem to come from internal sources.',
            correct: true
          },
          {
            text: 'Change my password using the company\'s normal password reset process',
            outcome: 'Good security practice, but you should also report the suspicious email to IT security to help protect other employees.',
            correct: false
          }
        ]
      },
      {
        type: 'interactive',
        title: 'Email Analysis Exercise',
        content: 'Practice identifying phishing elements in these sample email components:',
        emailSamples: [
          {
            component: 'Subject Line',
            example: 'URGENT: Your Amazon account has been suspended - Verify NOW!',
            issues: ['Creates false urgency', 'Uses threatening language', 'Excessive capitalization'],
            legitimacy: 'Suspicious'
          },
          {
            component: 'Sender Address',
            example: 'security@amazon-customer-service.net',
            issues: ['Not from amazon.com domain', 'Uses deceptive subdomain'],
            legitimacy: 'Fraudulent'
          },
          {
            component: 'Greeting',
            example: 'Dear Amazon Customer,',
            issues: ['Generic greeting', 'No personalization', 'Legitimate companies use your name'],
            legitimacy: 'Suspicious'
          },
          {
            component: 'Call to Action',
            example: 'Click here to verify your account immediately or it will be permanently deleted!',
            issues: ['Threatening consequences', 'Creates false urgency', 'Vague link destination'],
            legitimacy: 'Highly Suspicious'
          }
        ]
      },
      {
        type: 'tips',
        title: 'Phishing Defense Strategies',
        content: 'Implement these practices to protect yourself and your organization from phishing attacks:',
        tips: [
          {
            category: 'Email Security Habits',
            practices: [
              'Verify sender identity through independent channels',
              'Hover over links to check destinations before clicking',
              'Be skeptical of urgent requests for sensitive information',
              'Never download unexpected attachments'
            ]
          },
          {
            category: 'Technical Safeguards',
            practices: [
              'Keep email security software updated',
              'Use multi-factor authentication on all accounts',
              'Enable email filtering and anti-phishing tools',
              'Regularly update browsers and operating systems'
            ]
          },
          {
            category: 'Incident Response',
            practices: [
              'Report suspicious emails to IT security immediately',
              'Don\'t forward phishing emails to colleagues',
              'If you clicked a suspicious link, change passwords immediately',
              'Monitor accounts for unusual activity after incidents'
            ]
          },
          {
            category: 'Organizational Defense',
            practices: [
              'Implement email authentication protocols (SPF, DKIM, DMARC)',
              'Conduct regular phishing simulation training',
              'Establish clear reporting procedures for suspicious emails',
              'Maintain updated contact lists for verification purposes'
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

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getLegitimacyColor = (legitimacy: string) => {
    switch (legitimacy) {
      case 'Fraudulent': return 'bg-red-100 text-red-800';
      case 'Highly Suspicious': return 'bg-orange-100 text-orange-800';
      case 'Suspicious': return 'bg-yellow-100 text-yellow-800';
      case 'Legitimate': return 'bg-green-100 text-green-800';
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
                alt="Phishing Awareness" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed font-medium">{slide.content}</p>
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-3xl border border-red-100">
              <h4 className="font-bold text-red-900 mb-6 text-lg flex items-center">
                <AlertTriangle className="h-6 w-6 mr-3 text-red-600" />
                Phishing Impact Statistics:
              </h4>
              <ul className="space-y-4">
                {slide.keyPoints?.map((point, index) => (
                  <li key={index} className="flex items-start group">
                    <div className="bg-red-500 p-2 rounded-xl shadow-lg mr-4 group-hover:scale-110 transition-transform duration-200">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-red-800 font-medium leading-relaxed">{point}</span>
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
              {slide.types?.map((type, index) => {
                const Icon = type.icon;
                return (
                  <div key={index} className="card-elevated p-8 group hover:scale-105 transition-all duration-300">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-3 text-lg">{type.name}</h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">{type.description}</p>
                    <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-2xl border-l-4 border-orange-400">
                      <p className="text-sm text-orange-800 font-medium">
                        <strong className="text-orange-900">Example:</strong> {type.example}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );

      case 'interactive':
        if (slide.redFlags) {
          return (
            <div className="space-y-8">
              <p className="text-xl text-gray-700 leading-relaxed font-medium">{slide.content}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {slide.redFlags.map((item, index) => (
                  <div key={index} className={`border-2 rounded-3xl p-6 hover:shadow-lg transition-all duration-300 group ${getSeverityColor(item.severity)}`}>
                    <div className="flex items-start">
                      <div className={`p-3 rounded-2xl shadow-lg mr-4 group-hover:scale-110 transition-transform duration-200 ${
                        item.severity === 'high' ? 'bg-gradient-to-r from-red-500 to-pink-500' :
                        'bg-gradient-to-r from-yellow-500 to-orange-500'
                      }`}>
                        <AlertTriangle className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className={`font-bold text-lg ${
                            item.severity === 'high' ? 'text-red-900' : 'text-yellow-900'
                          }`}>
                            {item.flag}
                          </h4>
                          <span className={`px-3 py-1 rounded-xl text-xs font-bold uppercase ${
                            item.severity === 'high' ? 'bg-red-200 text-red-800' : 'bg-yellow-200 text-yellow-800'
                          }`}>
                            {item.severity} risk
                          </span>
                        </div>
                        <p className={`mb-3 leading-relaxed ${
                          item.severity === 'high' ? 'text-red-700' : 'text-yellow-700'
                        }`}>
                          {item.description}
                        </p>
                        <div className={`p-3 rounded-xl ${
                          item.severity === 'high' ? 'bg-red-200' : 'bg-yellow-200'
                        }`}>
                          <p className={`text-sm font-medium ${
                            item.severity === 'high' ? 'text-red-900' : 'text-yellow-900'
                          }`}>
                            <strong>Example:</strong> {item.example}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        } else if (slide.emailSamples) {
          return (
            <div className="space-y-8">
              <p className="text-xl text-gray-700 leading-relaxed font-medium">{slide.content}</p>
              <div className="space-y-6">
                {slide.emailSamples.map((sample, index) => (
                  <div key={index} className="card-elevated p-8 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-bold text-gray-900 text-lg">{sample.component}</h4>
                      <span className={`px-4 py-2 rounded-2xl text-sm font-bold ${getLegitimacyColor(sample.legitimacy)}`}>
                        {sample.legitimacy}
                      </span>
                    </div>
                    
                    <div className="bg-gray-100 p-4 rounded-2xl mb-4 font-mono text-sm">
                      {sample.example}
                    </div>
                    
                    <div>
                      <h5 className="font-bold text-red-900 mb-3 text-sm">Issues Identified:</h5>
                      <div className="flex flex-wrap gap-2">
                        {sample.issues.map((issue, issueIndex) => (
                          <span key={issueIndex} className="bg-red-100 text-red-800 text-sm px-3 py-2 rounded-xl font-medium">
                            {issue}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        }
        return null;

      case 'quiz':
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-3xl p-8">
              <h4 className="font-bold text-blue-900 mb-4 text-lg flex items-center">
                <Eye className="h-6 w-6 mr-3 text-blue-600" />
                Phishing Detection Test:
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
                <Mail className="h-6 w-6 mr-3 text-purple-600" />
                Phishing Scenario:
              </h4>
              <p className="text-purple-800 text-lg leading-relaxed">{slide.content}</p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-bold text-gray-900 text-xl">How would you respond?</h4>
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
                    {slide.choices?.[parseInt(selectedAnswers[currentSlide])]?.correct ? 'Perfect response!' : 'Let\'s reconsider...'}
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

export default PhishingAwarenessModule;