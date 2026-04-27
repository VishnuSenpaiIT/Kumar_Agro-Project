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
  Scale,
  FileCheck,
  Briefcase,
  Globe,
  Fingerprint,
  Stamp
} from 'lucide-react';

interface SectionHeaderProps {
  icon: React.ReactNode;
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ icon, title }) => (
  <div className="bg-gray-50/50 px-6 py-4 border-b border-gray-100 flex items-center justify-between">
    <div className="flex items-center gap-3">
      <div className="text-olive">{icon}</div>
      <h2 className="text-xs font-bold text-text-primary uppercase tracking-widest">{title}</h2>
    </div>
    <button className="text-[10px] font-bold text-olive uppercase tracking-tight hover:underline flex items-center gap-1">
      <FileCheck size={12} />
      Update Section
    </button>
  </div>
);

const OtherDetails: React.FC = () => {
  return (
    <div id="other-details-module" className="w-full max-w-6xl space-y-8 pb-20 animate-in slide-in-from-bottom-8 duration-700">
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-text-primary mb-1">Other Details & Compliance</h1>
          <p className="text-sm text-text-secondary">Full spectrum of employee records including statutory, payroll, and identity documentation.</p>
        </div>
        <div className="flex items-center gap-3">
           <div className="px-4 py-2 bg-blue-50 border border-blue-100 rounded-lg flex flex-col items-center">
             <span className="text-[9px] font-bold text-blue-400 uppercase">Profile Completion</span>
             <span className="text-lg font-black text-blue-600">92%</span>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 1. PERSONAL INFO & GEOGRAPHY */}
        <div className="bg-white border border-border-light rounded-enterprise shadow-sm overflow-hidden flex flex-col">
          <SectionHeader icon={<UserCircle size={18} />} title="Personal Info & Geography" />
          <div className="p-8 space-y-6 flex-1">
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Posting State</label>
              <div className="relative">
                <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <select className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 transition-all appearance-none cursor-pointer">
                  <option value="maharashtra">Maharashtra (Headquarters)</option>
                  <option value="karnataka">Karnataka (Tech Hub)</option>
                  <option value="delhi">NCR - Delhi</option>
                  <option value="tamilnadu">Tamil Nadu</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Additional Personal Notes</label>
              <textarea 
                rows={3}
                placeholder="Important personal records..."
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 transition-all resize-none"
              ></textarea>
            </div>
          </div>
        </div>

        {/* 2. IDENTITY DOCUMENTATION */}
        <div className="bg-white border border-border-light rounded-enterprise shadow-sm overflow-hidden flex flex-col">
          <SectionHeader icon={<Fingerprint size={18} />} title="Identity Documentation" />
          <div className="p-8 space-y-6 flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Aadhar Number</label>
                <input type="text" value="XXXX XXXX 8892" readOnly className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-button text-sm font-mono font-bold tracking-widest text-text-primary" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">PAN Number</label>
                <input type="text" value="ABCDE1234F" readOnly className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-button text-sm font-mono font-bold tracking-widest text-text-primary" />
              </div>
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Passport Number</label>
              <div className="relative">
                <Globe size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type="text" value="Z9874563" readOnly className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-button text-sm font-bold text-text-primary" />
              </div>
            </div>

            <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-gray-400">
                  <FileText size={20} />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-text-primary">passport_scanned.pdf</p>
                  <p className="text-[9px] text-gray-400 uppercase">Uploaded on 12 Mar</p>
                </div>
              </div>
              <button className="text-[10px] font-bold text-olive uppercase">View</button>
            </div>
          </div>
        </div>

        {/* 3. PAYROLL & COMPENSATION CONFIG */}
        <div className="bg-white border border-border-light rounded-enterprise shadow-sm overflow-hidden flex flex-col">
          <SectionHeader icon={<Banknote size={18} />} title="Payroll & Compensation Config" />
          <div className="p-8 space-y-6 flex-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Pay Cycle</label>
                <input type="text" value="Monthly" readOnly className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-button text-sm font-bold" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Bonus Category</label>
                <input type="text" value="Performance - A" readOnly className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-button text-sm font-bold" />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Annual Variable Pay (AVP)</label>
              <div className="relative">
                <TrendingUp size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-olive" />
                <input type="text" value="₹ 4,50,000.00" readOnly className="w-full pl-10 pr-4 py-3 bg-olive-light border border-olive/10 rounded-button text-sm font-bold text-olive" />
              </div>
            </div>
          </div>
        </div>

        {/* 4. STATUTORY & COMPLIANCE */}
        <div className="bg-white border border-border-light rounded-enterprise shadow-sm overflow-hidden flex flex-col">
          <SectionHeader icon={<ClipboardCheck size={18} />} title="Statutory & Compliance" />
          <div className="p-8 space-y-6 flex-1">
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Professional Tax Slab</label>
              <input type="text" value="Standard (₹ 2,500 Yearly)" readOnly className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-button text-sm font-bold" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">NDA & Compliance Status</label>
              <div className="flex items-center gap-3">
                 <div className="flex-1 px-4 py-3 bg-green-50 text-green-700 text-xs font-bold rounded-lg border border-green-100 flex items-center gap-2">
                   <Stamp size={14} /> Signed on Joining
                 </div>
                 <div className="flex-1 px-4 py-3 bg-green-50 text-green-700 text-xs font-bold rounded-lg border border-green-100 flex items-center gap-2">
                   <FileCheck size={14} /> BG Check Clear
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FINAL ACTIONS */}
      <div className="flex items-center justify-between pt-10 border-t border-gray-100">
        <div className="flex items-center gap-2 text-text-secondary italic text-xs">
          <ShieldCheck size={14} className="text-olive" />
          Last audited by Compliance Officer on Mar 20, 2026
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-8 py-3 text-sm font-bold text-text-secondary hover:text-red-500 transition-colors uppercase tracking-widest">
            <X size={16} />
            Discard Changes
          </button>
          <button className="flex items-center gap-2 px-10 py-3 bg-olive text-white rounded-button font-bold text-sm shadow-xl shadow-olive/20 hover:bg-olive/90 active:transform active:scale-[0.98] transition-all">
            <Save size={18} />
            Commit Records
          </button>
        </div>
      </div>
    </div>
  );
};

export default OtherDetails;
