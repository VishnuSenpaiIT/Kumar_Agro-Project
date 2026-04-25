/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Briefcase, 
  Users, 
  UserCheck, 
  UserPlus, 
  Plus, 
  ArrowRight,
  ClipboardList,
  Search,
  CheckCircle2,
  Clock,
  Send,
  User
} from 'lucide-react';

interface SummaryCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ title, value, icon }) => (
  <div className="enterprise-card bg-white p-6 border border-border-light shadow-sm hover:border-olive transition-all flex items-center justify-between">
    <div>
      <h3 className="text-[10px] font-bold text-text-secondary uppercase tracking-[0.2em] mb-2">{title}</h3>
      <p className="text-3xl font-bold text-text-primary tracking-tighter">{value}</p>
    </div>
    <div className="w-12 h-12 bg-olive-light/30 rounded-enterprise flex items-center justify-center text-olive">
      {icon}
    </div>
  </div>
);

interface RecruitmentDashboardProps {
  onNavigate?: (view: string) => void;
}

const RecruitmentDashboard: React.FC<RecruitmentDashboardProps> = ({ onNavigate }) => {
  const summaries = [
    { title: 'Total Open Positions', value: 12, icon: <Briefcase size={20} /> },
    { title: 'Total Candidates', value: 248, icon: <Users size={20} /> },
    { title: 'Candidates in Process', value: 45, icon: <Clock size={20} /> },
    { title: 'Hired Candidates', value: 8, icon: <UserCheck size={20} /> },
  ];

  const pipelineStages = [
    { name: 'Screening', count: 18, color: 'text-blue-500', icon: <Search size={14} /> },
    { name: 'Short Test', count: 12, color: 'text-purple-500', icon: <ClipboardList size={14} /> },
    { name: 'Interview', count: 8, color: 'text-orange-500', icon: <Users size={14} /> },
    { name: 'Pre-Offer', count: 4, color: 'text-yellow-500', icon: <Clock size={14} /> },
    { name: 'Offer Released', count: 2, color: 'text-green-500', icon: <Send size={14} /> },
    { name: 'Joined', count: 1, color: 'text-olive', icon: <CheckCircle2 size={14} /> },
  ];

  return (
    <div id="recruitment-dashboard" className="w-full max-w-7xl mx-auto py-4">
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-olive-light rounded-button text-olive">
              <Briefcase size={24} />
            </div>
            <h1 className="text-2xl font-bold text-text-primary uppercase tracking-widest">Recruitment Dashboard</h1>
          </div>
          <p className="text-text-secondary text-sm">Monitor hiring pipelines, manage job openings, and track candidate progress.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={() => onNavigate?.('Job Openings')}
            className="btn-primary flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-widest group"
          >
            <Plus size={16} className="group-hover:rotate-90 transition-transform" />
            Create Job Opening
          </button>
          <button 
            onClick={() => onNavigate?.('Candidates')}
            className="btn-secondary flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-widest"
          >
            <Users size={16} />
            View Candidates
          </button>
        </div>
      </div>

      {/* 1. Summary Cards */}
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1 h-5 bg-olive rounded-full"></div>
          <h2 className="text-xs font-bold text-text-primary uppercase tracking-[0.2em]">Hiring Overview</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {summaries.map((summary, index) => (
            <SummaryCard key={index} {...summary} />
          ))}
        </div>
      </section>

      {/* 2. Recruitment Pipeline */}
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1 h-5 bg-olive rounded-full"></div>
          <h2 className="text-xs font-bold text-text-primary uppercase tracking-[0.2em]">Recruitment Pipeline</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {pipelineStages.map((stage, index) => (
            <div key={index} className="relative">
              <div className="enterprise-card bg-white p-5 border border-border-light shadow-sm flex flex-col items-center text-center group hover:border-olive transition-all h-full">
                <div className={`w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform ${stage.color}`}>
                  {stage.icon}
                </div>
                <h3 className="text-[10px] font-bold text-text-secondary uppercase tracking-widest mb-1">{stage.name}</h3>
                <p className="text-xl font-bold text-text-primary">{stage.count}</p>
                <div className="mt-4 w-full h-1 bg-gray-50 rounded-full overflow-hidden">
                  <div className={`h-full ${stage.color.replace('text', 'bg')} opacity-40`} style={{ width: `${(stage.count / 18) * 100}%` }}></div>
                </div>
              </div>
              {index < pipelineStages.length - 1 && (
                <div className="hidden xl:block absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                  <ArrowRight size={16} className="text-gray-200" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Quick Actions (Duplicate in case needed for different placement, but following prompt structure) */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-1 h-5 bg-olive rounded-full"></div>
            <h2 className="text-xs font-bold text-text-primary uppercase tracking-[0.2em]">Recent Job Postings</h2>
          </div>
          <button 
            onClick={() => onNavigate?.('Job Openings')}
            className="text-[10px] font-bold text-olive uppercase tracking-[0.1em] hover:underline"
          >
            View All
          </button>
        </div>
        <div className="enterprise-card bg-white p-0 border border-border-light shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-100">
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Position Title</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Department</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Open Since</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Applications</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                { title: 'Senior Java Developer', dept: 'Engineering', date: 'Oct 12, 2025', apps: 42, status: 'Active' },
                { title: 'UX/UI Designer', dept: 'Design', date: 'Oct 15, 2025', apps: 28, status: 'On Hold' },
                { title: 'Talent Acquisition lead', dept: 'HR', date: 'Oct 20, 2025', apps: 15, status: 'Active' },
              ].map((job, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors group">
                  <td className="px-6 py-4 font-bold text-text-primary text-sm uppercase tracking-tight">{job.title}</td>
                  <td className="px-6 py-4 text-xs font-medium text-gray-500 uppercase">{job.dept}</td>
                  <td className="px-6 py-4 text-xs text-gray-400 text-center uppercase">{job.date}</td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-xs font-bold text-olive">{job.apps}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className={`inline-block px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-widest ${
                      job.status === 'Active' ? 'bg-green-50 text-green-600 border border-green-100' : 'bg-orange-50 text-orange-600 border border-orange-100'
                    }`}>
                      {job.status}
                    </span>
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

export default RecruitmentDashboard;
