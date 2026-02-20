import React from "react";
import { useLocation } from "react-router-dom";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

export default function Auth() {
  const location = useLocation();
  const isSignUp = location.pathname === "/signup";

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4 font-sans">
      <div className="relative w-[850px] h-[500px] bg-[#0a0a0a] rounded-xl shadow-[0_0_40px_rgba(147,51,234,0.3)] border border-purple-600/40 overflow-hidden flex">

        <SignInForm isSignUp={isSignUp} />
        <SignUpForm isSignUp={isSignUp} />

        {/* Sliding Overlay (UNCHANGED DESIGN) */}
        <div
          className="absolute top-0 h-full w-[55%] bg-gradient-to-br from-purple-500 via-purple-700 to-[#2d005e] transition-all duration-700 ease-in-out z-30 flex items-center justify-center pointer-events-none shadow-2xl"
          style={{
            left: isSignUp ? "0" : "45%",
            clipPath: isSignUp
              ? "polygon(0 0, 100% 0, 80% 100%, 0 100%)"
              : "polygon(20% 0, 100% 0, 100% 100%, 0 100%)",
          }}
        >
          <div
            className={`w-full px-14 text-center transition-transform duration-700 text-white 
            ${isSignUp ? "-translate-x-4" : "translate-x-4"}`}
          >
            <h2 className="text-4xl font-bold mb-4 tracking-wide">
              WELCOME <br /> BACK!
            </h2>
            <p className="text-sm text-purple-200 font-light">
              Lorem ipsum, dolor sit amet consectetur adipisicing.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}