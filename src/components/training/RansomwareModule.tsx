import React, { useState } from 'react';
import { Clock, BookOpen, CheckCircle, XCircle, ArrowRight, ArrowLeft, Award, Shield, AlertTriangle, Lock, HardDrive, Wifi } from 'lucide-react';

interface RansomwareModuleProps {
  onComplete: () => void;
  onExit: () => void;
}

const RansomwareModule: React.FC<RansomwareModuleProps> = ({ onComplete, onExit }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: string}>({});
  const [showResults, setShowResults] = useState(false);

  const trainingContent = {
    title: 'Ransomware Protection: Defending Against Digital Extortion',
    duration: '4 minutes',
    slides: [
      {
        type: 'introduction',
        title: 'Understanding Ransomware Threats',
        content: 'Ransomware is malicious software that encrypts your files and demands payment for their release. It\'s one of the most dangerous and costly cyber threats facing organizations today.',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop&crop=center',
        keyPoints: [
          'Ransomware attacks occur every 11 seconds',
          'Average ransom demand is $200,000+',
          '60% of small businesses close within 6 months of an attack'
        ]
      },
      {
        type: 'content',
        title: 'How Ransomware Spreads',
        content: 'Understanding common attack vectors helps you recognize and prevent ransomware infections.',
        vectors: [
          {
            name: 'Phishing Emails',
            description: 'Malicious attachments or links in emails',
            example: 'Invoice.pdf.exe or fake software updates',
            icon: AlertTriangle
          },
          {
            name: 'Compromised Websites',
            description: 'Drive-by downloads from infected websites',
            example: 'Exploit kits on compromised legitimate sites',
            icon: Wifi
          },
          {
            name: 'Remote Desktop Attacks',
            description: 'Brute force attacks on RDP connections',
            example: 'Weak passwords on remote access systems',
            icon: Shield
          },
          {
            name: 'Software Vulnerabilities',
            description: 'Exploiting unpatched security flaws',
            example: 'Outdated operating systems and applications',
            icon: Lock
          }
        ]
      },
      {
        type: 'interactive',
        title: 'Ransomware Warning Signs',
        content: 'Learn to recognize early indicators of a ransomware attack:',
        warnings: [
          { 
            sign: 'Unusual File Extensions', 
            description: 'Files renamed with strange extensions like .locked, .crypto, .encrypted',
            severity: 'critical',
            action: 'Disconnect from network immediately'
          },
          { 
            sign: 'Slow System Performance', 
            description: 'Computer running unusually slow due to encryption process',
            severity: 'high',
            action: 'Check running processes and network activity'
          },
          { 
            sign: 'Ransom Notes', 
            description: 'Text files or desktop wallpapers with payment demands',
            severity: 'critical',
            action: 'Do not pay - contact IT security immediately'
          },
          { 
            sign: 'Inaccessible Files', 
            description: 'Unable to open documents, photos, or other files',
            severity: 'critical',
            action: 'Stop using the computer and report incident'
          },
          { 
            sign: 'Suspicious Network Activity', 
            description: 'Unusual outbound connections or data transfers',
            severity: 'high',
            action: 'Monitor network traffic and isolate if needed'
          },
          { 
            sign: 'Unexpected Pop-ups', 
            description: 'Fake security warnings or payment demands',
            severity: 'medium',
            action: 'Close without clicking and run security scan'
          }
        ]
      },
      {
        type: 'quiz',
        title: 'Ransomware Response Quiz',
        question: 'You notice several files on your computer have been renamed with a .locked extension and there\'s a text file demanding payment. What should you do FIRST?',
        options: [
          'Pay the ransom to get your files back quickly',
          'Try to decrypt the files yourself',
          'Disconnect from the network and contact IT security',
          'Restart your computer to see if it fixes the problem'
        ],
        correct: 2,
        explanation: 'Immediately disconnect from the network to prevent spread to other systems, then contact IT security. Never pay ransoms as it funds criminal activity and doesn\'t guarantee file recovery.'
      },
      {
        type: 'scenario',
        title: 'Prevention Strategy Decision',
        content: 'Your company wants to implement ransomware protection. The IT budget allows for one major security improvement this year. Which would provide the best protection against ransomware?',
        choices: [
          {
            text: 'Install the latest antivirus software on all computers',
            outcome: 'Good but not sufficient. Modern ransomware often bypasses traditional antivirus. A layered approach is needed.',
            correct: false
          },
          {
            text: 'Implement automated, tested backup and recovery systems',
            outcome: 'Excellent choice! Reliable backups are the most effective defense against ransomware, allowing quick recovery without paying.',
            correct: true
          },
          {
            text: 'Train all employees on email security',
            outcome: 'Very important but not complete. Training should be combined with technical controls for maximum effectiveness.',
            correct: false
          }
        ]
      },
      {
        type: 'tips',
        title: 'Ransomware Prevention Strategies',
        content: 'Implement these multi-layered defenses to protect against ransomware:',
        tips: [
          {
            category: 'Backup and Recovery',
            practices: [
              'Maintain offline, encrypted backups tested regularly',
              'Follow the 3-2-1 rule: 3 copies, 2 different media, 1 offsite',
              'Test backup restoration procedures monthly',
              'Keep backups disconnected from the network'
            ]
          },
          {
            category: 'System Security',
            practices: [
              'Keep all software and operating systems updated',
              'Use endpoint detection and response (EDR) tools',
              'Implement application whitelisting',
              'Disable unnecessary services and ports'
            ]
          },
          {
            category: 'User Education',
            practices: [
              'Train employees to recognize phishing attempts',
              'Establish clear incident reporting procedures',
              'Conduct regular security awareness training',
              'Simulate ransomware attacks to test response'
            ]
          },
          {
            category: 'Network Protection',
            practices: [
              'Segment networks to limit ransomware spread',
              'Monitor network traffic for suspicious activity',
              'Use email filtering and web protection',
              'Implement zero-trust network architecture'
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
      case 'critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
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
                alt="Ransomware Protection" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed font-medium">{slide.content}</p>
            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-3xl border border-red-100">
              <h4 className="font-bold text-red-900 mb-6 text-lg flex items-center">
                <AlertTriangle className="h-6 w-6 mr-3 text-red-600" />
                Alarming Statistics:
              </h4>
              <ul className="space-y-4">
                {slide.keyPoints?.map((point, index) => (
                  <li key={index} className="flex items-start group">
                    <div className="bg-red-500 p-2 rounded-xl shadow-lg mr-4 group-hover:scale-110 transition-transform duration-200">
                      <AlertTriangle className="h-5 w-5 text-white" />
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
              {slide.vectors?.map((vector, index) => {
                const Icon = vector.icon;
                return (
                  <div key={index} className="card-elevated p-8 group hover:scale-105 transition-all duration-300">
                    <div className="bg-gradient-to-r from-red-500 to-pink-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-3 text-lg">{vector.name}</h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">{vector.description}</p>
                    <div className="bg-gradient-to-r from-red-50 to-pink-50 p-4 rounded-2xl border-l-4 border-red-400">
                      <p className="text-sm text-red-800 font-medium">
                        <strong className="text-red-900">Example:</strong> {vector.example}
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
              {slide.warnings?.map((warning, index) => (
                <div key={index} className={`border-2 rounded-3xl p-6 hover:shadow-lg transition-all duration-300 group ${getSeverityColor(warning.severity)}`}>
                  <div className="flex items-start">
                    <div className={`p-3 rounded-2xl shadow-lg mr-4 group-hover:scale-110 transition-transform duration-200 ${
                      warning.severity === 'critical' ? 'bg-gradient-to-r from-red-500 to-pink-500' :
                      warning.severity === 'high' ? 'bg-gradient-to-r from-orange-500 to-red-500' :
                      'bg-gradient-to-r from-yellow-500 to-orange-500'
                    }`}>
                      <AlertTriangle className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className={`font-bold text-lg ${
                          warning.severity === 'critical' ? 'text-red-900' :
                          warning.severity === 'high' ? 'text-orange-900' :
                          'text-yellow-900'
                        }`}>
                          {warning.sign}
                        </h4>
                        <span className={`px-3 py-1 rounded-xl text-xs font-bold uppercase ${
                          warning.severity === 'critical' ? 'bg-red-200 text-red-800' :
                          warning.severity === 'high' ? 'bg-orange-200 text-orange-800' :
                          'bg-yellow-200 text-yellow-800'
                        }`}>
                          {warning.severity}
                        </span>
                      </div>
                      <p className={`mb-3 leading-relaxed ${
                        warning.severity === 'critical' ? 'text-red-700' :
                        warning.severity === 'high' ? 'text-orange-700' :
                        'text-yellow-700'
                      }`}>
                        {warning.description}
                      </p>
                      <div className={`p-3 rounded-xl ${
                        warning.severity === 'critical' ? 'bg-red-200' :
                        warning.severity === 'high' ? 'bg-orange-200' :
                        'bg-yellow-200'
                      }`}>
                        <p className={`text-sm font-medium ${
                          warning.severity === 'critical' ? 'text-red-900' :
                          warning.severity === 'high' ? 'text-orange-900' :
                          'text-yellow-900'
                        }`}>
                          <strong>Action:</strong> {warning.action}
                        </p>
                      </div>
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
                <HardDrive className="h-6 w-6 mr-3 text-blue-600" />
                Emergency Response:
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
                <Shield className="h-6 w-6 mr-3 text-purple-600" />
                Strategic Decision:
              </h4>
              <p className="text-purple-800 text-lg leading-relaxed">{slide.content}</p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-bold text-gray-900 text-xl">What would you prioritize?</h4>
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

export default RansomwareModule;