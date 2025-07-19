import React, { useState, useEffect } from 'react';
import { Users, Target, BookOpen, BarChart3, AlertTriangle, TrendingUp, Calendar, Download, Plus, Filter, Shield, Zap, Globe, Award } from 'lucide-react';

interface AdminDashboardProps {
  onNavigate: (view: string) => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const orgStats = {
    totalUsers: 247,
    activeUsers: 198,
    completionRate: 78,
    avgRiskScore: 82,
    phishingClickRate: 12,
    trainingProgress: 65,
    weeklyGrowth: 8.5,
    monthlyIncidents: 3
  };

  const departmentRisks = [
    { name: 'Sales', users: 45, riskScore: 75, trend: 'up', change: 5, color: 'from-red-500 to-pink-500' },
    { name: 'Marketing', users: 32, riskScore: 88, trend: 'up', change: 3, color: 'from-blue-500 to-indigo-500' },
    { name: 'IT', users: 28, riskScore: 95, trend: 'stable', change: 0, color: 'from-green-500 to-emerald-500' },
    { name: 'HR', users: 18, riskScore: 82, trend: 'down', change: -2, color: 'from-purple-500 to-violet-500' },
    { name: 'Finance', users: 25, riskScore: 79, trend: 'down', change: -4, color: 'from-amber-500 to-orange-500' },
    { name: 'Operations', users: 42, riskScore: 71, trend: 'up', change: 8, color: 'from-teal-500 to-cyan-500' }
  ];

  const recentCampaigns = [
    { 
      name: 'Q4 Phishing Test', 
      type: 'Phishing Simulation', 
      status: 'Active', 
      targets: 247, 
      clicked: 29, 
      reported: 12,
      startDate: '2024-01-15',
      thumbnail: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=200&fit=crop'
    },
    { 
      name: 'Holiday Security Awareness', 
      type: 'Training Campaign', 
      status: 'Completed', 
      targets: 247, 
      completed: 198, 
      passed: 185,
      startDate: '2024-01-10',
      thumbnail: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=300&h=200&fit=crop'
    },
    { 
      name: 'New Hire Onboarding', 
      type: 'Training Path', 
      status: 'Ongoing', 
      targets: 15, 
      completed: 8, 
      passed: 7,
      startDate: '2024-01-08',
      thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=200&fit=crop'
    }
  ];

  const riskAlerts = [
    { severity: 'high', message: 'Sales team phishing click rate increased by 15%', time: '2 hours ago', icon: Target },
    { severity: 'medium', message: '23 users have incomplete training modules', time: '4 hours ago', icon: BookOpen },
    { severity: 'low', message: 'Monthly security report is ready for review', time: '1 day ago', icon: BarChart3 }
  ];

