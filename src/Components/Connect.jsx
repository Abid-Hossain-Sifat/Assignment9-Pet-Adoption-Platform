"use client";
import React from "react";
import { PawPrint } from "lucide-react";

const Connect = () => {
  return (
    <div className="bg-[#f5faf8] py-16 md:py-24">
      <div className="max-w-[80%] mx-auto">
        <div className="relative bg-[#00685f] px-6 py-16 md:py-20 rounded-[32px] text-center text-white overflow-hidden shadow-md">
          <div className="absolute top-6 right-6 md:top-8 md:right-12 text-teal-850/30 transform rotate-[25deg] pointer-events-none select-none">
            <PawPrint
              className="w-20 h-20 md:w-28 md:h-28"
              strokeWidth={1.2}
              fill="currentColor"
            />
          </div>

          <div className="absolute -bottom-6 -left-6 text-teal-850/35 transform rotate-[-35deg] pointer-events-none select-none">
            <PawPrint
              className="w-20 h-20 md:w-24 md:h-24"
              strokeWidth={1.2}
              fill="currentColor"
            />
          </div>

          <div className="absolute top-8 left-8 text-teal-850/25 transform rotate-[-15deg] pointer-events-none select-none">
            <PawPrint
              className="w-14 h-14 md:w-16 md:h-16"
              strokeWidth={1.2}
              fill="currentColor"
            />
          </div>

          <div className="absolute bottom-6 right-8 md:bottom-10 md:right-16 text-teal-850/25 transform rotate-[45deg] pointer-events-none select-none">
            <PawPrint
              className="w-14 h-14 md:w-16 md:h-16"
              strokeWidth={1.2}
              fill="currentColor"
            />
          </div>

          <div className="absolute top-4 left-[20%] text-teal-850/20 transform rotate-[15deg] hidden sm:block pointer-events-none select-none">
            <PawPrint
              className="w-10 h-10 md:w-12 md:h-12"
              strokeWidth={1.2}
              fill="currentColor"
            />
          </div>

          <div className="absolute bottom-6 left-[65%] text-teal-850/20 transform rotate-[-20deg] hidden sm:block pointer-events-none select-none">
            <PawPrint
              className="w-10 h-10 md:w-12 md:h-12"
              strokeWidth={1.2}
              fill="currentColor"
            />
          </div>

          <div className="absolute top-1/2 left-2 -translate-y-1/2 text-teal-850/15 transform rotate-[60deg] pointer-events-none select-none">
            <PawPrint
              className="w-12 h-12"
              strokeWidth={1.2}
              fill="currentColor"
            />
          </div>

          <div className="absolute top-1/3 right-4 text-teal-850/15 transform rotate-[-45deg] hidden md:block pointer-events-none select-none">
            <PawPrint
              className="w-14 h-14"
              strokeWidth={1.2}
              fill="currentColor"
            />
          </div>

          <div className="absolute bottom-2 left-[45%] text-teal-850/15 transform rotate-[30deg] hidden lg:block pointer-events-none select-none">
            <PawPrint
              className="w-8 h-8"
              strokeWidth={1.2}
              fill="currentColor"
            />
          </div>

          <div className="absolute top-6 left-[55%] text-teal-850/15 transform rotate-[-10deg] hidden lg:block pointer-events-none select-none">
            <PawPrint
              className="w-8 h-8"
              strokeWidth={1.2}
              fill="currentColor"
            />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col gap-4">
            <h2 className="text-3xl md:text-[40px] font-extrabold tracking-tight">
              Stay Connected
            </h2>
            <p className="text-emerald-100/80 text-sm md:text-base leading-relaxed font-medium px-4">
              Get notified about new pet listings, success stories, and expert
              care tips directly in your inbox.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 max-w-md mx-auto w-full"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white text-slate-800 pl-6 pr-4 py-3.5 rounded-xl font-medium placeholder-gray-400 outline-none border-2 border-transparent focus:border-amber-500/40 focus:shadow-[0_0_15px_rgba(254,166,25,0.15)] transition-all duration-300 text-sm"
                required
              />

              <button
                type="submit"
                className="w-full sm:w-auto bg-[#004d46] hover:bg-[#003d37] text-white font-bold px-8 py-3.5 rounded-xl border border-teal-700/50 hover:shadow-[0_10px_20px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 whitespace-nowrap text-sm cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
