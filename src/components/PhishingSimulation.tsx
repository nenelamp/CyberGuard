import React, { useState, useEffect } from 'react';
import { Mail, Target, Users, Calendar, Play, Pause, BarChart3, Settings, Plus, Eye, Download, AlertTriangle, TrendingUp, Clock, CheckCircle, Zap, Star } from 'lucide-react';

interface PhishingSimulationProps {
  onNavigate: (view: string) => void;
}

const PhishingSimulation: React.FC<PhishingSimulationProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('campaigns');
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [campaignForm, setCampaignForm] = useState({
    name: '',
    description: '',
    template: '',
    targets: '',
    schedule: 'immediate',
    scheduledDate: '',
    difficulty: 'medium'
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const templates = [
    {
      id: 'banking',
      name: 'Banking Security Alert',
      category: 'Financial',
      difficulty: 'Medium',
      description: 'Urgent account verification request from major bank',
      preview: 'Your account has been temporarily suspended. Click here to verify your identity immediately.',
      clickRate: '18%',
      reportRate: '12%',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      id: 'it-support',
      name: 'IT Support Ticket',
      category: 'Internal',
      difficulty: 'Hard',
      description: 'Internal IT department requesting credentials',
      preview: 'Your password will expire in 24 hours. Please update your credentials using the secure portal.',
      clickRate: '25%',
      reportRate: '8%',
      color: 'from-purple-500 to-violet-500'
    },
    {
      id: 'shipping',
      name: 'Package Delivery',
      category: 'Logistics',
      difficulty: 'Easy',
      description: 'Failed package delivery notification',
      preview: 'We attempted to deliver your package but no one was home. Click to reschedule delivery.',
      clickRate: '35%',
      reportRate: '15%',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'ceo-fraud',
      name: 'Executive Request',
      category: 'Business',
      difficulty: 'Hard',
      description: 'Urgent request from company executive',
      preview: 'I need you to process an urgent wire transfer for a confidential acquisition. Time sensitive.',
      clickRate: '22%',
      reportRate: '6%',
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'social-media',
      name: 'Social Media Alert',
      category: 'Social',
      difficulty: 'Medium',
      description: 'Suspicious activity on social account',
      preview: 'Someone tried to access your account from an unknown device. Secure your account now.',
      clickRate: '28%',
      reportRate: '10%',
      color: 'from-orange-500 to-yellow-500'
    },
    {
      id: 'cloud-storage',
      name: 'Cloud Storage Warning',
      category: 'Technology',
      difficulty: 'Medium',
      description: 'Cloud storage account security warning',
      preview: 'Your cloud storage is nearly full and may be compromised. Upgrade your security settings.',
      clickRate: '20%',
      reportRate: '14%',
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  const activeCampaigns = [
    {
      id: 1,
      name: 'Q4 Security Assessment',
      template: 'Banking Security Alert',
      status: 'Active',
      sent: 247,
      opened: 198,
      clicked: 45,
      reported: 23,
      startDate: '2024-01-15',
      endDate: '2024-01-22',
      progress: 65,
      thumbnail: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=200&fit=crop'
    },
    {
      id: 2,
      name: 'Holiday Awareness Test',
      template: 'Package Delivery',
      status: 'Completed',
      sent: 247,
      opened: 225,
      clicked: 78,
      reported: 34,
      startDate: '2024-01-08',
      endDate: '2024-01-15',
      progress: 100,
      thumbnail: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=300&h=200&fit=crop'
    },
    {
      id: 3,
      name: 'Executive Target Test',
      template: 'Executive Request',
      status: 'Scheduled',
      sent: 25,
      opened: 0,
      clicked: 0,
      reported: 0,
      startDate: '2024-01-20',
      endDate: '2024-01-27',
      progress: 0,
      thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=200&fit=crop'
    }
  ];

  const realtimeEvents = [
    { time: '2 min ago', event: 'User clicked link', user: 'sarah.chen@company.com', campaign: 'Q4 Security Assessment', type: 'click' },
    { time: '5 min ago', event: 'Email reported', user: 'mike.johnson@company.com', campaign: 'Q4 Security Assessment', type: 'report' },
    { time: '12 min ago', event: 'User clicked link', user: 'emma.davis@company.com', campaign: 'Q4 Security Assessment', type: 'click' },
    { time: '18 min ago', event: 'Email opened', user: 'tom.wilson@company.com', campaign: 'Q4 Security Assessment', type: 'open' }
  ];

  const departmentStats = [
    { name: 'Sales', sent: 45, clicked: 8, reported: 5, clickRate: 17.8, reportRate: 11.1, color: 'from-red-500 to-pink-500' },
    { name: 'Marketing', sent: 32, clicked: 12, reported: 2, clickRate: 37.5, reportRate: 6.3, color: 'from-orange-500 to-yellow-500' },
    { name: 'IT', sent: 28, clicked: 3, reported: 8, clickRate: 10.7, reportRate: 28.6, color: 'from-green-500 to-emerald-500' },
    { name: 'HR', sent: 18, clicked: 4, reported: 3, clickRate: 22.2, reportRate: 16.7, color: 'from-blue-500 to-indigo-500' },
    { name: 'Finance', sent: 25, clicked: 6, reported: 2, clickRate: 24.0, reportRate: 8.0, color: 'from-purple-500 to-violet-500' },
    { name: 'Operations', sent: 42, clicked: 9, reported: 6, clickRate: 21.4, reportRate: 14.3, color: 'from-teal-500 to-cyan-500' }
  ];

  const handleCreateCampaign = () => {
    console.log('Creating campaign:', campaignForm);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
            <div className="relative">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">Phishing Simulation Center</h1>
                  <p className="text-orange-100 text-lg mb-4">Create, manage, and monitor phishing awareness campaigns</p>
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center">
                      <Zap className="h-5 w-5 mr-2 text-yellow-300" />
                      <span className="font-medium">Real-time tracking</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-5 w-5 mr-2 text-yellow-300" />
                      <span className="font-medium">AI-powered templates</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <button className="btn-secondary bg-white/20 border-white/30 text-white hover:bg-white/30">
                    <Download className="h-4 w-4 mr-2" />
                    Export Results
                  </button>
                  <button
                    onClick={() => setActiveTab('create')}
                    className="btn-primary bg-white text-orange-600 hover:bg-gray-50"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    New Campaign
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-8 p-2">
          <nav className="flex space-x-2">
            {[
              { id: 'campaigns', label: 'Active Campaigns', icon: Target },
              { id: 'templates', label: 'Email Templates', icon: Mail },
              { id: 'analytics', label: 'Analytics', icon: BarChart3 },
              { id: 'create', label: 'Create Campaign', icon: Plus }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg'
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
        {activeTab === 'campaigns' && (
          <div className="space-y-8">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  title: 'Active Campaigns',
                  value: '3',
                  change: '+1 this week',
                  icon: Target,
                  color: 'from-blue-500 to-indigo-500',
                  bgColor: 'bg-blue-50'
                },
                {
                  title: 'Total Emails Sent',
                  value: '519',
                  change: '+47 today',
                  icon: Mail,
                  color: 'from-green-500 to-emerald-500',
                  bgColor: 'bg-green-50'
                },
                {
                  title: 'Click Rate',
                  value: '18.2%',
                  change: '-3% improvement',
                  icon: TrendingUp,
                  color: 'from-orange-500 to-red-500',
                  bgColor: 'bg-orange-50'
                },
                {
                  title: 'Report Rate',
                  value: '23.1%',
                  change: '+8% improvement',
                  icon: CheckCircle,
                  color: 'from-purple-500 to-violet-500',
                  bgColor: 'bg-purple-50'
                }
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className={`card-elevated p-6 group hover:scale-105 transition-all duration-300 ${stat.bgColor} border-0`}
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

            {/* Active Campaigns List */}
            <div className="card-elevated p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Campaign Overview</h3>
              <div className="space-y-6">
                {activeCampaigns.map((campaign) => (
                  <div key={campaign.id} className="border-2 border-gray-200 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
                    <div className="flex">
                      <img 
                        src={campaign.thumbnail} 
                        alt={campaign.name}
                        className="w-32 h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="flex-1 p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h4 className="font-bold text-gray-900 text-xl">{campaign.name}</h4>
                            <p className="text-gray-600">{campaign.template}</p>
                          </div>
                          <div className="flex items-center space-x-3">
                            <span className={`px-4 py-2 rounded-2xl text-sm font-bold ${
                              campaign.status === 'Active' ? 'bg-green-100 text-green-800' :
                              campaign.status === 'Completed' ? 'bg-blue-100 text-blue-800' :
                              'bg-yellow-100 text-yellow-800'
                            }`}>
                              {campaign.status}
                            </span>
                            <button className="text-blue-600 hover:text-blue-700 p-2 rounded-xl hover:bg-blue-50">
                              <Eye className="h-5 w-5" />
                            </button>
                            <button className="text-gray-400 hover:text-gray-600 p-2 rounded-xl hover:bg-gray-50">
                              <Settings className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-5 gap-4 mb-4">
                          <div className="text-center">
                            <p className="text-2xl font-bold text-gray-900">{campaign.sent}</p>
                            <p className="text-sm text-gray-600 font-medium">Sent</p>
                          </div>
                          <div className="text-center">
                            <p className="text-2xl font-bold text-blue-600">{campaign.opened}</p>
                            <p className="text-sm text-gray-600 font-medium">Opened</p>
                          </div>
                          <div className="text-center">
                            <p className="text-2xl font-bold text-orange-600">{campaign.clicked}</p>
                            <p className="text-sm text-gray-600 font-medium">Clicked</p>
                          </div>
                          <div className="text-center">
                            <p className="text-2xl font-bold text-green-600">{campaign.reported}</p>
                            <p className="text-sm text-gray-600 font-medium">Reported</p>
                          </div>
                          <div className="text-center">
                            <p className="text-2xl font-bold text-purple-600">{Math.round((campaign.clicked / campaign.sent) * 100)}%</p>
                            <p className="text-sm text-gray-600 font-medium">Click Rate</p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span className="flex items-center bg-gray-100 px-3 py-2 rounded-xl">
                              <Calendar className="h-4 w-4 mr-2" />
                              {campaign.startDate} - {campaign.endDate}
                            </span>
                            <span className="flex items-center bg-gray-100 px-3 py-2 rounded-xl">
                              <Clock className="h-4 w-4 mr-2" />
                              {campaign.progress}% Complete
                            </span>
                          </div>
                          {campaign.status === 'Active' && (
                            <div className="flex space-x-2">
                              <button className="bg-red-100 text-red-700 px-4 py-2 rounded-xl hover:bg-red-200 font-medium">
                                <Pause className="h-4 w-4 inline mr-2" />
                                Pause
                              </button>
                              <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-xl hover:bg-blue-200 font-medium">
                                View Live
                              </button>
                            </div>
                          )}
                        </div>
                        
                        <div className="mt-4">
                          <div className="progress-modern">
                            <div 
                              className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-500"
                              style={{ width: `${campaign.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Real-time Activity Feed */}
            <div className="card-elevated p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-gray-900">Real-time Activity</h3>
                <div className="flex items-center text-green-600 bg-green-100 px-4 py-2 rounded-2xl">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-3"></div>
                  <span className="font-bold">Live</span>
                </div>
              </div>
              <div className="space-y-4">
                {realtimeEvents.map((event, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl hover:shadow-md transition-all duration-300">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-2xl ${
                        event.type === 'click' ? 'bg-orange-100' :
                        event.type === 'report' ? 'bg-green-100' :
                        'bg-blue-100'
                      }`}>
                        {event.type === 'click' && <Target className="h-5 w-5 text-orange-600" />}
                        {event.type === 'report' && <CheckCircle className="h-5 w-5 text-green-600" />}
                        {event.type === 'open' && <Eye className="h-5 w-5 text-blue-600" />}
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{event.event}</p>
                        <p className="text-gray-600">{event.user} • {event.campaign}</p>
                      </div>
                    </div>
                    <span className="text-gray-500 font-medium">{event.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'templates' && (
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold text-gray-900">Email Templates</h3>
              <button className="btn-primary">
                <Plus className="h-4 w-4 mr-2" />
                Create Template
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {templates.map((template) => (
                <div key={template.id} className="card-elevated p-6 group hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-2 rounded-2xl text-sm font-bold ${
                      template.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                      template.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {template.difficulty}
                    </span>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-2 rounded-2xl font-medium">
                      {template.category}
                    </span>
                  </div>
                  
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">{template.name}</h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">{template.description}</p>
                  
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-2xl border-l-4 border-orange-400 mb-4">
                    <p className="text-sm text-gray-700 italic">"{template.preview}"</p>
                  </div>
                  
                  <div className="flex justify-between text-sm text-gray-600 mb-6">
                    <span>Click Rate: <strong className="text-orange-600">{template.clickRate}</strong></span>
                    <span>Report Rate: <strong className="text-green-600">{template.reportRate}</strong></span>
                  </div>
                  
                  <div className="flex space-x-3">
                    <button className="flex-1 btn-primary">
                      Use Template
                    </button>
                    <button className="px-4 py-3 border-2 border-gray-300 rounded-2xl hover:bg-gray-50 transition-all duration-200">
                      <Eye className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="space-y-8">
            {/* Department Performance */}
            <div className="card-elevated p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Department Performance</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {departmentStats.map((dept, index) => (
                  <div key={index} className="border-2 border-gray-200 rounded-3xl p-6 hover:shadow-xl transition-all duration-300 group">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-bold text-gray-900 text-lg">{dept.name}</h4>
                      <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${dept.color}`}></div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-gray-900">{dept.sent}</p>
                        <p className="text-sm text-gray-600 font-medium">Sent</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-orange-600">{dept.clicked}</p>
                        <p className="text-sm text-gray-600 font-medium">Clicked</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600 font-medium">Click Rate</span>
                        <span className={`font-bold ${
                          dept.clickRate > 25 ? 'text-red-600' :
                          dept.clickRate > 15 ? 'text-orange-600' :
                          'text-green-600'
                        }`}>
                          {dept.clickRate.toFixed(1)}%
                        </span>
                      </div>
                      <div className="progress-modern">
                        <div 
                          className={`h-full rounded-full ${
                            dept.clickRate > 25 ? 'bg-red-500' :
                            dept.clickRate > 15 ? 'bg-orange-500' :
                            'bg-green-500'
                          }`}
                          style={{ width: `${Math.min(dept.clickRate * 2, 100)}%` }}
                        ></div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600 font-medium">Report Rate</span>
                        <span className={`font-bold ${
                          dept.reportRate > 20 ? 'text-green-600' :
                          dept.reportRate > 10 ? 'text-yellow-600' :
                          'text-red-600'
                        }`}>
                          {dept.reportRate.toFixed(1)}%
                        </span>
                      </div>
                      <div className="progress-modern">
                        <div 
                          className={`h-full rounded-full ${
                            dept.reportRate > 20 ? 'bg-green-500' :
                            dept.reportRate > 10 ? 'bg-yellow-500' :
                            'bg-red-500'
                          }`}
                          style={{ width: `${Math.min(dept.reportRate * 3, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Template Performance */}
            <div className="card-elevated p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Template Performance Analysis</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {templates.slice(0, 6).map((template, index) => (
                  <div key={index} className="border-2 border-gray-200 rounded-3xl p-6 hover:shadow-lg transition-all duration-300">
                    <h4 className="font-bold text-gray-900 mb-4 text-lg">{template.name}</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 font-medium">Click Rate</span>
                        <span className="font-bold text-orange-600">{template.clickRate}</span>
                      </div>
                      <div className="progress-modern">
                        <div 
                          className="h-full rounded-full bg-orange-500"
                          style={{ width: template.clickRate }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 font-medium">Report Rate</span>
                        <span className="font-bold text-green-600">{template.reportRate}</span>
                      </div>
                      <div className="progress-modern">
                        <div 
                          className="h-full rounded-full bg-green-500"
                          style={{ width: template.reportRate }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'create' && (
          <div className="max-w-4xl mx-auto">
            <div className="card-elevated p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Create New Phishing Campaign</h3>
              
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-3">
                      Campaign Name
                    </label>
                    <input
                      type="text"
                      value={campaignForm.name}
                      onChange={(e) => setCampaignForm({ ...campaignForm, name: e.target.value })}
                      className="input-modern"
                      placeholder="Q1 Security Assessment"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-3">
                      Target Groups
                    </label>
                    <select
                      value={campaignForm.targets}
                      onChange={(e) => setCampaignForm({ ...campaignForm, targets: e.target.value })}
                      className="input-modern"
                    >
                      <option value="">Select target group</option>
                      <option value="all">All Employees</option>
                      <option value="sales">Sales Department</option>
                      <option value="marketing">Marketing Department</option>
                      <option value="it">IT Department</option>
                      <option value="hr">HR Department</option>
                      <option value="finance">Finance Department</option>
                      <option value="executives">Executives</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">
                    Description
                  </label>
                  <textarea
                    value={campaignForm.description}
                    onChange={(e) => setCampaignForm({ ...campaignForm, description: e.target.value })}
                    rows={4}
                    className="input-modern"
                    placeholder="Brief description of the campaign goals and target behavior"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-4">
                    Email Template
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {templates.slice(0, 6).map((template) => (
                      <div
                        key={template.id}
                        onClick={() => setSelectedTemplate(template.id)}
                        className={`border-2 rounded-2xl p-4 cursor-pointer transition-all duration-300 ${
                          selectedTemplate === template.id
                            ? 'border-blue-500 bg-blue-50 shadow-lg'
                            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-bold text-gray-900">{template.name}</h4>
                          <span className={`text-xs px-2 py-1 rounded-xl font-medium ${
                            template.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                            template.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {template.difficulty}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">{template.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-3">
                      Schedule
                    </label>
                    <select
                      value={campaignForm.schedule}
                      onChange={(e) => setCampaignForm({ ...campaignForm, schedule: e.target.value })}
                      className="input-modern"
                    >
                      <option value="immediate">Send Immediately</option>
                      <option value="scheduled">Schedule for Later</option>
                      <option value="recurring">Recurring Campaign</option>
                    </select>
                  </div>

                  {campaignForm.schedule === 'scheduled' && (
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-3">
                        Scheduled Date
                      </label>
                      <input
                        type="datetime-local"
                        value={campaignForm.scheduledDate}
                        onChange={(e) => setCampaignForm({ ...campaignForm, scheduledDate: e.target.value })}
                        className="input-modern"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-3">
                      Difficulty Level
                    </label>
                    <select
                      value={campaignForm.difficulty}
                      onChange={(e) => setCampaignForm({ ...campaignForm, difficulty: e.target.value })}
                      className="input-modern"
                    >
                      <option value="easy">Easy (High Click Rate Expected)</option>
                      <option value="medium">Medium (Moderate Difficulty)</option>
                      <option value="hard">Hard (Low Click Rate Expected)</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-end space-x-4 pt-8 border-t-2 border-gray-100">
                  <button
                    type="button"
                    onClick={() => setActiveTab('campaigns')}
                    className="btn-secondary"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="bg-gray-100 text-gray-700 px-6 py-3 rounded-2xl hover:bg-gray-200 font-medium"
                  >
                    Save as Draft
                  </button>
                  <button
                    type="button"
                    onClick={handleCreateCampaign}
                    className="btn-primary"
                  >
                    Launch Campaign
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhishingSimulation;