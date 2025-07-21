import React, { useState } from 'react';
import { Clock, BookOpen, CheckCircle, XCircle, ArrowRight, ArrowLeft, Award, Lock, Eye, EyeOff, Shield, AlertTriangle } from 'lucide-react';

interface PasswordSecurityModuleProps {
  onComplete: () => void;
  onExit: () => void;
}

const PasswordSecurityModule: React.FC<PasswordSecurityModuleProps> = ({ onComplete, onExit }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: string}>({});
  const [showResults, setShowResults] = useState(false);

  const trainingContent = {
    title: 'Password Security: Your First Line of Defense',
    duration: '4 minutes',
    slides: [
      {
        type: 'introduction',
        title: 'Why Password Security Matters',
        content: 'Strong passwords are your first line of defense against cyber attacks. Weak passwords are responsible for 81% of data breaches.',
        image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop&crop=center',
        keyPoints: [
          '81% of data breaches involve weak or stolen passwords',
          'Average person has 100+ online accounts',
          'Password attacks happen every 39 seconds'
        ]
      },
      {
        type: 'content',
        title: 'Common Password Mistakes',
        content: 'Learn about the most dangerous password practices that put your accounts at risk.',
        mistakes: [
          {
            name: 'Using Personal Information',
            description: 'Names, birthdays, addresses are easily guessed',
            example: 'john1985, sarah_smith, 123MainSt'
          },
          {
            name: 'Simple Patterns',
            description: 'Keyboard patterns and sequences',
            example: 'qwerty, 123456, password123'
          },
          {
            name: 'Password Reuse',
            description: 'Using the same password across multiple accounts',
            example: 'Same password for email, banking, and social media'
          },
          {
            name: 'Short Passwords',
            description: 'Passwords under 12 characters are easily cracked',
            example: 'pass123, secret, admin'
          }
        ]
      },
      {
        type: 'interactive',
        title: 'Password Strength Checker',
        content: 'Test your understanding of what makes a password strong or weak:',
        passwords: [
          { password: 'password123', strength: 'Very Weak', reason: 'Common word + simple numbers' },
          { password: 'MyDog$Name2024', strength: 'Weak', reason: 'Personal information + predictable pattern' },
          { password: 'Tr0ub4dor&3', strength: 'Medium', reason: 'Good length but predictable substitutions' },
          { password: 'correct-horse-battery-staple', strength: 'Strong', reason: 'Long passphrase with random words' },
          { password: 'K9#mX$7nP@2vL!8qR', strength: 'Very Strong', reason: 'Random characters, symbols, good length' },
          { password: 'ILove2Eat@Pizza&Pasta!', strength: 'Strong', reason: 'Long, memorable, mixed characters' }
        ]
      },
      {
        type: 'quiz',
        title: 'Password Knowledge Check',
        question: 'Which of these passwords would be considered the MOST secure?',
        options: [
          'MyCompany2024!',
          'correct-horse-battery-staple-47',
          'P@ssw0rd123',
          'JohnSmith1985'
        ],
        correct: 1,
        explanation: 'Long passphrases with random words are both secure and memorable. The second option has good length, randomness, and includes numbers.'
      },
      {
        type: 'scenario',
        title: 'Real-World Password Challenge',
        content: 'You need to create a new password for your work email account. The system requires at least 12 characters with uppercase, lowercase, numbers, and symbols. Which approach would you choose?',
        choices: [
          {
            text: 'Use your pet\'s name with your birth year and an exclamation mark',
            outcome: 'Not ideal. Personal information makes passwords easier to guess, even with complexity requirements.',
            correct: false
          },
          {
            text: 'Create a passphrase from a memorable sentence with substitutions',
            outcome: 'Excellent choice! For example: "I drink 3 cups of coffee daily!" becomes "Id3CoC d!"',
            correct: true
          },
          {
            text: 'Use a random password generator and write it down',
            outcome: 'Good security but risky if the written password is lost or seen by others. Better to use a password manager.',
            correct: false
          }
        ]
      },
      {
        type: 'tips',
        title: 'Password Best Practices',
        content: 'Follow these guidelines to create and manage secure passwords:',
        tips: [
          {
            category: 'Creating Strong Passwords',
            practices: [
              'Use at least 12-16 characters for maximum security',
              'Combine uppercase, lowercase, numbers, and symbols',
              'Create memorable passphrases from random words',
              'Avoid personal information and common patterns'
            ]
          },
          {
            category: 'Password Management',
            practices: [
              'Use a unique password for every account',
              'Enable two-factor authentication when available',
              'Use a reputable password manager',
              'Regularly update passwords for critical accounts'
            ]
          },
          {
            category: 'Security Habits',
            practices: [
              'Never share passwords with others',
              'Don\'t save passwords in browsers on shared computers',
              'Log out of accounts when finished',
              'Monitor accounts for suspicious activity'
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
                alt="Password Security" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed font-medium">{slide.content}</p>
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-3xl border border-red-100">
              <h4 className="font-bold text-red-900 mb-6 text-lg flex items-center">
                <AlertTriangle className="h-6 w-6 mr-3 text-red-600" />
                Critical Statistics:
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
              {slide.mistakes?.map((mistake, index) => (
                <div key={index} className="card-elevated p-8 group hover:scale-105 transition-all duration-300">
                  <div className="bg-gradient-to-r from-red-500 to-pink-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                    <XCircle className="h-7 w-7 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">{mistake.name}</h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">{mistake.description}</p>
                  <div className="bg-gradient-to-r from-red-50 to-pink-50 p-4 rounded-2xl border-l-4 border-red-400">
                    <p className="text-sm text-red-800 font-medium">
                      <strong className="text-red-900">Examples:</strong> {mistake.example}
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
            <div className="space-y-4">
              {slide.passwords?.map((item, index) => (
                <div key={index} className="bg-white border-2 border-gray-200 rounded-3xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="bg-gray-100 px-4 py-2 rounded-2xl font-mono text-lg">
                        {item.password}
                      </div>
                      <span className={`px-4 py-2 rounded-2xl text-sm font-bold ${
                        item.strength === 'Very Strong' ? 'bg-green-100 text-green-800' :
                        item.strength === 'Strong' ? 'bg-blue-100 text-blue-800' :
                        item.strength === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        item.strength === 'Weak' ? 'bg-orange-100 text-orange-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {item.strength}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{item.reason}</p>
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
                Knowledge Check:
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
                    <span className="text-lg font-mono">{option}</span>
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
                      <Lock className="h-6 w-6 text-white" />
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

export default PasswordSecurityModule;