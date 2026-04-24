/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  History, 
  Filter, 
  Search, 
  Eye, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  XCircle,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface LeaveHistoryProps {
  onCancel?: () => void;
}

const LeaveHistory: React.FC<LeaveHistoryProps> = ({ onCancel }) => {
  const [typeFilter, setTypeFilter] = useState('All Types');
  const [statusFilter, setStatusFilter] = useState('All Statuses');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const leaveRecords = [
    { fromDate: '2026-04-10', toDate: '2026-04-12', type: 'Casual Leave', days: 3, status: 'Approved', appliedOn: '2026-04-01' },
    { fromDate: '2026-04-05', toDate: '2026-04-05', type: 'Sick Leave', days: 1, status: 'Approved', appliedOn: '2026-04-04' },
    { fromDate: '2026-05-15', toDate: '2026-05-17', type: 'Earned Leave', days: 3, status: 'Pending', appliedOn: '2026-04-20' },
    { fromDate: '2026-03-12', toDate: '2026-03-12', type: 'Optional Leave', days: 1, status: 'Rejected', appliedOn: '2026-03-05' },
    { fromDate: '2026-02-20', toDate: '2026-02-22', type: 'Casual Leave', days: 3, status: 'Approved', appliedOn: '2026-02-10' },
    { fromDate: '2026-01-10', toDate: '2026-01-11', type: 'Sick Leave', days: 2, status: 'Approved', appliedOn: '2026-01-05' },
  ];

  const filteredRecords = leaveRecords.filter(record => {
    const matchesType = typeFilter === 'All Types' || record.type === typeFilter;
    const matchesStatus = statusFilter === 'All Statuses' || record.status === statusFilter;
    return matchesType && matchesStatus;
  });

  const totalPages = Math.ceil(filteredRecords.length / itemsPerPage);
  const paginatedRecords = filteredRecords.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

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
    <div id="leave-history-module" className="w-full max-w-[1000px] mx-auto py-4">
      {/* 1. Header Section */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-olive-light rounded-button flex items-center justify-center text-olive">
            <History size={20} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-text-primary uppercase tracking-widest">Leave History</h1>
            <p className="text-xs text-text-secondary mt-1">Review your past and upcoming leave records.</p>
          </div>
        </div>
        <button 
          onClick={onCancel}
          className="p-2 text-gray-400 hover:text-olive hover:bg-olive-light rounded-full transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      <div className="space-y-6">
        {/* 2. Filter Section */}
        <div className="enterprise-card bg-white p-6 shadow-sm border border-border-light">
          <div className="flex items-center gap-2 mb-4">
            <Filter size={14} className="text-olive" />
            <span className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Filter Records</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-tighter mb-1.5">Leave Type</label>
              <select 
                value={typeFilter}
                onChange={(e) => { setTypeFilter(e.target.value); setCurrentPage(1); }}
                className="input-field w-full appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwb2x5bGluZSBwb2ludHM9IjYgOSAxMiAxNSAxOCA5Ij48L3BvbHlsaW5lPjwvc3ZnPg==')] bg-[length:14px] bg-[right_10px_center] bg-no-repeat"
              >
                <option>All Types</option>
                <option>Casual Leave</option>
                <option>Sick Leave</option>
                <option>Earned Leave</option>
                <option>Optional Leave</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-tighter mb-1.5">Status</label>
              <select 
                value={statusFilter}
                onChange={(e) => { setStatusFilter(e.target.value); setCurrentPage(1); }}
                className="input-field w-full appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwb2x5bGluZSBwb2ludHM9IjYgOSAxMiAxNSAxOCA5Ij48L3BvbHlsaW5lPjwvc3ZnPg==')] bg-[length:14px] bg-[right_10px_center] bg-no-repeat"
              >
                <option>All Statuses</option>
                <option>Approved</option>
                <option>Pending</option>
                <option>Rejected</option>
              </select>
            </div>
            <div className="lg:col-span-2">
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-tighter mb-1.5">Date Range</label>
              <div className="flex items-center gap-2">
                <input type="date" className="input-field flex-1" />
                <span className="text-gray-300 text-xs">—</span>
                <input type="date" className="input-field flex-1" />
              </div>
            </div>
            <button 
              onClick={() => alert('Filters applied.')}
              className="btn-primary w-full py-2.5 text-xs font-bold uppercase tracking-widest shadow-sm"
            >
              Apply Filter
            </button>
          </div>
        </div>

        {/* 3. Leave Records Table */}
        <div className="enterprise-card bg-white p-0 overflow-hidden shadow-sm border border-border-light">
          <div className="bg-olive/5 px-6 py-3 border-b border-gray-100">
            <h3 className="text-[10px] font-bold text-olive uppercase tracking-[0.2em]">Record Details</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/50 border-b border-gray-100">
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">From Date</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">To Date</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Leave Type</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Number of Days</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Status</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Applied On</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {paginatedRecords.length > 0 ? (
                  paginatedRecords.map((record, index) => (
                    <tr key={index} className="hover:bg-olive-light/10 transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Calendar size={12} className="text-gray-300" />
                          <span className="text-xs font-bold text-text-primary tracking-tight">{record.fromDate}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Calendar size={12} className="text-gray-300" />
                          <span className="text-xs font-bold text-text-primary tracking-tight">{record.toDate}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-xs font-medium text-gray-500">{record.type}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-xs font-bold text-text-primary uppercase tracking-tighter">{record.days} Days</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10px] font-bold uppercase tracking-widest ${getStatusStyle(record.status)}`}>
                          {getStatusIcon(record.status)}
                          {record.status}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-[11px] text-gray-400 font-medium tracking-tight">{record.appliedOn}</span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="p-2 text-gray-300 group-hover:text-olive transition-colors hover:bg-olive-light rounded-full" title="View Details">
                          <Eye size={16} />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="px-6 py-20 text-center">
                      <div className="flex flex-col items-center justify-center text-gray-300">
                        <History size={48} strokeWidth={1} className="mb-4 opacity-50" />
                        <p className="text-sm font-bold uppercase tracking-widest">No leave records found</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination Placeholder */}
          <div className="px-6 py-4 bg-gray-50/20 border-t border-gray-100 flex items-center justify-between">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              Showing {paginatedRecords.length} of {filteredRecords.length} records
            </span>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="p-1.5 border border-gray-100 rounded bg-white text-gray-300 hover:text-olive transition-colors disabled:opacity-50"
              >
                <ChevronLeft size={14} />
              </button>
              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                  <button 
                    key={p}
                    onClick={() => setCurrentPage(p)}
                    className={`px-2.5 py-1 rounded text-[10px] font-bold transition-all ${currentPage === p ? 'bg-olive text-white shadow-sm' : 'bg-white border border-gray-100 text-gray-400 hover:bg-gray-50'}`}
                  >
                    {p}
                  </button>
                ))}
              </div>
              <button 
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages || totalPages === 0}
                className="p-1.5 border border-gray-100 rounded bg-white text-gray-400 hover:text-olive transition-colors disabled:opacity-50"
              >
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaveHistory;
