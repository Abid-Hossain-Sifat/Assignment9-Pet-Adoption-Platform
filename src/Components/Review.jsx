import React from "react";
import { Star } from "lucide-react";

const Review = () => {
  return (
    <div className="bg-[#f5faf8] py-20 md:py-32 overflow-hidden">
      <div className="max-w-[80%] mx-auto flex flex-col gap-16 md:gap-24">
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
          <h2 className="text-3xl md:text-[40px] font-extrabold text-slate-900 tracking-tight">
            Happy Tails
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Real stories from real families who found their perfect match on
            PawsConnect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start justify-center pt-6">
          <div className="relative bg-[#edf2f1] p-8 rounded-[24px] flex flex-col justify-between shadow-sm border border-transparent hover:border-[#00685f]/20 hover:bg-white hover:shadow-[0_25px_50px_-12px_rgba(0,104,95,0.08)] hover:-translate-y-3 transition-all duration-500 ease-out cursor-pointer group min-h-[300px]">
            <span className="absolute top-4 right-8 text-[80px] font-serif font-black text-emerald-950/5 group-hover:text-[#00685f]/10 transition-colors duration-500 select-none leading-none">
              ”
            </span>

            <div className="flex flex-col gap-4 relative z-10">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-[#fea619]"
                    fill="#fea619"
                    strokeWidth={0}
                  />
                ))}
              </div>
              <p className="text-slate-700 text-[15px] font-medium leading-relaxed italic pr-4">
                "PawsConnect made finding Cooper so easy. The application
                process was transparent, and the support we received was
                incredible."
              </p>
            </div>

            <div className="flex items-center gap-3 pt-6 mt-6 border-t border-slate-200/50 relative z-10">
              <div className="h-11 w-11 rounded-full flex items-center justify-center font-bold text-base shadow-sm shrink-0 uppercase tracking-wider bg-teal-100 text-teal-800">
                S
              </div>
              <div className="flex flex-col">
                <h4 className="text-slate-800 font-extrabold text-[15px] leading-tight">
                  Sarah Jenkins
                </h4>
                <p className="text-gray-500 text-xs font-semibold mt-1">
                  Adopted Cooper (Beagle)
                </p>
              </div>
            </div>
          </div>

          <div className="relative bg-[#edf2f1] p-8 rounded-[24px] flex flex-col justify-between shadow-sm border border-transparent hover:border-[#00685f]/20 hover:bg-white hover:shadow-[0_25px_50px_-12px_rgba(0,104,95,0.08)] md:translate-y-8 hover:md:translate-y-5 transition-all duration-500 ease-out cursor-pointer group min-h-[300px]">
            <span className="absolute top-4 right-8 text-[80px] font-serif font-black text-emerald-950/5 group-hover:text-[#00685f]/10 transition-colors duration-500 select-none leading-none">
              ”
            </span>

            <div className="flex flex-col gap-4 relative z-10">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-[#fea619]"
                    fill="#fea619"
                    strokeWidth={0}
                  />
                ))}
              </div>
              <p className="text-slate-700 text-[15px] font-medium leading-relaxed italic pr-4">
                "Luna has completely changed our lives. The platform's vetting
                process gave us peace of mind knowing she was healthy and ready
                for her home."
              </p>
            </div>

            <div className="flex items-center gap-3 pt-6 mt-6 border-t border-slate-200/50 relative z-10">
              <div className="h-11 w-11 rounded-full flex items-center justify-center font-bold text-base shadow-sm shrink-0 uppercase tracking-wider bg-amber-100 text-amber-800">
                D
              </div>
              <div className="flex flex-col">
                <h4 className="text-slate-800 font-extrabold text-[15px] leading-tight">
                  David Chen
                </h4>
                <p className="text-gray-500 text-xs font-semibold mt-1">
                  Adopted Luna (Cat)
                </p>
              </div>
            </div>
          </div>

          <div className="relative bg-[#edf2f1] p-8 rounded-[24px] flex flex-col justify-between shadow-sm border border-transparent hover:border-[#00685f]/20 hover:bg-white hover:shadow-[0_25px_50px_-12px_rgba(0,104,95,0.08)] hover:-translate-y-3 transition-all duration-500 ease-out cursor-pointer group min-h-[300px]">
            <span className="absolute top-4 right-8 text-[80px] font-serif font-black text-emerald-950/5 group-hover:text-[#00685f]/10 transition-colors duration-500 select-none leading-none">
              ”
            </span>

            <div className="flex flex-col gap-4 relative z-10">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-[#fea619]"
                    fill="#fea619"
                    strokeWidth={0}
                  />
                ))}
              </div>
              <p className="text-slate-700 text-[15px] font-medium leading-relaxed italic pr-4">
                "The best decision we've ever made. PawsConnect is modern,
                professional, and truly cares about the animals they place."
              </p>
            </div>

            <div className="flex items-center gap-3 pt-6 mt-6 border-t border-slate-200/50 relative z-10">
              <div className="h-11 w-11 rounded-full flex items-center justify-center font-bold text-base shadow-sm shrink-0 uppercase tracking-wider bg-indigo-100 text-indigo-800">
                E
              </div>
              <div className="flex flex-col">
                <h4 className="text-slate-800 font-extrabold text-[15px] leading-tight">
                  Emily Watson
                </h4>
                <p className="text-gray-500 text-xs font-semibold mt-1">
                  Adopted Daisy (Greyhound)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
