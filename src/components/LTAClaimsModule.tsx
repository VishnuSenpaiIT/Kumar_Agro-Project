/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Plane, 
  Wallet, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  Plus, 
  Trash2, 
  Upload, 
  Eye, 
  X,
  User,
  Users,
  MapPin,
  Calendar,
  AlertCircle
} from 'lucide-react';

interface Dependent {
  id: string;
  name: string;
  relationship: string;
  age: string;
}

interface LTAClaimsModuleProps {
  onCancel?: () => void;
}

const LTAClaimsModule: React.FC<LTAClaimsModuleProps> = ({ onCancel }) => {
  const [dependents, setDependents] = useState<Dependent[]>([
    { id: '1', name: '', relationship: '', age: '' }
  ]);

  const addDependent = () => {
    const newId = (dependents.length + 1).toString();
    setDependents([...dependents, { id: newId, name: '', relationship: '', age: '' }]);
  };

  const removeDependent = (id: string) => {
    if (dependents.length > 1) {
      setDependents(dependents.filter(d => d.id !== id));
    }
  };

  const summaryCards = [
    { title: 'Total Eligible LTA Amount', value: '₹ 80,000', icon: <Wallet size={18} />, color: 'olive' },
    { title: 'Claimed Amount', value: '₹ 35,000', icon: <CheckCircle2 size={18} />, color: 'green' },
    { title: 'Pending Claims', value: '₹ 15,000', icon: <Clock size={18} />, color: 'orange' },
    { title: 'Remaining Balance', value: '₹ 30,000', icon: <AlertCircle size={18} />, color: 'blue' },
  ];

  const claimsHistory = [
    { id: 'LTA-2025-001', period: 'Oct 10 - Oct 15, 2025', amount: '15,000', status: 'Pending', submittedOn: 'Oct 18, 2025' },
    { id: 'LTA-2024-042', period: 'Mar 05 - Mar 12, 2024', amount: '20,000', status: 'Approved', submittedOn: 'Mar 15, 2024' },
    { id: 'LTA-2023-015', period: 'Dec 15 - Dec 22, 2023', amount: '15,000', status: 'Approved', submittedOn: 'Dec 24, 2023' },
  ];

  return (
    <div id="lta-claims-module" className="w-full max-w-7xl mx-auto py-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-olive-light rounded-button flex items-center justify-center text-olive">
            <Plane size={20} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-text-primary uppercase tracking-widest">LTA Claims</h1>
            <p className="text-xs text-text-secondary mt-1">Leave Travel Allowance management and reimbursements.</p>
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

      {/* 1. LTA Summary Section */}
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
                  card.color === 'green' ? 'bg-green-50 text-green-600' : 
                  card.color === 'orange' ? 'bg-orange-50 text-orange-500' : 
                  'bg-blue-50 text-blue-500'}
              `}>
                {card.icon}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* 2. Submit LTA Claim Form */}
          <section className="enterprise-card bg-white p-8 border border-border-light shadow-sm">
            <div className="flex items-center gap-2 mb-8 border-b border-gray-100 pb-4">
              <div className="w-1 h-5 bg-olive rounded-full"></div>
              <h2 className="text-sm font-bold text-text-primary uppercase tracking-widest">Submit LTA Claim</h2>
            </div>

            {/* Employee Info (Read-only) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Employee Name</label>
                <div className="px-3 py-2.5 bg-gray-50 border border-gray-100 rounded-button text-xs font-bold text-text-primary">Johnathan Doe</div>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Employee ID</label>
                <div className="px-3 py-2.5 bg-gray-50 border border-gray-100 rounded-button text-xs font-bold text-text-primary">EMP-10294</div>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Department</label>
                <div className="px-3 py-2.5 bg-gray-50 border border-gray-100 rounded-button text-xs font-bold text-text-primary">Technology & Innovation</div>
              </div>
            </div>

            {/* Travel Details */}
            <div className="space-y-6 mb-10">
              <h3 className="text-xs font-bold text-text-secondary uppercase tracking-[0.15em] flex items-center gap-2">
                <MapPin size={14} className="text-olive" />
                Travel Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Travel From</label>
                  <input type="text" className="input-field w-full py-2.5 text-xs" placeholder="Departure City" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Travel To</label>
                  <input type="text" className="input-field w-full py-2.5 text-xs" placeholder="Destination City" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Travel Date From</label>
                  <input type="date" className="input-field w-full py-2.5 text-xs" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Travel Date To</label>
                  <input type="date" className="input-field w-full py-2.5 text-xs" />
                </div>
              </div>
            </div>

            {/* Family Details */}
            <div className="space-y-6 mb-10">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold text-text-secondary uppercase tracking-[0.15em] flex items-center gap-2">
                  <Users size={14} className="text-olive" />
                  Family Details
                </h3>
                <button 
                  onClick={addDependent}
                  className="flex items-center gap-1.5 text-[9px] font-bold text-olive uppercase tracking-widest hover:underline"
                >
                  <Plus size={12} />
                  Add Dependent
                </button>
              </div>
              
              <div className="mb-4">
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Number of Dependents</label>
                <input type="number" className="input-field w-32 py-2 text-xs" defaultValue={dependents.length} />
              </div>

              <div className="space-y-4">
                {dependents.map((dep, index) => (
                  <div key={dep.id} className="p-4 border border-gray-100 rounded-enterprise bg-gray-50/50 relative group grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">Name</label>
                      <input type="text" className="input-field w-full py-2 text-xs bg-white" placeholder="Dependent Name" />
                    </div>
                    <div>
                      <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">Relationship</label>
                      <input type="text" className="input-field w-full py-2 text-xs bg-white" placeholder="e.g., Spouse, Child" />
                    </div>
                    <div>
                      <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">Age</label>
                      <input type="number" className="input-field w-full py-2 text-xs bg-white" placeholder="Age" />
                    </div>
                    {dependents.length > 1 && (
                      <button 
                        onClick={() => removeDependent(dep.id)}
                        className="absolute -top-2 -right-2 w-6 h-6 bg-red-50 text-red-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm border border-red-100"
                      >
                        <Trash2 size={12} />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Claim Details */}
            <div className="space-y-6 mb-10 pt-6 border-t border-gray-100">
              <h3 className="text-xs font-bold text-text-secondary uppercase tracking-[0.15em] flex items-center gap-2">
                <Wallet size={14} className="text-olive" />
                Claim Details
              </h3>
              <div className="max-w-xs mb-4">
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Claim Amount (₹)</label>
                <input type="number" className="input-field w-full py-2.5 text-xs" placeholder="0.00" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Purpose of Travel</label>
                <textarea className="input-field w-full min-h-[80px] py-2 text-xs resize-none" placeholder="Provide details about the travel purpose..."></textarea>
              </div>
            </div>

            {/* 3. Proof Upload Section */}
            <div className="mb-10 pt-6 border-t border-gray-100">
              <label className="block text-[10px] font-bold text-text-secondary uppercase tracking-widest mb-4">Upload Travel Tickets / Bills</label>
              <div className="border-2 border-dashed border-gray-100 rounded-enterprise p-10 flex flex-col items-center justify-center bg-gray-50/20 group hover:border-olive transition-colors cursor-pointer">
                <div className="w-12 h-12 bg-white rounded-enterprise shadow-sm border border-gray-100 flex items-center justify-center text-gray-300 group-hover:text-olive transition-colors mb-4">
                  <Upload size={24} />
                </div>
                <p className="text-xs font-bold text-text-primary uppercase tracking-widest">Drag & Drop Upload Box</p>
                <p className="text-[10px] text-gray-400 mt-2 uppercase tracking-tight">PDF, JPG, PNG (Max 5MB)</p>
              </div>
            </div>

            {/* 4. Declaration */}
            <div className="mb-10 p-4 bg-olive-light/10 rounded-enterprise border border-olive/10">
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative w-5 h-5 flex items-center justify-center mt-0.5">
                  <input type="checkbox" className="peer absolute inset-0 opacity-0 cursor-pointer" />
                  <div className="w-5 h-5 border-2 border-gray-200 rounded-sm bg-white peer-checked:bg-olive peer-checked:border-olive transition-all"></div>
                  <CheckCircle2 size={14} className="absolute text-white opacity-0 peer-checked:opacity-100" />
                </div>
                <span className="text-[11px] text-text-secondary font-semibold leading-normal group-hover:text-text-primary transition-colors italic">
                  I confirm that the above claim is valid under company LTA policy and all information provided is accurate.
                </span>
              </label>
            </div>

            {/* 5. Action Buttons */}
            <div className="flex items-center gap-4">
              <button className="btn-primary flex-1 py-3.5 text-[10px] font-bold uppercase tracking-widest shadow-sm">
                Submit Claim
              </button>
              <button className="btn-secondary flex-1 py-3.5 text-[10px] font-bold uppercase tracking-widest hover:bg-gray-50">
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
          {/* 3. LTA Claims History Table */}
          <section className="enterprise-card bg-white p-0 border border-border-light shadow-sm overflow-hidden flex flex-col min-h-64">
            <div className="px-6 py-5 border-b border-gray-50 bg-gray-50/30 flex items-center justify-between">
              <h3 className="text-[10px] font-bold text-text-primary uppercase tracking-[0.2em]">Claim History</h3>
              <Plane size={14} className="text-olive" />
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-50">
                    <th className="px-6 py-4 text-[9px] font-bold text-gray-400 uppercase tracking-widest">Summary</th>
                    <th className="px-6 py-4 text-[9px] font-bold text-gray-400 uppercase tracking-widest text-right">Amount</th>
                    <th className="px-6 py-4 text-[9px] font-bold text-gray-400 uppercase tracking-widest text-center">Status</th>
                    <th className="px-6 py-4 text-[9px] font-bold text-gray-400 uppercase tracking-widest text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {claimsHistory.map((claim, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors group">
                      <td className="px-6 py-4">
                        <p className="text-[11px] font-bold text-text-primary">{claim.id}</p>
                        <p className="text-[9px] text-gray-400 uppercase mt-0.5">{claim.period}</p>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span className="text-[11px] font-bold text-olive">₹{claim.amount}</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={`inline-block px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-widest border 
                          ${claim.status === 'Approved' ? 'border-green-100 bg-green-50 text-green-600' : 'border-orange-100 bg-orange-50 text-orange-600'}
                        `}>
                          {claim.status}
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
          </section>

          <div className="p-6 bg-olive-light/10 border border-olive/10 rounded-enterprise">
             <h4 className="text-[10px] font-bold text-olive uppercase tracking-widest mb-3 flex items-center gap-2">
                <Calendar size={12} />
                LTA Block Year
             </h4>
             <div className="space-y-4">
                <div>
                  <p className="text-[11px] font-bold text-text-primary">Current Block: 2022–2025</p>
                  <p className="text-[9px] text-gray-400 uppercase font-medium mt-1">Status: Active</p>
                </div>
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                   <div className="h-full bg-olive rounded-full" style={{ width: '75%' }}></div>
                </div>
                <p className="text-[9px] text-gray-400 leading-normal">You are eligible for two travel claims in this four-year block period.</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LTAClaimsModule;
