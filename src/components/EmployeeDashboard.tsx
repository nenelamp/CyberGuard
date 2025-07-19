import React, { useState, useEffect } from 'react';
import { Trophy, Target, BookOpen, Clock, Award, TrendingUp, Calendar, CheckCircle, AlertTriangle, Play, Zap, Star, ChevronRight, Users, Shield } from 'lucide-react';

interface EmployeeDashboardProps {
  onNavigate: (view: string) => void;
}

const EmployeeDashboard: React.FC<EmployeeDashboardProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const userStats = {
    riskScore: 85,
    completedModules: 12,
    totalModules: 15,
    phishingTestsPass: 8,
    phishingTestsTotal: 10,
    badges: 7,
    rank: 23,
    totalUsers: 150,
    weeklyProgress: 15,
    streakDays: 7
  };

  const recentActivities = [
    { type: 'training', title: 'Password Security Basics', completed: true, date: '2 hours ago', points: 50 },
    { type: 'phishing', title: 'Monthly Phishing Test', completed: true, date: '1 day ago', passed: true, points: 100 },
    { type: 'training', title: 'Multi-Factor Authentication', completed: false, date: 'Due today', points: 75 },
    { type: 'badge', title: 'Security Champion Badge Earned', completed: true, date: '3 days ago', points: 200 }
  ];

  const upcomingTraining = [
    { 
      title: 'Ransomware Awareness', 
      duration: '3 min', 
      dueDate: 'Due in 2 days', 
      priority: 'high',
      progress: 0,
      thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=300&h=200&fit=crop'
    },
    { 
      title: 'Social Engineering Tactics', 
      duration: '4 min', 
      dueDate: 'Due in 1 week', 
      priority: 'medium',
      progress: 25,
      thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop'
    },
    { 
      title: 'Remote Work Security', 
      duration: '5 min', 
      dueDate: 'Due in 2 weeks', 
      priority: 'low',
      progress: 0,
      thumbnail: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=200&fit=crop'
    }
  ];

  const badges = [
    { name: 'Phishing Detective', icon: '🕵️', earned: true, description: 'Identified 5 phishing attempts', rarity: 'common' },
    { name: 'Security Champion', icon: '🏆', earned: true, description: 'Completed 10 training modules', rarity: 'rare' },
    { name: 'Password Pro', icon: '🔐', earned: true, description: 'Mastered password security', rarity: 'common' },
    { name: 'MFA Master', icon: '🛡️', earned: false, description: 'Complete MFA training', rarity: 'epic' },
    { name: 'Compliance Expert', icon: '📋', earned: false, description: 'Pass all compliance modules', rarity: 'legendary' }
  ];

  const leaderboard = [
    { rank: 1, name: 'Sarah Chen', score: 95, department: 'IT', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face' },
    { rank: 2, name: 'Mike Johnson', score: 92, department: 'Sales', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face' },
    { rank: 3, name: 'Emma Davis', score: 89, department: 'HR', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face' },
    { rank: 4, name: 'You', score: 85, department: 'Marketing', isCurrentUser: true, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face' },
    { rank: 5, name: 'Tom Wilson', score: 83, department: 'Finance', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face' }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'from-gray-400 to-gray-500';
      case 'rare': return 'from-blue-400 to-blue-500';
      case 'epic': return 'from-purple-400 to-purple-500';
      case 'legendary': return 'from-yellow-400 to-orange-500';
      default: return 'from-gray-400 to-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Header */}
        <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
            <div className="relative">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">Welcome back, Alex! 👋</h1>
                  <p className="text-blue-100 text-lg">Keep up the great work on your cybersecurity journey</p>
                  <div className="flex items-center mt-4 space-x-6">
                    <div className="flex items-center">
                      <Zap className="h-5 w-5 mr-2 text-yellow-300" />
                      <span className="font-medium">{userStats.streakDays} day streak</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-5 w-5 mr-2 text-yellow-300" />
                      <span className="font-medium">+{userStats.weeklyProgress} points this week</span>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                    <div className="text-3xl font-bold mb-1">{userStats.riskScore}</div>
                    <div className="text-sm text-blue-100">Security Score</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            {
              title: 'Security Score',
              value: userStats.riskScore,
              change: '+8 this week',
              icon: TrendingUp,
              color: 'from-emerald-500 to-green-500',
              bgColor: 'bg-emerald-50',
              progress: userStats.riskScore
            },
            {
              title: 'Training Progress',
              value: `${userStats.completedModules}/${userStats.totalModules}`,
              change: '3 completed this week',
              icon: BookOpen,
              color: 'from-blue-500 to-indigo-500',
              bgColor: 'bg-blue-50',
              progress: (userStats.completedModules / userStats.totalModules) * 100
            },
            {
              title: 'Phishing Tests',
              value: `${userStats.phishingTestsPass}/${userStats.phishingTestsTotal}`,
              change: '80% success rate',
              icon: Target,
              color: 'from-orange-500 to-red-500',
              bgColor: 'bg-orange-50',
              progress: (userStats.phishingTestsPass / userStats.phishingTestsTotal) * 100
            },
            {
              title: 'Leaderboard Rank',
              value: `#${userStats.rank}`,
              change: `of ${userStats.totalUsers} users`,
              icon: Trophy,
              color: 'from-purple-500 to-violet-500',
              bgColor: 'bg-purple-50',
              progress: ((userStats.totalUsers - userStats.rank) / userStats.totalUsers) * 100
            }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`card-elevated p-6 group hover:scale-105 transition-all duration-300 ${stat.bgColor} border-0`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`bg-gradient-to-r ${stat.color} p-3 rounded-2xl shadow-lg`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.title}</div>
                  </div>
                </div>
                <div className="progress-modern mb-2">
                  <div 
                    className="progress-fill"
                    style={{ width: `${stat.progress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600">{stat.change}</p>
              </div>
            );
          })}
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-8 p-2">
          <nav className="flex space-x-2">
            {[
              { id: 'overview', label: 'Overview', icon: Shield },
              { id: 'training', label: 'Training', icon: BookOpen },
              { id: 'badges', label: 'Badges', icon: Award },
              { id: 'leaderboard', label: 'Leaderboard', icon: Trophy }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Activity */}
            <div className="card-elevated p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Clock className="h-5 w-5 mr-2 text-blue-600" />
                Recent Activity
              </h3>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                    <div className={`p-3 rounded-xl ${
                      activity.type === 'training' ? 'bg-blue-100' :
                      activity.type === 'phishing' ? 'bg-orange-100' : 'bg-purple-100'
                    }`}>
                      {activity.type === 'training' && <BookOpen className="h-5 w-5 text-blue-600" />}
                      {activity.type === 'phishing' && <Target className="h-5 w-5 text-orange-600" />}
                      {activity.type === 'badge' && <Award className="h-5 w-5 text-purple-600" />}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{activity.title}</p>
                      <p className="text-sm text-gray-600">{activity.date}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      {activity.points && (
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-lg text-xs font-medium">
                          +{activity.points} pts
                        </span>
                      )}
                      {activity.completed && <CheckCircle className="h-5 w-5 text-green-500" />}
                      {!activity.completed && <Clock className="h-5 w-5 text-orange-500" />}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Training */}
            <div className="card-elevated p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                Upcoming Training
              </h3>
              <div className="space-y-4">
                {upcomingTraining.map((training, index) => (
                  <div key={index} className="group border border-gray-200 rounded-2xl p-4 hover:shadow-lg transition-all duration-300 hover:border-blue-300">
                    <div className="flex items-start space-x-4">
                      <img 
                        src={training.thumbnail} 
                        alt={training.title}
                        className="w-16 h-16 rounded-xl object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {training.title}
                          </h4>
                          <span className={`px-2 py-1 text-xs rounded-lg font-medium ${
                            training.priority === 'high' ? 'bg-red-100 text-red-800' :
                            training.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {training.priority === 'high' ? 'High Priority' :
                             training.priority === 'medium' ? 'Medium Priority' : 'Low Priority'}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {training.duration}
                          </span>
                          <span>{training.dueDate}</span>
                        </div>
                        {training.progress > 0 && (
                          <div className="progress-modern mb-3">
                            <div 
                              className="progress-fill"
                              style={{ width: `${training.progress}%` }}
                            ></div>
                          </div>
                        )}
                        <button
                          onClick={() => onNavigate('training')}
                          className="w-full btn-primary flex items-center justify-center"
                        >
                          <Play className="h-4 w-4 mr-2" />
                          {training.progress > 0 ? 'Continue' : 'Start Training'}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'training' && (
          <div className="card-elevated p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Your Training Path</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Phishing Awareness', completed: true, progress: 100, duration: '3 min', thumbnail: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=200&fit=crop' },
                { title: 'Password Security', completed: true, progress: 100, duration: '4 min', thumbnail: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=300&h=200&fit=crop' },
                { title: 'Social Engineering', completed: true, progress: 100, duration: '5 min', thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop' },
                { title: 'MFA Implementation', completed: false, progress: 60, duration: '3 min', thumbnail: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=300&h=200&fit=crop' },
                { title: 'Ransomware Protection', completed: false, progress: 0, duration: '4 min', thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=300&h=200&fit=crop' },
                { title: 'Data Privacy Laws', completed: false, progress: 0, duration: '6 min', thumbnail: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=300&h=200&fit=crop' }
              ].map((module, index) => (
                <div key={index} className="group border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-blue-300">
                  <img 
                    src={module.thumbnail} 
                    alt={module.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-gray-900">{module.title}</h4>
                      {module.completed && <CheckCircle className="h-5 w-5 text-green-500" />}
                    </div>
                    <div className="progress-modern mb-3">
                      <div 
                        className="progress-fill"
                        style={{ width: `${module.progress}%` }}
                      ></div>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-600">{module.duration}</span>
                      <span className="text-sm font-medium text-blue-600">{module.progress}% complete</span>
                    </div>
                    <button
                      onClick={() => onNavigate('training')}
                      className={`w-full py-3 px-4 rounded-xl font-medium transition-all duration-200 ${
                        module.completed 
                          ? 'btn-secondary' 
                          : 'btn-primary'
                      }`}
                    >
                      {module.completed ? 'Review' : 'Continue'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'badges' && (
          <div className="card-elevated p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Achievement Badges</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {badges.map((badge, index) => (
                <div key={index} className={`border rounded-2xl p-6 text-center transition-all duration-300 ${
                  badge.earned 
                    ? 'border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-lg transform hover:scale-105' 
                    : 'border-gray-200 bg-gray-50 opacity-60'
                }`}>
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${getRarityColor(badge.rarity)} flex items-center justify-center text-2xl shadow-lg`}>
                    {badge.icon}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{badge.name}</h4>
                  <p className="text-sm text-gray-600 mb-4">{badge.description}</p>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                    badge.rarity === 'legendary' ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white' :
                    badge.rarity === 'epic' ? 'bg-gradient-to-r from-purple-400 to-purple-500 text-white' :
                    badge.rarity === 'rare' ? 'bg-gradient-to-r from-blue-400 to-blue-500 text-white' :
                    'bg-gradient-to-r from-gray-400 to-gray-500 text-white'
                  }`}>
                    {badge.rarity.toUpperCase()}
                  </span>
                  {badge.earned ? (
                    <div className="mt-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Earned
                      </span>
                    </div>
                  ) : (
                    <div className="mt-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                        <Clock className="h-3 w-3 mr-1" />
                        In Progress
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'leaderboard' && (
          <div className="card-elevated p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <Trophy className="h-5 w-5 mr-2 text-yellow-500" />
              Security Champions Leaderboard
            </h3>
            <div className="space-y-4">
              {leaderboard.map((user, index) => (
                <div key={index} className={`flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 hover:shadow-lg ${
                  user.isCurrentUser ? 'border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 ring-2 ring-blue-500 ring-opacity-20' : 'border-gray-200 hover:border-gray-300'
                }`}>
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm ${
                      user.rank === 1 ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg' :
                      user.rank === 2 ? 'bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800 shadow-lg' :
                      user.rank === 3 ? 'bg-gradient-to-r from-orange-400 to-red-500 text-white shadow-lg' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      {user.rank === 1 ? '🥇' : user.rank === 2 ? '🥈' : user.rank === 3 ? '🥉' : user.rank}
                    </div>
                    <img 
                      src={user.avatar} 
                      alt={user.name}
                      className="w-12 h-12 rounded-xl object-cover ring-2 ring-white shadow-md"
                    />
                    <div>
                      <p className={`font-semibold ${user.isCurrentUser ? 'text-blue-900' : 'text-gray-900'}`}>
                        {user.name}
                        {user.isCurrentUser && <span className="ml-2 text-blue-600">(You)</span>}
                      </p>
                      <p className="text-sm text-gray-600">{user.department}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-900">{user.score}</p>
                    <p className="text-sm text-gray-600">Security Score</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeeDashboard;