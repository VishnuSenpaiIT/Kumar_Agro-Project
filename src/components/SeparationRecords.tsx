/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  LogOut, 
  Filter, 
  Eye, 
  ChevronDown, 
  Calendar, 
  Search, 
  X,
  CheckCircle2,
  Clock,
  TrendingUp,
  FileText
} from 'lucide-react';

interface ExitRecord {
  id: string;
  name: string;
  department: string;
  resignedOn: string;
  lastWorkingDay: string;
  noticePeriod: string;
  status: 'Approved' | 'Pending' | 'In Progress' | 'Completed';
}

interface SummaryCardProps {
  title: string;
  count: number | string;
  status: 'total' | 'pending' | 'completed';
}

const SummaryCard: React.FC<SummaryCardProps> = ({ title, count, status }) => {
  const getIcon = () => {
    switch (status) {
      case 'pending': return <Clock size={16} className="text-orange-500" />;
      case 'completed': return <CheckCircle2 size={16} className="text-green-600" />;
      default: return <LogOut size={16} className="text-olive" />;
    }
  };

  const getBg = () => {
    switch (status) {
      case 'pending': return 'bg-orange-50';
      case 'completed': return 'bg-green-50';
      default: return 'bg-olive-light/30';
    }
  };

  return (
    <div className="enterprise-card bg-white p-5 border border-border-light shadow-sm flex items-center justify-between group hover:border-olive transition-all">
      <div>
        <h3 className="text-[10px] font-bold text-text-secondary uppercase tracking-[0.2em] mb-2">{title}</h3>
        <p className="text-2xl font-bold text-text-primary tracking-tighter">{count}</p>
      </div>
      <div className={`p-4 rounded-enterprise ${getBg()}`}>
        {getIcon()}
      </div>
    </div>
  );
};

interface SeparationRecordsProps {
  onCancel?: () => void;
}

const SeparationRecords: React.FC<SeparationRecordsProps> = ({ onCancel }) => {
  const records: ExitRecord[] = [
    {
      id: 'SEP-001',
      name: 'Robert Fox',
      department: 'Engineering',
      resignedOn: 'Oct 10, 2025',
      lastWorkingDay: 'Jan 10, 2026',
      noticePeriod: '90 Days',
      status: 'Pending'
    },
    {
      id: 'SEP-002',
      name: 'Jane Cooper',
      department: 'Design',
      resignedOn: 'Oct 15, 2025',
      lastWorkingDay: 'Nov 15, 2025',
      noticePeriod: '30 Days',
      status: 'In Progress'
    },
    {
      id: 'SEP-003',
      name: 'Guy Hawkins',
      department: 'Marketing',
      resignedOn: 'Sep 20, 2025',
      lastWorkingDay: 'Oct 20, 2025',
      noticePeriod: '30 Days',
      status: 'Approved'
    },
    {
      id: 'SEP-004',
      name: 'Brooklyn Simmons',
      department: 'Engineering',
      resignedOn: 'Aug 05, 2025',
      lastWorkingDay: 'Sep 05, 2025',
      noticePeriod: '30 Days',
      status: 'Completed'
    },
    {
      id: 'SEP-005',
      name: 'Alice Henderson',
      department: 'Product',
      resignedOn: 'Jul 12, 2025',
      lastWorkingDay: 'Aug 12, 2025',
      noticePeriod: '30 Days',
      status: 'Completed'
    }
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
    <div id="separation-records-module" className="w-full max-w-7xl mx-auto py-4">
      {/* 1. Header Section */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-olive-light rounded-button flex items-center justify-center text-olive">
            <LogOut size={20} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-text-primary uppercase tracking-widest">Separation Records</h1>
            <p className="text-xs text-text-secondary mt-1">Track employee exit history and status.</p>
          </div>
        </div>
        {onCancel && (
          <button 
            onClick={onCancel}
            className="p-2 text-gray-400 hover:text-olive hover:bg-olive-light rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        )}
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <SummaryCard title="Total Exits" count={24} status="total" />
        <SummaryCard title="Pending Exits" count={6} status="pending" />
        <SummaryCard title="Completed Exits" count={245} status="completed" />
      </div>

      {/* 2. Filter Section */}
      <section className="mb-8">
        <div className="enterprise-card bg-white p-6 border border-border-light shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <Filter size={14} className="text-olive" />
            <h2 className="text-[10px] font-bold text-text-secondary uppercase tracking-[0.2em]">Refine Search</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-end">
            <div>
              <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-tighter mb-1">Department</label>
              <div className="relative">
                <select className="input-field w-full py-2 text-xs appearance-none pr-8">
                  <option>All Departments</option>
                  <option>Engineering</option>
                  <option>Design</option>
                  <option>Marketing</option>
                  <option>HR</option>
                </select>
                <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>
            <div>
              <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-tighter mb-1">Status</label>
              <div className="relative">
                <select className="input-field w-full py-2 text-xs appearance-none pr-8">
                  <option>All Status</option>
                  <option>Approved</option>
                  <option>Pending</option>
                  <option>In Progress</option>
                  <option>Completed</option>
                </select>
                <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>
            <div>
              <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-tighter mb-1">From Date</label>
              <input type="date" className="input-field w-full py-2 text-xs" />
            </div>
            <div>
              <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-tighter mb-1">To Date</label>
              <input type="date" className="input-field w-full py-2 text-xs" />
            </div>
            <button className="btn-primary py-2 text-[10px] font-bold uppercase tracking-widest h-[34px]" onClick={() => alert("Separation Filters Applied!")}>
                Apply Filter
              </button>
          </div>
        </div>
      </section>

      {/* 3. Exit Records Table */}
      <section>
        <div className="enterprise-card bg-white p-0 border border-border-light shadow-sm overflow-hidden">
          {records.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-olive/5 border-b border-gray-100">
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Employee Name</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest text-center">Department</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest text-center">Resignation Date</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest text-center">Last Working Day</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest text-center">Notice Period</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest text-center">Status</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {records.map((record) => (
                    <tr key={record.id} className="hover:bg-gray-50 transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-olive-light/20 flex items-center justify-center text-olive font-bold text-[10px]">
                            {record.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-text-primary tracking-tight">{record.name}</p>
                            <p className="text-[10px] text-gray-400 uppercase mt-0.5">{record.id}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest bg-gray-50 px-2 py-1 rounded">
                          {record.department}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center text-xs text-text-secondary">{record.resignedOn}</td>
                      <td className="px-6 py-4 text-center text-xs font-bold text-text-primary">{record.lastWorkingDay}</td>
                      <td className="px-6 py-4 text-center text-xs text-gray-500">{record.noticePeriod}</td>
                      <td className="px-6 py-4 text-center">
                        <span className={`inline-block px-3 py-1 rounded-full border text-[9px] font-bold uppercase tracking-widest ${getStatusBadge(record.status)}`}>
                          {record.status}
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
          ) : (
            <div className="p-20 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-gray-200 mb-4 border border-gray-100">
                <Search size={32} />
              </div>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">No separation records found</h3>
              <p className="text-xs text-gray-300 mt-2">Try adjusting your filters or wait for records to be added.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default SeparationRecords;
