"use client"
import { useState } from 'react';
import { Mail, Phone, Lock, User, EyeOff, Eye } from 'lucide-react';
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from 'next/navigation';
import axios from "axios";
import { toast } from 'sonner';
import { Label } from '@/src/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/src/components/ui/card';
import { Input } from '@/src/components/ui/input';
import { Button } from '@/src/components/ui/button';
import Link from 'next/link';

// LYRA DermaCosmetics Theme Colors [memory:1][web:14][web:18]
const themeColors = {
  primary: '#0070CE',      // CeraVe Light Blue - Trust & Professionalism
  secondary: '#003057',    // CeraVe Deep Blue - Reliability
  accent: '#00A0A0',       // Light Teal - Clean & Fresh
  neutral: '#4B5563',      // Gray 600 - Professional text
  background: '#F8FAFC',   // Light Blue Gray - Clean backdrop
  surface: 'rgba(255, 255, 255, 0.95)', // Glassmorphism card
  border: 'rgba(0, 112, 206, 0.2)',     // Subtle blue border
  success: '#10B981',      // Green for positive states
  destructive: '#EF4444',  // Red for errors
};

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
    .matches(/^\+?[\d\s\-()]{10,}$/, "Please enter a valid phone number")
    .required("Phone number is required"),
});

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const initialValues = {
    email: '',
    phoneNumber: '',
    password: '',
  };

  const handleSubmit = async (values: typeof initialValues, { setSubmitting }: any) => {
    setIsLoading(true);
    try {
      const { data } = await axios.post(process.env.NEXT_PUBLIC_API_URL + '/register', values);
      toast.success(data.message || 'Registration successful!');
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo Section */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-block bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-2xl mb-6 border border-white/50">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white font-black text-3xl tracking-tight">L</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-900 to-cyan-700 bg-clip-text text-transparent mb-3 tracking-tight">
            LYRA DermaCosmetics
          </h1>
          <p className="text-gray-600 font-semibold text-lg">Developed with Dermatologists</p>
        </div>

        {/* Register Card */}
        <Card className="border-0 bg-white/80 backdrop-blur-xl shadow-2xl shop-card-glow">
          <CardHeader className="space-y-2 pb-8">
            <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-600 bg-clip-text text-transparent">
              Create Account
            </CardTitle>
            <CardDescription className="text-center text-gray-600 font-medium text-lg">
              Join us for healthy, beautiful skin
            </CardDescription>
          </CardHeader>
          
          <CardContent className="pt-0">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, values }) => (
                <Form className="space-y-6">
                  {/* Email Field */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-semibold text-gray-800">
                      Email Address
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-blue-500" />
                      <Field
                        as={Input}
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        className="pl-12 h-14 rounded-xl border-2 border-blue-100 focus:border-blue-500 focus:ring-4 focus:ring-blue-100/50 transition-all duration-300"
                      />
                    </div>
                    <ErrorMessage name="email" component="p" className="text-red-500 text-sm font-medium" />
                  </div>

                  {/* Phone Number Field */}
                  <div className="space-y-2">
                    <Label htmlFor="phoneNumber" className="font-semibold text-gray-800">
                      Phone Number
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-blue-500" />
                      <Field
                        as={Input}
                        id="phoneNumber"
                        name="phoneNumber"
                        type="tel"
                        placeholder="+977 9800000000"
                        className="pl-12 h-14 rounded-xl border-2 border-blue-100 focus:border-blue-500 focus:ring-4 focus:ring-blue-100/50 transition-all duration-300"
                      />
                    </div>
                    <ErrorMessage name="phoneNumber" component="p" className="text-red-500 text-sm font-medium" />
                  </div>

                  {/* Password Field */}
                  <div className="space-y-2">
                    <Label htmlFor="password" className="font-semibold text-gray-800">
                      Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-blue-500" />
                      <Field
                        as={Input}
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a strong password"
                        className="pl-12 pr-12 h-14 rounded-xl border-2 border-blue-100 focus:border-blue-500 focus:ring-4 focus:ring-blue-100/50 transition-all duration-300"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-blue-100 rounded-full transition-all duration-200"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5 text-gray-500" /> : <Eye className="h-5 w-5 text-gray-500" />}
                      </button>
                    </div>
                    <ErrorMessage name="password" component="p" className="text-red-500 text-sm font-medium" />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isLoading || isSubmitting}
                    className="w-full h-14 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transform transition-all duration-300 text-lg"
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Creating Account...
                      </div>
                    ) : (
                      "Create Account"
                    )}
                  </Button>

                  {/* Login Link */}
                  <div className="text-center pt-6">
                    <p className="text-gray-600">
                      Already have an account?{" "}
                      <Link
                        href="/login"
                        className="font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent hover:underline transition-all duration-200"
                      >
                        Sign in
                      </Link>
                    </p>
                  </div>
                </Form>
              )}
            </Formik>
          </CardContent>
        </Card>

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm mt-10 font-medium">
          © 2025 LYRA DermaCosmetics. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Register;
