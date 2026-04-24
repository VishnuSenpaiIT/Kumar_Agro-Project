/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Users, 
  Search, 
  Filter, 
  Eye, 
  GitMerge, 
  Calendar,
  X,
  MoreVertical,
  ChevronDown
} from 'lucide-react';

interface Candidate {
  id: string;
  name: string;
  position: string;
  stage: 'Screening' | 'Short Test' | 'Interview' | 'Pre-Offer' | 'Offer Released' | 'Joined';
  experience: string;
  status: 'Selected' | 'In Progress' | 'Rejected' | 'On Hold';
  appliedOn: string;
}

interface CandidateListProps {
  onCancel?: () => void;
  onNavigate?: (view: string) => void;
}

const CandidateList: React.FC<CandidateListProps> = ({ onCancel, onNavigate }) => {
  const candidates: Candidate[] = [
    {
      id: 'CAN-001',
      name: 'Alice Henderson',
      position: 'Senior Java Developer',
      stage: 'Interview',
      experience: '8 Years',
      status: 'In Progress',
      appliedOn: 'Oct 15, 2025'
    },
    {
      id: 'CAN-002',
      name: 'Marcus Thorne',
      position: 'UX/UI Designer',
      stage: 'Screening',
      experience: '4 Years',
      status: 'Selected',
      appliedOn: 'Oct 18, 2025'
    },
    {
      id: 'CAN-003',
      name: 'Elena Rodriguez',
      position: 'Talent Acquisition Lead',
      stage: 'Offer Released',
      experience: '12 Years',
      status: 'Selected',
      appliedOn: 'Oct 10, 2025'
    },
    {
      id: 'CAN-004',
      name: 'David Kim',
      position: 'Product Manager',
      stage: 'Short Test',
      experience: '6 Years',
      status: 'On Hold',
      appliedOn: 'Oct 22, 2025'
    },
    {
      id: 'CAN-005',
      name: 'Sarah Jenkins',
      position: 'Senior Java Developer',
      stage: 'Pre-Offer',
      experience: '7 Years',
      status: 'Rejected',
      appliedOn: 'Oct 05, 2025'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Selected': return 'bg-green-50 text-green-600 border-green-100';
      case 'In Progress': return 'bg-orange-50 text-orange-600 border-orange-100';
      case 'Rejected': return 'bg-red-50 text-red-600 border-red-100';
      case 'On Hold': return 'bg-gray-50 text-gray-400 border-gray-100';
      default: return 'bg-gray-50 text-gray-500';
    }
  };

  const getStageBadge = (stage: string) => {
    return 'bg-olive/10 text-olive border-olive/20';
  };

  return (
    <div id="candidate-list-module" className="w-full max-w-7xl mx-auto py-4">
      {/* 1. Header Section */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-olive-light rounded-button flex items-center justify-center text-olive">
            <Users size={20} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-text-primary uppercase tracking-widest">Candidates</h1>
            <p className="text-xs text-text-secondary mt-1">Manage and track recruitment pipeline.</p>
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

      {/* 2. Filter Section */}
      <section className="mb-8">
        <div className="enterprise-card bg-white p-6 border border-border-light shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <Filter size={14} className="text-olive" />
            <h2 className="text-[10px] font-bold text-text-secondary uppercase tracking-[0.2em]">Filter Candidates</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 items-end">
            <div>
              <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-tighter mb-1">Job Role</label>
              <div className="relative">
                <select className="input-field w-full py-2 text-xs appearance-none pr-8">
                  <option>All Roles</option>
                  <option>Senior Java Developer</option>
                  <option>UX/UI Designer</option>
                  <option>Talent Acquisition Lead</option>
                </select>
                <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>
            <div>
              <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-tighter mb-1">Stage</label>
              <div className="relative">
                <select className="input-field w-full py-2 text-xs appearance-none pr-8">
                  <option>All Stages</option>
                  <option>Screening</option>
                  <option>Short Test</option>
                  <option>Interview</option>
                  <option>Pre-Offer</option>
                  <option>Offer Released</option>
                  <option>Joined</option>
                </select>
                <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>
            <div>
              <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-tighter mb-1">Status</label>
              <div className="relative">
                <select className="input-field w-full py-2 text-xs appearance-none pr-8">
                  <option>All Status</option>
                  <option>Selected</option>
                  <option>In Progress</option>
                  <option>Rejected</option>
                  <option>On Hold</option>
                </select>
                <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>
            <div className="xl:col-span-2 grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-tighter mb-1">From Date</label>
                  <input type="date" className="input-field w-full py-2 text-xs" />
                </div>
                <div>
                  <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-tighter mb-1">To Date</label>
                  <input type="date" className="input-field w-full py-2 text-xs" />
                </div>
            </div>
            <button className="btn-primary py-2 text-[10px] font-bold uppercase tracking-widest h-[34px]" onClick={() => alert("Candidate Filters Applied!")}>
                Apply Filter
              </button>
          </div>
        </div>
      </section>

      {/* 3. Candidate List Table */}
      <section>
        <div className="enterprise-card bg-white p-0 border border-border-light shadow-sm overflow-hidden">
          {candidates.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-olive/5 border-b border-gray-100">
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Candidate Name</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest text-center">Applied Position</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest text-center">Current Stage</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest text-center">Experience</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest text-center">Status</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest text-center">Applied On</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {candidates.map((candidate) => (
                    <tr key={candidate.id} className="hover:bg-gray-50 transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-olive-light/20 flex items-center justify-center text-olive font-bold text-[10px]">
                            {candidate.name.charAt(0)}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-text-primary tracking-tight">{candidate.name}</p>
                            <p className="text-[10px] text-gray-400 uppercase mt-0.5">{candidate.id}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-xs font-medium text-gray-500">{candidate.position}</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[9px] font-bold uppercase tracking-widest ${getStageBadge(candidate.stage)}`}>
                          <GitMerge size={10} />
                          {candidate.stage}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-xs font-bold text-text-primary">{candidate.experience}</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={`inline-block px-3 py-1 rounded-full border text-[9px] font-bold uppercase tracking-widest ${getStatusBadge(candidate.status)}`}>
                          {candidate.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center gap-1.5 text-xs text-gray-400">
                          <Calendar size={12} />
                          {candidate.appliedOn}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button 
                            onClick={() => onNavigate?.('Candidate Profile')}
                            className="p-1.5 text-gray-300 hover:text-olive transition-colors" 
                            title="View Profile"
                          >
                            <Eye size={16} />
                          </button>
                          <button className="p-1.5 text-[9px] font-bold uppercase text-gray-400 border border-gray-100 rounded px-2 py-1 hover:border-olive hover:text-olive transition-all">
                            Move Stage
                          </button>
                          <button className="p-1.5 text-gray-300 hover:text-olive transition-colors">
                            <MoreVertical size={16} />
                          </button>
                        </div>
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
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">No candidates found</h3>
              <p className="text-xs text-gray-300 mt-2">Try adjusting your filters or wait for new applications.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CandidateList;
