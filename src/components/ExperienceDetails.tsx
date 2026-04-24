/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  Plus, 
  Edit3, 
  Trash2, 
  Building2, 
  UserCircle2,
  FileText
} from 'lucide-react';

const ExperienceDetails: React.FC = () => {
  return (
    <div id="experience-details-module" className="w-full max-w-5xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-text-primary mb-1">Experience Details</h1>
        <p className="text-sm text-text-secondary">Manage and track your professional career history.</p>
      </div>

      {/* 1. ADD EXPERIENCE FORM */}
      <div className="bg-white border border-border-light rounded-enterprise shadow-sm overflow-hidden mb-10">
        <div className="bg-gray-50/50 px-6 py-4 border-b border-gray-100 flex items-center gap-2">
          <Plus size={18} className="text-olive" />
          <h2 className="text-xs font-bold text-text-primary uppercase tracking-widest">Add Experience</h2>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Company Name</label>
              <div className="relative">
                <Building2 size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="e.g. Google Inc." 
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 focus:ring-1 focus:ring-olive/20 transition-all"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Role / Designation</label>
              <div className="relative">
                <UserCircle2 size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="e.g. Senior Software Engineer" 
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 focus:ring-1 focus:ring-olive/20 transition-all"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Start Date</label>
              <div className="relative">
                <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="date" 
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 transition-all"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">End Date</label>
              <div className="relative">
                <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="date" 
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 transition-all"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1.5 mb-8">
            <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Experience Description</label>
            <div className="relative">
              <FileText size={16} className="absolute left-3 top-4 text-gray-400" />
              <textarea 
                rows={4}
                placeholder="Briefly describe your key responsibilities and achievements..."
                className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 focus:ring-1 focus:ring-olive/20 transition-all resize-none"
              ></textarea>
            </div>
          </div>

          <button className="flex items-center gap-2 px-8 py-3 bg-olive text-white rounded-button font-bold text-sm shadow-sm hover:bg-olive/90 active:transform active:scale-[0.98] transition-all">
            <Plus size={18} />
            Add Experience
          </button>
        </div>
      </div>

      {/* 2. EXPERIENCE LIST TABLE */}
      <div className="bg-white border border-border-light rounded-enterprise shadow-sm overflow-hidden">
        <div className="bg-gray-50/50 px-6 py-4 border-b border-gray-100 flex items-center gap-2">
          <Briefcase size={18} className="text-olive" />
          <h2 className="text-xs font-bold text-text-primary uppercase tracking-widest">Experience List</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest">Company Name</th>
                <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest">Role</th>
                <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest">Duration</th>
                <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest">Description</th>
                <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              <tr>
                <td className="px-6 py-5">
                  <span className="text-sm font-bold text-text-primary">Global Tech Solutions</span>
                </td>
                <td className="px-6 py-5">
                  <span className="text-sm text-text-secondary">Senior Systems Architect</span>
                </td>
                <td className="px-6 py-5">
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-text-primary">2018 – 2022</span>
                    <span className="text-[10px] text-olive font-bold uppercase">4 Years</span>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <p className="text-xs text-text-secondary line-clamp-2 max-w-xs">Led the migration of legacy monolithic systems to microservices architecture.</p>
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center justify-center gap-3">
                    <button className="p-1.5 text-gray-400 hover:text-olive transition-colors">
                      <Edit3 size={16} />
                    </button>
                    <button className="p-1.5 text-gray-400 hover:text-red-500 transition-colors">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-5">
                  <span className="text-sm font-bold text-text-primary">StartUp Hub</span>
                </td>
                <td className="px-6 py-5">
                  <span className="text-sm text-text-secondary">Junior Developer</span>
                </td>
                <td className="px-6 py-5">
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-text-primary">2015 – 2018</span>
                    <span className="text-[10px] text-olive font-bold uppercase">3 Years</span>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <p className="text-xs text-text-secondary line-clamp-2 max-w-xs">Developed front-end components using React and managed state with Redux.</p>
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center justify-center gap-3">
                    <button className="p-1.5 text-gray-400 hover:text-olive transition-colors">
                      <Edit3 size={16} />
                    </button>
                    <button className="p-1.5 text-gray-400 hover:text-red-500 transition-colors">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetails;
