/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  LogOut, 
  Users, 
  Clock, 
  CheckCircle2, 
  ClipboardList, 
  UserMinus, 
  UserCheck, 
  ChevronRight,
  Eye,
  ArrowRight,
  TrendingUp,
  FileText
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
    <div className="w-12 h-12 bg-olive-light/20 rounded-enterprise flex items-center justify-center text-olive">
      {icon}
    </div>
  </div>
);

interface SeparationDashboardProps {
  onNavigate?: (view: string) => void;
}

const SeparationDashboard: React.FC<SeparationDashboardProps> = ({ onNavigate }) => {
  const summaries = [
    { title: 'Total Resignations', value: 24, icon: <LogOut size={20} /> },
    { title: 'Pending Approvals', value: 6, icon: <Clock size={20} /> },
    { title: 'In Notice Period', value: 12, icon: <TrendingUp size={20} /> },
    { title: 'Completed Exits', value: 245, icon: <CheckCircle2 size={20} /> },
  ];

  const pipelineStages = [
    { name: 'Resignation Submitted', count: 4, color: 'text-blue-500', icon: <FileText size={14} /> },
    { name: 'Manager Review', count: 2, color: 'text-orange-500', icon: <UserCheck size={14} /> },
    { name: 'HR Review', count: 3, color: 'text-purple-500', icon: <Users size={14} /> },
    { name: 'Notice Period', count: 12, color: 'text-olive', icon: <Clock size={14} /> },
    { name: 'Exit Interview', count: 2, color: 'text-yellow-500', icon: <ClipboardList size={14} /> },
    { name: 'Full & Final Settlement', count: 1, color: 'text-gray-500', icon: <ClipboardList size={14} /> },
    { name: 'Completed', count: 245, color: 'text-green-500', icon: <CheckCircle2 size={14} /> },
  ];

  const requests = [
    { name: 'Robert Fox', dept: 'Engineering', resDate: 'Oct 10, 2025', lastDay: 'Jan 10, 2026', status: 'Pending' },
    { name: 'Jane Cooper', dept: 'Design', resDate: 'Oct 15, 2025', lastDay: 'Nov 15, 2025', status: 'In Progress' },
    { name: 'Guy Hawkins', dept: 'Marketing', resDate: 'Sep 20, 2025', lastDay: 'Oct 20, 2025', status: 'Approved' },
    { name: 'Brooklyn Simmons', dept: 'Engineering', resDate: 'Aug 05, 2025', lastDay: 'Sep 05, 2025', status: 'Completed' },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Approved': return 'bg-green-50 text-green-600 border-green-100';
      case 'Pending': return 'bg-orange-50 text-orange-600 border-orange-100';
      case 'In Progress': return 'bg-blue-50 text-blue-600 border-blue-100';
      case 'Completed': return 'bg-gray-50 text-gray-400 border-gray-100';
      default: return 'bg-gray-50 text-gray-500';
    }
  };

  return (
    <div id="separation-dashboard" className="w-full max-w-7xl mx-auto py-4">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-olive-light rounded-button text-olive">
            <LogOut size={24} />
          </div>
          <h1 className="text-2xl font-bold text-text-primary uppercase tracking-widest">Separation Dashboard</h1>
        </div>
        <p className="text-text-secondary text-sm">Track and manage employee offboarding workflows and exit processes.</p>
      </div>

      {/* 1. Summary Cards */}
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1 h-5 bg-olive rounded-full"></div>
          <h2 className="text-xs font-bold text-text-primary uppercase tracking-[0.2em]">Exit Overview</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {summaries.map((summary, index) => (
            <SummaryCard key={index} {...summary} />
          ))}
        </div>
      </section>

      {/* 2. Exit Pipeline Stages */}
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1 h-5 bg-olive rounded-full"></div>
          <h2 className="text-xs font-bold text-text-primary uppercase tracking-[0.2em]">Offboarding Pipeline</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {pipelineStages.map((stage, index) => (
            <div key={index} className="relative">
              <div className="enterprise-card bg-white p-4 border border-border-light shadow-sm flex flex-col items-center text-center group hover:border-olive transition-all h-full min-h-[140px] justify-center">
                <div className={`w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform ${stage.color}`}>
                  {stage.icon}
                </div>
                <h3 className="text-[9px] font-bold text-text-secondary uppercase tracking-tighter mb-1 leading-tight">{stage.name}</h3>
                <p className="text-lg font-bold text-text-primary">{stage.count}</p>
              </div>
              {index < pipelineStages.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 z-10 text-gray-200">
                  <ChevronRight size={16} />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 3. Recent Separation Requests */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-1 h-5 bg-olive rounded-full"></div>
            <h2 className="text-xs font-bold text-text-primary uppercase tracking-[0.2em]">Recent Separation Requests</h2>
          </div>
          <button 
            onClick={() => onNavigate?.('Separation Records')}
            className="text-[10px] font-bold text-olive uppercase tracking-widest hover:underline"
          >
            View All Requests
          </button>
        </div>
        
        <div className="enterprise-card bg-white p-0 border border-border-light shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-100">
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Employee Name</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Department</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Resignation Date</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Last Working Day</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Status</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {requests.map((req, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-olive-light/20 flex items-center justify-center text-olive font-bold text-[10px]">
                        {req.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="text-sm font-bold text-text-primary tracking-tight">{req.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest bg-gray-50 px-2 py-1 rounded">
                      {req.dept}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center text-xs text-text-secondary">{req.resDate}</td>
                  <td className="px-6 py-4 text-center text-xs font-bold text-text-primary">{req.lastDay}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={`inline-block px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest border ${getStatusBadge(req.status)}`}>
                      {req.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-gray-300 hover:text-olive transition-colors" title="View Details">
                      <Eye size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Quick Actions / Integration Info */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-olive-light/10 border border-olive/10 rounded-enterprise flex items-start gap-4">
          <div className="p-3 bg-white rounded-enterprise shadow-sm text-olive">
            <UserMinus size={24} />
          </div>
          <div>
            <h4 className="text-sm font-bold text-text-primary uppercase tracking-widest mb-1">Initiate Separation</h4>
            <p className="text-xs text-text-secondary leading-normal mb-4">Start a new offboarding process for an employee who has resigned or is being terminated.</p>
            <button 
              onClick={() => onNavigate?.('Separation Request')}
              className="btn-primary px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 group"
            >
              Start Process
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
        
        <div className="p-6 bg-gray-50 border border-gray-100 rounded-enterprise flex items-start gap-4">
          <div className="p-3 bg-white rounded-enterprise shadow-sm text-gray-400">
            <Users size={24} />
          </div>
          <div>
            <h4 className="text-sm font-bold text-text-primary uppercase tracking-widest mb-1">Exit Interviews</h4>
            <p className="text-xs text-text-secondary leading-normal mb-4">Manage scheduling and feedback collection for upcoming exit interviews.</p>
            <button className="btn-secondary px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest">
              Manage Interviews
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeparationDashboard;
