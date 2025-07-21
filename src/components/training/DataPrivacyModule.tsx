import React, { useState } from 'react';
import { Clock, BookOpen, CheckCircle, XCircle, ArrowRight, ArrowLeft, Award, Shield, FileText, Users, Globe, Scale } from 'lucide-react';

interface DataPrivacyModuleProps {
  onComplete: () => void;
  onExit: () => void;
}

const DataPrivacyModule: React.FC<DataPrivacyModuleProps> = ({ onComplete, onExit }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: string}>({});
  const [showResults, setShowResults] = useState(false);

  const trainingContent = {
    title: 'Data Privacy Laws: Understanding Your Compliance Obligations',
    duration: '6 minutes',
    slides: [
      {
        type: 'introduction',
        title: 'Why Data Privacy Laws Matter',
        content: 'Data privacy laws protect individuals\' personal information and establish rules for how organizations collect, use, and store data. Non-compliance can result in severe penalties and damage to reputation.',
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop&crop=center',
        keyPoints: [
          'GDPR fines can reach €20 million or 4% of annual revenue',
          'Over 130 countries have data protection laws',
          'Data breaches cost an average of $4.45 million'
        ]
      },
      {
        type: 'content',
        title: 'Major Data Privacy Regulations',
        content: 'Understanding key privacy laws that may apply to your organization.',
        regulations: [
          {
            name: 'GDPR (EU)',
            description: 'General Data Protection Regulation for EU residents',
            scope: 'Any organization processing EU residents\' data',
            keyRequirements: ['Consent', 'Data minimization', 'Right to erasure', 'Breach notification'],
            icon: Globe
          },
          {
            name: 'CCPA (California)',
            description: 'California Consumer Privacy Act',
            scope: 'Businesses serving California residents',
            keyRequirements: ['Right to know', 'Right to delete', 'Right to opt-out', 'Non-discrimination'],
            icon: Scale
          },
          {
            name: 'PIPEDA (Canada)',
            description: 'Personal Information Protection and Electronic Documents Act',
            scope: 'Canadian federal private sector organizations',
            keyRequirements: ['Consent', 'Limited collection', 'Accuracy', 'Safeguards'],
            icon: Shield
          },
          {
            name: 'LGPD (Brazil)',
            description: 'Lei Geral de Proteção de Dados',
            scope: 'Organizations processing Brazilian residents\' data',
            keyRequirements: ['Lawful basis', 'Purpose limitation', 'Data subject rights', 'DPO appointment'],
            icon: FileText
          }
        ]
      },
      {
        type: 'interactive',
        title: 'Data Classification and Handling',
        content: 'Learn to identify and properly handle different types of personal data:',
        dataTypes: [
          { 
            type: 'Personal Identifiers', 
            examples: ['Names', 'Email addresses', 'Phone numbers', 'Social security numbers'],
            sensitivity: 'Medium',
            handling: 'Collect only when necessary, secure storage, limited access'
          },
          { 
            type: 'Sensitive Personal Data', 
            examples: ['Health records', 'Biometric data', 'Religious beliefs', 'Sexual orientation'],
            sensitivity: 'High',
            handling: 'Explicit consent required, enhanced security, strict access controls'
          },
          { 
            type: 'Financial Information', 
            examples: ['Credit card numbers', 'Bank accounts', 'Payment history', 'Credit scores'],
            sensitivity: 'High',
            handling: 'PCI DSS compliance, encryption, tokenization, audit trails'
          },
          { 
            type: 'Behavioral Data', 
            examples: ['Website activity', 'Location data', 'Purchase history', 'App usage'],
            sensitivity: 'Medium',
            handling: 'Clear privacy notices, opt-out options, data minimization'
          }
        ]
      },
      {
        type: 'quiz',
        title: 'Compliance Scenario',
        question: 'A customer in Germany requests that you delete all their personal data from your systems. Under GDPR, what is your legal obligation?',
        options: [
          'You can refuse if the data is needed for business purposes',
          'You must delete the data within 30 days unless there\'s a legal basis to retain it',
          'You only need to delete data that\'s older than 2 years',
          'You can charge a fee for the deletion service'
        ],
        correct: 1,
        explanation: 'Under GDPR Article 17 (Right to Erasure), you must delete personal data without undue delay unless you have a legitimate legal basis for retention, such as legal compliance or defending legal claims.'
      },
      {
        type: 'scenario',
        title: 'Data Breach Response',
        content: 'Your company discovers that a database containing customer email addresses and purchase history was accessed by an unauthorized party. The breach affected 5,000 EU customers. What should you do first?',
        choices: [
          {
            text: 'Wait to see if any customers complain before taking action',
            outcome: 'Wrong! This violates GDPR requirements and could result in maximum penalties. Immediate action is required.',
            correct: false
          },
          {
            text: 'Notify the supervisory authority within 72 hours and assess if customer notification is needed',
            outcome: 'Correct! GDPR requires breach notification to authorities within 72 hours, and to individuals if there\'s high risk to their rights.',
            correct: true
          },
          {
            text: 'Only notify customers but not the authorities since it\'s a small breach',
            outcome: 'Incorrect! Both authority notification (within 72 hours) and individual notification may be required depending on risk assessment.',
            correct: false
          }
        ]
      },
      {
        type: 'tips',
        title: 'Data Privacy Compliance Best Practices',
        content: 'Implement these practices to ensure ongoing compliance with data privacy laws:',
        tips: [
          {
            category: 'Data Governance',
            practices: [
              'Conduct regular data audits to map all personal data processing',
              'Implement data retention policies with automatic deletion',
              'Maintain records of processing activities (ROPA)',
              'Appoint a Data Protection Officer (DPO) when required'
            ]
          },
          {
            category: 'Technical Safeguards',
            practices: [
              'Implement privacy by design in all systems and processes',
              'Use encryption for data at rest and in transit',
              'Implement access controls and user authentication',
              'Regular security testing and vulnerability assessments'
            ]
          },
          {
            category: 'Organizational Measures',
            practices: [
              'Provide regular privacy training for all employees',
              'Establish clear data breach response procedures',
              'Review and update privacy policies regularly',
              'Conduct privacy impact assessments for new projects'
            ]
          },
          {
            category: 'Individual Rights',
            practices: [
              'Provide clear, accessible privacy notices',
              'Establish processes for handling data subject requests',
              'Implement consent management systems',
              'Ensure easy opt-out mechanisms for marketing'
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

  const getSensitivityColor = (sensitivity: string) => {
    switch (sensitivity) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
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
                alt="Data Privacy Laws" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed font-medium">{slide.content}</p>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl border border-blue-100">
              <h4 className="font-bold text-blue-900 mb-6 text-lg flex items-center">
                <Scale className="h-6 w-6 mr-3 text-blue-600" />
                Compliance Impact:
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
              {slide.regulations?.map((regulation, index) => {
                const Icon = regulation.icon;
                return (
                  <div key={index} className="card-elevated p-8 group hover:scale-105 transition-all duration-300">
                    <div className="bg-gradient-to-r from-purple-500 to-violet-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-3 text-lg">{regulation.name}</h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">{regulation.description}</p>
                    <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-4 rounded-2xl border-l-4 border-purple-400 mb-4">
                      <p className="text-sm text-purple-800 font-medium">
                        <strong className="text-purple-900">Scope:</strong> {regulation.scope}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h5 className="font-bold text-gray-900 text-sm">Key Requirements:</h5>
                      {regulation.keyRequirements.map((req, reqIndex) => (
                        <span key={reqIndex} className="inline-block bg-purple-100 text-purple-800 text-sm px-3 py-2 rounded-xl mr-2 mb-2 font-medium">
                          {req}
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
              {slide.dataTypes?.map((dataType, index) => (
                <div key={index} className="card-elevated p-8 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-bold text-gray-900 text-lg">{dataType.type}</h4>
                    <span className={`px-3 py-1 rounded-xl text-sm font-bold ${getSensitivityColor(dataType.sensitivity)}`}>
                      {dataType.sensitivity} Risk
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-bold text-gray-900 mb-2 text-sm">Examples:</h5>
                      <div className="flex flex-wrap gap-2">
                        {dataType.examples.map((example, exampleIndex) => (
                          <span key={exampleIndex} className="bg-gray-100 text-gray-800 text-sm px-3 py-2 rounded-xl font-medium">
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-bold text-gray-900 mb-2 text-sm">Handling Requirements:</h5>
                      <p className="text-gray-600 text-sm leading-relaxed">{dataType.handling}</p>
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
                <FileText className="h-6 w-6 mr-3 text-blue-600" />
                Legal Compliance Test:
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
            <div className="bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-200 rounded-3xl p-8">
              <h4 className="font-bold text-red-900 mb-4 text-lg flex items-center">
                <Shield className="h-6 w-6 mr-3 text-red-600" />
                Data Breach Emergency:
              </h4>
              <p className="text-red-800 text-lg leading-relaxed">{slide.content}</p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-bold text-gray-900 text-xl">What should you do first?</h4>
              {slide.choices?.map((choice, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(currentSlide, index.toString())}
                  className={`w-full text-left p-6 border-2 rounded-3xl transition-all duration-300 transform hover:scale-102 ${
                    selectedAnswers[currentSlide] === index.toString()
                      ? 'border-red-500 bg-gradient-to-r from-red-50 to-pink-50 shadow-lg'
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

export default DataPrivacyModule;