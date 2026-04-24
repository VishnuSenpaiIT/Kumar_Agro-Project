/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  User,
  Receipt,
  CalendarCheck, 
  Contact,
  BookOpen,
  UserCog,
  BarChart3,
  Settings
} from 'lucide-react';

interface DashboardButtonProps {
  label: string;
  icon: React.ReactNode;
  id: string;
  onClick?: () => void;
}

const DashboardButton: React.FC<DashboardButtonProps> = ({ label, icon, id, onClick }) => {
  return (
    <button
      id={id}
      onClick={onClick}
      className="flex flex-col items-center justify-center gap-5 p-8 bg-white border border-border-light rounded-enterprise transition-all duration-200 hover:bg-olive-light hover:border-olive hover:shadow-sm active:bg-olive-light/80 group cursor-pointer"
    >
      <div className="text-olive/60 group-hover:text-olive transition-colors duration-200">
        {React.cloneElement(icon as React.ReactElement<any>, { 
          size: 36,
          strokeWidth: 1.5
        })}
      </div>
      <span className="text-sm font-bold text-text-primary group-hover:text-olive text-center">
        {label}
      </span>
    </button>
  );
};

interface HomeDashboardProps {
  onNavigate: (label: string) => void;
}

const HomeDashboard: React.FC<HomeDashboardProps> = ({ onNavigate }) => {
  const actions = [
    { label: 'Profile', icon: <User />, id: 'btn-profile', target: 'Profile' },
    { label: 'Salary Slip', icon: <Receipt />, id: 'btn-salary', target: 'Salary Slip' },
    { label: 'Attendance', icon: <CalendarCheck />, id: 'btn-attendance', target: 'Attendance' },
    { label: 'Directory', icon: <Contact />, id: 'btn-directory', target: 'Directory' },
    { label: 'Knowbase', icon: <BookOpen />, id: 'btn-knowbase', target: 'Knowbase' },
    { label: 'ESS Portal', icon: <UserCog />, id: 'btn-ess', target: 'ESS' },
    { label: 'Dashboard', icon: <BarChart3 />, id: 'btn-dashboard', target: 'Dashboard' },
    { label: 'General Details', icon: <Settings />, id: 'btn-general', target: 'General Details' },
  ];

  return (
    <div id="home-dashboard" className="w-full">
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back</h1>
        <p className="text-gray-500">Quick access to enterprise resources and personal services.</p>
      </div>

      <div 
        id="dashboard-grid"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {actions.map((action) => (
          <DashboardButton 
            key={action.id} 
            label={action.label} 
            icon={action.icon} 
            id={action.id}
            onClick={() => action.target && onNavigate(action.target)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeDashboard;
