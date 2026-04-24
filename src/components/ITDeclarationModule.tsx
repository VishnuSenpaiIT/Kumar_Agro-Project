/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  FileText, 
  Plus, 
  Trash2, 
  Upload, 
  CheckCircle2, 
  Clock, 
  XCircle, 
  DollarSign, 
  ChevronDown,
  Eye,
  X
} from 'lucide-react';

interface InvestmentRecord {
  id: string;
  type: string;
  amount: string;
  description: string;
}

interface ITDeclarationModuleProps {
  onCancel?: () => void;
}

const ITDeclarationModule: React.FC<ITDeclarationModuleProps> = ({ onCancel }) => {
  const [investments, setInvestments] = useState<InvestmentRecord[]>([
    { id: '1', type: '80C', amount: '', description: '' }
  ]);

  const addInvestment = () => {
    const newId = (investments.length + 1).toString();
    setInvestments([...investments, { id: newId, type: '', amount: '', description: '' }]);
  };

  const removeInvestment = (id: string) => {
    if (investments.length > 1) {
      setInvestments(investments.filter(inv => inv.id !== id));
    }
  };

  const summaryData = [
    { title: 'Total Declarations Submitted', count: 1, icon: <FileText size={18} />, color: 'olive' },
    { title: 'Pending Declarations', count: 1, icon: <Clock size={18} />, color: 'orange' },
    { title: 'Verified Declarations', count: 0, icon: <CheckCircle2 size={18} />, color: 'green' },
    { title: 'Rejected Declarations', count: 0, icon: <XCircle size={18} />, color: 'red' },
  ];

  const submittedDeclarations = [
    { year: '2024–2025', amount: '1,50,000', status: 'Pending', date: 'Oct 20, 2025' },
  ];

  return (
    <div id="it-declaration-module" className="w-full max-w-7xl mx-auto py-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-olive-light rounded-button flex items-center justify-center text-olive">
            <DollarSign size={20} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-text-primary uppercase tracking-widest">IT Declaration</h1>
            <p className="text-xs text-text-secondary mt-1">Submit and track your income tax investment declarations.</p>
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

      {/* 1. Declaration Summary Section */}
      <section className="mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {summaryData.map((item, index) => (
            <div key={index} className="enterprise-card bg-white p-6 border border-border-light shadow-sm flex items-center justify-between group hover:border-olive transition-all">
              <div>
                <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-2">{item.title}</h3>
                <p className="text-3xl font-bold text-text-primary tracking-tighter">{item.count}</p>
              </div>
              <div className={`w-12 h-12 rounded-enterprise flex items-center justify-center
                ${item.color === 'olive' ? 'bg-olive-light/20 text-olive' : 
                  item.color === 'orange' ? 'bg-orange-50 text-orange-500' : 
                  item.color === 'green' ? 'bg-green-50 text-green-600' : 
                  'bg-red-50 text-red-500'}
              `}>
                {item.icon}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* 2. Declaration Form Section */}
          <section className="enterprise-card bg-white p-8 border border-border-light shadow-sm">
            <div className="flex items-center gap-2 mb-8 border-b border-gray-100 pb-4">
              <div className="w-1 h-5 bg-olive rounded-full"></div>
              <h2 className="text-sm font-bold text-text-primary uppercase tracking-widest">Income Tax Declaration Form</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Financial Year</label>
                <div className="relative">
                  <select className="input-field w-full py-2.5 text-xs appearance-none pr-10">
                    <option>2024–2025</option>
                    <option>2025–2026</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Employee Details</label>
                <div className="px-3 py-2.5 bg-gray-50 border border-gray-100 rounded-button flex items-center justify-between">
                  <span className="text-xs font-bold text-text-primary">Johnathan Doe</span>
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tight">EMP-10294</span>
                </div>
              </div>
            </div>

            {/* 3. Investment Details */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold text-text-secondary uppercase tracking-[0.15em]">Investment Details</h3>
                <button 
                  onClick={addInvestment}
                  className="flex items-center gap-1.5 text-[9px] font-bold text-olive uppercase tracking-widest hover:underline"
                >
                  <Plus size={12} />
                  Add Another Investment
                </button>
              </div>

              <div className="space-y-4">
                {investments.map((inv, index) => (
                  <div key={inv.id} className="p-5 border border-gray-100 rounded-enterprise bg-gray-50/50 space-y-4 relative group">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">Investment Type</label>
                        <div className="relative">
                          <select className="input-field w-full py-2 text-xs appearance-none bg-white pr-8">
                            <option>80C</option>
                            <option>80D</option>
                            <option>HRA</option>
                            <option>LTA</option>
                            <option>Other</option>
                          </select>
                          <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">Amount (₹)</label>
                        <input type="number" className="input-field w-full py-2 text-xs bg-white" placeholder="0.00" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">Description</label>
                      <textarea className="input-field w-full min-h-[60px] py-2 text-xs bg-white resize-none" placeholder="Details about this investment..."></textarea>
                    </div>
                    {investments.length > 1 && (
                      <button 
                        onClick={() => removeInvestment(inv.id)}
                        className="absolute -top-2 -right-2 w-6 h-6 bg-red-50 text-red-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm border border-red-100"
                      >
                        <Trash2 size={12} />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Proof Upload Section */}
            <div className="mt-10 pt-10 border-t border-gray-100">
              <label className="block text-[10px] font-bold text-text-secondary uppercase tracking-widest mb-4">Upload Supporting Documents</label>
              <div className="border-2 border-dashed border-gray-100 rounded-enterprise p-10 flex flex-col items-center justify-center bg-gray-50/20 group hover:border-olive transition-colors cursor-pointer">
                <div className="w-12 h-12 bg-white rounded-enterprise shadow-sm border border-gray-100 flex items-center justify-center text-gray-300 group-hover:text-olive transition-colors mb-4">
                  <Upload size={24} />
                </div>
                <p className="text-xs font-bold text-text-primary uppercase tracking-widest">Drag & Drop Proof Documents</p>
                <p className="text-[10px] text-gray-400 mt-2 uppercase tracking-tight">PDF, JPG, PNG (Max 5MB each)</p>
              </div>
              <div className="mt-4 flex flex-col gap-2">
                 <div className="text-[10px] text-gray-400 italic font-medium">* Ensure all documents are visible and clear for verification.</div>
              </div>
            </div>

            {/* 5. Declaration Confirmation */}
            <div className="mt-10 p-4 bg-olive-light/10 rounded-enterprise border border-olive/10">
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative w-5 h-5 flex items-center justify-center mt-0.5">
                  <input type="checkbox" className="peer absolute inset-0 opacity-0 cursor-pointer" />
                  <div className="w-5 h-5 border-2 border-gray-200 rounded-sm bg-white peer-checked:bg-olive peer-checked:border-olive transition-all"></div>
                  <CheckCircle2 size={14} className="absolute text-white opacity-0 peer-checked:opacity-100" />
                </div>
                <span className="text-[11px] text-text-secondary font-semibold leading-normal group-hover:text-text-primary transition-colors italic">
                  I hereby declare that the above information is true and correct to the best of my knowledge. I understand that false claims may attract penalties as per IT Act.
                </span>
              </label>
            </div>

            {/* 6. Action Buttons */}
            <div className="mt-10 flex items-center gap-4">
              <button 
                onClick={() => alert('IT Declaration submitted successfully!')}
                className="btn-primary flex-1 py-3.5 text-[10px] font-bold uppercase tracking-widest shadow-sm"
              >
                Submit Declaration
              </button>
              <button 
                onClick={() => alert('IT Declaration draft saved.')}
                className="btn-secondary flex-1 py-3.5 text-[10px] font-bold uppercase tracking-widest hover:bg-gray-50"
              >
                Save Draft
              </button>
              <button 
                onClick={onCancel}
                className="px-8 py-3.5 text-[10px] font-bold text-gray-400 uppercase tracking-widest hover:text-red-500 transition-colors"
              >
                Cancel
              </button>
            </div>
          </section>
        </div>

        <div className="space-y-8">
          {/* 3. Submitted Declarations List */}
          <section className="enterprise-card bg-white p-0 border border-border-light shadow-sm overflow-hidden flex flex-col min-h-64">
            <div className="px-6 py-5 border-b border-gray-50 bg-gray-50/30 flex items-center justify-between">
              <h3 className="text-[10px] font-bold text-text-primary uppercase tracking-[0.2em]">Recently Submitted</h3>
              <FileText size={14} className="text-olive" />
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-50">
                    <th className="px-6 py-4 text-[9px] font-bold text-gray-400 uppercase tracking-widest">FY</th>
                    <th className="px-6 py-4 text-[9px] font-bold text-gray-400 uppercase tracking-widest text-right">Amount</th>
                    <th className="px-6 py-4 text-[9px] font-bold text-gray-400 uppercase tracking-widest text-center">Status</th>
                    <th className="px-6 py-4 text-[9px] font-bold text-gray-400 uppercase tracking-widest text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {submittedDeclarations.map((decl, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors group">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-xs font-bold text-text-primary">{decl.year}</span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span className="text-xs font-bold text-olive">₹{decl.amount}</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={`inline-block px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-widest border border-orange-100 bg-orange-50 text-orange-600`}>
                          {decl.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="p-1.5 text-gray-300 hover:text-olive transition-colors">
                          <Eye size={14} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {submittedDeclarations.length === 0 && (
              <div className="flex-1 flex flex-col items-center justify-center p-10 text-center opacity-40">
                <FileText size={32} className="text-gray-200 mb-3" />
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">No declarations yet</p>
              </div>
            )}
          </section>

          <div className="p-6 bg-olive-light/10 border border-olive/10 rounded-enterprise">
             <h4 className="text-[10px] font-bold text-olive uppercase tracking-widest mb-3 flex items-center gap-2">
                <Clock size={12} />
                Compliance Deadlines
             </h4>
             <div className="space-y-4">
                <div className="flex items-start gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1"></div>
                   <div>
                      <p className="text-[11px] font-bold text-text-primary">Preliminary Declaration</p>
                      <p className="text-[9px] text-gray-400 uppercase font-medium">Due by Oct 31, 2025</p>
                   </div>
                </div>
                <div className="flex items-start gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-orange-300 mt-1"></div>
                   <div>
                      <p className="text-[11px] font-bold text-text-primary">Final Proof Submission</p>
                      <p className="text-[9px] text-gray-400 uppercase font-medium">Due by Jan 15, 2026</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITDeclarationModule;
