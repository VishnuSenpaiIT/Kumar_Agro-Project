/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Calendar, 
  Plus, 
  List, 
  CalendarDays,
  Clock,
  CheckCircle2,
  XCircle,
  MoreVertical
} from 'lucide-react';

interface LeaveBalanceCardProps {
  type: string;
  total: number;
  used: number;
  remaining: number;
}

const LeaveBalanceCard: React.FC<LeaveBalanceCardProps> = ({ type, total, used, remaining }) => (
  <div className="enterprise-card bg-white p-6 flex flex-col justify-between border border-border-light hover:border-olive transition-all duration-200 shadow-sm">
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xs font-bold text-text-secondary uppercase tracking-widest">{type}</h3>
        <div className="p-1.5 bg-olive-light rounded text-olive">
          <Calendar size={14} />
        </div>
      </div>
      <div className="flex items-end gap-1 mb-1">
        <span className="text-2xl font-bold text-text-primary leading-none">{remaining}</span>
        <span className="text-[10px] text-gray-400 font-bold uppercase mb-1">Days Left</span>
      </div>
    </div>
    
    <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-between text-[11px] font-bold uppercase tracking-tighter">
      <div className="flex items-center gap-1.5">
        <span className="text-gray-400">Total:</span>
        <span className="text-text-primary">{total}</span>
      </div>
      <div className="flex items-center gap-1.5">
        <span className="text-gray-400">Used:</span>
        <span className="text-olive">{used}</span>
      </div>
    </div>
  </div>
);

interface LeaveManagementProps {
  onNavigate?: (view: string) => void;
}

const LeaveManagement: React.FC<LeaveManagementProps> = ({ onNavigate }) => {
  const leaveBalances = [
    { type: 'Casual Leave', total: 12, used: 4, remaining: 8 },
    { type: 'Sick Leave', total: 10, used: 2, remaining: 8 },
    { type: 'Earned Leave', total: 24, used: 10, remaining: 14 },
    { type: 'Optional Leave', total: 2, used: 1, remaining: 1 },
  ];

  const recentLeaveActivity = [
    { date: 'Apr 10 - Apr 12', type: 'Casual Leave', duration: '3 Days', status: 'Approved' },
    { date: 'Apr 05 - Apr 05', type: 'Sick Leave', duration: '1 Day', status: 'Approved' },
    { date: 'May 15 - May 17', type: 'Earned Leave', duration: '3 Days', status: 'Pending' },
    { date: 'Mar 12 - Mar 12', type: 'Optional Leave', duration: '1 Day', status: 'Rejected' },
  ];

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Approved': return 'bg-green-50 text-green-600 border-green-100';
      case 'Pending': return 'bg-orange-50 text-orange-600 border-orange-100';
      case 'Rejected': return 'bg-red-50 text-red-600 border-red-100';
      default: return 'bg-gray-50 text-gray-400 border-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Approved': return <CheckCircle2 size={12} />;
      case 'Pending': return <Clock size={12} />;
      case 'Rejected': return <XCircle size={12} />;
      default: return null;
    }
  };

  return (
    <div id="leave-management-system" className="w-full">
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-text-primary mb-2 uppercase tracking-widest">Leave Management</h1>
        <p className="text-text-secondary text-sm">Monitor your leave balances and track your upcoming leave requests.</p>
      </div>

      {/* 1. Leave Balance Summary */}
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1.5 h-6 bg-olive rounded-full"></div>
          <h2 className="text-sm font-bold text-text-primary uppercase tracking-[0.2em]">Leave Balance Summary</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leaveBalances.map((leave, index) => (
            <LeaveBalanceCard key={index} {...leave} />
          ))}
        </div>
      </section>

      {/* 2. Quick Actions */}
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1.5 h-6 bg-olive rounded-full"></div>
          <h2 className="text-sm font-bold text-text-primary uppercase tracking-[0.2em]">Quick Actions</h2>
        </div>
        <div className="flex flex-wrap gap-4">
          <button 
            onClick={() => onNavigate?.('Apply Leave')}
            className="btn-primary flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-widest transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <Plus size={18} />
            Apply Leave
          </button>
          <button 
            onClick={() => onNavigate?.('Leave History')}
            className="btn-secondary flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-widest transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <List size={18} />
            View Leave History
          </button>
          <button 
            onClick={() => onNavigate?.('Leave Calendar')}
            className="btn-secondary flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-widest transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <CalendarDays size={18} />
            Leave Calendar
          </button>
        </div>
      </section>

      {/* 3. Recent Leave Activity */}
      <section>
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1.5 h-6 bg-olive rounded-full"></div>
          <h2 className="text-sm font-bold text-text-primary uppercase tracking-[0.2em]">Recent Leave Activity</h2>
        </div>
        <div className="enterprise-card bg-white p-0 overflow-hidden border border-border-light shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/50 border-b border-gray-100">
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Date Range</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Leave Type</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Duration</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Status</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {recentLeaveActivity.map((activity, index) => (
                  <tr key={index} className="hover:bg-gray-50/50 transition-colors group">
                    <td className="px-6 py-4">
                      <span className="text-xs font-bold text-text-primary tracking-tight">{activity.date}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs font-medium text-gray-500">{activity.type}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs font-bold text-text-primary uppercase tracking-tighter">{activity.duration}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10px] font-bold uppercase tracking-widest ${getStatusStyle(activity.status)}`}>
                        {getStatusIcon(activity.status)}
                        {activity.status}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button 
                        onClick={() => alert('Action menu for ' + activity.type + ' opened.')}
                        className="text-gray-300 group-hover:text-olive transition-colors p-1"
                      >
                        <MoreVertical size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-6 py-4 bg-gray-50/30 border-t border-gray-100 flex items-center justify-center">
            <button 
              onClick={() => onNavigate?.('Leave History')}
              className="text-[10px] font-bold text-olive uppercase tracking-[0.2em] hover:underline transition-all"
            >
              View Full History Report
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeaveManagement;
