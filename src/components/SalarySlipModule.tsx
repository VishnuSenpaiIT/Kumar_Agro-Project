/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Download, 
  Eye, 
  Save, 
  FileText, 
  Calendar,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ChevronRight,
  Receipt,
  TrendingDown,
  ArrowUpRight,
  Coins
} from 'lucide-react';

interface SalarySlipModuleProps {
  onNavigate?: (label: string) => void;
}

const SalarySlipModule: React.FC<SalarySlipModuleProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('Monthly Salary Slip');
  const [isDownloading, setIsDownloading] = useState<string | null>(null);

  const tabs = [
    'Monthly Salary Slip',
    'Income tax slip', 
    'Increment letters', 
    'Daily notes', 
    'My time record'
  ];

  const handleDownload = (id: string) => {
    setIsDownloading(id);
    
    // Simulate PDF generation and download
    setTimeout(() => {
      setIsDownloading(null);
      alert(`Salary slip for ${id} has been downloaded successfully! Redirecting to Bank Details...`);
      
      // Navigate to Bank Details as requested
      if (onNavigate) {
        onNavigate('Bank Details');
      }
    }, 2000);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Monthly Salary Slip':
        return (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="p-4 bg-olive-light rounded-xl border border-olive/10 flex items-center gap-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-olive shadow-sm">
                  <Coins size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-olive uppercase">Net Salary (Feb)</p>
                  <p className="text-lg font-black text-text-primary">₹ 1,24,500</p>
                </div>
              </div>
              <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 flex items-center gap-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-blue-500 shadow-sm">
                  <TrendingDown size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-blue-400 uppercase">Total Deductions</p>
                  <p className="text-lg font-black text-text-primary">₹ 12,400</p>
                </div>
              </div>
              <div className="p-4 bg-amber-50 rounded-xl border border-amber-100 flex items-center gap-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-amber-500 shadow-sm">
                  <Calendar size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-amber-500 uppercase">Next Pay Date</p>
                  <p className="text-lg font-black text-text-primary">31 Mar, 2026</p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden border border-gray-100 rounded-2xl">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-50/50 border-b border-gray-100">
                    <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest">Month & Year</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest">Gross Pay</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest">Net Pay</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest text-center">Status</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {[
                    { month: 'February 2026', gross: '1,36,900', net: '1,24,500', status: 'Paid' },
                    { month: 'January 2026', gross: '1,36,900', net: '1,24,500', status: 'Paid' },
                    { month: 'December 2025', gross: '1,36,900', net: '1,24,500', status: 'Paid' },
                    { month: 'November 2025', gross: '1,30,000', net: '1,18,000', status: 'Paid' },
                  ].map((item, i) => (
                    <tr key={i} className="group hover:bg-gray-50/30 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 group-hover:bg-olive group-hover:text-white transition-all">
                            <Receipt size={14} />
                          </div>
                          <span className="text-sm font-bold text-text-primary">{item.month}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-text-secondary font-medium">₹ {item.gross}</td>
                      <td className="px-6 py-4 text-sm text-olive font-black">₹ {item.net}</td>
                      <td className="px-6 py-4 text-center">
                        <span className="px-2.5 py-1 bg-green-50 text-green-700 text-[10px] font-bold uppercase rounded border border-green-100">
                          {item.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-3">
                           <button className="p-2 text-gray-400 hover:text-olive transition-colors" title="View Details">
                             <Eye size={18} />
                           </button>
                           <button 
                            disabled={isDownloading !== null}
                            onClick={() => handleDownload(item.month)}
                            className={`p-2 rounded-lg transition-all ${
                              isDownloading === item.month 
                                ? 'bg-olive text-white' 
                                : 'text-gray-400 hover:text-olive hover:bg-olive-light'
                            }`}
                           >
                             {isDownloading === item.month ? (
                               <Loader2 size={18} className="animate-spin" />
                             ) : (
                               <Download size={18} />
                             )}
                           </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'Income tax slip':
        return (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl flex items-start gap-3 mb-6">
              <AlertCircle size={18} className="text-blue-500 shrink-0 mt-0.5" />
              <p className="text-xs text-blue-700 leading-relaxed font-medium">
                Income tax slips for the financial year 2025-26 are now available. Please ensure your PAN is updated in the "Other Details" section to avoid higher tax deductions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {['2025-2026', '2024-2025'].map(year => (
                <div key={year} className="p-6 border border-gray-100 rounded-2xl bg-white hover:shadow-lg transition-all group">
                   <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                        <FileText size={24} />
                      </div>
                      <span className="text-[10px] font-bold text-blue-500 bg-blue-50 px-2 py-1 rounded">Tax Form 16</span>
                   </div>
                   <h3 className="text-base font-black text-text-primary mb-1">Financial Year {year}</h3>
                   <p className="text-xs text-text-secondary mb-6">Total Tax Paid: ₹ 45,200.00</p>
                   <button 
                    onClick={() => handleDownload(`Tax Form ${year}`)}
                    className="w-full flex items-center justify-center gap-2 py-3 bg-gray-900 text-white rounded-button font-bold text-xs uppercase tracking-widest hover:bg-black transition-all"
                   >
                     {isDownloading === `Tax Form ${year}` ? <Loader2 size={14} className="animate-spin" /> : <Download size={14} />}
                     Download Tax Slip
                   </button>
                </div>
              ))}
            </div>
          </div>
        );
      case 'Increment letters':
        return (
          <div className="p-6 border border-gray-100 rounded-2xl bg-white animate-in fade-in duration-500">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-olive-light rounded-xl flex items-center justify-center text-olive">
                  <ArrowUpRight size={24} />
                </div>
                <div>
                  <h3 className="text-base font-black text-text-primary">Annual Performance Increment 2025</h3>
                  <p className="text-xs text-text-secondary">Released on April 01, 2025</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-4 py-2 text-xs font-bold text-olive uppercase hover:underline">Preview</button>
                <button 
                  onClick={() => handleDownload('Increment Letter 2025')}
                  className="px-6 py-2 bg-olive text-white rounded-button font-bold text-xs uppercase shadow-md"
                >
                   {isDownloading === 'Increment Letter 2025' ? <Loader2 size={14} className="animate-spin" /> : 'Download'}
                </button>
              </div>
            </div>
          </div>
        );
      case 'Daily notes':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="space-y-4">
              <label className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Add New Daily Update</label>
              <div className="relative">
                <textarea rows={4} placeholder="What did you achieve today?..." className="w-full p-4 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:border-olive/50 transition-all resize-none bg-gray-50/30"></textarea>
                <button className="absolute bottom-4 right-4 flex items-center gap-2 px-6 py-2 bg-olive text-white rounded-button font-bold text-xs uppercase tracking-widest shadow-lg shadow-olive/20">
                  <Save size={14} /> Commit Update
                </button>
              </div>
            </div>
            <div className="space-y-4">
               <div className="p-5 border border-gray-100 rounded-2xl bg-white flex gap-4">
                 <div className="w-1 h-12 bg-olive rounded-full"></div>
                 <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold text-olive uppercase">March 15, 2026</span>
                      <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                      <span className="text-[10px] text-gray-400">05:30 PM</span>
                    </div>
                    <p className="text-sm text-text-primary leading-relaxed">Finalized the React 19 migration strategy and updated the internal UI documentation. All core modules are now optimized.</p>
                 </div>
               </div>
            </div>
          </div>
        );
      case 'My time record':
        return (
          <div className="space-y-6 animate-in fade-in duration-500">
             <div className="flex items-center justify-between mb-4">
               <h3 className="text-sm font-bold text-text-primary uppercase tracking-widest">Attendance Log - March 2026</h3>
               <button className="text-[10px] font-bold text-olive uppercase flex items-center gap-1 hover:underline">
                 Detailed Report <ChevronRight size={12} />
               </button>
             </div>
             <div className="overflow-hidden border border-gray-100 rounded-2xl">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-50/50 border-b border-gray-100">
                    <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest">Date</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest">Login</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest">Logout</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest text-center">Duration</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {[
                    { date: 'Mar 24, 2026', in: '09:10 AM', out: '06:45 PM', hours: '9h 35m', status: 'Present' },
                    { date: 'Mar 23, 2026', in: '09:15 AM', out: '07:05 PM', hours: '9h 50m', status: 'Present' },
                    { date: 'Mar 22, 2026', in: '-', out: '-', hours: '0h 0m', status: 'Weekly Off' },
                    { date: 'Mar 21, 2026', in: '09:00 AM', out: '06:30 PM', hours: '9h 30m', status: 'Present' },
                  ].map((rec, i) => (
                    <tr key={i} className="hover:bg-gray-50/30 transition-colors">
                      <td className="px-6 py-4 text-sm font-bold text-text-primary">{rec.date}</td>
                      <td className="px-6 py-4 text-sm text-text-secondary font-mono">{rec.in}</td>
                      <td className="px-6 py-4 text-sm text-text-secondary font-mono">{rec.out}</td>
                      <td className="px-6 py-4 text-sm text-center font-black text-olive">{rec.hours}</td>
                      <td className="px-6 py-4 text-right">
                        <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase ${rec.status === 'Present' ? 'bg-green-50 text-green-600' : 'bg-gray-100 text-gray-500'}`}>
                          {rec.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div id="salary-slip-module" className="w-full max-w-6xl animate-in fade-in duration-700">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-text-primary mb-1">Financial & Employment Records</h1>
        <p className="text-sm text-text-secondary">Access your payroll documents, performance letters, and professional logs.</p>
      </div>

      <div className="bg-white border border-border-light rounded-enterprise shadow-sm overflow-hidden min-h-[600px] flex flex-col">
        {/* TABS NAVIGATION */}
        <div className="flex flex-wrap border-b border-gray-100 bg-gray-50/30">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-4 text-[11px] font-bold uppercase tracking-widest transition-all
                ${activeTab === tab 
                  ? 'bg-white text-olive border-b-2 border-olive shadow-[inset_0_-2px_0_0_#6B8E23]' 
                  : 'text-text-secondary hover:text-olive hover:bg-white/50'
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* TAB CONTENT */}
        <div className="p-8 flex-1">
           {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default SalarySlipModule;
