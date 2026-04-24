/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Receipt, 
  Plus, 
  History, 
  CreditCard, 
  CheckCircle2, 
  Clock, 
  XCircle,
  MoreVertical,
  Banknote
} from 'lucide-react';

interface SummaryCardProps {
  title: string;
  amount: string;
  subtext?: string;
  status: 'total' | 'approved' | 'pending' | 'rejected';
}

const SummaryCard: React.FC<SummaryCardProps> = ({ title, amount, subtext, status }) => {
  const getStatusColor = () => {
    switch (status) {
      case 'approved': return 'text-green-600';
      case 'pending': return 'text-orange-600';
      case 'rejected': return 'text-red-500';
      default: return 'text-olive';
    }
  };

  return (
    <div className="enterprise-card bg-white p-6 border border-border-light shadow-sm hover:border-olive transition-all">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[10px] font-bold text-text-secondary uppercase tracking-[0.2em]">{title}</h3>
        <div className={`p-2 rounded-full ${
          status === 'approved' ? 'bg-green-50 text-green-600' :
          status === 'pending' ? 'bg-orange-50 text-orange-600' :
          status === 'rejected' ? 'bg-red-50 text-red-500' :
          'bg-olive-light text-olive'
        }`}>
          <Banknote size={14} />
        </div>
      </div>
      <div>
        <p className={`text-2xl font-bold tracking-tight ${getStatusColor()}`}>{amount}</p>
        {subtext && <p className="text-[10px] text-gray-400 font-medium mt-1 uppercase tracking-tighter">{subtext}</p>}
      </div>
    </div>
  );
};

interface ReimbursementDashboardProps {
  onNavigate?: (view: string) => void;
}

const ReimbursementDashboard: React.FC<ReimbursementDashboardProps> = ({ onNavigate }) => {
  const summaries: SummaryCardProps[] = [
    { title: 'Total Claimed', amount: '$4,250.00', subtext: 'Fiscal Year 2026', status: 'total' },
    { title: 'Approved', amount: '$3,100.00', subtext: '24 Paid Claims', status: 'approved' },
    { title: 'Pending', amount: '$850.00', subtext: '3 Under Review', status: 'pending' },
    { title: 'Rejected', amount: '$300.00', subtext: '1 Disputed Claim', status: 'rejected' },
  ];

  const recentClaims = [
    { date: '2026-04-20', type: 'Travel Expenses', amount: '$450.00', status: 'Pending' },
    { date: '2026-04-12', type: 'Office Supplies', amount: '$120.00', status: 'Approved' },
    { date: '2026-04-05', type: 'Client Lunch', amount: '$85.00', status: 'Approved' },
    { date: '2026-03-28', type: 'Conference Fee', amount: '$300.00', status: 'Rejected' },
    { date: '2026-03-15', type: 'Internet Stipend', amount: '$50.00', status: 'Approved' },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Approved': return 'bg-green-50 text-green-600 border-green-100';
      case 'Pending': return 'bg-orange-50 text-orange-600 border-orange-100';
      case 'Rejected': return 'bg-red-50 text-red-500 border-red-100';
      default: return 'bg-gray-50 text-gray-500 border-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Approved': return <CheckCircle2 size={12} />;
      case 'Pending': return <Clock size={12} />;
      case 'Rejected': return <XCircle size={12} />;
      default: return null;
    }
  };

  return (
    <div id="reimbursement-dashboard" className="w-full max-w-6xl mx-auto py-4">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-olive-light rounded-button text-olive">
            <Receipt size={24} />
          </div>
          <h1 className="text-2xl font-bold text-text-primary uppercase tracking-widest">Reimbursement Dashboard</h1>
        </div>
        <p className="text-text-secondary text-sm">Manage your expense claims, monitor approval status, and view settlement history.</p>
      </div>

      {/* 1. Summary Cards */}
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1 h-5 bg-olive rounded-full"></div>
          <h2 className="text-xs font-bold text-text-primary uppercase tracking-[0.2em]">Summary Overview</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {summaries.map((summary, index) => (
            <SummaryCard key={index} {...summary} />
          ))}
        </div>
      </section>

      {/* 2. Quick Actions */}
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1 h-5 bg-olive rounded-full"></div>
          <h2 className="text-xs font-bold text-text-primary uppercase tracking-[0.2em]">Financial Actions</h2>
        </div>
        <div className="flex flex-wrap gap-4">
          <button 
            onClick={() => onNavigate?.('Submit Reimbursement')}
            className="btn-primary flex items-center gap-2 px-8 py-3.5 text-xs font-bold uppercase tracking-widest group"
          >
            <Plus size={18} className="group-hover:rotate-90 transition-transform" />
            Submit New Claim
          </button>
          <button 
            onClick={() => alert('Navigating to Claim History...')}
            className="btn-secondary flex items-center gap-2 px-8 py-3.5 text-xs font-bold uppercase tracking-widest"
          >
            <History size={18} />
            View Claim History
          </button>
        </div>
      </section>

      {/* 3. Recent Claims */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-1 h-5 bg-olive rounded-full"></div>
            <h2 className="text-xs font-bold text-text-primary uppercase tracking-[0.2em]">Recent Claims activity</h2>
          </div>
          <button className="text-[10px] font-bold text-olive uppercase tracking-[0.1em] hover:underline">View All</button>
        </div>

        <div className="enterprise-card bg-white p-0 border border-border-light shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/50 border-b border-gray-100">
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Submission Date</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Claim Category</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Claim Amount</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Current Status</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 text-[13px]">
                {recentClaims.map((claim, index) => (
                  <tr key={index} className="hover:bg-gray-50/50 transition-colors group">
                    <td className="px-6 py-4 font-semibold text-text-primary">{claim.date}</td>
                    <td className="px-6 py-4 font-medium text-gray-500">{claim.type}</td>
                    <td className="px-6 py-4 font-bold text-text-primary tracking-tight">{claim.amount}</td>
                    <td className="px-6 py-4">
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[10px] font-bold uppercase tracking-wider ${getStatusBadge(claim.status)}`}>
                        {getStatusIcon(claim.status)}
                        {claim.status}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button 
                        onClick={() => alert('Action menu opened for claim.')}
                        className="p-1.5 text-gray-300 hover:text-olive transition-colors"
                      >
                        <MoreVertical size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-gray-50/30 p-4 border-t border-gray-100 text-center">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest italic">
              * Note: Processing of approved claims typically takes 3-5 business days.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReimbursementDashboard;
