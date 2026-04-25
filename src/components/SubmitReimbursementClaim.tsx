/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Receipt, 
  User, 
  Calendar, 
  Banknote, 
  FileText, 
  Plus, 
  Upload, 
  Trash2,
  X,
  ShieldCheck
} from 'lucide-react';

interface SubmitReimbursementClaimProps {
  onCancel?: () => void;
}

const SubmitReimbursementClaim: React.FC<SubmitReimbursementClaimProps> = ({ onCancel }) => {
  const employeeInfo = {
    name: 'Johnathan Doe',
    id: 'EMP-10294',
    department: 'Technology & Innovation',
    designation: 'Senior Software Engineer'
  };

  const [breakdownItems, setBreakdownItems] = useState([
    { id: 1, name: '', amount: '' }
  ]);

  const addBreakdownItem = () => {
    setBreakdownItems([...breakdownItems, { id: Date.now(), name: '', amount: '' }]);
  };

  const removeBreakdownItem = (id: number) => {
    if (breakdownItems.length > 1) {
      setBreakdownItems(breakdownItems.filter(item => item.id !== id));
    }
  };

  return (
    <div id="submit-reimbursement-form" className="w-full max-w-[800px] mx-auto py-4">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-olive-light rounded-button flex items-center justify-center text-olive">
            <Receipt size={20} />
          </div>
          <h1 className="text-xl font-bold text-text-primary uppercase tracking-widest">Submit Reimbursement Claim</h1>
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
          </div>
        </section>

        {/* 2. Claim Details */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-gray-50">
            <Banknote size={16} className="text-olive" />
            <h2 className="text-xs font-bold text-text-secondary uppercase tracking-widest">Claim Details</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-bold text-text-secondary uppercase tracking-tighter mb-1">Claim Type</label>
              <select className="input-field w-full appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwb2x5bGluZSBwb2ludHM9IjYgOSAxMiAxNSAxOCA5Ij48L3BvbHlsaW5lPjwvc3ZnPg==')] bg-[length:16px] bg-[right_12px_center] bg-no-repeat">
                <option>Travel</option>
                <option>Food</option>
                <option>Accommodation</option>
                <option>Medical</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-bold text-text-secondary uppercase tracking-tighter mb-1">Expense Date</label>
              <div className="relative">
                <input type="date" className="input-field w-full pl-10" />
                <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>
            <div>
              <label className="block text-[10px] font-bold text-text-secondary uppercase tracking-tighter mb-1">Amount</label>
              <input type="number" className="input-field w-full" placeholder="0.00" />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-text-secondary uppercase tracking-tighter mb-1">Currency</label>
              <select className="input-field w-full appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwb2x5bGluZSBwb2ludHM9IjYgOSAxMiAxNSAxOCA5Ij48L3BvbHlsaW5lPjwvc3ZnPg==')] bg-[length:16px] bg-[right_12px_center] bg-no-repeat">
                <option>USD ($)</option>
                <option>EUR (€)</option>
                <option>GBP (£)</option>
                <option>INR (₹)</option>
                <option>JPY (¥)</option>
              </select>
            </div>
          </div>
        </section>

        {/* 3. Expense Description */}
        <section className="space-y-2">
            <label className="block text-[10px] font-bold text-text-secondary uppercase tracking-widest mb-1">Expense Description</label>
            <textarea className="input-field w-full min-h-[100px] resize-none" placeholder="Provide details about the expense..."></textarea>
        </section>

        {/* 4. Expense Breakdown (Optional Section) */}
        <section className="space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-gray-50">
            <div className="flex items-center gap-2">
              <Plus size={16} className="text-olive" />
              <h2 className="text-xs font-bold text-text-secondary uppercase tracking-widest">Expense Breakdown (Optional)</h2>
            </div>
            <button 
              onClick={addBreakdownItem}
              className="text-[10px] font-bold text-olive uppercase tracking-widest flex items-center gap-1 hover:underline"
            >
              <Plus size={12} />
              Add Item
            </button>
          </div>
          <div className="space-y-3">
            {breakdownItems.map((item, index) => (
              <div key={item.id} className="grid grid-cols-12 gap-3 items-end">
                <div className="col-span-7">
                  <label className="block text-[9px] font-bold text-gray-400 uppercase mb-1">Item Name</label>
                  <input type="text" className="input-field w-full py-2 text-xs" placeholder="e.g. Flight Ticket" />
                </div>
                <div className="col-span-4">
                  <label className="block text-[9px] font-bold text-gray-400 uppercase mb-1">Amount</label>
                  <input type="number" className="input-field w-full py-2 text-xs" placeholder="0.00" />
                </div>
                <div className="col-span-1 flex justify-center pb-2">
                  <button 
                    onClick={() => removeBreakdownItem(item.id)}
                    className="p-1.5 text-gray-300 hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Attachments */}
        <section className="space-y-2">
          <label className="block text-[10px] font-bold text-text-secondary uppercase tracking-widest mb-1">Attachments (Upload Bills / Receipts)</label>
          <div className="border-2 border-dashed border-gray-100 rounded-enterprise p-10 flex flex-col items-center justify-center text-center hover:border-olive/30 hover:bg-olive-light/20 transition-all cursor-pointer group">
            <Upload size={32} className="text-gray-300 group-hover:text-olive transition-colors mb-2" />
            <p className="text-sm font-bold text-gray-400 group-hover:text-text-primary transition-colors">Drag & Drop Documents or click to upload</p>
            <p className="text-xs text-gray-300 mt-1 uppercase">PDF, JPG, PNG (Max 15MB total)</p>
          </div>
        </section>

        {/* 6. Approval Details */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-gray-50">
            <ShieldCheck size={16} className="text-olive" />
            <h2 className="text-xs font-bold text-text-secondary uppercase tracking-widest">Approval Details</h2>
          </div>
          <div>
            <label className="block text-[10px] font-bold text-text-secondary uppercase tracking-tighter mb-1">Reporting Manager</label>
            <div className="px-3 py-2 bg-gray-50 border border-gray-100 rounded-button text-sm font-semibold text-text-primary">Sarah Williams (Manager - Engineering)</div>
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
            <span className="text-sm text-text-secondary font-medium group-hover:text-text-primary transition-colors">I confirm that the above expenses are accurate and for official purposes.</span>
          </label>
        </section>

        {/* 8. Action Buttons */}
        <div className="flex items-center gap-4 pt-4">
          <button className="btn-primary px-10 py-3.5 flex-1 text-xs font-bold uppercase tracking-widest shadow-sm">
            Submit Claim
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

export default SubmitReimbursementClaim;
