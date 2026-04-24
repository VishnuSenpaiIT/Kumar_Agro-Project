/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Calendar, 
  CheckCircle2, 
  XCircle, 
  Sun, 
  ChevronLeft, 
  ChevronRight,
  Filter,
  X
} from 'lucide-react';

interface SummaryCardProps {
  title: string;
  value: string | number;
  status: 'total' | 'present' | 'absent' | 'holiday';
}

const SummaryCard: React.FC<SummaryCardProps> = ({ title, value, status }) => {
  const getIcon = () => {
    switch (status) {
      case 'present': return <CheckCircle2 size={16} className="text-green-600" />;
      case 'absent': return <XCircle size={16} className="text-red-500" />;
      case 'holiday': return <Sun size={16} className="text-gray-400" />;
      default: return <Calendar size={16} className="text-olive" />;
    }
  };

  const getBg = () => {
    switch (status) {
      case 'present': return 'bg-green-50/50';
      case 'absent': return 'bg-red-50/50';
      case 'holiday': return 'bg-gray-50';
      default: return 'bg-olive-light/30';
    }
  };

  return (
    <div className="enterprise-card bg-white p-5 border border-border-light shadow-sm flex items-center justify-between group hover:border-olive transition-all">
      <div>
        <h3 className="text-[10px] font-bold text-text-secondary uppercase tracking-[0.2em] mb-2">{title}</h3>
        <p className="text-3xl font-bold text-text-primary tracking-tighter">{value}</p>
      </div>
      <div className={`p-4 rounded-enterprise ${getBg()}`}>
        {getIcon()}
      </div>
    </div>
  );
};

interface TotalWorkingDaysProps {
  onCancel?: () => void;
}

const TotalWorkingDays: React.FC<TotalWorkingDaysProps> = ({ onCancel }) => {
  const monthlyData = [
    { month: 'January', total: 22, present: 21 },
    { month: 'February', total: 20, present: 19 },
    { month: 'March', total: 23, present: 22 },
    { month: 'April', total: 21, present: 21 },
  ];

  const dailyDetails = [
    { date: '2026-04-01', day: 'Wednesday', status: 'Present', remarks: '-' },
    { date: '2026-04-02', day: 'Thursday', status: 'Present', remarks: '-' },
    { date: '2026-04-03', day: 'Friday', status: 'Holiday', remarks: 'Good Friday' },
    { date: '2026-04-04', day: 'Saturday', status: 'Weekend', remarks: 'Off Day' },
    { date: '2026-04-05', day: 'Sunday', status: 'Weekend', remarks: 'Off Day' },
    { date: '2026-04-06', day: 'Monday', status: 'Absent', remarks: 'Unplanned Leave' },
    { date: '2026-04-07', day: 'Tuesday', status: 'Present', remarks: '-' },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Present': return 'bg-green-50 text-green-600 border-green-100';
      case 'Absent': return 'bg-red-50 text-red-600 border-red-100';
      case 'Holiday': return 'bg-gray-100 text-gray-600 border-gray-200';
      default: return 'bg-gray-50 text-gray-400 border-gray-100';
    }
  };

  return (
    <div id="working-days-module" className="w-full max-w-6xl mx-auto py-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-olive-light rounded-button flex items-center justify-center text-olive">
            <Calendar size={20} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-text-primary uppercase tracking-widest">Total Working Days</h1>
            <p className="text-xs text-text-secondary mt-1">Attendance and work schedule summary.</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
            <div className="flex items-center bg-white border border-gray-100 shadow-sm rounded-button overflow-hidden">
                <button className="p-2 hover:bg-gray-50 text-gray-400 group"><ChevronLeft size={16} className="group-hover:text-olive transition-colors" /></button>
                <span className="px-4 text-[11px] font-bold text-text-primary uppercase tracking-widest">April 2026</span>
                <button className="p-2 hover:bg-gray-50 text-gray-400 group"><ChevronRight size={16} className="group-hover:text-olive transition-colors" /></button>
            </div>
            <button 
                onClick={onCancel}
                className="p-2 text-gray-400 hover:text-olive hover:bg-olive-light rounded-full transition-colors"
            >
                <X size={20} />
            </button>
        </div>
      </div>

      <div className="space-y-10">
        {/* 1. Summary Section */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1 h-5 bg-olive rounded-full"></div>
            <h2 className="text-xs font-bold text-text-primary uppercase tracking-[0.2em]">Summary Overview (Current Month)</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <SummaryCard title="Total Working Days" value={21} status="total" />
            <SummaryCard title="Days Present" value={20} status="present" />
            <SummaryCard title="Days Absent" value={1} status="absent" />
            <SummaryCard title="Holidays" value={2} status="holiday" />
          </div>
        </section>

        {/* 2. Monthly Breakdown */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-1 h-5 bg-olive rounded-full"></div>
              <h2 className="text-xs font-bold text-text-primary uppercase tracking-[0.2em]">Monthly Breakdown (Year 2026)</h2>
            </div>
            <button className="text-[10px] font-bold text-olive uppercase tracking-widest hover:underline">View History</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {monthlyData.map((data, index) => (
              <div key={index} className="enterprise-card bg-white p-4 border border-border-light shadow-sm flex items-center justify-between group">
                <div>
                  <p className="text-xs font-bold text-text-primary mb-1 uppercase tracking-tighter">{data.month}</p>
                  <p className="text-[10px] text-gray-400 font-medium tracking-widest uppercase">
                    Working: <span className="text-olive">{data.total}</span> | Present: <span className="text-green-600">{data.present}</span>
                  </p>
                </div>
                <div className="w-8 h-8 rounded bg-gray-50 flex items-center justify-center text-[10px] font-bold text-gray-400 border border-gray-100 group-hover:bg-olive group-hover:text-white transition-all">
                    {(data.present / data.total * 100).toFixed(0)}%
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Detailed Table */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-1 h-5 bg-olive rounded-full"></div>
              <h2 className="text-xs font-bold text-text-primary uppercase tracking-[0.2em]">Day-wise details</h2>
            </div>
            <div className="flex items-center gap-2">
                <button className="p-2 border border-gray-100 rounded-button bg-white text-gray-400 hover:text-olive transition-colors flex items-center gap-2 shadow-sm">
                    <Filter size={14} />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Filter</span>
                </button>
            </div>
          </div>

          <div className="enterprise-card bg-white p-0 border border-border-light shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50/50 border-b border-gray-100">
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Date</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Day</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Status</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Remarks</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-[13px]">
                  {dailyDetails.map((detail, index) => (
                    <tr key={index} className="hover:bg-olive-light/10 transition-colors group">
                      <td className="px-6 py-4 font-bold text-text-primary tracking-tight">{detail.date}</td>
                      <td className="px-6 py-4 font-medium text-gray-500">{detail.day}</td>
                      <td className="px-6 py-4">
                        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[10px] font-bold uppercase tracking-widest ${getStatusBadge(detail.status)}`}>
                            {detail.status === 'Present' && <CheckCircle2 size={10} />}
                            {detail.status === 'Absent' && <XCircle size={10} />}
                            {detail.status === 'Holiday' && <Sun size={10} />}
                            {detail.status}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-[11px] text-gray-400 italic font-medium">{detail.remarks}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-gray-50/30 px-6 py-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Updated as of Today, 09:00 AM</span>
                <button className="btn-secondary px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest">Export PDF</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TotalWorkingDays;
