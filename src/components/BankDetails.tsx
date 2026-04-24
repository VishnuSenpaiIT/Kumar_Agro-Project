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
  Lock
} from 'lucide-react';

const BankDetails: React.FC = () => {
  return (
    <div id="bank-details-module" className="w-full max-w-4xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-text-primary mb-1">Bank Details</h1>
        <p className="text-sm text-text-secondary">Manage your salary disbursement account information securely.</p>
      </div>

      <div className="bg-white border border-border-light rounded-enterprise shadow-sm overflow-hidden">
        {/* Security Header */}
        <div className="bg-olive px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-white">
            <ShieldCheck size={16} />
            <span className="text-[10px] font-bold uppercase tracking-widest">Secure Payroll Account</span>
          </div>
          <div className="flex items-center gap-1.5 text-white/80">
            <Lock size={12} />
            <span className="text-[9px] font-bold uppercase">Encrypted</span>
          </div>
        </div>
        
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
            
            {/* Bank Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Bank Name</label>
              <div className="relative">
                <Landmark size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  value="Global Union Bank" 
                  readOnly
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-button text-sm font-semibold text-text-primary focus:outline-none"
                />
              </div>
            </div>

            {/* Account Number (Masked) */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Account Number</label>
              <div className="relative">
                <CreditCard size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  value="**** **** 4592" 
                  readOnly
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-button text-sm font-mono font-bold tracking-widest text-text-primary focus:outline-none"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <span className="px-1.5 py-0.5 bg-olive-light text-[8px] font-bold text-olive rounded uppercase tracking-tighter border border-olive/10">Masked</span>
                </div>
              </div>
            </div>

            {/* IFSC Code */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">IFSC Code</label>
              <div className="relative">
                <ShieldCheck size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  value="GUB0001234" 
                  readOnly
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-button text-sm font-semibold text-text-primary focus:outline-none"
                />
              </div>
            </div>

            {/* Branch Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Branch Name</label>
              <div className="relative">
                <MapPin size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  value="Main Headquarters, Mumbai" 
                  readOnly
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-button text-sm font-semibold text-text-primary focus:outline-none"
                />
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-text-secondary">
              <Lock size={14} className="text-olive" />
              <p className="text-[10px] font-medium max-w-xs leading-tight">
                To update your bank details, you may need to provide a cancelled cheque or bank statement as per company policy.
              </p>
            </div>
            
            <button className="flex items-center gap-2 px-8 py-3 bg-white border-2 border-olive text-olive rounded-button font-bold text-sm hover:bg-olive hover:text-white transition-all shadow-sm">
              <RefreshCw size={18} />
              Update Bank Details
            </button>
          </div>
        </div>
      </div>

      {/* Verification Notice */}
      <div className="mt-6 p-4 bg-amber-50 border border-amber-100 rounded-lg flex items-center gap-3">
        <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 shrink-0">
          <ShieldCheck size={18} />
        </div>
        <p className="text-[11px] font-semibold text-amber-800 leading-tight">
          Current status: <span className="uppercase font-bold">Verified</span>. Your salary will be credited to this account on the last working day of every month.
        </p>
      </div>
    </div>
  );
};

export default BankDetails;
