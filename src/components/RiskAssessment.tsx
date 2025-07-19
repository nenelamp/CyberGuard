import React, { useState, useEffect } from 'react';
import { Shield, TrendingUp, TrendingDown, Users, Target, AlertTriangle, BarChart3, Filter, Download, Calendar, ChevronDown, ChevronUp, Star, Award, Zap } from 'lucide-react';

interface RiskAssessmentProps {
  onNavigate: (view: string) => void;
}

const RiskAssessment: React.FC<RiskAssessmentProps> = ({ onNavigate }) => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('30d');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [expandedSection, setExpandedSection] = useState<string | null>('overview');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const organizationScore = {
    current: 82,
    previous: 78,
    change: 4,
    trend: 'up',
    grade: 'B+',
    benchmarkPercentile: 75
  };

  const departmentRisks = [
    {
      name: 'IT Department',
      score: 95,
      change: 2,
      trend: 'up',
      users: 28,
      riskLevel: 'low',
      lastAssessment: '2 days ago',
      topRisks: ['Phishing susceptibility', 'Password hygiene'],
      strengths: ['Technical awareness', 'Incident reporting'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Sales',
      score: 68,
      change: -3,
      trend: 'down',
      users: 45,
      riskLevel: 'high',
      lastAssessment: '1 day ago',
      topRisks: ['Social engineering', 'Mobile security', 'Data sharing'],
      strengths: ['Training completion'],
      color: 'from-red-500 to-pink-500'
    },
    {
      name: 'Marketing',
      score: 75,
      change: 5,
      trend: 'up',
      users: 32,
      riskLevel: 'medium',
      lastAssessment: '3 days ago',
      topRisks: ['Phishing emails', 'Third-party tools'],
      strengths: ['Security awareness', 'Policy compliance'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'HR',
      score: 88,
      change: 1,
      trend: 'stable',
      users: 18,
      riskLevel: 'low',
      lastAssessment: '1 day ago',
      topRisks: ['Data privacy', 'Email security'],
      strengths: ['Training engagement', 'Policy knowledge'],
      color: 'from-blue-500 to-indigo-500'
    },
    {
      name: 'Finance',
      score: 79,
      change: -2,
      trend: 'down',
      users: 25,
      riskLevel: 'medium',
      lastAssessment: '2 days ago',
      topRisks: ['CEO fraud', 'Wire transfer fraud'],
      strengths: ['Verification procedures', 'Suspicious activity reporting'],
      color: 'from-purple-500 to-violet-500'
    },
    {
      name: 'Operations',
      score: 71,
      change: 8,
      trend: 'up',
      users: 42,
      riskLevel: 'medium',
      lastAssessment: '4 days ago',
      topRisks: ['Physical security', 'Device management'],
      strengths: ['Training improvement', 'Security protocols'],
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  const riskCategories = [
    {
      category: 'Phishing Susceptibility',
      score: 78,
      impact: 'High',
      trend: 'improving',
      affected: 45,
      description: 'Likelihood of employees falling for phishing attacks',
      recommendations: ['Increase phishing simulation frequency', 'Targeted training for high-risk users'],
      color: 'from-red-500 to-pink-500'
    },
    {
      category: 'Password Security',
      score: 85,
      impact: 'Medium',
      trend: 'stable',
      affected: 23,
      description: 'Password strength and management practices',
      recommendations: ['Enforce password manager adoption', 'Regular password policy updates'],
      color: 'from-blue-500 to-indigo-500'
    },
    {
      category: 'Social Engineering',
      score: 72,
      impact: 'High',
      trend: 'declining',
      affected: 67,
      description: 'Vulnerability to manipulation tactics',
      recommendations: ['Role-playing exercises', 'Awareness campaigns'],
      color: 'from-orange-500 to-red-500'
    },
    {
      category: 'Data Handling',
      score: 89,
      impact: 'Medium',
      trend: 'improving',
      affected: 12,
      description: 'Proper handling of sensitive information',
      recommendations: ['Data classification training', 'Access control reviews'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      category: 'Device Security',
      score: 81,
      impact: 'Medium',
      trend: 'stable',
      affected: 34,
      description: 'Security of work devices and BYOD',
      recommendations: ['Device encryption enforcement', 'Remote wipe capabilities'],
      color: 'from-purple-500 to-violet-500'
    },
    {
      category: 'Compliance Awareness',
      score: 92,
      impact: 'Low',
      trend: 'improving',
      affected: 8,
      description: 'Understanding of regulatory requirements',
      recommendations: ['Regular compliance updates', 'Industry-specific training'],
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  const riskIndicators = [
    {
      indicator: 'Failed Phishing Tests',
      value: '18.2%',
      threshold: '15%',
      status: 'warning',
      trend: 'down',
      change: '-3.1%',
      color: 'from-orange-500 to-red-500'
    },
    {
      indicator: 'Training Completion Rate',
      value: '87%',
      threshold: '90%',
      status: 'warning',
      trend: 'up',
      change: '+2%',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      indicator: 'Incident Reports',
      value: '42',
      threshold: '50',
      status: 'good',
      trend: 'up',
      change: '+15%',
      color: 'from-green-500 to-emerald-500'
    },
    {
      indicator: 'Policy Violations',
      value: '5',
      threshold: '10',
      status: 'good',
      trend: 'down',
      change: '-2',
      color: 'from-purple-500 to-violet-500'
    }
  ];

  const highRiskUsers = [
    { name: 'John Smith', department: 'Sales', score: 45, issues: ['Multiple phishing fails', 'Weak passwords'], lastActivity: '2 days ago', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face' },
    { name: 'Lisa Wong', department: 'Marketing', score: 52, issues: ['Compliance training overdue'], lastActivity: '1 day ago', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face' },
    { name: 'Mike Brown', department: 'Operations', score: 48, issues: ['Device security violations'], lastActivity: '3 days ago', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face' },
    { name: 'Sarah Davis', department: 'Finance', score: 41, issues: ['Social engineering susceptible'], lastActivity: '1 day ago', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face' }
  ];

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'low': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'high': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 80) return 'text-yellow-600';
    if (score >= 70) return 'text-orange-600';
    return 'text-red-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
            <div className="relative">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">Risk Assessment Center</h1>
                  <p className="text-purple-100 text-lg mb-4">Monitor and analyze your organization's security risk posture</p>
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center">
                      <Zap className="h-5 w-5 mr-2 text-yellow-300" />
                      <span className="font-medium">Real-time monitoring</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-5 w-5 mr-2 text-yellow-300" />
                      <span className="font-medium">AI-powered insights</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <select
                    value={selectedTimeframe}
                    onChange={(e) => setSelectedTimeframe(e.target.value)}
                    className="bg-white/20 border border-white/30 rounded-2xl px-4 py-2 text-white placeholder-white/70 backdrop-blur-sm"
                  >
                    <option value="7d">Last 7 days</option>
                    <option value="30d">Last 30 days</option>
                    <option value="90d">Last 90 days</option>
                    <option value="1y">Last year</option>
                  </select>
                  <button className="btn-secondary bg-white/20 border-white/30 text-white hover:bg-white/30">
                    <Download className="h-4 w-4 mr-2" />
                    Export Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Organization Score Overview */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 mb-8 text-white shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Award className="h-8 w-8 mr-3 text-yellow-300" />
                Overall Security Score
              </h2>
              <div className="flex items-baseline space-x-6 mb-4">
                <span className="text-6xl font-bold">{organizationScore.current}</span>
                <span className="text-2xl font-medium bg-white/20 px-4 py-2 rounded-2xl">{organizationScore.grade}</span>
                <div className={`flex items-center px-4 py-2 rounded-2xl text-lg font-medium ${
                  organizationScore.trend === 'up' ? 'bg-green-500 bg-opacity-30' : 'bg-red-500 bg-opacity-30'
                }`}>
                  {organizationScore.trend === 'up' ? (
                    <TrendingUp className="h-5 w-5 mr-2" />
                  ) : (
                    <TrendingDown className="h-5 w-5 mr-2" />
                  )}
                  {organizationScore.change > 0 ? '+' : ''}{organizationScore.change} points
                </div>
              </div>
              <p className="text-blue-100 text-lg">
                Better than {organizationScore.benchmarkPercentile}% of similar organizations
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="font-bold mb-4 text-lg">Risk Distribution</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Low Risk</span>
                  <div className="flex items-center">
                    <div className="w-16 h-2 bg-white/20 rounded-full mr-3">
                      <div className="w-3/4 h-full bg-green-400 rounded-full"></div>
                    </div>
                    <span className="font-medium">45%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Medium Risk</span>
                  <div className="flex items-center">
                    <div className="w-16 h-2 bg-white/20 rounded-full mr-3">
                      <div className="w-2/3 h-full bg-yellow-400 rounded-full"></div>
                    </div>
                    <span className="font-medium">38%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>High Risk</span>
                  <div className="flex items-center">
                    <div className="w-16 h-2 bg-white/20 rounded-full mr-3">
                      <div className="w-1/4 h-full bg-red-400 rounded-full"></div>
                    </div>
                    <span className="font-medium">17%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="font-bold mb-4 text-lg">Key Metrics</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Users Assessed</span>
                  <span className="font-medium">190/210</span>
                </div>
                <div className="flex justify-between">
                  <span>Last Updated</span>
                  <span className="font-medium">2 hours ago</span>
                </div>
                <div className="flex justify-between">
                  <span>Trend</span>
                  <span className="font-medium text-green-300">Improving</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Risk Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {riskIndicators.map((indicator, index) => (
            <div key={index} className="card-elevated p-6 group hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-900">{indicator.indicator}</h3>
                <div className={`p-3 rounded-2xl bg-gradient-to-r ${indicator.color} shadow-lg`}>
                  {indicator.status === 'good' ? (
                    <Shield className="h-5 w-5 text-white" />
                  ) : (
                    <AlertTriangle className="h-5 w-5 text-white" />
                  )}
                </div>
              </div>
              
              <div className="flex items-baseline space-x-3 mb-3">
                <span className="text-3xl font-bold text-gray-900">{indicator.value}</span>
                <span className={`text-lg font-medium flex items-center ${
                  indicator.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {indicator.trend === 'up' ? (
                    <TrendingUp className="h-4 w-4 mr-1" />
                  ) : (
                    <TrendingDown className="h-4 w-4 mr-1" />
                  )}
                  {indicator.change}
                </span>
              </div>
              
              <p className="text-gray-600">
                Threshold: <span className="font-medium">{indicator.threshold}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Department Risk Breakdown */}
        <div className="card-elevated p-8 mb-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Department Risk Analysis</h3>
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="input-modern"
            >
              <option value="all">All Departments</option>
              <option value="it">IT Department</option>
              <option value="sales">Sales</option>
              <option value="marketing">Marketing</option>
              <option value="hr">HR</option>
              <option value="finance">Finance</option>
              <option value="operations">Operations</option>
            </select>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departmentRisks.map((dept, index) => (
              <div key={index} className="border-2 border-gray-200 rounded-3xl p-6 hover:shadow-xl transition-all duration-300 group hover:scale-105">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="font-bold text-gray-900 text-lg">{dept.name}</h4>
                  <span className={`px-4 py-2 rounded-2xl text-sm font-bold ${getRiskColor(dept.riskLevel)}`}>
                    {dept.riskLevel.toUpperCase()} RISK
                  </span>
                </div>
                
                <div className="flex items-center space-x-6 mb-6">
                  <div className="text-center">
                    <span className={`text-3xl font-bold ${getScoreColor(dept.score)}`}>
                      {dept.score}
                    </span>
                    <p className="text-sm text-gray-600 font-medium">Risk Score</p>
                  </div>
                  <div className="text-center">
                    <span className="text-3xl font-bold text-gray-900">{dept.users}</span>
                    <p className="text-sm text-gray-600 font-medium">Users</p>
                  </div>
                  <div className="text-center">
                    <span className={`text-lg font-bold flex items-center ${
                      dept.trend === 'up' ? 'text-green-600' : 
                      dept.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                    }`}>
                      {dept.trend === 'up' && <TrendingUp className="h-4 w-4 mr-1" />}
                      {dept.trend === 'down' && <TrendingDown className="h-4 w-4 mr-1" />}
                      {dept.change > 0 ? '+' : ''}{dept.change}
                    </span>
                    <p className="text-sm text-gray-600 font-medium">Change</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h5 className="text-sm font-bold text-gray-900 mb-3">Top Risk Areas:</h5>
                  <div className="space-y-2">
                    {dept.topRisks.slice(0, 2).map((risk, riskIndex) => (
                      <span key={riskIndex} className="inline-block bg-red-100 text-red-800 text-xs px-3 py-2 rounded-xl mr-2 font-medium">
                        {risk}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h5 className="text-sm font-bold text-gray-900 mb-3">Strengths:</h5>
                  <div className="space-y-2">
                    {dept.strengths.slice(0, 2).map((strength, strengthIndex) => (
                      <span key={strengthIndex} className="inline-block bg-green-100 text-green-800 text-xs px-3 py-2 rounded-xl mr-2 font-medium">
                        {strength}
                      </span>
                    ))}
                  </div>
                </div>
                
                <p className="text-sm text-gray-500 font-medium">Last assessed: {dept.lastAssessment}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Risk Categories */}
        <div className="card-elevated p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Risk Categories Analysis</h3>
          <div className="space-y-6">
            {riskCategories.map((category, index) => (
              <div key={index} className="border-2 border-gray-200 rounded-3xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-gray-900 text-lg">{category.category}</h4>
                  <div className="flex items-center space-x-4">
                    <span className={`px-3 py-2 rounded-xl text-sm font-bold ${
                      category.impact === 'High' ? 'bg-red-100 text-red-800' :
                      category.impact === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {category.impact} Impact
                    </span>
                    <span className={`text-2xl font-bold ${getScoreColor(category.score)}`}>
                      {category.score}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">{category.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-gray-50 p-4 rounded-2xl">
                    <span className="text-sm text-gray-600 font-medium">Affected Users</span>
                    <p className="font-bold text-gray-900 text-xl">{category.affected}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-2xl">
                    <span className="text-sm text-gray-600 font-medium">Trend</span>
                    <p className={`font-bold capitalize text-xl ${
                      category.trend === 'improving' ? 'text-green-600' :
                      category.trend === 'declining' ? 'text-red-600' : 'text-gray-600'
                    }`}>
                      {category.trend}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-2xl">
                    <span className="text-sm text-gray-600 font-medium">Risk Score</span>
                    <div className="progress-modern mt-2">
                      <div 
                        className={`h-full rounded-full ${
                          category.score >= 80 ? 'bg-green-500' :
                          category.score >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${category.score}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h5 className="text-sm font-bold text-gray-900 mb-3">Recommendations:</h5>
                  <ul className="text-gray-600 space-y-2">
                    {category.recommendations.map((rec, recIndex) => (
                      <li key={recIndex} className="flex items-start">
                        <span className="text-blue-600 mr-3 text-lg">•</span>
                        <span className="leading-relaxed">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* High Risk Users */}
        <div className="card-elevated p-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">High Risk Users</h3>
            <button className="text-blue-600 hover:text-blue-700 font-bold">
              View All Users
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6 font-bold text-gray-600">User</th>
                  <th className="text-left py-4 px-6 font-bold text-gray-600">Department</th>
                  <th className="text-right py-4 px-6 font-bold text-gray-600">Risk Score</th>
                  <th className="text-left py-4 px-6 font-bold text-gray-600">Issues</th>
                  <th className="text-left py-4 px-6 font-bold text-gray-600">Last Activity</th>
                  <th className="text-left py-4 px-6 font-bold text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {highRiskUsers.map((user, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <img 
                          src={user.avatar} 
                          alt={user.name}
                          className="w-12 h-12 rounded-2xl object-cover ring-2 ring-gray-200"
                        />
                        <span className="font-bold text-gray-900">{user.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-gray-600 font-medium">{user.department}</td>
                    <td className="py-4 px-6 text-right">
                      <span className="text-red-600 font-bold text-xl">{user.score}</span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex flex-wrap gap-2">
                        {user.issues.slice(0, 2).map((issue, issueIndex) => (
                          <span key={issueIndex} className="bg-red-100 text-red-800 text-xs px-3 py-2 rounded-xl font-medium">
                            {issue}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="py-4 px-6 text-gray-600 font-medium">{user.lastActivity}</td>
                    <td className="py-4 px-6">
                      <button className="btn-primary text-sm">
                        Assign Training
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskAssessment;