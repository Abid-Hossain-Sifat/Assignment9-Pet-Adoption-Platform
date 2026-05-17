import Image from "next/image";
import React from "react";
import ProcessImg from "../../public/Assets/Process.png";
import { CheckCircle2 } from "lucide-react";

const Process = () => {
  return (
    <div className="bg-[#00685f] py-16 md:py-24 text-white overflow-hidden">
      <div className="max-w-[80%] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="flex flex-col space-y-8 max-w-xl w-full">
          <div className="space-y-4">
            <h4 className="text-3xl md:text-[36px] font-extrabold tracking-tight leading-tight">
              Our Seamless Adoption Process
            </h4>
            <p className="text-emerald-100/80 text-sm md:text-base leading-relaxed">
              We've removed the complexity from pet adoption. Follow our simple
              three-step guide to bring your new friend home.
            </p>
          </div>

          <div className="flex flex-col space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-white text-[#00685f] font-bold h-10 w-10 rounded-full flex items-center justify-center shrink-0 shadow-md text-sm">
                1
              </div>
              <div className="space-y-1">
                <h5 className="font-bold text-[18px] tracking-tight">
                  Find Your Match
                </h5>
                <p className="text-emerald-100/70 text-sm leading-relaxed">
                  Browse our database of vetted pets. Use smart filters to find
                  the perfect breed, age, and personality for your lifestyle.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white text-[#00685f] font-bold h-10 w-10 rounded-full flex items-center justify-center shrink-0 shadow-md text-sm">
                2
              </div>
              <div className="space-y-1">
                <h5 className="font-bold text-[18px] tracking-tight">
                  Submit Application
                </h5>
                <p className="text-emerald-100/70 text-sm leading-relaxed">
                  Our digital application is quick and easy. Provide a few
                  details about your home and background to get started.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white text-[#00685f] font-bold h-10 w-10 rounded-full flex items-center justify-center shrink-0 shadow-md text-sm">
                3
              </div>
              <div className="space-y-1">
                <h5 className="font-bold text-[18px] tracking-tight">
                  Welcome Home
                </h5>
                <p className="text-emerald-100/70 text-sm leading-relaxed">
                  After a brief meeting and virtual home check, you're ready to
                  start your journey together with full support from our team.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full max-w-[480px] lg:max-w-[500px] aspect-square flex items-center justify-center shrink-0">
          <div className="absolute inset-4 bg-teal-800/40 backdrop-blur-sm rounded-[32px] shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)] border border-teal-700/30 transform -rotate-1"></div>

          <div className="relative z-10 p-4 drop-shadow-[0_20px_35px_rgba(0,0,0,0.15)] transition-transform duration-500 hover:scale-[1.03] ease-out transform -rotate-2">
            <Image
              src={ProcessImg}
              alt="Our Seamless Process - Puppies"
              className="w-full h-auto object-contain rounded-2xl"
              priority
            />
          </div>

          <div className="absolute bottom-2 -right-4 z-20 bg-white p-4 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.12)] border border-gray-50 flex flex-col gap-1.5 min-w-[160px] animate-bounce-slow">
            <div className="flex items-center gap-2 text-slate-800 font-bold text-xs whitespace-nowrap">
              <CheckCircle2
                className="w-4 h-4 text-amber-600"
                fill="#fea619"
                strokeWidth={2.5}
              />
              Success Rate
            </div>
            <div className="text-[#00685f] font-extrabold text-2xl tracking-tight pl-6">
              98.4%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