  const quickStats = [
    {
      title: 'Total Users',
      value: orgStats.totalUsers,
      change: `+${orgStats.weeklyGrowth}%`,
      icon: Users,
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Avg Risk Score',
      value: orgStats.avgRiskScore,
      change: '+8% improvement',
      icon: Shield,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Phishing Click Rate',
      value: `${orgStats.phishingClickRate}%`,
      change: '-3% this quarter',
      icon: Target,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50'
    },
    {
      title: 'Training Progress',
      value: `${orgStats.trainingProgress}%`,
      change: 'On track for Q1 goals',
      icon: BookOpen,
      color: 'from-purple-500 to-violet-500',
      bgColor: 'bg-purple-50'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
            <div className="relative">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">Security Operations Center</h1>
                  <p className="text-indigo-100 text-lg mb-4">Monitor and manage your organization's security posture</p>
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center">
                      <Zap className="h-5 w-5 mr-2 text-yellow-300" />
                      <span className="font-medium">{orgStats.monthlyIncidents} incidents this month</span>
                    </div>
                    <div className="flex items-center">
                      <Globe className="h-5 w-5 mr-2 text-green-300" />
                      <span className="font-medium">99.9% uptime</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <button className="btn-secondary bg-white/20 border-white/30 text-white hover:bg-white/30">
                    <Download className="h-4 w-4 mr-2" />
                    Export Report
                  </button>
                  <button
                    onClick={() => onNavigate('phishing')}
                    className="btn-primary bg-white text-indigo-600 hover:bg-gray-50"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    New Campaign
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {quickStats.map((stat, index) => {
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
                <p className="text-sm text-gray-600">{stat.change}</p>
              </div>
            );
          })}
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-8 p-2">
          <nav className="flex space-x-2">
            {[
              { id: 'overview', label: 'Overview', icon: BarChart3 },
              { id: 'campaigns', label: 'Campaigns', icon: Target },
              { id: 'users', label: 'User Management', icon: Users },
              { id: 'reports', label: 'Reports', icon: Download }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Department Risk Assessment */}
            <div className="lg:col-span-2 card-elevated p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-900">Department Risk Assessment</h3>
                <button className="text-blue-600 hover:text-blue-700 font-medium">View All</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {departmentRisks.map((dept, index) => (
                  <div key={index} className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-gray-900">{dept.name}</h4>
                      <div className="flex items-center space-x-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          dept.riskScore >= 90 ? 'bg-green-100 text-green-800' :
                          dept.riskScore >= 80 ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {dept.riskScore}
                        </span>
                        <span className={`text-xs font-medium ${
                          dept.trend === 'up' ? 'text-green-600' :
                          dept.trend === 'down' ? 'text-red-600' :
                          'text-gray-600'
                        }`}>
                          {dept.change > 0 ? '+' : ''}{dept.change}%
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                      <span>{dept.users} users</span>
                      <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${dept.color}`}></div>
                    </div>
                    <div className="progress-modern">
                      <div 
                        className={`h-full rounded-full bg-gradient-to-r ${dept.color} transition-all duration-500`}
                        style={{ width: `${dept.riskScore}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Risk Alerts */}
            <div className="card-elevated p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Risk Alerts</h3>
              <div className="space-y-4">
                {riskAlerts.map((alert, index) => {
                  const Icon = alert.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3 p-4 rounded-2xl border border-gray-200 hover:shadow-md transition-all duration-300">
                      <div className={`p-2 rounded-xl ${
                        alert.severity === 'high' ? 'bg-red-100' :
                        alert.severity === 'medium' ? 'bg-yellow-100' :
                        'bg-blue-100'
                      }`}>
                        <Icon className={`h-4 w-4 ${
                          alert.severity === 'high' ? 'text-red-600' :
                          alert.severity === 'medium' ? 'text-yellow-600' :
                          'text-blue-600'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{alert.message}</p>
                        <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'campaigns' && (
          <div className="card-elevated p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">Campaign Management</h3>
              <div className="flex space-x-3">
                <button className="btn-secondary">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </button>
                <button
                  onClick={() => onNavigate('phishing')}
                  className="btn-primary"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  New Campaign
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentCampaigns.map((campaign, index) => (
                <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 group">
                  <img 
                    src={campaign.thumbnail} 
                    alt={campaign.name}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="font-semibold text-gray-900">{campaign.name}</h4>
                        <p className="text-sm text-gray-600">{campaign.type}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        campaign.status === 'Active' ? 'bg-green-100 text-green-800' :
                        campaign.status === 'Completed' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {campaign.status}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center">
                        <p className="text-xl font-bold text-gray-900">{campaign.targets}</p>
                        <p className="text-xs text-gray-600">Targets</p>
                      </div>
                      {campaign.clicked !== undefined && (
                        <div className="text-center">
                          <p className="text-xl font-bold text-orange-600">{campaign.clicked}</p>
                          <p className="text-xs text-gray-600">Clicked</p>
                        </div>
                      )}
                      {campaign.completed !== undefined && (
                        <div className="text-center">
                          <p className="text-xl font-bold text-blue-600">{campaign.completed}</p>
                          <p className="text-xs text-gray-600">Completed</p>
                        </div>
                      )}
                      {campaign.reported !== undefined && (
                        <div className="text-center">
                          <p className="text-xl font-bold text-green-600">{campaign.reported}</p>
                          <p className="text-xs text-gray-600">Reported</p>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Started: {campaign.startDate}</span>
                      <button className="text-blue-600 hover:text-blue-700 font-medium">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'users' && (
          <div className="card-elevated p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">User Management</h3>
              <div className="flex space-x-3">
                <button className="btn-secondary">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </button>
                <button className="btn-primary">
                  <Plus className="h-4 w-4 mr-2" />
                  Add User
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 px-6 font-semibold text-gray-600">User</th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-600">Department</th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-600">Risk Score</th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-600">Training Progress</th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-600">Last Activity</th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'Sarah Chen', email: 'sarah.chen@company.com', dept: 'IT', risk: 95, progress: 100, lastActivity: '2 hours ago', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face' },
                    { name: 'Mike Johnson', email: 'mike.johnson@company.com', dept: 'Sales', risk: 72, progress: 80, lastActivity: '1 day ago', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face' },
                    { name: 'Emma Davis', email: 'emma.davis@company.com', dept: 'HR', risk: 88, progress: 90, lastActivity: '3 hours ago', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face' },
                    { name: 'Tom Wilson', email: 'tom.wilson@company.com', dept: 'Finance', risk: 65, progress: 60, lastActivity: '2 days ago', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face' }
                  ].map((user, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6">
                        <div className="flex items-center space-x-3">
                          <img 
                            src={user.avatar} 
                            alt={user.name}
                            className="w-10 h-10 rounded-xl object-cover"
                          />
                          <div>
                            <div className="font-medium text-gray-900">{user.name}</div>
                            <div className="text-sm text-gray-500">{user.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-gray-900">{user.dept}</td>
                      <td className="py-4 px-6">
                        <span className={`inline-flex px-3 py-1 text-sm font-medium rounded-full ${
                          user.risk >= 90 ? 'bg-green-100 text-green-800' :
                          user.risk >= 80 ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {user.risk}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center space-x-3">
                          <div className="flex-1 progress-modern">
                            <div className="progress-fill" style={{ width: `${user.progress}%` }}></div>
                          </div>
                          <span className="text-sm font-medium text-gray-900">{user.progress}%</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-gray-500">{user.lastActivity}</td>
                      <td className="py-4 px-6">
                        <div className="flex space-x-2">
                          <button className="text-blue-600 hover:text-blue-700 font-medium">Edit</button>
                          <button className="text-red-600 hover:text-red-700 font-medium">Remove</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'reports' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card-elevated p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Reports</h3>
              <div className="space-y-4">
                {[
                  { name: 'Monthly Security Summary', description: 'Comprehensive overview of security metrics', icon: BarChart3, color: 'from-blue-500 to-indigo-500' },
                  { name: 'Phishing Campaign Results', description: 'Detailed analysis of recent campaigns', icon: Target, color: 'from-orange-500 to-red-500' },
                  { name: 'Training Completion Report', description: 'Department-wise training progress', icon: BookOpen, color: 'from-green-500 to-emerald-500' },
                  { name: 'Risk Assessment Analysis', description: 'User and department risk breakdown', icon: AlertTriangle, color: 'from-purple-500 to-violet-500' }
                ].map((report, index) => {
                  const Icon = report.icon;
                  return (
                    <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-2xl hover:shadow-lg transition-all duration-300 group">
                      <div className="flex items-center space-x-4">
                        <div className={`bg-gradient-to-r ${report.color} p-3 rounded-xl shadow-lg`}>
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{report.name}</h4>
                          <p className="text-sm text-gray-600">{report.description}</p>
                        </div>
                      </div>
                      <button className="btn-primary">
                        Generate
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="card-elevated p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Scheduled Reports</h3>
              <div className="space-y-4">
                {[
                  { name: 'Weekly Risk Update', frequency: 'Every Monday', nextRun: 'Jan 22, 2024' },
                  { name: 'Monthly Executive Summary', frequency: 'First of each month', nextRun: 'Feb 1, 2024' },
                  { name: 'Quarterly Compliance Report', frequency: 'Every quarter', nextRun: 'Apr 1, 2024' }
                ].map((schedule, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-2xl hover:shadow-lg transition-all duration-300">
                    <div>
                      <h4 className="font-semibold text-gray-900">{schedule.name}</h4>
                      <p className="text-sm text-gray-600">{schedule.frequency}</p>
                      <p className="text-xs text-gray-500">Next: {schedule.nextRun}</p>
                    </div>
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-700 font-medium">Edit</button>
                      <button className="text-red-600 hover:text-red-700 font-medium">Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;