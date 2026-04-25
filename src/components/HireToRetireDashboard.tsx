/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  UserPlus, 
  Search, 
  MessageSquare, 
  LogOut, 
  GitFork, 
  Users, 
  UserCheck, 
  Clock, 
  FileCheck,
  ClipboardList,
  Mail,
  Zap,
  Activity,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Briefcase
} from 'lucide-react';

interface SummaryCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color?: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ title, value, icon, color = 'olive' }) => (
  <div className="bg-white border border-border-light rounded-enterprise p-6 shadow-sm hover:border-olive transition-all group">
    <div className="flex items-center justify-between mb-4">
      <div className={`p-3 rounded-button ${color === 'olive' ? 'bg-olive-light/20 text-olive' : color === 'red' ? 'bg-red-50 text-red-500' : 'bg-blue-50 text-blue-500'}`}>
        {icon}
      </div>
      <TrendingUp size={16} className="text-gray-200 group-hover:text-olive transition-colors" />
    </div>
    <h3 className="text-[10px] font-bold text-text-secondary uppercase tracking-[0.2em] mb-1">{title}</h3>
    <p className="text-2xl font-bold text-text-primary tracking-tighter">{value}</p>
  </div>
);

const HireToRetireDashboard: React.FC = () => {
  const summaryData = [
    { title: 'Total Employees in System', value: '1,284', icon: <Users size={20} /> },
    { title: 'New Joinees', value: '42', icon: <UserPlus size={20} />, color: 'blue' },
    { title: 'Active Employees', value: '1,150', icon: <UserCheck size={20} /> },
    { title: 'Employees in Probation', value: '86', icon: <Clock size={20} />, color: 'blue' },
    { title: 'Employees in Notice Period', value: '15', icon: <Mail size={20} />, color: 'red' },
    { title: 'Exited Employees', value: '245', icon: <LogOut size={20} />, color: 'red' },
  ];

  const lifecycleStages = [
    { name: 'Recruitment', count: 156, icon: <UserPlus size={14} /> },
    { name: 'Screening', count: 82, icon: <Search size={14} /> },
    { name: 'Short Test', count: 45, icon: <ClipboardList size={14} /> },
    { name: 'Interview', count: 28, icon: <MessageSquare size={14} /> },
    { name: 'Pre-Offer', count: 12, icon: <FileCheck size={14} /> },
    { name: 'Offer Released', count: 8, icon: <Mail size={14} /> },
    { name: 'Onboarding', count: 14, icon: <Zap size={14} /> },
    { name: 'Probation', count: 86, icon: <Clock size={14} /> },
    { name: 'Confirmation', count: 32, icon: <ShieldCheck size={14} /> },
    { name: 'Active Employment', count: 1150, icon: <UserCheck size={14} />, highlight: true },
    { name: 'Job Share / Internal Movement', count: 24, icon: <GitFork size={14} /> },
    { name: 'Resignation Submitted', count: 6, icon: <FileCheck size={14} /> },
    { name: 'Notice Period', count: 15, icon: <Clock size={14} /> },
    { name: 'Exit Processing', count: 4, icon: <Activity size={14} /> },
    { name: 'Exit Completed', count: 245, icon: <LogOut size={14} /> },
  ];

  const trackingData = [
    { name: 'Johnathon Doe', id: 'EMP-10294', dept: 'Engineering', stage: 'Active Employment', status: 'Active', date: 'Oct 24, 2025' },
    { name: 'Sarah Williams', id: 'EMP-10301', dept: 'Design', stage: 'Onboarding', status: 'In Progress', date: 'Oct 22, 2025' },
    { name: 'Michael Brown', id: 'EMP-10312', dept: 'Sales', stage: 'Interview', status: 'Pending', date: 'Oct 20, 2025' },
    { name: 'Emily Davis', id: 'EMP-10285', dept: 'Marketing', stage: 'Pre-Offer', status: 'On Hold', date: 'Oct 18, 2025' },
    { name: 'Robert Wilson', id: 'EMP-10156', dept: 'Operations', stage: 'Exit Processing', status: 'Exited', date: 'Oct 15, 2025' },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-50 text-green-600 border-green-100';
      case 'In Progress': return 'bg-blue-50 text-blue-600 border-blue-100';
      case 'Pending': return 'bg-orange-50 text-orange-600 border-orange-100';
      case 'On Hold': return 'bg-gray-50 text-gray-400 border-gray-100';
      case 'Exited': return 'bg-red-50 text-red-600 border-red-100';
      default: return 'bg-gray-50 text-gray-500';
    }
  };

  return (
    <div id="hire-to-retire-dashboard" className="space-y-10">
      {/* 1. Summary Cards Section */}
      <section id="summary-section">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1 h-5 bg-olive rounded-full"></div>
          <h2 className="text-xs font-bold text-text-primary uppercase tracking-[0.2em]">Lifecycle Summary</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {summaryData.map((card, idx) => (
            <SummaryCard key={idx} {...card} />
          ))}
        </div>
      </section>

      {/* 2. Lifecycle Pipeline Section */}
      <section id="pipeline-section">
        <div className="flex items-center justify-between mb-6 pb-2 border-b border-gray-100">
           <div className="flex items-center gap-2">
              <GitFork size={18} className="text-olive" />
              <h2 className="text-sm font-bold text-text-primary uppercase tracking-widest">Employee Lifecycle Pipeline</h2>
           </div>
           <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">
              <span className="w-2 h-2 rounded-full bg-olive"></span>
              Strategic Stages
           </div>
        </div>
        
        <div className="overflow-x-auto pb-4 custom-scrollbar">
          <div className="flex gap-4 min-w-max px-2">
            {lifecycleStages.map((stage, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col items-center gap-3 p-4 rounded-enterprise border min-w-[140px] text-center transition-all relative
                  ${stage.highlight 
                    ? 'bg-olive text-white border-olive shadow-md ring-4 ring-olive/5 z-10' 
                    : 'bg-white border-border-light hover:border-olive group shadow-sm'}`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors
                  ${stage.highlight ? 'bg-white/20 text-white' : 'bg-olive-light/20 text-olive group-hover:bg-olive group-hover:text-white'}
                `}>
                  {stage.icon}
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-tight leading-tight mb-1">{stage.name}</h4>
                  <p className={`text-lg font-black tracking-tighter ${stage.highlight ? 'text-white' : 'text-text-primary'}`}>{stage.count}</p>
                </div>

                {idx < lifecycleStages.length - 1 && (
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2 z-0 hidden lg:block">
                     <ArrowRight size={14} className="text-gray-200" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Status Tracking Table Section */}
      <section id="tracking-section" className="enterprise-card bg-white p-0 border border-border-light shadow-sm overflow-hidden">
        <div className="px-8 py-5 border-b border-gray-50 flex items-center justify-between bg-gray-50/30">
           <div className="flex items-center gap-2">
              <Briefcase size={18} className="text-olive" />
              <h2 className="text-sm font-bold text-text-primary uppercase tracking-widest">Employee Status Tracking</h2>
           </div>
           <button className="text-[10px] font-bold text-olive uppercase tracking-[0.2em] hover:underline">
             View Full Report
           </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50">
                <th className="px-8 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Employee Name</th>
                <th className="px-8 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Department</th>
                <th className="px-8 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Current Stage</th>
                <th className="px-8 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Status</th>
                <th className="px-8 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">Last Updated</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {trackingData.map((row, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors group">
                  <td className="px-8 py-4">
                    <p className="text-xs font-bold text-text-primary leading-none mb-1 group-hover:text-olive transition-colors">{row.name}</p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-none">{row.id}</p>
                  </td>
                  <td className="px-8 py-4 text-center text-[11px] font-medium text-text-secondary">
                    {row.dept}
                  </td>
                  <td className="px-8 py-4 text-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-olive-light/10 text-[10px] font-bold text-olive uppercase tracking-tight rounded border border-olive/5">
                      <div className="w-1 h-1 bg-olive rounded-full"></div>
                      {row.stage}
                    </span>
                  </td>
                  <td className="px-8 py-4 text-center">
                    <span className={`inline-block px-3 py-1 rounded text-[9px] font-bold uppercase tracking-[0.2em] border ${getStatusBadge(row.status)} shadow-sm`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-8 py-4 text-right text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    {row.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default HireToRetireDashboard;
