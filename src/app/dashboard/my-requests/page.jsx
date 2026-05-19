import React from 'react';
import Link from 'next/link';
import { GitPullRequest, Inbox, ArrowRight } from 'lucide-react';

const DashReqPage = () => {
  return (
    <div className="space-y-6">
      
      <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 bg-[#00685f]/10 text-[#00685f] rounded-xl flex items-center justify-center">
            <GitPullRequest size={22} />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold text-slate-800">Adoption Requests</h1>
            <p className="text-xs text-gray-400">Review and manage adoption applications sent by pet lovers.</p>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-100 rounded-3xl p-12 shadow-xs flex flex-col items-center justify-center text-center min-h-[400px]">
        
        <div className="h-20 w-20 bg-[#f5faf8] rounded-full flex items-center justify-center text-gray-400 mb-6 border border-dashed border-[#00685f]/20">
          <Inbox size={36} className="text-[#00685f]/60" />
        </div>

        <h3 className="text-xl font-bold text-slate-800 mb-2">No Requests Found</h3>
        <p className="text-sm text-gray-400 max-w-sm mb-8 leading-relaxed">
          You haven't received any adoption requests yet. Once someone applies to adopt your listed pets, their info will appear here.
        </p>

        <Link 
          href="/all-pets"
          className="text-[#00685f] hover:text-[#005049] text-sm font-bold flex items-center gap-2 group transition-all"
        >
          View Available Pets 
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

    </div>
  );
};

export default DashReqPage;