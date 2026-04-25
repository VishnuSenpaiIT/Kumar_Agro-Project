/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Briefcase, 
  Plus, 
  Search, 
  MapPin, 
  Clock, 
  MoreVertical,
  Eye,
  Pencil,
  Filter,
  X
} from 'lucide-react';

interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract';
  count: number;
  status: 'Open' | 'Closed';
  postedOn: string;
}

interface JobOpeningsListProps {
  onCancel?: () => void;
}

const JobOpeningsList: React.FC<JobOpeningsListProps> = ({ onCancel }) => {
  const jobs: JobOpening[] = [
    {
      id: '1',
      title: 'Senior Java Developer',
      department: 'Engineering',
      location: 'New York, USA',
      type: 'Full-time',
      count: 2,
      status: 'Open',
      postedOn: 'Oct 12, 2025'
    },
    {
      id: '2',
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Contract',
      count: 1,
      status: 'Open',
      postedOn: 'Oct 15, 2025'
    },
    {
      id: '3',
      title: 'Talent Acquisition Lead',
      department: 'HR',
      location: 'London, UK',
      type: 'Full-time',
      count: 1,
      status: 'Open',
      postedOn: 'Oct 20, 2025'
    },
    {
      id: '4',
      title: 'Product Manager',
      department: 'Product',
      location: 'San Francisco, USA',
      type: 'Full-time',
      count: 3,
      status: 'Closed',
      postedOn: 'Sep 28, 2025'
    },
    {
      id: '5',
      title: 'Marketing Specialist',
      department: 'Marketing',
      location: 'Remote',
      type: 'Part-time',
      count: 1,
      status: 'Open',
      postedOn: 'Oct 05, 2025'
    }
  ];

  return (
    <div id="job-openings-list" className="w-full max-w-7xl mx-auto py-4">
      {/* 1. Header Section */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-olive-light rounded-button flex items-center justify-center text-olive">
            <Briefcase size={20} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-text-primary uppercase tracking-widest">Job Openings</h1>
            <p className="text-xs text-text-secondary mt-1">Manage and track all current recruitment vacancies.</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn-primary flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-widest group">
            <Plus size={16} className="group-hover:rotate-90 transition-transform" />
            Create New Job Opening
          </button>
          {onCancel && (
            <button 
              onClick={onCancel}
              className="p-2 text-gray-400 hover:text-olive hover:bg-olive-light rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          )}
        </div>
      </div>

      {/* 2. Filters Section */}
      <section className="mb-8">
        <div className="enterprise-card bg-white p-6 border border-border-light shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Filter size={14} className="text-olive" />
            <h2 className="text-[10px] font-bold text-text-secondary uppercase tracking-[0.2em]">Refine Job Search</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
            <div>
              <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-tighter mb-1">Department</label>
              <select className="input-field w-full py-2 text-xs appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwb2x5bGluZSBwb2ludHM9IjYgOSAxMiAxNSAxOCA5Ij48L3BvbHlsaW5lPjwvc3ZnPg==')] bg-[length:12px] bg-[right_8px_center] bg-no-repeat">
                <option>All Departments</option>
                <option>Engineering</option>
                <option>Design</option>
                <option>HR</option>
                <option>Product</option>
                <option>Marketing</option>
              </select>
            </div>
            <div>
              <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-tighter mb-1">Location</label>
              <select className="input-field w-full py-2 text-xs appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwb2x5bGluZSBwb2ludHM9IjYgOSAxMiAxNSAxOCA5Ij48L3BvbHlsaW5lPjwvc3ZnPg==')] bg-[length:12px] bg-[right_8px_center] bg-no-repeat">
                <option>All Locations</option>
                <option>Remote</option>
                <option>New York, USA</option>
                <option>London, UK</option>
                <option>San Francisco, USA</option>
              </select>
            </div>
            <div>
              <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-tighter mb-1">Job Type</label>
              <select className="input-field w-full py-2 text-xs appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwb2x5bGluZSBwb2ludHM9IjYgOSAxMiAxNSAxOCA5Ij48L3BvbHlsaW5lPjwvc3ZnPg==')] bg-[length:12px] bg-[right_8px_center] bg-no-repeat">
                <option>All Types</option>
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Contract</option>
              </select>
            </div>
            <div>
              <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-tighter mb-1">Status</label>
              <select className="input-field w-full py-2 text-xs appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwb2x5bGluZSBwb2ludHM9IjYgOSAxMiAxNSAxOCA5Ij48L3BvbHlsaW5lPjwvc3ZnPg==')] bg-[length:12px] bg-[right_8px_center] bg-no-repeat">
                <option>All Status</option>
                <option>Open</option>
                <option>Closed</option>
              </select>
            </div>
            <button className="btn-primary py-2 text-[10px] font-bold uppercase tracking-widest h-[34px]">
              Apply Filter
            </button>
          </div>
        </div>
      </section>

      {/* 3. Job Openings List */}
      <section>
        <div className="enterprise-card bg-white p-0 border border-border-light shadow-sm overflow-hidden">
          {jobs.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50/50 border-b border-gray-100">
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Job Title</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Department</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Location</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Job Type</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Openings Count</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Status</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Posted On</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {jobs.map((job) => (
                    <tr key={job.id} className="hover:bg-gray-50 transition-colors group">
                      <td className="px-6 py-4">
                        <p className="text-sm font-bold text-text-primary tracking-tight">{job.title}</p>
                        <p className="text-[10px] text-gray-400 uppercase mt-0.5">{job.id}</p>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest bg-gray-50 px-2 py-1 rounded">
                          {job.department}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center gap-1 text-xs text-gray-500">
                          <MapPin size={12} className="text-gray-300" />
                          {job.location}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-xs font-medium text-gray-500">{job.type}</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-sm font-bold text-text-primary">{job.count}</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={`inline-block px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-widest border ${
                          job.status === 'Open' ? 'bg-green-50 text-green-600 border-green-100' : 'bg-gray-50 text-gray-400 border-gray-100'
                        }`}>
                          {job.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center gap-1.5 text-xs text-gray-400">
                          <Clock size={12} />
                          {job.postedOn}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button className="p-1.5 text-gray-300 hover:text-olive transition-colors" title="View">
                            <Eye size={16} />
                          </button>
                          <button className="p-1.5 text-gray-300 hover:text-olive transition-colors" title="Edit">
                            <Pencil size={16} />
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
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">No job openings found</h3>
              <p className="text-xs text-gray-300 mt-2">Try adjusting your filters or create a new opening.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default JobOpeningsList;
