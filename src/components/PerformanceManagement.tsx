/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  BarChart3, 
  Target, 
  ClipboardCheck, 
  Star, 
  Users, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  TrendingUp, 
  TrendingDown,
  ChevronRight,
  Plus,
  Eye,
  Calendar,
  FileText,
  ArrowRight,
  Download
} from 'lucide-react';

interface SummaryCardProps {
  title: string;
  value: string | number;
  trend?: { val: string; positive: boolean };
  icon: React.ReactNode;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ title, value, trend, icon }) => (
  <div className="enterprise-card bg-white p-6 border border-border-light shadow-sm flex items-center justify-between group hover:border-olive transition-all">
    <div>
      <h3 className="text-[10px] font-bold text-text-secondary uppercase tracking-[0.2em] mb-2">{title}</h3>
      <div className="flex items-baseline gap-2">
        <p className="text-3xl font-bold text-text-primary tracking-tighter">{value}</p>
        {trend && (
          <span className={`text-[10px] font-bold flex items-center gap-0.5 ${trend.positive ? 'text-green-600' : 'text-red-500'}`}>
            {trend.positive ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
            {trend.val}
          </span>
        )}
      </div>
    </div>
    <div className="w-12 h-12 bg-olive-light/20 rounded-enterprise flex items-center justify-center text-olive group-hover:scale-110 transition-transform">
      {icon}
    </div>
  </div>
);

const PerformanceManagement: React.FC = () => {
  const summaries = [
    { title: 'Total Employees Under Review', value: 124, icon: <Users size={20} /> },
    { title: 'Pending Self Reviews', value: 18, trend: { val: '12%', positive: false }, icon: <Clock size={20} /> },
    { title: 'Manager Evaluations Pending', value: 34, icon: <ClipboardCheck size={20} /> },
    { title: 'Completed Reviews', value: 72, trend: { val: '24%', positive: true }, icon: <CheckCircle2 size={20} /> },
    { title: 'Average Perf. Score', value: '4.2', icon: <Star size={20} /> },
  ];

  const kraData = [
    { area: 'Technical Excellence', kpi: 'Maintain code coverage above 85% for all microservices.', weightage: '30%', target: '85%', status: 'Achieved' },
    { area: 'Project Delivery', kpi: 'Ensure 100% on-time delivery of assigned sprint tasks.', weightage: '40%', target: '100%', status: 'In Progress' },
    { area: 'Leadership', kpi: 'Conduct at least 2 knowledge sharing sessions per quarter.', weightage: '20%', target: '2 Sessions', status: 'Not Started' },
    { area: 'Compliance', kpi: 'Complete all mandatory security trainings and audits.', weightage: '10%', target: '100%', status: 'Achieved' },
  ];

  const reviewStages = [
    { name: 'Goal Setting Completed', count: 124, status: 'Completed' },
    { name: 'Self Evaluation', count: 106, status: 'In Progress' },
    { name: 'Manager Review', count: 52, status: 'Pending' },
    { name: 'HR Calibration', count: 12, status: 'Upcoming' },
    { name: 'Final Rating Published', count: 0, status: 'Upcoming' },
  ];

  const evaluationSummary = [
    { name: 'Robert Fox', dept: 'Engineering', period: 'Annual 2025', self: 4, manager: 4, final: 4.2, status: 'Completed' },
    { name: 'Jane Cooper', dept: 'Design', period: 'Annual 2025', self: 5, manager: 4, final: '-', status: 'Under Review' },
    { name: 'Guy Hawkins', dept: 'Marketing', period: 'Annual 2025', self: 3, manager: 2, final: 2.5, status: 'Rejected' },
    { name: 'Brooklyn Simmons', dept: 'Sales', period: 'Annual 2025', self: 4, manager: '-', final: '-', status: 'Pending' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Achieved':
      case 'Completed': return 'text-green-600 bg-green-50 border-green-100';
      case 'In Progress':
      case 'Under Review': return 'text-blue-600 bg-blue-50 border-blue-100';
      case 'Pending':
      case 'Not Started': return 'text-orange-600 bg-orange-50 border-orange-100';
      case 'Rejected':
      case 'Overdue': return 'text-red-500 bg-red-50 border-red-100';
      default: return 'text-gray-400 bg-gray-50 border-gray-100';
    }
  };

  const getRatingLabel = (rating: number | string) => {
    if (typeof rating === 'string') return rating;
    if (rating >= 4.5) return 'Excellent';
    if (rating >= 3.5) return 'Good';
    if (rating >= 2.5) return 'Average';
    if (rating >= 1.5) return 'Below Average';
    return 'Poor';
  };

  return (
    <div id="performance-management" className="w-full max-w-7xl mx-auto py-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-olive-light rounded-button flex items-center justify-center text-olive">
            <BarChart3 size={20} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-text-primary uppercase tracking-widest leading-none">Performance Management Systems</h1>
            <p className="text-xs text-text-secondary mt-1">Track goals, evaluations, and performance ratings across the organization.</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
            <button className="btn-secondary px-4 py-2 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                <Download size={14} /> Export Report
            </button>
            <button className="btn-primary px-6 py-2 text-[10px] font-bold uppercase tracking-widest">
                Start New Cycle
            </button>
        </div>
      </div>

      {/* 1. PMS DASHBOARD (OVERVIEW) */}
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1 h-5 bg-olive rounded-full"></div>
          <h2 className="text-xs font-bold text-text-primary uppercase tracking-[0.2em]">Dashboard Overview</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {summaries.map((summary, index) => (
            <SummaryCard key={index} {...summary} />
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-12">
          {/* 2. GOAL SETTING (KRA / KPI MODULE) */}
          <section className="enterprise-card bg-white p-8 border border-border-light shadow-sm">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-50">
                <div className="flex items-center gap-2">
                    <Target size={18} className="text-olive" />
                    <h2 className="text-sm font-bold text-text-primary uppercase tracking-widest">Goal Setting (KRA / KPI)</h2>
                </div>
                <button className="flex items-center gap-1.5 text-[10px] font-bold text-olive uppercase tracking-widest hover:underline">
                    <Plus size={14} /> Add New KRA
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Employee Selector</label>
                <select className="input-field w-full py-2.5 text-xs">
                    <option>Johnathan Doe (EMP-10294)</option>
                    <option>Sarah Williams (EMP-10301)</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Review Period</label>
                <select className="input-field w-full py-2.5 text-xs">
                    <option>Annual 2025</option>
                    <option>Q1 2025</option>
                    <option>Q4 2024</option>
                </select>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50/50">
                    <th className="px-4 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Goal Area</th>
                    <th className="px-4 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">KPI Description</th>
                    <th className="px-4 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Weightage</th>
                    <th className="px-4 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Target</th>
                    <th className="px-4 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {kraData.map((kra, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors group">
                      <td className="px-4 py-4 text-xs font-bold text-text-primary">{kra.area}</td>
                      <td className="px-4 py-4 text-xs text-text-secondary leading-normal">{kra.kpi}</td>
                      <td className="px-4 py-4 text-xs font-bold text-text-primary text-center bg-olive-light/5">{kra.weightage}</td>
                      <td className="px-4 py-4 text-xs text-text-primary text-center font-medium">{kra.target}</td>
                      <td className="px-4 py-4 text-right">
                        <span className={`inline-block px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-widest border ${getStatusColor(kra.status)}`}>
                          {kra.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 4. EVALUATION / RATING SUMMARY */}
          <section className="enterprise-card bg-white p-0 border border-border-light shadow-sm overflow-hidden">
            <div className="px-8 py-5 border-b border-gray-50 bg-gray-50/30 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Star size={18} className="text-olive" />
                    <h2 className="text-sm font-bold text-text-primary uppercase tracking-widest">Evaluation / Rating Summary</h2>
                </div>
                <button className="text-[10px] font-bold text-olive uppercase tracking-widest hover:underline">View Detailed Rankings</button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50/50">
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Employee Name</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Review Period</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Self Rating</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Mgr Rating</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Final Rating</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Status</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {evaluationSummary.map((evalItem, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-olive-light/20 flex items-center justify-center text-olive font-bold text-[10px]">
                            {evalItem.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <p className="text-xs font-bold text-text-primary">{evalItem.name}</p>
                            <p className="text-[9px] text-gray-400 uppercase tracking-tight">{evalItem.dept}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center text-[10px] text-text-secondary font-medium tracking-tight">
                        {evalItem.period}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex flex-col items-center">
                            <span className="text-xs font-bold text-text-primary">{evalItem.self}</span>
                            <span className="text-[8px] text-gray-400 uppercase font-medium">{getRatingLabel(evalItem.self)}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex flex-col items-center">
                            <span className="text-xs font-bold text-text-primary">{evalItem.manager}</span>
                            <span className="text-[8px] text-gray-400 uppercase font-medium">{getRatingLabel(evalItem.manager)}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                         <div className="inline-flex flex-col items-center px-3 py-1 bg-olive-light/10 rounded border border-olive/5">
                            <span className="text-xs font-black text-olive">{evalItem.final}</span>
                            <span className="text-[8px] text-olive font-bold uppercase">{getRatingLabel(evalItem.final)}</span>
                         </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={`inline-block px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-widest border ${getStatusColor(evalItem.status)}`}>
                          {evalItem.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="p-1.5 text-gray-300 hover:text-olive transition-colors">
                          <Eye size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        <div className="space-y-8">
          {/* 3. PERFORMANCE REVIEW CYCLE */}
          <section className="enterprise-card bg-white p-6 border border-border-light shadow-sm">
            <div className="flex items-center gap-2 mb-8">
                <ClipboardCheck size={18} className="text-olive" />
                <h2 className="text-xs font-bold text-text-primary uppercase tracking-widest">Review Cycle Stages</h2>
            </div>
            
            <div className="space-y-6 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-100">
                {reviewStages.map((stage, index) => (
                    <div key={index} className="relative pl-8 flex items-center justify-between group">
                        <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2 bg-white flex items-center justify-center z-10 transition-colors
                            ${stage.status === 'Completed' ? 'border-olive bg-olive text-white' : 
                              stage.status === 'In Progress' ? 'border-olive text-olive shadow-[0_0_0_4px_rgba(107,142,35,0.1)]' : 
                              'border-gray-200 text-gray-300'}
                        `}>
                            {stage.status === 'Completed' ? <CheckCircle2 size={12} /> : <div className="w-1.5 h-1.5 rounded-full bg-current"></div>}
                        </div>
                        <div className="flex-1">
                            <h4 className={`text-[11px] font-bold uppercase tracking-tight
                                ${stage.status === 'Completed' || stage.status === 'In Progress' ? 'text-text-primary' : 'text-gray-400'}
                            `}>
                                {stage.name}
                            </h4>
                            <div className="flex items-center gap-2 mt-0.5">
                                <span className={`text-[9px] font-bold uppercase tracking-widest ${getStatusColor(stage.status).split(' ')[0]}`}>
                                    {stage.status}
                                </span>
                                <span className="text-[9px] text-gray-400">•</span>
                                <span className="text-[9px] text-gray-400 font-bold">{stage.count} Employees</span>
                            </div>
                        </div>
                        <ChevronRight size={14} className="text-gray-200 group-hover:text-olive group-hover:translate-x-1 transition-all" />
                    </div>
                ))}
            </div>
          </section>

          {/* ACTION PANEL */}
          <section className="enterprise-card bg-olive p-1 shadow-sm overflow-hidden">
            <div className="bg-white p-6 rounded-enterprise border border-olive/10 h-full">
                <h3 className="text-[10px] font-bold text-text-secondary uppercase tracking-widest mb-6 border-b border-gray-50 pb-2 flex items-center gap-2">
                    <ArrowRight size={14} className="text-olive" />
                    Action Panel
                </h3>
                <div className="space-y-3">
                    <button className="w-full flex items-center justify-between p-3 rounded-button border border-gray-100 hover:border-olive group transition-all text-left">
                        <div>
                            <p className="text-[11px] font-bold text-text-primary uppercase tracking-tight">Assign Goals</p>
                            <p className="text-[9px] text-gray-400 uppercase tracking-tighter">Set KRAs for direct reports</p>
                        </div>
                        <Target size={16} className="text-gray-200 group-hover:text-olive transition-colors" />
                    </button>
                    <button className="w-full flex items-center justify-between p-3 rounded-button border border-gray-100 hover:border-olive group transition-all text-left">
                        <div>
                            <p className="text-[11px] font-bold text-text-primary uppercase tracking-tight">Publish Ratings</p>
                            <p className="text-[9px] text-gray-400 uppercase tracking-tighter">Confirm final evaluation</p>
                        </div>
                        <CheckCircle2 size={16} className="text-gray-200 group-hover:text-olive transition-colors" />
                    </button>
                    <button className="w-full flex items-center justify-between p-3 rounded-button border border-gray-100 hover:border-olive group transition-all text-left">
                        <div>
                            <p className="text-[11px] font-bold text-text-primary uppercase tracking-tight">HR Calibration</p>
                            <p className="text-[9px] text-gray-400 uppercase tracking-tighter">System-wide review align</p>
                        </div>
                        <Users size={16} className="text-gray-200 group-hover:text-olive transition-colors" />
                    </button>
                </div>

                <div className="mt-8 p-4 bg-gray-50 rounded-enterprise border border-gray-100 flex items-center gap-3">
                    <div className="p-2 bg-white rounded-enterprise shadow-sm text-olive">
                        <FileText size={16} />
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-text-primary leading-tight">Cycle Closing Soon</p>
                        <p className="text-[9px] text-red-500 font-bold uppercase mt-0.5 tracking-tighter flex items-center gap-1">
                            <Clock size={10} /> 5 Days Remaining
                        </p>
                    </div>
                </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PerformanceManagement;
