/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  LogOut, 
  User, 
  Briefcase, 
  Calendar, 
  ClipboardCheck, 
  ShieldCheck,
  MessageSquare,
  X,
  FileText,
  Clock
} from 'lucide-react';

interface SeparationRequestFormProps {
  onCancel?: () => void;
}

const SeparationRequestForm: React.FC<SeparationRequestFormProps> = ({ onCancel }) => {
  const employeeInfo = {
    name: 'Johnathan Doe',
    id: 'EMP-10294',
    department: 'Technology & Innovation',
    designation: 'Senior Software Engineer',
    joiningDate: 'June 15, 2022'
  };

  return (
    <div id="separation-request-form" className="w-full max-w-[750px] mx-auto py-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-olive-light rounded-button flex items-center justify-center text-olive">
            <LogOut size={20} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-text-primary uppercase tracking-widest">Separation Request</h1>
            <p className="text-xs text-text-secondary mt-1">Initiate the employee resignation and offboarding process.</p>
          </div>
        </div>
        <button 
          onClick={onCancel}
          className="p-2 text-gray-400 hover:text-olive hover:bg-olive-light rounded-full transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      <div className="enterprise-card bg-white space-y-10 shadow-sm border border-border-light">
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
            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-tighter mb-1">Date of Joining</label>
              <div className="px-3 py-2 bg-gray-50 border border-gray-100 rounded-button text-sm font-semibold text-text-primary">{employeeInfo.joiningDate}</div>
            </div>
          </div>
        </section>

        {/* 2. Separation Details */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-gray-50">
            <Clock size={16} className="text-olive" />
            <h2 className="text-xs font-bold text-text-secondary uppercase tracking-widest">Separation Details</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-bold text-text-secondary uppercase tracking-tighter mb-1">Reason for Resignation</label>
              <select className="input-field w-full appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwb2x5bGluZSBwb2ludHM9IjYgOSAxMiAxNSAxOCA5Ij48L3BvbHlsaW5lPjwvc3ZnPg==')] bg-[length:16px] bg-[right_12px_center] bg-no-repeat">
                <option>Select Reason</option>
                <option>Better Opportunity</option>
                <option>Personal Reasons</option>
                <option>Health Reasons</option>
                <option>Relocation</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-bold text-text-secondary uppercase tracking-tighter mb-1">Last Working Day</label>
              <div className="relative">
                <input type="date" className="input-field w-full" />
              </div>
            </div>
            <div>
              <label className="block text-[10px] font-bold text-text-secondary uppercase tracking-tighter mb-1">Notice Period (Days)</label>
              <input type="number" className="input-field w-full" placeholder="e.g. 90" />
            </div>
          </div>
        </section>

        {/* 3. Comments / Explanation */}
        <section className="space-y-2">
            <label className="block text-[10px] font-bold text-text-secondary uppercase tracking-widest mb-1">Detailed Reason / Comments</label>
            <textarea className="input-field w-full min-h-[100px] resize-none" placeholder="Provide more context about your resignation..."></textarea>
        </section>

        {/* 4. Handover Details */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-gray-50">
            <ClipboardCheck size={16} className="text-olive" />
            <h2 className="text-xs font-bold text-text-secondary uppercase tracking-widest">Handover Details</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-bold text-text-secondary uppercase tracking-tighter mb-1">Reporting Manager</label>
              <div className="px-3 py-2 bg-gray-50 border border-gray-100 rounded-button text-sm font-semibold text-text-primary">Sarah Williams (Manager - Engineering)</div>
            </div>
            <div>
              <label className="block text-[10px] font-bold text-text-secondary uppercase tracking-tighter mb-1">Handover Status</label>
              <select className="input-field w-full appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwb2x5bGluZSBwb2ludHM9IjYgOSAxMiAxNSAxOCA5Ij48L3BvbHlsaW5lPjwvc3ZnPg==')] bg-[length:16px] bg-[right_12px_center] bg-no-repeat">
                <option>Not Started</option>
                <option>In Progress</option>
                <option>Completed</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-[10px] font-bold text-text-secondary uppercase tracking-widest mb-1">Handover Notes</label>
            <textarea className="input-field w-full min-h-[80px] resize-none" placeholder="Notes for the successor..."></textarea>
          </div>
        </section>

        {/* 5. Exit Interview Preference */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-gray-50">
            <MessageSquare size={16} className="text-olive" />
            <h2 className="text-xs font-bold text-text-secondary uppercase tracking-widest">Exit Interview Preference</h2>
          </div>
          <div className="max-w-xs">
            <label className="block text-[10px] font-bold text-text-secondary uppercase tracking-tighter mb-1">Preferred Mode</label>
            <select className="input-field w-full appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwb2x5bGluZSBwb2ludHM9IjYgOSAxMiAxNSAxOCA5Ij48L3BvbHlsaW5lPjwvc3ZnPg==')] bg-[length:16px] bg-[right_12px_center] bg-no-repeat">
              <option>In Person</option>
              <option>Virtual</option>
              <option>Not Required</option>
            </select>
          </div>
        </section>

        {/* 6. Document Clearance */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-gray-50">
            <FileText size={16} className="text-olive" />
            <h2 className="text-xs font-bold text-text-secondary uppercase tracking-widest">Document & Asset Clearance</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {['ID Card Returned', 'Laptop Returned', 'Assets Cleared', 'Access Revoked'].map((item) => (
              <label key={item} className="flex items-center gap-3 cursor-pointer select-none group">
                <div className="relative w-4 h-4 flex items-center justify-center">
                  <input type="checkbox" className="peer absolute inset-0 opacity-0 cursor-pointer" />
                  <div className="w-4 h-4 border-2 border-gray-200 rounded-sm bg-white peer-checked:bg-olive peer-checked:border-olive transition-all"></div>
                  <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="4"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span className="text-xs text-text-secondary font-medium group-hover:text-text-primary transition-colors">{item}</span>
              </label>
            ))}
          </div>
        </section>

        {/* 7. Declaration */}
        <section className="pt-4 p-4 bg-olive-light/10 rounded-enterprise border border-olive/10">
          <label className="flex items-start gap-3 cursor-pointer select-none group">
            <div className="relative w-5 h-5 flex items-center justify-center mt-0.5">
              <input type="checkbox" className="peer absolute inset-0 opacity-0 cursor-pointer" />
              <div className="w-5 h-5 border-2 border-gray-200 rounded-sm bg-white peer-checked:bg-olive peer-checked:border-olive transition-all"></div>
              <svg className="absolute w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="4"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <span className="text-xs text-text-secondary font-semibold leading-normal group-hover:text-text-primary transition-colors italic">
              I confirm that all information provided is accurate and I agree to follow company exit policies.
            </span>
          </label>
        </section>

        {/* 8. Action Buttons */}
        <div className="flex items-center gap-4 pt-4">
          <button className="btn-primary px-10 py-3.5 flex-1 text-xs font-bold uppercase tracking-widest shadow-sm" onClick={() => alert("Resignation submitted successfully!")}>
                Submit Resignation
              </button>
          <button 
            onClick={onCancel}
            className="btn-secondary px-10 py-3.5 flex-1 text-xs font-bold uppercase tracking-widest"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeparationRequestForm;
