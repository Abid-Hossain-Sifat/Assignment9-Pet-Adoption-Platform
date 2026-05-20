import React from 'react';
import { PlusCircle, List, GitPullRequest, PawPrint } from 'lucide-react';
import Link from 'next/link';

const DashboardMainPage = () => {
  const quickActions = [
    {
      title: "Add New Pet",
      desc: "List a new companion for adoption",
      icon: <PlusCircle size={24} />,
      link: "/dashboard/add-pet",
      bgColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
    },
    {
      title: "My Listings",
      desc: "Manage your existing pet profiles",
      icon: <List size={24} />,
      link: "/dashboard/my-listing",
      bgColor: "bg-blue-50 text-blue-700 border-blue-100",
    },
    {
      title: "Adoption Requests",
      desc: "Check who wants to adopt your pets",
      icon: <GitPullRequest size={24} />,
      link: "/dashboard/requests",
      bgColor: "bg-amber-50 text-amber-700 border-amber-100",
    },
  ];

  return (
    <div className="w-full max-w-[94%] sm:max-w-[90%] lg:max-w-[85%] mx-auto py-6 md:py-10 space-y-6 md:space-y-8">
      
      <div className="relative overflow-hidden bg-white border border-gray-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 z-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-800 tracking-tight">
            Hello, Welcome to Your Dashboard! 👋
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 max-w-xl leading-relaxed">
            Manage your pet listings, add new lovely companions for adoption, and check user requests smoothly from here.
          </p>
        </div>
        
        <div className="hidden md:flex items-center justify-center h-20 w-20 lg:h-24 lg:w-24 bg-[#00685f]/10 text-[#00685f] rounded-2xl flex-shrink-0 animate-pulse">
          <PawPrint size={44} className="lg:size-[50px]" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {quickActions.map((action, index) => (
          <Link 
            key={index} 
            href={action.link}
            className="group bg-white border border-slate-100 p-5 sm:p-6 rounded-2xl shadow-xs hover:shadow-md hover:border-slate-200 transition-all duration-300 flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className={`h-12 w-12 rounded-xl flex items-center justify-center border ${action.bgColor} group-hover:scale-105 transition-transform`}>
                {action.icon}
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-800 group-hover:text-[#00685f] transition-colors">
                  {action.title}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  {action.desc}
                </p>
              </div>
            </div>
            
            <div className="text-xs font-bold text-[#00685f] inline-flex items-center gap-1 pt-2 group-hover:translate-x-1 transition-transform self-start">
              Go to page &rarr;
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
};

export default DashboardMainPage;