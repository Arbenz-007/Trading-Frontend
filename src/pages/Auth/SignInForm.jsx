import React, { useState } from "react";
import { User, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
export default function SignInForm({ isSignUp, setIsSignUp }) {
  const [showForgot, setShowForgot] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      className={`absolute top-0 left-0 w-1/2 h-full flex flex-col justify-center px-14 transition-all duration-700 ease-in-out z-10 
      ${isSignUp ? "opacity-0 -translate-x-10 pointer-events-none" : "opacity-100 translate-x-0"}`}
    >
      {!showForgot ? (
        <>
          <h2 className="text-3xl font-bold text-white mb-8">Login</h2>

          <div className="w-full mb-5 relative">
            <label className="block text-xs text-gray-400 mb-1">Username</label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-gray-600 text-white pb-1 focus:outline-none focus:border-purple-500 transition-colors peer"
            />
            <User className="absolute right-0 bottom-2 text-gray-500 w-4 h-4 peer-focus:text-purple-500 transition-colors" />
          </div>

          <div className="w-full mb-3 relative">
            <label className="block text-xs text-gray-400 mb-1">Password</label>
            <input
              type="password"
              className="w-full bg-transparent border-b border-gray-600 text-white pb-1 focus:outline-none focus:border-purple-500 transition-colors peer"
            />
            <Lock className="absolute right-0 bottom-2 text-gray-500 w-4 h-4 peer-focus:text-purple-500 transition-colors" />
          </div>

          {/* Forgot Password */}
          <div className="text-right mb-6">
            <button
              onClick={() => setShowForgot(true)}
              className="text-xs text-purple-400 hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-full transition-all mb-6 shadow-[0_0_15px_rgba(147,51,234,0.4)]">
            Login
          </button>

          <p className="text-sm text-gray-400 text-center">
            Dont have an account?{" "}
            <button
              onClick={() => navigate("/signup")}
              className="px-4 py-1.5 rounded-full border border-purple-500 text-purple-400 
  hover:bg-purple-600 hover:text-white transition-all duration-300 font-medium"
            >
              Sign Up
            </button>
          </p>
        </>
      ) : (
        <>
          <h2 className="text-3xl font-bold text-white mb-8">Reset Password</h2>

          <div className="w-full mb-8 relative">
            <label className="block text-xs text-gray-400 mb-1">
              Enter your Email
            </label>
            <input
              type="email"
              className="w-full bg-transparent border-b border-gray-600 text-white pb-1 focus:outline-none focus:border-purple-500 transition-colors peer"
            />
          </div>

          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-full transition-all mb-6 shadow-[0_0_15px_rgba(147,51,234,0.4)]">
            Send Reset Link
          </button>

          <p className="text-sm text-gray-400 text-center">
            <button
              onClick={() => setShowForgot(false)}
              className="text-purple-400 hover:underline"
            >
              Back to Login
            </button>
          </p>
        </>
      )}
    </div>
  );
}
