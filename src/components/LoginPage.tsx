import React, { useState } from 'react';
import { Shield, Mail, Lock, Eye, EyeOff, ArrowRight, Star, Users, Award } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { useApp } from '../contexts/AppContext';

interface LoginPageProps {
  onNavigate: (view: string) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onNavigate }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const { login, isLoading, error, clearError } = useApp();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();
    
    const success = await login(formData.email, formData.password);
    if (success) {
      onNavigate('employee'); // Navigate to employee dashboard after login
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Branding */}
        <div className="hidden lg:block">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-8">
                <div className="bg-white/20 p-4 rounded-2xl mr-4">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">CyberGuard Pro</h1>
                  <p className="text-blue-100">Security Training Platform</p>
                </div>
              </div>
              
              <h2 className="text-4xl font-bold mb-6 leading-tight">
                Protect Your Organization with Advanced Security Training
              </h2>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Join thousands of companies building stronger security cultures through engaging training and realistic simulations.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-green-500 p-2 rounded-xl mr-4">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-lg">500K+ Users Protected</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-yellow-500 p-2 rounded-xl mr-4">
                    <Star className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-lg">4.9/5 Customer Rating</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-purple-500 p-2 rounded-xl mr-4">
                    <Award className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-lg">Industry Leading Platform</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full max-w-md mx-auto">
          <div className="card-elevated p-10">
            <div className="text-center mb-8">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
              <p className="text-gray-600">Sign in to your CyberGuard Pro account</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
                  <p className="text-red-800 text-sm font-medium">{error}</p>
                </div>
              )}
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full pl-12 pr-12 py-4 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.rememberMe}
                    onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                    className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded-lg focus:ring-blue-500 focus:ring-2"
                  />
                  <span className="ml-3 text-sm text-gray-600 font-medium">Remember me</span>
                </label>
                <button
                  type="button"
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full btn-primary text-lg flex items-center justify-center ${
                  isLoading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isLoading ? 'Signing In...' : 'Sign In'}
                <ArrowRight className="h-5 w-5 ml-2" />
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Don't have an account?{' '}
                <button
                  onClick={() => onNavigate('signup')}
                  className="text-blue-600 hover:text-blue-700 font-bold"
                >
                  Sign up for free
                </button>
              </p>
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={() => onNavigate('landing')}
                className="text-gray-500 hover:text-gray-700 font-medium"
              >
                ← Back to homepage
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;