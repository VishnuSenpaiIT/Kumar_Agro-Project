/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  UserCircle, 
  ShieldCheck, 
  Banknote, 
  ClipboardCheck, 
  Calendar,
  Upload,
  FileText,
  Save,
  X,
  CreditCard,
  MapPin,
  TrendingUp,
  Scale
} from 'lucide-react';

interface SectionHeaderProps {
  icon: React.ReactNode;
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ icon, title }) => (
  <div className="bg-gray-50/50 px-6 py-4 border-b border-gray-100 flex items-center gap-3">
    <div className="text-olive">{icon}</div>
    <h2 className="text-xs font-bold text-text-primary uppercase tracking-widest">{title}</h2>
  </div>
);

const OtherDetails: React.FC = () => {
  return (
    <div id="other-details-module" className="w-full max-w-5xl space-y-8 pb-20">
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-text-primary mb-1">Other Details</h1>
        <p className="text-sm text-text-secondary">Comprehensive employee records including legal, payroll, and compliance data.</p>
      </div>

      {/* 1. PERSONAL INFO */}
      <div className="bg-white border border-border-light rounded-enterprise shadow-sm overflow-hidden">
        <SectionHeader icon={<UserCircle size={18} />} title="Personal Info" />
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-1.5 md:col-span-2">
              <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Personal Info</label>
              <textarea 
                rows={3}
                placeholder="Additional personal records or notes..."
                className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 transition-all resize-none"
              ></textarea>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Posting state</label>
              <div className="relative">
                <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <select className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 transition-all appearance-none cursor-pointer">
                  <option value="">Select State</option>
                  <option value="maharashtra">Maharashtra</option>
                  <option value="karnataka">Karnataka</option>
                  <option value="delhi">Delhi</option>
                  <option value="tamilnadu">Tamil Nadu</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. LEGAL & IDENTIFICATION */}
      <div className="bg-white border border-border-light rounded-enterprise shadow-sm overflow-hidden">
        <SectionHeader icon={<ShieldCheck size={18} />} title="Legal & Identification" />
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Driver license</label>
              <input type="text" placeholder="Enter License Number" className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 transition-all" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Pan</label>
              <input type="text" placeholder="Enter PAN Number" className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 transition-all font-mono" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Voter ID</label>
              <input type="text" placeholder="Enter Voter ID Number" className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 transition-all font-mono" />
            </div>
          </div>

          <div>
            <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight block mb-3">Upload Voter ID</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="h-28 bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center gap-2 hover:border-olive hover:bg-olive-light transition-all cursor-pointer group">
                <Upload size={18} className="text-gray-400 group-hover:text-olive" />
                <p className="text-[10px] font-bold text-gray-500 group-hover:text-olive">Upload Document</p>
              </div>
              <div className="h-28 bg-white border border-gray-200 rounded-xl p-3 flex items-center gap-3">
                <div className="w-16 h-full bg-gray-100 rounded flex items-center justify-center text-gray-300">
                  <CreditCard size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-text-primary">voter_id_scan.jpg</p>
                  <p className="text-[9px] text-gray-400 uppercase font-bold tracking-tighter">Draft</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. PAYROLL & COMPENSATION */}
      <div className="bg-white border border-border-light rounded-enterprise shadow-sm overflow-hidden">
        <SectionHeader icon={<Banknote size={18} />} title="Payroll & Compensation" />
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Payroll</label>
              <input type="text" placeholder="e.g. Monthly" className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 transition-all" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Bonus</label>
              <div className="relative">
                <TrendingUp size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type="text" placeholder="e.g. Performance B" className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 transition-all" />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Paymore</label>
              <input type="text" placeholder="Standard Rate" className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 transition-all" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Super annunation</label>
              <input type="text" placeholder="N/A" className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 transition-all" />
            </div>
          </div>
        </div>
      </div>

      {/* 4. STATUTORY & COMPLIANCE */}
      <div className="bg-white border border-border-light rounded-enterprise shadow-sm overflow-hidden">
        <SectionHeader icon={<ClipboardCheck size={18} />} title="Statutory & Compliance" />
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Provident fund</label>
              <input type="text" placeholder="UAN Number" className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 transition-all" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Labour welfare fund</label>
              <input type="text" placeholder="Applicable Code" className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 transition-all" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Professional tax</label>
              <input type="text" placeholder="Deduction Plan" className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 transition-all" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Voluntary provident fund</label>
              <input type="text" placeholder="VPF Contribution" className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 transition-all" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">ABRY applicable</label>
              <div className="relative">
                <Scale size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <select className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 transition-all appearance-none cursor-pointer">
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. ADDITIONAL DETAILS */}
      <div className="bg-white border border-border-light rounded-enterprise shadow-sm overflow-hidden">
        <SectionHeader icon={<FileText size={18} />} title="Additional Details" />
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Appointed on duty</label>
              <div className="relative">
                <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type="date" className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 transition-all" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BUTTONS */}
      <div className="flex items-center justify-end gap-4 pt-4 border-t border-gray-100">
        <button className="flex items-center gap-2 px-6 py-2.5 text-sm font-bold text-text-secondary hover:text-red-500 transition-colors uppercase tracking-widest">
          <X size={16} />
          Cancel
        </button>
        <button className="flex items-center gap-2 px-10 py-3 bg-olive text-white rounded-button font-bold text-sm shadow-md hover:bg-olive/90 active:transform active:scale-[0.98] transition-all">
          <Save size={18} />
          Save Details
        </button>
      </div>
    </div>
  );
};

export default OtherDetails;
