/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Users, 
  Plus, 
  Edit3, 
  Trash2, 
  User, 
  Heart, 
  Briefcase,
  Calendar
} from 'lucide-react';

const FamilyDetails: React.FC = () => {
  return (
    <div id="family-details-module" className="w-full max-w-5xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-text-primary mb-1">Family Details</h1>
        <p className="text-sm text-text-secondary">Keep your family information up to date for benefits and records.</p>
      </div>

      {/* 1. ADD FAMILY MEMBER FORM */}
      <div className="bg-white border border-border-light rounded-enterprise shadow-sm overflow-hidden mb-10">
        <div className="bg-gray-50/50 px-6 py-4 border-b border-gray-100 flex items-center gap-2">
          <Plus size={18} className="text-olive" />
          <h2 className="text-xs font-bold text-text-primary uppercase tracking-widest">Add Family Member</h2>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Full Name</label>
              <div className="relative">
                <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="e.g. Jane Doe" 
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 focus:ring-1 focus:ring-olive/20 transition-all"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Relationship</label>
              <div className="relative">
                <Heart size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <select className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 transition-all appearance-none cursor-pointer">
                  <option value="">Select Relationship</option>
                  <option value="spouse">Spouse</option>
                  <option value="child">Child</option>
                  <option value="parent">Parent</option>
                  <option value="sibling">Sibling</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <Plus size={14} className="rotate-45" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Age</label>
              <div className="relative">
                <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="number" 
                  placeholder="e.g. 32" 
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 transition-all"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Occupation</label>
              <div className="relative">
                <Briefcase size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="e.g. Software Engineer" 
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 transition-all"
                />
              </div>
            </div>
          </div>

          <button className="flex items-center gap-2 px-8 py-3 bg-olive text-white rounded-button font-bold text-sm shadow-sm hover:bg-olive/90 active:transform active:scale-[0.98] transition-all">
            <Plus size={18} />
            Add Family Member
          </button>
        </div>
      </div>

      {/* 2. FAMILY LIST TABLE */}
      <div className="bg-white border border-border-light rounded-enterprise shadow-sm overflow-hidden">
        <div className="bg-gray-50/50 px-6 py-4 border-b border-gray-100 flex items-center gap-2">
          <Users size={18} className="text-olive" />
          <h2 className="text-xs font-bold text-text-primary uppercase tracking-widest">Family List</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest">Full Name</th>
                <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest">Relationship</th>
                <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest">Age</th>
                <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest">Occupation</th>
                <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              <tr>
                <td className="px-6 py-5">
                  <span className="text-sm font-bold text-text-primary">Jane Doe</span>
                </td>
                <td className="px-6 py-5">
                  <span className="text-xs font-bold px-2.5 py-1 bg-olive-light text-olive rounded-full uppercase tracking-tighter">Spouse</span>
                </td>
                <td className="px-6 py-5">
                  <span className="text-sm text-text-secondary font-semibold">32 Years</span>
                </td>
                <td className="px-6 py-5">
                  <p className="text-sm text-text-secondary">Graphic Designer</p>
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
                  <span className="text-sm font-bold text-text-primary">Robert Doe</span>
                </td>
                <td className="px-6 py-5">
                  <span className="text-xs font-bold px-2.5 py-1 bg-gray-100 text-gray-500 rounded-full uppercase tracking-tighter">Father</span>
                </td>
                <td className="px-6 py-5">
                  <span className="text-sm text-text-secondary font-semibold">64 Years</span>
                </td>
                <td className="px-6 py-5">
                  <p className="text-sm text-text-secondary">Retired Civil Servant</p>
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

export default FamilyDetails;
