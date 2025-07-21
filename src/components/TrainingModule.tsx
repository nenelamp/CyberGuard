import React, { useState } from 'react';
import { Award } from 'lucide-react';
import PasswordSecurityModule from './training/PasswordSecurityModule';
import SocialEngineeringModule from './training/SocialEngineeringModule';
import MFAModule from './training/MFAModule';
import RansomwareModule from './training/RansomwareModule';
import DataPrivacyModule from './training/DataPrivacyModule';

interface TrainingModuleProps {
  onNavigate: (view: string) => void;
}

const TrainingModule: React.FC<TrainingModuleProps> = ({ onNavigate }) => {
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const [completedModules, setCompletedModules] = useState<string[]>([]);

  const trainingModules = [
    {
      id: 'phishing',
      title: 'Phishing Awareness',
      description: 'Learn to identify and avoid phishing attacks',
      duration: '4 minutes',
      difficulty: 'Beginner',
      thumbnail: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=200&fit=crop',
      completed: completedModules.includes('phishing')
    },
    {
      id: 'password',
      title: 'Password Security',
      description: 'Master the art of creating and managing secure passwords',
      duration: '4 minutes',
      difficulty: 'Beginner',
      thumbnail: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=300&h=200&fit=crop',
      completed: completedModules.includes('password')
    },
    {
      id: 'social-engineering',
      title: 'Social Engineering',
      description: 'Recognize and defend against human-based attacks',
      duration: '5 minutes',
      difficulty: 'Intermediate',
      thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop',
      completed: completedModules.includes('social-engineering')
    },
    {
      id: 'mfa',
      title: 'Multi-Factor Authentication',
      description: 'Understand and implement additional security layers',
      duration: '3 minutes',
      difficulty: 'Beginner',
      thumbnail: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=300&h=200&fit=crop',
      completed: completedModules.includes('mfa')
    },
    {
      id: 'ransomware',
      title: 'Ransomware Protection',
      description: 'Defend against digital extortion and malware',
      duration: '4 minutes',
      difficulty: 'Intermediate',
      thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=300&h=200&fit=crop',
      completed: completedModules.includes('ransomware')
    },
    {
      id: 'data-privacy',
      title: 'Data Privacy Laws',
      description: 'Navigate compliance requirements and regulations',
      duration: '6 minutes',
      difficulty: 'Advanced',
      thumbnail: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=300&h=200&fit=crop',
      completed: completedModules.includes('data-privacy')
    }
  ];

  const handleModuleComplete = (moduleId: string) => {
    setCompletedModules([...completedModules, moduleId]);
    setSelectedModule(null);
  };

  const handleModuleExit = () => {
    setSelectedModule(null);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const renderSelectedModule = () => {
    switch (selectedModule) {
      case 'password':
        return <PasswordSecurityModule onComplete={() => handleModuleComplete('password')} onExit={handleModuleExit} />;
      case 'social-engineering':
        return <SocialEngineeringModule onComplete={() => handleModuleComplete('social-engineering')} onExit={handleModuleExit} />;
      case 'mfa':
        return <MFAModule onComplete={() => handleModuleComplete('mfa')} onExit={handleModuleExit} />;
      case 'ransomware':
        return <RansomwareModule onComplete={() => handleModuleComplete('ransomware')} onExit={handleModuleExit} />;
      case 'data-privacy':
        return <DataPrivacyModule onComplete={() => handleModuleComplete('data-privacy')} onExit={handleModuleExit} />;
      default:
        return null;
    }
  };

  if (selectedModule) {
    return renderSelectedModule();
  }

  // Show completion screen if all modules completed
  if (completedModules.length === trainingModules.length) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-elevated p-12 text-center">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
              <Award className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Security Expert Achieved!</h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Congratulations! You've completed all cybersecurity training modules and are now equipped with comprehensive security knowledge.
            </p>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-3xl p-8 mb-8">
              <h3 className="font-bold text-blue-900 mb-6 text-xl">Your Achievements:</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {trainingModules.map((module) => (
                  <div key={module.id} className="text-center">
                    <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-2">
                      <Award className="h-8 w-8 text-green-600" />
                    </div>
                    <p className="text-sm font-medium text-blue-800">{module.title}</p>
                  </div>
                ))}
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
                onClick={() => setCompletedModules([])}
                className="btn-secondary text-lg"
              >
                Retake Modules
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main training module selection screen
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">Security Training Center</h1>
                  <p className="text-green-100 text-lg mb-4">Build your cybersecurity knowledge with interactive training modules</p>
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center">
                      <Award className="h-5 w-5 mr-2 text-yellow-300" />
                      <span className="font-medium">{completedModules.length}/{trainingModules.length} modules completed</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => onNavigate('employee')}
                  className="btn-secondary bg-white/20 border-white/30 text-white hover:bg-white/30"
                >
                  Back to Dashboard
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Training Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainingModules.map((module) => (
            <div key={module.id} className="card-elevated overflow-hidden group hover:scale-105 transition-all duration-300">
              <div className="relative">
                <img 
                  src={module.thumbnail} 
                  alt={module.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                {module.completed && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white p-2 rounded-xl shadow-lg">
                    <Award className="h-5 w-5" />
                  </div>
                )}
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{module.title}</h3>
                  <span className={`px-3 py-1 rounded-xl text-sm font-bold ${getDifficultyColor(module.difficulty)}`}>
                    {module.difficulty}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{module.description}</p>
                
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm text-gray-500 font-medium">{module.duration}</span>
                  {module.completed && (
                    <span className="text-sm text-green-600 font-bold flex items-center">
                      <Award className="h-4 w-4 mr-1" />
                      Completed
                    </span>
                  )}
                </div>
                
                <button
                  onClick={() => setSelectedModule(module.id)}
                  className={`w-full py-3 px-6 rounded-2xl font-semibold transition-all duration-200 transform hover:scale-105 ${
                    module.completed 
                      ? 'bg-green-100 text-green-800 hover:bg-green-200' 
                      : 'btn-primary'
                  }`}
                >
                  {module.completed ? 'Review Module' : 'Start Training'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Summary */}
        <div className="mt-12 card-elevated p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Progress</h3>
          <div className="progress-modern h-6 mb-4">
            <div 
              className="h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-500"
              style={{ width: `${(completedModules.length / trainingModules.length) * 100}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-lg">
            <span className="text-gray-600">Modules Completed</span>
            <span className="font-bold text-gray-900">{completedModules.length} of {trainingModules.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingModule;