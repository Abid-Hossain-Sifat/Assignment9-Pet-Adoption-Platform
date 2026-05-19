import React from 'react';

const DashboardMainPage = () => {
  return (
    <div>
      <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-xs mb-8">
        <h1 className="text-3xl font-extrabold text-slate-800 mb-2">
          Hello, Welcome to Your Dashboard! 👋
        </h1>
        <p className="text-sm text-gray-500 max-w-xl">
          Manage your pet listings, add new lovely companions for adoption, and check user requests smoothly from here.
        </p>
      </div>
    </div>
  );
};

export default DashboardMainPage;