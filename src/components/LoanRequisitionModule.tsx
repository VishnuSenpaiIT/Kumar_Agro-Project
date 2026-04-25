/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Banknote, 
  Wallet, 
  CheckCircle2, 
  Clock, 
  XCircle, 
  AlertCircle, 
  ChevronDown, 
  Upload, 
  Plus, 
  Eye, 
  X,
  User,
  Briefcase,
  Calendar,
  Building2,
  TrendingDown,
  History
} from 'lucide-react';

interface LoanRequisitionModuleProps {
  onCancel?: () => void;
}

const LoanRequisitionModule: React.FC<LoanRequisitionModuleProps> = ({ onCancel }) => {
  const summaryCards = [
    { title: 'Eligible Loan Amount', value: '₹ 5,00,000', icon: <TrendingDown size={18} />, color: 'olive' },
    { title: 'Total Loans Taken', value: '₹ 1,20,000', icon: <Banknote size={18} />, color: 'blue' },
    { title: 'Outstanding Amount', value: '₹ 45,000', icon: <AlertCircle size={18} />, color: 'orange' },
    { title: 'EMI Deduction Status', value: 'Active', icon: <CheckCircle2 size={18} />, color: 'green' },
  ];

  const loanHistory = [
    { id: 'LN-2025-004', type: 'Medical Loan', amount: '50,000', tenure: '12 Months', emi: '4,500', status: 'Pending', date: 'Oct 22, 2025' },
    { id: 'LN-2024-112', type: 'Personal Loan', amount: '1,20,000', tenure: '24 Months', emi: '5,800', status: 'Active', date: 'Jan 15, 2024' },
    { id: 'LN-2023-085', type: 'Emergency Loan', amount: '30,000', tenure: '6 Months', emi: '5,200', status: 'Closed', date: 'Jul 10, 2023' },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Approved': return 'bg-green-50 text-green-600 border-green-100';
      case 'Pending': return 'bg-orange-50 text-orange-600 border-orange-100';
      case 'Rejected': return 'bg-red-50 text-red-600 border-red-100';
      case 'Active': return 'bg-blue-50 text-blue-600 border-blue-100';
      case 'Closed': return 'bg-gray-50 text-gray-400 border-gray-100';
      default: return 'bg-gray-50 text-gray-500';
    }
  };

  return (
    <div id="loan-requisition-module" className="w-full max-w-7xl mx-auto py-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-olive-light rounded-button flex items-center justify-center text-olive">
            <Banknote size={20} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-text-primary uppercase tracking-widest">Loan Requisition</h1>
            <p className="text-xs text-text-secondary mt-1">Request and manage your workplace loans and repayments.</p>
          </div>
        </div>
        {onCancel && (
          <button 
            onClick={onCancel}
            className="p-2 text-gray-400 hover:text-olive hover:bg-olive-light rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        )}
      </div>

      {/* 1. Loan Summary Section */}
      <section className="mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {summaryCards.map((card, index) => (
            <div key={index} className="enterprise-card bg-white p-6 border border-border-light shadow-sm flex items-center justify-between group hover:border-olive transition-all">
              <div>
                <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-2">{card.title}</h3>
                <p className="text-2xl font-bold text-text-primary tracking-tighter">{card.value}</p>
              </div>
              <div className={`w-12 h-12 rounded-enterprise flex items-center justify-center
                ${card.color === 'olive' ? 'bg-olive-light/20 text-olive' : 
                  card.color === 'blue' ? 'bg-blue-50 text-blue-600' : 
                  card.color === 'orange' ? 'bg-orange-50 text-orange-500' : 
                  'bg-green-50 text-green-600'}
              `}>
                {card.icon}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* 2. Loan Application Form */}
          <section className="enterprise-card bg-white p-8 border border-border-light shadow-sm">
            <div className="flex items-center gap-2 mb-8 border-b border-gray-100 pb-4">
              <div className="w-1 h-5 bg-olive rounded-full"></div>
              <h2 className="text-sm font-bold text-text-primary uppercase tracking-widest">Loan Requisition Form</h2>
            </div>

            {/* Employee Information (Read-only) */}
            <div className="space-y-6 mb-10">
              <h3 className="text-xs font-bold text-text-secondary uppercase tracking-[0.15em] flex items-center gap-2">
                <User size={14} className="text-olive" />
                Employee Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { label: 'Employee Name', value: 'Johnathan Doe' },
                  { label: 'Employee ID', value: 'EMP-10294' },
                  { label: 'Department', value: 'Technology & Innovation' },
                  { label: 'Designation', value: 'Senior Software Engineer' },
                  { label: 'Date of Joining', value: 'June 15, 2022' },
                ].map((info, i) => (
                  <div key={i}>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{info.label}</label>
                    <div className="px-3 py-2 bg-gray-50 border border-gray-100 rounded-button text-[11px] font-bold text-text-primary">
                      {info.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Loan Details */}
            <div className="space-y-6 mb-10 pt-6 border-t border-gray-100">
              <h3 className="text-xs font-bold text-text-secondary uppercase tracking-[0.15em] flex items-center gap-2">
                <Banknote size={14} className="text-olive" />
                Loan Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Loan Type</label>
                  <div className="relative">
                    <select className="input-field w-full py-2.5 text-xs appearance-none pr-10">
                      <option>Personal Loan</option>
                      <option>Medical Loan</option>
                      <option>Education Loan</option>
                      <option>Emergency Loan</option>
                      <option>Other</option>
                    </select>
                    <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Requested Amount (₹)</label>
                  <input type="number" className="input-field w-full py-2.5 text-xs" placeholder="0.00" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Tenure</label>
                  <div className="relative">
                    <select className="input-field w-full py-2.5 text-xs appearance-none pr-10">
                      <option>6 Months</option>
                      <option>12 Months</option>
                      <option>24 Months</option>
                      <option>36 Months</option>
                    </select>
                    <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">EMI Start Month</label>
                  <input type="month" className="input-field w-full py-2.5 text-xs" />
                </div>
              </div>
            </div>

            {/* Loan Purpose */}
            <div className="space-y-4 mb-10 pt-6 border-t border-gray-100">
               <h3 className="text-xs font-bold text-text-secondary uppercase tracking-[0.15em]">Loan Purpose</h3>
               <textarea className="input-field w-full min-h-[100px] py-3 text-xs resize-none" placeholder="Provide detailed reason for the loan request..."></textarea>
            </div>

            {/* Repayment Details */}
            <div className="space-y-6 mb-10 pt-6 border-t border-gray-100">
              <h3 className="text-xs font-bold text-text-secondary uppercase tracking-[0.15em] flex items-center gap-2">
                <Wallet size={14} className="text-olive" />
                Repayment Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Monthly EMI (Estimated)</label>
                  <div className="px-3 py-2.5 bg-gray-50 border border-gray-100 rounded-button text-xs font-bold text-olive">
                    ₹ 0.00 <span className="text-[9px] text-gray-400 uppercase ml-2">(Calculated after submission)</span>
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Mode of Repayment</label>
                  <div className="relative">
                    <select className="input-field w-full py-2.5 text-xs appearance-none pr-10">
                      <option>Salary Deduction</option>
                      <option>Manual Payment</option>
                    </select>
                    <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>

            {/* Attachments */}
            <div className="mb-10 pt-6 border-t border-gray-100">
              <label className="block text-[10px] font-bold text-text-secondary uppercase tracking-widest mb-4">Upload Supporting Documents</label>
              <div className="border-2 border-dashed border-gray-100 rounded-enterprise p-12 flex flex-col items-center justify-center bg-gray-50/20 group hover:border-olive transition-colors cursor-pointer">
                <div className="w-14 h-14 bg-white shadow-sm border border-gray-100 rounded-enterprise flex items-center justify-center text-gray-300 group-hover:text-olive transition-colors mb-4">
                  <Upload size={28} />
                </div>
                <p className="text-xs font-bold text-text-primary uppercase tracking-widest">Drag & Drop Documents</p>
                <p className="text-[10px] text-gray-400 mt-2 uppercase tracking-tight">Upload ID proofs, medical records, or admission letters.</p>
              </div>
            </div>

            {/* Declaration */}
            <div className="mb-10 p-4 bg-olive-light/10 rounded-enterprise border border-olive/10">
              <label className="flex items-start gap-4 cursor-pointer group">
                <div className="relative w-5 h-5 flex items-center justify-center mt-0.5">
                  <input type="checkbox" className="peer absolute inset-0 opacity-0 cursor-pointer" />
                  <div className="w-5 h-5 border-2 border-gray-200 rounded-sm bg-white peer-checked:bg-olive peer-checked:border-olive transition-all"></div>
                  <CheckCircle2 size={14} className="absolute text-white opacity-0 peer-checked:opacity-100" />
                </div>
                <span className="text-[11px] text-text-secondary font-semibold leading-normal group-hover:text-text-primary transition-colors italic">
                  I confirm that the above information is accurate and I agree to the repayment terms set by the company as per the human resource policies.
                </span>
              </label>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4">
              <button className="btn-primary flex-1 py-4 text-[11px] font-bold uppercase tracking-widest shadow-sm">
                Submit Loan Request
              </button>
              <button className="btn-secondary flex-1 py-4 text-[11px] font-bold uppercase tracking-widest">
                Save Draft
              </button>
              <button 
                onClick={onCancel}
                className="px-8 py-4 text-[11px] font-bold text-gray-400 hover:text-red-500 uppercase tracking-widest"
              >
                Cancel
              </button>
            </div>
          </section>
        </div>

        <div className="space-y-8">
          {/* 3. Loan Application History Table */}
          <section className="enterprise-card bg-white p-0 border border-border-light shadow-sm overflow-hidden flex flex-col min-h-64">
            <div className="px-6 py-5 border-b border-gray-50 bg-gray-50/30 flex items-center justify-between">
              <h3 className="text-[10px] font-bold text-text-primary uppercase tracking-[0.2em]">Application History</h3>
              <History size={16} className="text-olive" />
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-50">
                    <th className="px-6 py-4 text-[9px] font-bold text-gray-400 uppercase tracking-widest">Loan Summary</th>
                    <th className="px-6 py-4 text-[9px] font-bold text-gray-400 uppercase tracking-widest text-right">Amount</th>
                    <th className="px-6 py-4 text-[9px] font-bold text-gray-400 uppercase tracking-widest text-center">Status</th>
                    <th className="px-6 py-4 text-[9px] font-bold text-gray-400 uppercase tracking-widest text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {loanHistory.map((loan, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors group">
                      <td className="px-6 py-4">
                        <p className="text-[11px] font-bold text-text-primary">{loan.type}</p>
                        <p className="text-[9px] text-gray-400 uppercase mt-0.5">{loan.id}</p>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <p className="text-[11px] font-bold text-text-primary">₹{loan.amount}</p>
                        <p className="text-[9px] text-olive font-bold uppercase mt-0.5">EMI: ₹{loan.emi}</p>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={`inline-block px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-widest border ${getStatusBadge(loan.status)}`}>
                          {loan.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="p-1.5 text-gray-300 hover:text-olive transition-colors">
                          <Eye size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <div className="p-6 bg-olive-light/10 border border-olive/10 rounded-enterprise">
             <h4 className="text-[10px] font-bold text-olive uppercase tracking-widest mb-3 flex items-center gap-2">
                <AlertCircle size={14} />
                Policy Brief
             </h4>
             <ul className="space-y-3">
                <li className="flex items-start gap-2 text-[10px] text-text-secondary leading-normal">
                   <div className="w-1 h-1 bg-olive rounded-full mt-1.5 shrink-0"></div>
                   Maximum loan eligibility is up to 6 months of gross salary.
                </li>
                <li className="flex items-start gap-2 text-[10px] text-text-secondary leading-normal">
                   <div className="w-1 h-1 bg-olive rounded-full mt-1.5 shrink-0"></div>
                   Interest-free loans are available for medical and emergency purposes.
                </li>
                <li className="flex items-start gap-2 text-[10px] text-text-secondary leading-normal">
                   <div className="w-1 h-1 bg-olive rounded-full mt-1.5 shrink-0"></div>
                   Previous loan must be closed before applying for a new personal loan.
                </li>
             </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanRequisitionModule;
