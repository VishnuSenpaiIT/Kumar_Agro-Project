/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Download, 
  Eye, 
  Plus, 
  Save, 
  Users, 
  Clock, 
  FileText, 
  Calendar,
  ClipboardCheck,
  BookUser,
  MessageSquare,
  UserPlus
} from 'lucide-react';

const SalarySlipModule: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Income tax slip');

  const tabs = [
    'Income tax slip', 
    'Increment letters', 
    'Leave', 
    'Permission', 
    'My add book', 
    'Daily notes', 
    'My team', 
    'My team members', 
    'My time record'
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Income tax slip':
        return (
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/50">
                <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest">Year</th>
                <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest">Tax Amount</th>
                <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest text-center">Download</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {['2025-2026', '2024-2025', '2023-2024'].map(year => (
                <tr key={year}>
                  <td className="px-6 py-4 text-sm font-bold text-text-primary">{year}</td>
                  <td className="px-6 py-4 text-sm text-text-secondary">₹ 45,200.00</td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-olive hover:text-olive/80 transition-colors">
                      <Download size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      case 'Increment letters':
        return (
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/50">
                <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest">Letter Title</th>
                <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest">Date</th>
                <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              <tr>
                <td className="px-6 py-4 text-sm font-bold text-text-primary">Annual Increment 2025</td>
                <td className="px-6 py-4 text-sm text-text-secondary">April 01, 2025</td>
                <td className="px-6 py-4 flex items-center justify-center gap-4">
                  <button className="text-olive hover:text-olive/80 transition-colors"><Eye size={18} /></button>
                  <button className="text-olive hover:text-olive/80 transition-colors"><Download size={18} /></button>
                </td>
              </tr>
            </tbody>
          </table>
        );
      case 'Leave':
        return (
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/50">
                <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest">Leave Type</th>
                <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest">Applied Dates</th>
                <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              <tr>
                <td className="px-6 py-4 text-sm font-bold text-text-primary">Privilege Leave</td>
                <td className="px-6 py-4 text-sm text-text-secondary">Mar 10 – Mar 12, 2026</td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-1 bg-green-50 text-green-700 text-[10px] font-bold uppercase rounded border border-green-100">Approved</span>
                </td>
              </tr>
            </tbody>
          </table>
        );
      case 'Permission':
        return (
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/50">
                <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest">Date</th>
                <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest">Reason</th>
                <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              <tr>
                <td className="px-6 py-4 text-sm font-bold text-text-primary">Mar 05, 2026</td>
                <td className="px-6 py-4 text-sm text-text-secondary">Personal - Early Departure</td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-1 bg-amber-50 text-amber-700 text-[10px] font-bold uppercase rounded border border-amber-100">Pending</span>
                </td>
              </tr>
            </tbody>
          </table>
        );
      case 'My add book':
        return (
          <div className="space-y-4">
            <div className="p-4 bg-gray-50/30 border border-gray-100 rounded-lg flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-text-primary">Emergency Contact - Father</p>
                <p className="text-xs text-text-secondary">+91 98765 43210</p>
              </div>
              <p className="text-xs italic text-gray-400">Primary Contact</p>
            </div>
          </div>
        );
      case 'Daily notes':
        return (
          <div className="space-y-8">
            <div className="space-y-3">
              <label className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Add New Note</label>
              <textarea rows={3} placeholder="Type your daily updates or notes..." className="w-full p-4 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-olive/50 transition-all resize-none"></textarea>
              <button className="flex items-center gap-2 px-6 py-2 bg-olive text-white rounded-button font-bold text-xs uppercase tracking-widest shadow-sm">
                <Save size={14} /> Save Note
              </button>
            </div>
            <div className="pt-6 border-t border-gray-100 space-y-4">
               <div className="p-4 border border-gray-100 rounded-lg">
                 <p className="text-[10px] font-bold text-olive mb-1">MARCH 15, 2026</p>
                 <p className="text-sm text-text-primary">Completed the final architecture review for the migration project.</p>
               </div>
            </div>
          </div>
        );
      case 'My team':
        return (
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/50">
                <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest">Team Name</th>
                <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest">Role</th>
                <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest text-center">Members Count</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              <tr>
                <td className="px-6 py-4 text-sm font-bold text-text-primary">Core Systems Engineering</td>
                <td className="px-6 py-4 text-sm text-text-secondary">System Architect</td>
                <td className="px-6 py-4 text-sm text-center font-bold text-olive">12</td>
              </tr>
            </tbody>
          </table>
        );
      case 'My team members':
        return (
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/50">
                <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest">Name</th>
                <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest">Role</th>
                <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest">Contact</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              <tr>
                <td className="px-6 py-4 text-sm font-bold text-text-primary">Rahul Sharma</td>
                <td className="px-6 py-4 text-sm text-text-secondary">Lead Developer</td>
                <td className="px-6 py-4 text-sm font-mono text-gray-500">rahul.s@enterprise.com</td>
              </tr>
            </tbody>
          </table>
        );
      case 'My time record':
        return (
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/50">
                <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest">Date</th>
                <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest">Login Time</th>
                <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest">Logout Time</th>
                <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest text-center">Total Hours</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              <tr>
                <td className="px-6 py-4 text-sm font-bold text-text-primary">Mar 23, 2026</td>
                <td className="px-6 py-4 text-sm text-text-secondary">09:15 AM</td>
                <td className="px-6 py-4 text-sm text-text-secondary">06:45 PM</td>
                <td className="px-6 py-4 text-sm text-center font-bold text-olive">9h 30m</td>
              </tr>
            </tbody>
          </table>
        );
      default:
        return null;
    }
  };

  return (
    <div id="salary-slip-module" className="w-full max-w-6xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-text-primary mb-1">Salary & Records</h1>
        <p className="text-sm text-text-secondary">View your financial documents, team updates, and time management reports.</p>
      </div>

      <div className="bg-white border border-border-light rounded-enterprise shadow-sm overflow-hidden min-h-[500px]">
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
        <div className="p-8">
           {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default SalarySlipModule;
