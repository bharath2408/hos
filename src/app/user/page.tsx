"use client";
import React, { useState } from 'react';
import { ArrowRight, Mail, Lock, User } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast, Toaster } from 'react-hot-toast';
import { useUser } from '@/context/UserContext';
import Link from 'next/link';

// Define allowed user roles/positions
type UserPosition = 'candidate' | 'supervisor' | 'admin';

// Interface for form data structure
interface FormData {
  fullName: string;
  email: string;
  password: string;
  position: UserPosition;
}

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useUser();
  
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    password: '',
    position: 'candidate'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle registration form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Validate that all required fields are filled
      if (!formData.email || !formData.password || (!isLogin && (!formData.fullName || !formData.position))) {
        toast.error('Please fill in all fields');
        setIsLoading(false);
        return;
      }

      if (!isLogin) {
        // Registration API call
        const response = await fetch('/api/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fullName: formData.fullName,    // User's full name
            email: formData.email,          // User's email address
            password: formData.password,     // User's password
            position: formData.position,     // Selected role (candidate/supervisor/admin)
            createdAt: new Date().toISOString()  // Timestamp of account creation
          }),
        });

        const data = await response.json();
        
        // Handle registration errors
        if (!response.ok) {
          toast.error(data.message || data.error || 'Failed to create account');
          setIsLoading(false);
          return;
        }

        // Registration successful
        toast.success('Account created successfully!');
        setUser(data.user);              // Update user context
        setIsLogin(true);                // Switch to login view
        setFormData({                    // Reset form fields
          fullName: '',
          email: '',
          password: '',
          position: 'candidate'
        });
      } else {
        // Handle Login
        const response = await fetch('/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        });

        let data;
        try {
          data = await response.json();
        } catch {
          toast.error('Server error. Please try again later.');
          setIsLoading(false);
          return;
        }
        
        if (!response.ok) {
          toast.error(data.error || 'Invalid credentials');
          setIsLoading(false);
          return;
        }

        if (!data.success) {
          toast.error(data.message);
          return;
        }

        toast.success('Logged in successfully!');
        setUser(data.user);

        switch (data.user.position) {
          case 'supervisor':
            router.push('/supervisor');
            break;
          case 'candidate':
            router.push('/candidate');
            break;
          case 'admin':
            router.push('/admin');
            break;
          default:
            router.push('/'); // Fallback to home page if position is undefined
        }
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <>
      <Toaster 
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Toggle Switch */}

          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">
              {isLogin ? 'Login' : 'Create Account'}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {!isLogin && (
                <>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Full Name"
                      className="w-full py-3 pl-12 pr-4 text-gray-600 border rounded-lg outline-none bg-gray-50 focus:border-blue-600"
                    />
                  </div>

                  <div className="relative">
                    <select
                      name="position"
                      value={formData.position}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleInputChange(e)}
                      className="w-full py-3 px-4 text-gray-600 border rounded-lg outline-none bg-gray-50 focus:border-blue-600"
                    >
                      <option value="candidate">Candidate</option>
                      <option value="supervisor">Supervisor</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>
                </>
              )}
              
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  className="w-full py-3 pl-12 pr-4 text-gray-600 border rounded-lg outline-none bg-gray-50 focus:border-blue-600"
                />
              </div>
              
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  className="w-full py-3 pl-12 pr-4 text-gray-600 border rounded-lg outline-none bg-gray-50 focus:border-blue-600"
                />
              </div>

              {isLogin && (
                <div className="text-right">
                  <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                    Forgot Password?
                  </a>
                </div>
              )}

              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 px-4 py-3 text-white font-medium bg-blue-600 rounded-lg hover:bg-blue-500 hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 group disabled:opacity-50"
                >
                  {isLoading ? (
                    'Loading...'
                  ) : (
                    <>
                      {isLogin ? 'Sign In' : 'Create Account'}
                      <ArrowRight className="group-hover:translate-x-1 transition-transform duration-200" size={15} />
                    </>
                  )}
                </button>

                <Link href="/">
                  <button
                    type="button"
                    className="px-4 py-3 text-blue-600 font-medium border border-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    Go Back
                  </button>
                </Link>
              </div>
            </form>

          </div>
        </div>
      </div>
    </>
  );
};

export default AuthPage;