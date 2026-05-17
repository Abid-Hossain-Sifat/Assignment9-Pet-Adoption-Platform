import Image from "next/image";
import React from "react";
import HeroImg from "../../public/Assets/heroimg.png";
import { PawPrint } from "lucide-react";

const Hero = () => {
  return (
    <div className="py-20 bg-[#f5faf8]">
      <div className="flex justify-between items-start max-w-[80%] mx-auto">
        {/* Content  */}
        <div className="flex flex-col space-y-6 max-w-xl">
          <h1 className="text-[44px] font-extrabold text-slate-900 leading-[1.1] tracking-tight">
            Connecting <br />
            <span className="text-[#00685f]">Compassionate Hearts</span> <br />
            with Paws
          </h1>

          <p className="text-gray-600 text-base leading-relaxed max-w-lg">
            Find your perfect companion through our streamlined, ethical <br />
            adoption platform. We bridge the gap between local shelters and{" "}
            <br />
            loving forever homes with a modern, data-driven approach.
          </p>

          <div className="flex items-center gap-4 pt-2">
            <button className="bg-[#00685f] hover:bg-[#005049] text-white px-6 py-3 font-semibold rounded-2xl shadow-sm transition-all duration-300">
              Adopt Now
            </button>
            <button className="border-2 border-[#00685f]/30 text-[#00685f] hover:bg-[#00685f]/5 px-6 py-3 font-semibold rounded-2xl transition-all duration-300">
              Our Process
            </button>
          </div>
        </div>

        {/* img and tooltip */}
        <div className="relative inline-block group cursor-pointer perspective-1000">
          <div className="overflow-hidden rounded-[24px] md:rounded-[32px] shadow-lg transition-all duration-500 ease-out transform group-hover:rotate-0 rotate-3 group-hover:scale-102 origin-bottom-right">
            <Image 
              src={HeroImg} 
              alt="Buddy Dog" 
              className="w-full h-auto max-w-[450px] object-cover"
            />
          </div>

          <div className="absolute -bottom-6 -left-6 bg-white/70 backdrop-blur-md p-5 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] border border-white/40 flex flex-col gap-3 min-w-[240px] transition-all duration-500 ease-out transform group-hover:translate-x-1 group-hover:translate-y-1">
            <div className="flex items-center gap-3">
              <div className="bg-[#fea619] h-10 w-10 rounded-xl flex items-center justify-center text-white shrink-0 shadow-sm">
                <PawPrint className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-slate-800 font-extrabold text-[16px] leading-tight">
                  Buddy
                </h3>
                <p className="text-slate-600 text-xs font-semibold mt-0.5 whitespace-nowrap">
                  Golden Retriever - 2 years
                </p>
              </div>
            </div>
            <div className="pt-1">
              <button className="bg-[#00685f] text-white text-[14px] font-semibold px-4 py-2 rounded-xl w-full text-center hover:bg-[#005049] transition-all duration-300 shadow-sm">
                Available
              </button>
            </div>

          </div>
        </div> 

      </div> 
    </div> 
  );
};

export default Hero;