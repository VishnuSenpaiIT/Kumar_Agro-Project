/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Landmark, 
  ShieldCheck, 
  CreditCard, 
  MapPin, 
  RefreshCw,
  Lock,
  Wallet,
  PiggyBank,
  UserCheck,
  CalendarDays,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

const BankDetails: React.FC = () => {
  return (
    <div id="bank-details-module" className="w-full max-w-5xl space-y-8 animate-in slide-in-from-right-4 duration-500">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text-primary mb-1">Bank & Financial Details</h1>
          <p className="text-sm text-text-secondary">Secure management of your payroll accounts and statutory fund identifiers.</p>
        </div>
        <div className="px-4 py-2 bg-green-50 text-green-700 text-[10px] font-bold rounded-full border border-green-100 flex items-center gap-2">
          <CheckCircle2 size={14} />
          KYC VERIFIED
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Primary Salary Account */}
        <div className="bg-white border border-border-light rounded-enterprise shadow-sm overflow-hidden flex flex-col">
          <div className="bg-olive px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2 text-white">
              <Landmark size={18} />
              <span className="text-xs font-bold uppercase tracking-widest">Primary Salary Account</span>
            </div>
            <Lock size={14} className="text-white/60" />
          </div>
          
          <div className="p-8 space-y-6 flex-1">
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Bank Name</label>
              <div className="relative group">
                <Landmark size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  value="HDFC Bank Ltd." 
                  readOnly
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-button text-sm font-bold text-text-primary focus:outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Account Number</label>
              <div className="relative group">
                <CreditCard size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  value="XXXX XXXX XXXX 4592" 
                  readOnly
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-button text-sm font-mono font-bold tracking-widest text-text-primary focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
               <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">IFSC Code</label>
                <input 
                  type="text" 
                  value="HDFC0001234" 
                  readOnly
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-button text-sm font-bold text-text-primary focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Branch</label>
                <input 
                  type="text" 
                  value="Andheri West" 
                  readOnly
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-button text-sm font-bold text-text-primary focus:outline-none"
                />
              </div>
            </div>
          </div>
          <div className="px-8 py-4 bg-gray-50 border-t border-gray-100">
            <button className="w-full flex items-center justify-center gap-2 py-2.5 border-2 border-olive text-olive rounded-button font-bold text-xs uppercase tracking-widest hover:bg-olive hover:text-white transition-all">
              <RefreshCw size={14} />
              Request Update
            </button>
          </div>
        </div>

        {/* Statutory Details (PF/ESIC) */}
        <div className="bg-white border border-border-light rounded-enterprise shadow-sm overflow-hidden flex flex-col">
          <div className="bg-gray-900 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2 text-white">
              <ShieldCheck size={18} />
              <span className="text-xs font-bold uppercase tracking-widest">Statutory Identifiers</span>
            </div>
            <UserCheck size={14} className="text-white/60" />
          </div>
          
          <div className="p-8 space-y-6 flex-1">
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Universal Account Number (UAN)</label>
              <div className="relative group">
                <PiggyBank size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  value="100987452136" 
                  readOnly
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-button text-sm font-bold text-text-primary focus:outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">PF Member ID</label>
              <input 
                type="text" 
                value="MH/BAN/0045621/000/0098231" 
                readOnly
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-button text-sm font-bold text-text-primary focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">ESIC Number</label>
              <div className="relative group">
                <Wallet size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  value="31000987450001001" 
                  readOnly
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-button text-sm font-bold text-text-primary focus:outline-none"
                />
              </div>
            </div>
          </div>
          <div className="px-8 py-4 bg-gray-50 border-t border-gray-100 flex items-center gap-2 text-[10px] text-gray-400 font-medium italic">
             <AlertTriangle size={12} className="text-amber-500" />
             Information updated by HR on Mar 12, 2026
          </div>
        </div>
      </div>

      {/* Nominee Details Card */}
      <div className="bg-white border border-border-light rounded-enterprise shadow-sm overflow-hidden">
        <div className="bg-gray-50/50 px-6 py-4 border-b border-gray-100 flex items-center gap-2">
          <UserCheck size={18} className="text-olive" />
          <h2 className="text-xs font-bold text-text-primary uppercase tracking-widest">Nominee Details</h2>
        </div>
        
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Nominee Name</label>
              <input type="text" value="Anjali Sharma" readOnly className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-button text-sm font-bold text-text-primary" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Relationship</label>
              <input type="text" value="Spouse" readOnly className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-button text-sm font-bold text-text-primary" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Nominee DOB</label>
              <div className="relative">
                <CalendarDays size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type="text" value="May 15, 1994" readOnly className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-button text-sm font-bold text-text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankDetails;
