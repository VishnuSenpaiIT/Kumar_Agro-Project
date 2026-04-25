/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  BarChart3, 
  Users, 
  Briefcase, 
  Building2, 
  ArrowUpRight, 
  ArrowDownRight,
  TrendingUp,
  Download,
  Calendar
} from 'lucide-react';

interface SummaryCardProps {
  title: string;
  value: string | number;
  trend?: { val: string; positive: boolean };
}

const SummaryCard: React.FC<SummaryCardProps> = ({ title, value, trend }) => (
  <div className="bg-white border border-border-light rounded-enterprise p-6 shadow-sm hover:border-olive transition-all group">
    <h3 className="text-[10px] font-bold text-text-secondary uppercase tracking-[0.2em] mb-4">{title}</h3>
    <div className="flex items-end justify-between">
      <p className="text-2xl font-bold text-text-primary tracking-tighter">{value}</p>
      {trend && (
        <div className={`flex items-center gap-1 text-[10px] font-bold ${trend.positive ? 'text-green-600' : 'text-red-500'}`}>
          {trend.positive ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
          {trend.val}
        </div>
      )}
    </div>
  </div>
);

const AnalyticalDashboard: React.FC = () => {
  const summaryMetrics = [
    { title: 'Total Applications Received', value: '4,284', trend: { val: '12%', positive: true } },
    { title: 'Shortlisted Candidates', value: '842', trend: { val: '8%', positive: true } },
    { title: 'Interviews Conducted', value: '315', trend: { val: '5%', positive: false } },
    { title: 'Offers Released', value: '124', trend: { val: '15%', positive: true } },
    { title: 'Offer Acceptance Rate (%)', value: '88%', trend: { val: '2.4%', positive: true } },
    { title: 'Hiring Success Rate (%)', value: '72%', trend: { val: '1.2%', positive: true } },
  ];

  const departmentAnalytics = [
    { name: 'Engineering', total: 450, active: 442, joinees: 12, exits: 4, attrition: '0.9%', hiring: '2.7%', pref: 4.2 },
    { name: 'Sales & Marketing', total: 220, active: 210, joinees: 15, exits: 8, attrition: '3.6%', hiring: '6.8%', pref: 3.8 },
    { name: 'Human Resources', total: 45, active: 44, joinees: 2, exits: 1, attrition: '2.2%', hiring: '4.4%', pref: 4.5 },
    { name: 'Operations', total: 310, active: 302, joinees: 8, exits: 6, attrition: '1.9%', hiring: '2.6%', pref: 3.9 },
    { name: 'Finance', total: 65, active: 64, joinees: 3, exits: 0, attrition: '0.0%', hiring: '4.6%', pref: 4.3 },
  ];

  // Helper for simple bar percentage width (clamped)
  const getBarWidth = (rate: string) => {
    const numeric = parseFloat(rate.replace('%', ''));
    return `${Math.min(Math.max(numeric * 10, 5), 100)}%`; // Scaled for visibility
  };

  return (
    <div id="analytical-dashboard" className="space-y-10">
      {/* Header Actions */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
           <div className="w-10 h-10 bg-olive-light rounded-button flex items-center justify-center text-olive shadow-sm">
             <BarChart3 size={20} />
           </div>
           <div>
             <h2 className="text-xl font-bold text-text-primary uppercase tracking-widest leading-none">Analytics Dashboard</h2>
             <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight mt-1">Hiring Efficiency & Workforce Metrics</p>
           </div>
        </div>
        <div className="flex items-center gap-3">
           <div className="flex items-center gap-2 px-4 py-2 bg-white border border-border-light rounded shadow-sm">
              <Calendar size={14} className="text-olive" />
              <span className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">April 2026</span>
           </div>
           <button className="btn-secondary px-6 py-2 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 hover:border-olive">
             <Download size={14} /> Export CSV
           </button>
        </div>
      </div>

      {/* 1. Summary Metrics Cards */}
      <section id="summary-metrics">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {summaryMetrics.map((metric, idx) => (
            <SummaryCard key={idx} {...metric} />
          ))}
        </div>
      </section>

      {/* 2. Department-wise Analytics Table */}
      <section id="dept-analytics" className="enterprise-card bg-white p-0 border border-border-light shadow-sm overflow-hidden">
        <div className="px-8 py-5 border-b border-gray-50 flex items-center justify-between bg-gray-50/20">
          <div className="flex items-center gap-2">
            <Building2 size={18} className="text-olive" />
            <h2 className="text-sm font-bold text-text-primary uppercase tracking-widest">Departmental Reporting</h2>
          </div>
          <div className="flex items-center gap-2">
             <span className="w-2 h-2 rounded-full bg-green-500"></span>
             <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest leading-none">Real-time sync active</span>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-olive/5">
                <th className="px-8 py-4 text-[10px] font-bold text-text-primary uppercase tracking-widest">Department Name</th>
                <th className="px-8 py-4 text-[10px] font-bold text-text-primary/70 uppercase tracking-widest text-right">Total</th>
                <th className="px-8 py-4 text-[10px] font-bold text-text-primary/70 uppercase tracking-widest text-right">Active</th>
                <th className="px-8 py-4 text-[10px] font-bold text-text-primary/70 uppercase tracking-widest text-right">New Joinees</th>
                <th className="px-8 py-4 text-[10px] font-bold text-text-primary/70 uppercase tracking-widest text-right">Exits</th>
                <th className="px-8 py-4 text-[10px] font-bold text-text-primary/70 uppercase tracking-widest text-right">Attrition %</th>
                <th className="px-8 py-4 text-[10px] font-bold text-text-primary/70 uppercase tracking-widest text-right">Hiring %</th>
                <th className="px-8 py-4 text-[10px] font-bold text-text-primary/70 uppercase tracking-widest text-right">Avg Perf</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {departmentAnalytics.map((dept, i) => (
                <tr key={i} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="px-8 py-4 text-xs font-bold text-text-primary uppercase tracking-tight">{dept.name}</td>
                  <td className="px-8 py-4 text-xs font-medium text-text-secondary text-right">{dept.total}</td>
                  <td className="px-8 py-4 text-xs font-medium text-text-secondary text-right">{dept.active}</td>
                  <td className="px-8 py-4 text-right">
                    <span className="text-xs font-bold text-blue-600">{dept.joinees}</span>
                  </td>
                  <td className="px-8 py-4 text-right">
                    <span className="text-xs font-bold text-red-500">{dept.exits}</span>
                  </td>
                  <td className="px-8 py-4 text-right">
                    <div className="flex flex-col items-end">
                      <span className="text-xs font-bold text-text-primary">{dept.attrition}</span>
                      <div className="w-16 h-1 bg-gray-100 rounded-full mt-1 overflow-hidden">
                        <div className="h-full bg-red-500" style={{ width: getBarWidth(dept.attrition) }}></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-4 text-right">
                    <div className="flex flex-col items-end">
                      <span className="text-xs font-bold text-text-primary">{dept.hiring}</span>
                      <div className="w-16 h-1 bg-gray-100 rounded-full mt-1 overflow-hidden">
                        <div className="h-full bg-green-500" style={{ width: getBarWidth(dept.hiring) }}></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-4 text-right">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-olive-light/10 text-xs font-bold text-olive rounded border border-olive/5">
                      <TrendingUp size={12} />
                      {dept.pref}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. Hiring vs Attrition Visual Section */}
      <section id="visual-bars" className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="enterprise-card bg-white p-8 border border-border-light shadow-sm">
           <div className="flex items-center gap-2 mb-8">
              <Briefcase size={18} className="text-olive" />
              <h2 className="text-sm font-bold text-text-primary uppercase tracking-widest">Hiring vs Attrition Trends</h2>
           </div>
           
           <div className="space-y-6">
              {departmentAnalytics.map((dept, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">{dept.name}</span>
                    <div className="flex gap-4">
                       <span className="text-[9px] font-bold text-green-600 uppercase tracking-tighter">Hiring: {dept.hiring}</span>
                       <span className="text-[9px] font-bold text-red-500 uppercase tracking-tighter">Exit: {dept.attrition}</span>
                    </div>
                  </div>
                  <div className="flex h-3 w-full bg-gray-50 rounded-full overflow-hidden border border-gray-100/50">
                    <div 
                      className="bg-green-500 h-full border-r border-white/20" 
                      style={{ width: getBarWidth(dept.hiring) }}
                    ></div>
                    <div 
                      className="bg-red-500 h-full" 
                      style={{ width: getBarWidth(dept.attrition) }}
                    ></div>
                  </div>
                </div>
              ))}
           </div>
           
           <div className="mt-10 flex items-center justify-center gap-8 pt-6 border-t border-gray-50">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Avg Hiring Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-sm"></div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Avg Attrition Rate</span>
              </div>
           </div>
        </div>

        <div className="enterprise-card bg-olive p-1 shadow-sm overflow-hidden">
           <div className="bg-white p-8 rounded-enterprise h-full flex flex-col justify-center">
              <h3 className="text-sm font-bold text-text-primary uppercase tracking-widest mb-4">Enterprise Insights</h3>
              <p className="text-xs text-text-secondary leading-relaxed mb-6">
                Based on current Q2 trends, the Engineering department shows the highest operational efficiency with the lowest attrition rate. Recommendation: Focus hiring outreach on Sales to meet quarterly growth targets.
              </p>
              <div className="space-y-3">
                 <div className="flex items-center justify-between p-3 bg-olive-light/10 border border-olive/10 rounded">
                    <span className="text-[10px] font-bold text-olive uppercase tracking-widest">Recruitment Backlog</span>
                    <span className="text-xs font-bold text-olive">12 Pending</span>
                 </div>
                 <div className="flex items-center justify-between p-3 bg-blue-50 border border-blue-100 rounded">
                    <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Interview Pipeline</span>
                    <span className="text-xs font-bold text-blue-600">45 Active</span>
                 </div>
              </div>
              <button className="btn-primary w-full mt-8 py-3 text-[10px] font-bold uppercase tracking-[0.2em] shadow-button">
                 Run Full Statistical Audit
              </button>
           </div>
        </div>
      </section>
    </div>
  );
};

export default AnalyticalDashboard;
