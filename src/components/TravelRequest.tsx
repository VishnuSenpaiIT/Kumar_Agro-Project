/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Plane, 
  MapPin, 
  Calendar, 
  User, 
  Briefcase, 
  Building2, 
  Upload, 
  DollarSign, 
  X 
} from 'lucide-react';

interface TravelRequestProps {
  onCancel?: () => void;
}

const TravelRequest: React.FC<TravelRequestProps> = ({ onCancel }) => {
  const employeeInfo = {
    name: 'Johnathan Doe',
    id: 'EMP-10294',
    department: 'Technology & Innovation',
    designation: 'Senior Software Engineer'
  };

  return (
    <div id="travel-request-form" className="w-full max-w-[800px] mx-auto py-4">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-olive-light rounded-button flex items-center justify-center text-olive">
            <Plane size={20} />
          </div>
          <h1 className="text-xl font-bold text-text-primary uppercase tracking-widest">Travel Request</h1>
        </div>
        <button 
          onClick={onCancel}
          className="p-2 text-gray-400 hover:text-olive hover:bg-olive-light rounded-full transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      <div className="enterprise-card bg-white space-y-10 shadow-sm">
        {/* 1. Employee Information (Read-only) */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-gray-50">
            <User size={16} className="text-olive" />
            <h2 className="text-xs font-bold text-text-secondary uppercase tracking-widest">Employee Information</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-tighter mb-1">Employee Name</label>
              <div className="px-3 py-2 bg-gray-50 border border-gray-100 rounded-button text-sm font-semibold text-text-primary">{employeeInfo.name}</div>
            </div>
            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-tighter mb-1">Employee ID</label>
              <div className="px-3 py-2 bg-gray-50 border border-gray-100 rounded-button text-sm font-semibold text-text-primary">{employeeInfo.id}</div>
            </div>
            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-tighter mb-1">Department</label>
              <div className="px-3 py-2 bg-gray-50 border border-gray-100 rounded-button text-sm font-semibold text-text-primary">{employeeInfo.department}</div>
            </div>
            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-tighter mb-1">Designation</label>
              <div className="px-3 py-2 bg-gray-50 border border-gray-100 rounded-button text-sm font-semibold text-text-primary">{employeeInfo.designation}</div>
            </div>
          </div>
        </section>

        {/* 2. Travel Details */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-gray-50">
            <MapPin size={16} className="text-olive" />
            <h2 className="text-xs font-bold text-text-secondary uppercase tracking-widest">Travel Details</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label className="block text-[10px] font-bold text-text-secondary uppercase tracking-tighter mb-1">Travel Type</label>
              <select className="input-field w-full appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwb2x5bGluZSBwb2ludHM9IjYgOSAxMiAxNSAxOCA5Ij48L3BvbHlsaW5lPjwvc3ZnPg==')] bg-[length:16px] bg-[right_12px_center] bg-no-repeat">
                <option>Official</option>
                <option>Personal (if allowed)</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-bold text-text-secondary uppercase tracking-tighter mb-1">From Location</label>
              <input type="text" className="input-field w-full" placeholder="Pick-up city or office" />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-text-secondary uppercase tracking-tighter mb-1">To Location</label>
              <input type="text" className="input-field w-full" placeholder="Destination city or office" />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-text-secondary uppercase tracking-tighter mb-1">Start Date</label>
              <div className="relative">
                <input type="date" className="input-field w-full pl-10" />
                <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>
            <div>
              <label className="block text-[10px] font-bold text-text-secondary uppercase tracking-tighter mb-1">End Date</label>
              <div className="relative">
                <input type="date" className="input-field w-full pl-10" />
                <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </section>

        {/* 3. Purpose & Description */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-gray-50">
            <Building2 size={16} className="text-olive" />
            <h2 className="text-xs font-bold text-text-secondary uppercase tracking-widest">Purpose & Description</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-[10px] font-bold text-text-secondary uppercase tracking-tighter mb-1">Purpose of Travel</label>
              <textarea className="input-field w-full min-h-[80px] resize-none" placeholder="Primary reason for the trip..."></textarea>
            </div>
            <div>
              <label className="block text-[10px] font-bold text-text-secondary uppercase tracking-tighter mb-1">Detailed Description</label>
              <textarea className="input-field w-full min-h-[120px] resize-none" placeholder="Provide a detailed itinerary or project context..."></textarea>
            </div>
          </div>
        </section>

        {/* 4. Accommodation & Transport */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-gray-50">
            <Briefcase size={16} className="text-olive" />
            <h2 className="text-xs font-bold text-text-secondary uppercase tracking-widest">Accommodation & Transport</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-bold text-text-secondary uppercase tracking-tighter mb-1">Accommodation Required</label>
              <select className="input-field w-full appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwb2x5bGluZSBwb2ludHM9IjYgOSAxMiAxNSAxOCA5Ij48L3BvbHlsaW5lPjwvc3ZnPg==')] bg-[length:16px] bg-[right_12px_center] bg-no-repeat">
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-bold text-text-secondary uppercase tracking-tighter mb-1">Mode of Transport</label>
              <select className="input-field w-full appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwb2x5bGluZSBwb2ludHM9IjYgOSAxMiAxNSAxOCA5Ij48L3BvbHlsaW5lPjwvc3ZnPg==')] bg-[length:16px] bg-[right_12px_center] bg-no-repeat">
                <option>Flight</option>
                <option>Train</option>
                <option>Bus</option>
                <option>Cab</option>
                <option>Other</option>
              </select>
            </div>
          </div>
        </section>

        {/* 5. Approval Details */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-gray-50">
            <DollarSign size={16} className="text-olive" />
            <h2 className="text-xs font-bold text-text-secondary uppercase tracking-widest">Approval Details</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-bold text-text-secondary uppercase tracking-tighter mb-1">Reporting Manager</label>
              <div className="px-3 py-2 bg-gray-50 border border-gray-100 rounded-button text-sm font-semibold text-text-primary">Johnathan Smith (Auto-selected)</div>
            </div>
            <div>
              <label className="block text-[10px] font-bold text-text-secondary uppercase tracking-tighter mb-1">Estimated Cost</label>
              <div className="relative">
                <input type="text" className="input-field w-full pl-8" placeholder="0.00" />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400">$</span>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Attachments */}
        <section className="space-y-2">
          <label className="block text-[10px] font-bold text-text-secondary uppercase tracking-widest mb-1">Supporting Documents</label>
          <div className="border-2 border-dashed border-gray-100 rounded-enterprise p-8 flex flex-col items-center justify-center text-center hover:border-olive/30 hover:bg-olive-light/20 transition-all cursor-pointer group">
            <Upload size={28} className="text-gray-300 group-hover:text-olive transition-colors mb-2" />
            <p className="text-sm font-bold text-gray-400 group-hover:text-text-primary transition-colors">Drag & Drop Documents or click to upload</p>
            <p className="text-xs text-gray-300 mt-1 uppercase">PDF, JPG, PNG (Max 15MB total)</p>
          </div>
        </section>

        {/* 7. Declaration */}
        <section className="pt-4">
          <label className="flex items-center gap-3 cursor-pointer select-none group">
            <div className="relative w-5 h-5 flex items-center justify-center">
              <input type="checkbox" className="peer absolute inset-0 opacity-0 cursor-pointer" />
              <div className="w-5 h-5 border-2 border-gray-200 rounded-sm bg-white peer-checked:bg-olive peer-checked:border-olive transition-all"></div>
              <svg className="absolute w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="4"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <span className="text-sm text-text-secondary font-medium group-hover:text-text-primary transition-colors">I confirm that this travel request is for official purposes.</span>
          </label>
        </section>

        {/* 8. Action Buttons */}
        <div className="flex items-center gap-4 pt-4">
          <button className="btn-primary px-8 py-3 flex-1 text-sm">
            Submit Request
          </button>
          <button 
            onClick={onCancel}
            className="btn-secondary px-8 py-3 flex-1 text-sm"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default TravelRequest;
