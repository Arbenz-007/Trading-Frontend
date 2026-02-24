import React, { useState, useEffect } from "react";
import { User, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/Store/Auth/Action";

export default function SignInForm({ isSignUp }) {
  const [showForgot, setShowForgot] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { jwt, loading, error } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle login submit
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
    console.log(formData);
  };

  // Navigate after successful login
  useEffect(() => {
    if (jwt) {
      navigate("/"); // change to dashboard if needed
    }
  }, [jwt, navigate]);

  return (
    <div
      className={`absolute top-0 left-0 w-1/2 h-full flex flex-col justify-center px-14 transition-all duration-700 ease-in-out z-10 
      ${isSignUp ? "opacity-0 -translate-x-10 pointer-events-none" : "opacity-100 translate-x-0"}`}
    >
      {!showForgot ? (
        <>
          <h2 className="text-3xl font-bold text-white mb-8">Login</h2>

          <form onSubmit={handleSubmit}>
            <div className="w-full mb-5 relative">
              <label className="block text-xs text-gray-400 mb-1">
                Username
              </label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="text"
                className="w-full bg-transparent border-b border-gray-600 text-white pb-1 focus:outline-none focus:border-purple-500 transition-colors peer"
              />
              <User className="absolute right-0 bottom-2 text-gray-500 w-4 h-4 peer-focus:text-purple-500 transition-colors" />
            </div>

            <div className="w-full mb-3 relative">
              <label className="block text-xs text-gray-400 mb-1">
                Password
              </label>
              <input
                name="password"
                value={formData.password}
                onChange={handleChange}
                type="password"
                className="w-full bg-transparent border-b border-gray-600 text-white pb-1 focus:outline-none focus:border-purple-500 transition-colors peer"
              />
              <Lock className="absolute right-0 bottom-2 text-gray-500 w-4 h-4 peer-focus:text-purple-500 transition-colors" />
            </div>

            {/* Forgot Password */}
            <div className="text-right mb-6">
              <button
                type="button"
                onClick={() => setShowForgot(true)}
                className="text-xs text-purple-400 hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            {error && <p className="text-red-500 text-xs mb-4">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-full transition-all mb-6 shadow-[0_0_15px_rgba(147,51,234,0.4)] disabled:opacity-60"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

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
