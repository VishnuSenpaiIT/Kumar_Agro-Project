/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Briefcase, 
  Building2, 
  MapPin, 
  UserCircle2, 
  Users, 
  Calendar, 
  Banknote, 
  Tags, 
  FileText, 
  Upload, 
  Plus, 
  Edit3, 
  Trash2, 
  Eye,
  ChevronRight,
  Clock,
  ExternalLink
} from 'lucide-react';

const ExperienceDetails: React.FC = () => {
  return (
    <div id="experience-details-detailed" className="w-full max-w-6xl space-y-8 pb-20">
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-text-primary mb-1">Experience Details</h1>
        <p className="text-sm text-text-secondary">A comprehensive record of your professional journey and achievements.</p>
      </div>

      {/* 3. EXPERIENCE SUMMARY (Top Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-5 border border-border-light rounded-enterprise shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-olive-light rounded-full flex items-center justify-center text-olive">
            <Clock size={24} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-text-secondary uppercase tracking-widest mb-1">Total Experience</p>
            <p className="text-xl font-bold text-text-primary">8 Years 4 Months</p>
          </div>
        </div>
        <div className="bg-white p-5 border border-border-light rounded-enterprise shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-500">
            <Building2 size={24} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-text-secondary uppercase tracking-widest mb-1">Companies Worked</p>
            <p className="text-xl font-bold text-text-primary">3 Companies</p>
          </div>
        </div>
        <div className="bg-white p-5 border border-border-light rounded-enterprise shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center text-amber-500">
            <UserCircle2 size={24} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-text-secondary uppercase tracking-widest mb-1">Current Role Duration</p>
            <p className="text-xl font-bold text-text-primary">2 Years 2 Months</p>
          </div>
        </div>
      </div>

      {/* 1. ADD EXPERIENCE FORM (EXPANDED) */}
      <div className="bg-white border border-border-light rounded-enterprise shadow-sm overflow-hidden">
        <div className="bg-gray-50/50 px-6 py-4 border-b border-gray-100 flex items-center gap-2">
          <Plus size={18} className="text-olive" />
          <h2 className="text-xs font-bold text-text-primary uppercase tracking-widest">Add New Experience</h2>
        </div>
        
        <div className="p-8 space-y-10">
          {/* GROUP: BASIC DETAILS */}
          <div className="space-y-6">
            <h3 className="text-[11px] font-bold text-olive uppercase tracking-[0.2em] flex items-center gap-2">
              <span className="w-4 h-[1px] bg-olive/30"></span> Basic Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Company Name</label>
                <input type="text" placeholder="e.g. Acme Corp" className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 transition-all" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Industry Type</label>
                <select className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 transition-all appearance-none cursor-pointer">
                  <option value="">Select Industry</option>
                  <option value="it">Information Technology</option>
                  <option value="finance">Finance</option>
                  <option value="manufacturing">Manufacturing</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Company Location</label>
                <div className="relative">
                  <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input type="text" placeholder="e.g. New York, USA" className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 transition-all" />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Employment Type</label>
                <select className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 transition-all appearance-none cursor-pointer">
                  <option value="full-time">Full-time</option>
                  <option value="contract">Contract</option>
                  <option value="internship">Internship</option>
                  <option value="freelance">Freelance</option>
                </select>
              </div>
            </div>
          </div>

          {/* GROUP: ROLE DETAILS */}
          <div className="space-y-6">
            <h3 className="text-[11px] font-bold text-olive uppercase tracking-[0.2em] flex items-center gap-2">
              <span className="w-4 h-[1px] bg-olive/30"></span> Role Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Designation / Role</label>
                <input type="text" placeholder="e.g. Senior Manager" className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 transition-all" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Department</label>
                <input type="text" placeholder="e.g. Product Engineering" className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 transition-all" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Reporting Manager</label>
                <input type="text" placeholder="Manager Name" className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 transition-all" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Team Size Handled</label>
                <div className="relative">
                  <Users size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input type="number" placeholder="e.g. 10" className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 transition-all" />
                </div>
              </div>
            </div>
          </div>

          {/* GROUP: DURATION & COMPENSATION */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              <h3 className="text-[11px] font-bold text-olive uppercase tracking-[0.2em] flex items-center gap-2">
                <span className="w-4 h-[1px] bg-olive/30"></span> Duration
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Start Date</label>
                  <input type="date" className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 transition-all" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">End Date</label>
                  <input type="date" className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 transition-all" />
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <input type="checkbox" id="currently-working" className="w-4 h-4 accent-olive cursor-pointer" />
                <label htmlFor="currently-working" className="text-xs font-semibold text-text-primary cursor-pointer select-none">Currently Working Here</label>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-[11px] font-bold text-olive uppercase tracking-[0.2em] flex items-center gap-2">
                <span className="w-4 h-[1px] bg-olive/30"></span> Compensation
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Last Drawn Salary</label>
                  <div className="relative">
                    <Banknote size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="text" placeholder="e.g. 85,000" className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 transition-all" />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Currency</label>
                  <select className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 transition-all appearance-none cursor-pointer">
                    <option value="inr">INR (₹)</option>
                    <option value="usd">USD ($)</option>
                    <option value="eur">EUR (€)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* GROUP: TEXT AREAS & TAGS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Key Responsibilities</label>
              <textarea rows={4} placeholder="Describe your main duties and achievements..." className="w-full px-4 py-3 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 transition-all resize-none"></textarea>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Skills Used</label>
              <div className="w-full px-4 py-3 bg-white border border-gray-200 rounded-button min-h-[106px] flex flex-wrap gap-2 content-start">
                 {['React', 'TypeScript', 'System Architecture'].map(tag => (
                   <span key={tag} className="px-2 py-1 bg-olive-light text-olive text-[10px] font-bold uppercase rounded flex items-center gap-1 border border-olive/10">
                     <Tags size={10} /> {tag}
                   </span>
                 ))}
                 <input type="text" placeholder="Add skill..." className="flex-1 min-w-[80px] text-sm focus:outline-none bg-transparent" />
              </div>
            </div>
            <div className="flex flex-col gap-1.5 lg:col-span-2">
              <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Reason for Leaving</label>
              <textarea rows={2} placeholder="Brief reason for the transition..." className="w-full px-4 py-3 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 transition-all resize-none"></textarea>
            </div>
          </div>

          {/* GROUP: DOCUMENTS */}
          <div className="space-y-6">
            <h3 className="text-[11px] font-bold text-olive uppercase tracking-[0.2em] flex items-center gap-2">
              <span className="w-4 h-[1px] bg-olive/30"></span> Documents
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <p className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Experience Letter</p>
                <div className="h-32 bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center gap-2 hover:border-olive transition-all cursor-pointer group">
                  <Upload size={20} className="text-gray-400 group-hover:text-olive" />
                  <p className="text-[10px] font-bold text-gray-500">Drag & drop Experience Letter</p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Relieving Letter</p>
                <div className="h-32 bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center gap-2 hover:border-olive transition-all cursor-pointer group">
                  <Upload size={20} className="text-gray-400 group-hover:text-olive" />
                  <p className="text-[10px] font-bold text-gray-500">Drag & drop Relieving Letter</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-100 flex justify-end">
            <button className="flex items-center gap-2 px-12 py-3 bg-olive text-white rounded-button font-bold text-sm shadow-md hover:bg-olive/90 active:transform active:scale-[0.98] transition-all">
              <Plus size={18} />
              Add Experience
            </button>
          </div>
        </div>
      </div>

      {/* 2. EXPERIENCE RECORDS TABLE (DETAILED) */}
      <div className="bg-white border border-border-light rounded-enterprise shadow-sm overflow-hidden">
        <div className="bg-gray-50/50 px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Briefcase size={18} className="text-olive" />
            <h2 className="text-xs font-bold text-text-primary uppercase tracking-widest">Experience Records</h2>
          </div>
          <span className="text-[10px] font-bold text-text-secondary uppercase bg-gray-100 px-2 py-1 rounded">3 Entries</span>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[1200px]">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/20">
                <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest">Company & Location</th>
                <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest">Role & Type</th>
                <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest">Duration</th>
                <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest">Last Salary</th>
                <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest">Skills</th>
                <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest">Reason</th>
                <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest text-center">Docs</th>
                <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              <tr>
                <td className="px-6 py-5">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-text-primary">Global Tech Solutions</span>
                    <span className="text-[10px] text-text-secondary flex items-center gap-1"><MapPin size={10} /> Mumbai, India</span>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <div className="flex flex-col">
                    <span className="text-sm text-text-primary font-semibold">Senior Systems Architect</span>
                    <span className="text-[10px] text-olive font-bold uppercase tracking-tight">Full-time</span>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-text-primary">2021 – Present</span>
                    <span className="text-[10px] text-gray-400">2 Years 2 Months</span>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <span className="text-sm font-bold text-text-primary">₹ 1,45,000</span>
                </td>
                <td className="px-6 py-5">
                  <div className="flex flex-wrap gap-1 max-w-[150px]">
                    {['Cloud', 'Node.js'].map(s => <span key={s} className="px-1.5 py-0.5 bg-gray-100 text-[9px] font-bold text-gray-600 rounded">{s}</span>)}
                  </div>
                </td>
                <td className="px-6 py-5">
                  <p className="text-xs text-text-secondary truncate max-w-[120px]">N/A (Current)</p>
                </td>
                <td className="px-6 py-5">
                  <div className="flex justify-center gap-2">
                    <button className="p-1.5 bg-gray-50 border border-gray-100 rounded text-gray-400 hover:text-olive hover:border-olive transition-all"><Eye size={14} /></button>
                  </div>
                </td>
                <td className="px-6 py-5 text-center">
                  <div className="flex items-center justify-center gap-3">
                    <button className="p-1.5 text-gray-400 hover:text-olive"><Edit3 size={16} /></button>
                    <button className="p-1.5 text-gray-400 hover:text-red-500"><Trash2 size={16} /></button>
                  </div>
                </td>
              </tr>
              {/* More rows would follow the same structure */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetails;
