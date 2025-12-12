"use client"
import { useState } from 'react';
import { Mail, Phone, Lock, User, CheckCircle2 } from 'lucide-react';
import * as Yup from "yup";
import { useRouter } from 'next/navigation';
import axios from "axios";
import { toast } from 'sonner';

// Define validation schema using Yup
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .required("Password is required"),
  phoneNumber: Yup.string()
    .matches(/^\+?[\d\s\-()]+$/, "Please enter a valid phone number")
    .min(10, "Phone number must be at least 10 digits")
    .required("Phone number is required"),
//   role: Yup.string()
//     .oneOf(['user', 'admin'], "Please select a valid role")
//     .required("Role is required"),
});

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const router = useRouter()

  const initialValues = {
    email: '',
    phoneNumber: '',
    password: '',
    role: '', 
  };

   const handleSubmit = async(values: typeof initialValues, { setSubmitting }: any) => {
    setIsLoading(true);
    try {
      const { data } = await axios.post(process.env.NEXT_PUBLIC_API_URL + '/register', values);
      toast.success(data.message || 'Registration successful!');
      
      // If registration is successful and user is logged in, redirect
      if (data?.isLoggedIn) {
        router.push('/');
      }
    } catch (error: any) {
      console.error("Registration failed:", error);
      const errorMessage = error.response?.data?.message || 'Registration failed. Please try again.';
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-900 mb-2">LYRA DermaCosmetics</h1>
          <p className="text-gray-600">Developed with Dermatologists</p>
        </div>

        {/* Register Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Create Account</h2>
          <p className="text-gray-600 text-sm mb-6">Join us for healthy, beautiful skin</p>

          {/* Register Method Toggle */}
          <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setRegisterMethod('email')}
              className={`flex-1 py-2 rounded-md transition-all ${
                registerMethod === 'email'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600'
              }`}
            >
              Email
            </button>
            <button
              onClick={() => setRegisterMethod('phone')}
              className={`flex-1 py-2 rounded-md transition-all ${
                registerMethod === 'phone'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600'
              }`}
            >
              Phone
            </button>
          </div>

          {/* Register Inputs */}
          <div className="space-y-4">
            {/* Email/Phone Input */}
            {registerMethod === 'email' ? (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    placeholder="your.email@example.com"
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
            ) : (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    placeholder="+1 (555) 000-0000"
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition ${
                      errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                </div>
                {errors.phoneNumber && (
                  <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>
                )}
              </div>
            )}

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
        
              
              {/* Password Strength Indicator */}
              {formData.password && (
                <div className="mt-2">
                  <div className="flex gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`h-1 flex-1 rounded ${
                          i < strength ? strengthColors[strength - 1] : 'bg-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-gray-600">
                    Password strength: <span className="font-medium">{strengthLabels[strength - 1] || 'Very Weak'}</span>
                  </p>
                </div>
              )}
            </div>

            {/* Confirm Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
              )}
              {formData.confirmPassword && formData.password === formData.confirmPassword && (
                <div className="flex items-center gap-1 mt-1">
                  <CheckCircle2 size={14} className="text-green-600" />
                  <p className="text-green-600 text-xs">Passwords match</p>
                </div>
              )}
            </div>

            {/* Info Message */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="text-xs text-blue-800">
                <span className="font-semibold">Note:</span> Your account will require admin approval before you can log in.
              </p>
            </div>

            {/* Message Display */}
            {message && (
              <div className={`p-3 rounded-lg text-sm ${
                message.includes('successful') 
                  ? 'bg-green-50 text-green-700 border border-green-200' 
                  : 'bg-red-50 text-red-700 border border-red-200'
              }`}>
                {message}
              </div>
            )}

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </button>
          </div>

          {/* Sign In Link */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <button className="text-blue-600 hover:text-blue-700 font-semibold">
                Sign in
              </button>
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm mt-8">
          © 2025 LYRADerma. All rights reserved.
        </p>
      </div>
    </div>
  );
}