import React from "react";
import { Heart, ShieldPlus, BadgeCheck, PiggyBank } from "lucide-react";

const WhyAdopt = () => {
  return (
    <div className="bg-[#f5faf8] py-16 md:py-24">
      <div className="max-w-[80%] mx-auto flex flex-col gap-12 md:gap-16">
        
        {/* ১. হেডিং ও সাবটাইটেল সেকশন (সেন্টারড ও ইমেজ টিল কালার হাইলাইট) */}
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
          <h1 className="text-3xl md:text-[40px] font-extrabold text-slate-900 tracking-tight">
            Why Adopt a <span className="text-[#00685f]">Pet?</span>
          </h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Adoption isn't just about giving a pet a home—it's about the
            transformation of a life and the start of an unbreakable bond.
          </p>
        </div>

        {/* ২. কার্ডস গ্রিড কন্টেইনার (রেসপনসিভ ফ্লেক্স/গ্রিড লেআউট) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch justify-center">
          
          {/* কার্ড ১: Save a Life */}
          <div className="bg-[#edf2f1] p-8 rounded-[24px] flex flex-col items-center text-center shadow-sm border border-transparent hover:border-[#00685f]/20 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,104,95,0.06)] hover:-translate-y-2 transition-all duration-300 ease-out cursor-pointer group">
            <div className="text-[#00685f] mb-4 transition-transform duration-300 group-hover:scale-110">
              <Heart className="w-8 h-8" strokeWidth={2.5} />
            </div>
            <h5 className="text-slate-800 font-extrabold text-[18px] mb-3 tracking-tight">
              Save a Life
            </h5>
            <p className="text-gray-600 text-[14px] font-medium leading-relaxed">
              Every year, thousands of pets wait for a chance at a second life in
              a loving home.
            </p>
          </div>

          {/* র্ক্যাড ২: Better Health */}
          <div className="bg-[#edf2f1] p-8 rounded-[24px] flex flex-col items-center text-center shadow-sm border border-transparent hover:border-[#00685f]/20 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,104,95,0.06)] hover:-translate-y-2 transition-all duration-300 ease-out cursor-pointer group">
            <div className="text-[#00685f] mb-4 transition-transform duration-300 group-hover:scale-110">
              <ShieldPlus className="w-8 h-8" strokeWidth={2.5} />
            </div>
            <h5 className="text-slate-800 font-extrabold text-[18px] mb-3 tracking-tight">
              Better Health
            </h5>
            <p className="text-gray-600 text-[14px] font-medium leading-relaxed">
              Pets reduce stress, lower blood pressure, and keep you physically active and engaged.
            </p>
          </div>

          {/* কার্ড ৩: Fully Vetted */}
          <div className="bg-[#edf2f1] p-8 rounded-[24px] flex flex-col items-center text-center shadow-sm border border-transparent hover:border-[#00685f]/20 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,104,95,0.06)] hover:-translate-y-2 transition-all duration-300 ease-out cursor-pointer group">
            <div className="text-[#00685f] mb-4 transition-transform duration-300 group-hover:scale-110">
              <BadgeCheck className="w-8 h-8" strokeWidth={2.5} />
            </div>
            <h5 className="text-slate-800 font-extrabold text-[18px] mb-3 tracking-tight">
              Fully Vetted
            </h5>
            <p className="text-gray-600 text-[14px] font-medium leading-relaxed">
              Our adoption partners ensure all pets are healthy, vaccinated, and microchipped.
            </p>
          </div>

          {/* কার্ড ৪: Cost Effective */}
          <div className="bg-[#edf2f1] p-8 rounded-[24px] flex flex-col items-center text-center shadow-sm border border-transparent hover:border-[#00685f]/20 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,104,95,0.06)] hover:-translate-y-2 transition-all duration-300 ease-out cursor-pointer group">
            <div className="text-[#00685f] mb-4 transition-transform duration-300 group-hover:scale-110">
              <PiggyBank className="w-8 h-8" strokeWidth={2.5} />
            </div>
            <h5 className="text-slate-800 font-extrabold text-[18px] mb-3 tracking-tight">
              Cost Effective
            </h5>
            <p className="text-gray-600 text-[14px] font-medium leading-relaxed">
              Adoption fees are significantly lower than purchasing from breeders or pet stores.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhyAdopt;