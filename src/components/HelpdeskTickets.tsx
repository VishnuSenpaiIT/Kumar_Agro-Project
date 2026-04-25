/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  LifeBuoy, 
  Plus, 
  ArrowLeft, 
  Search, 
  Filter, 
  ChevronRight, 
  Upload,
  MoreVertical,
  Calendar,
  AlertCircle,
  CheckCircle2,
  Clock,
  Circle
} from 'lucide-react';

type ViewType = 'LIST' | 'FORM';

interface Ticket {
  id: string;
  subject: string;
  category: string;
  status: 'Open' | 'In Progress' | 'Resolved' | 'Closed';
  priority: 'Low' | 'Medium' | 'High';
  date: string;
}

const HelpdeskTickets: React.FC = () => {
  const [view, setView] = useState<ViewType>('LIST');
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const tickets: Ticket[] = [
    { id: 'TKT-7821', subject: 'Cloud VPN connection issues', category: 'IT Issue', status: 'In Progress', priority: 'High', date: '2026-04-20' },
    { id: 'TKT-7815', subject: 'Request for Salary Slip - March', category: 'Payroll', status: 'Resolved', priority: 'Medium', date: '2026-04-18' },
    { id: 'TKT-7809', subject: 'Onboarding access for new intern', category: 'IT Issue', status: 'Closed', priority: 'Low', date: '2026-04-15' },
    { id: 'TKT-7792', subject: 'Updating Home Address in Portal', category: 'HR Issue', status: 'Open', priority: 'Medium', date: '2026-04-12' },
    { id: 'TKT-7788', subject: 'Project Management Tool License', category: 'General', status: 'Open', priority: 'High', date: '2026-04-10' },
    { id: 'TKT-7780', subject: 'Laptop Screen Flickering', category: 'IT Issue', status: 'In Progress', priority: 'Medium', date: '2026-04-05' },
    { id: 'TKT-7775', subject: 'EPF Withdrawal Process Query', category: 'Payroll', status: 'Resolved', priority: 'Low', date: '2026-04-01' },
  ];

  const filteredTickets = tickets.filter(t => {
    const matchesSearch = t.subject.toLowerCase().includes(searchQuery.toLowerCase()) || t.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || t.category === categoryFilter;
    const matchesStatus = statusFilter === 'All' || t.status === statusFilter;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const totalPages = Math.ceil(filteredTickets.length / itemsPerPage);
  const paginatedTickets = filteredTickets.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Open': return 'bg-blue-50 text-blue-600 border-blue-100';
      case 'In Progress': return 'bg-orange-50 text-orange-600 border-orange-100';
      case 'Resolved': return 'bg-green-50 text-green-600 border-green-100';
      case 'Closed': return 'bg-gray-50 text-gray-400 border-gray-100';
      default: return 'bg-gray-50 text-gray-600 border-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Open': return <Circle size={10} />;
      case 'In Progress': return <Clock size={10} />;
      case 'Resolved': return <CheckCircle2 size={10} />;
      case 'Closed': return <Circle size={10} fill="currentColor" />;
      default: return null;
    }
  };

  return (
    <div id="helpdesk-module" className="w-full max-w-6xl mx-auto py-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-olive-light rounded-button flex items-center justify-center text-olive">
            <LifeBuoy size={20} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-text-primary uppercase tracking-widest">Helpdesk Tickets</h1>
            <p className="text-xs text-text-secondary">Track support queries and technical issues across departments.</p>
          </div>
        </div>
        
        {view === 'LIST' ? (
          <button 
            onClick={() => setView('FORM')}
            className="btn-primary flex items-center gap-2 px-6 py-2.5 text-sm"
          >
            <Plus size={16} />
            Create Ticket
          </button>
        ) : (
          <button 
            onClick={() => setView('LIST')}
            className="btn-secondary flex items-center gap-2 px-6 py-2.5 text-sm"
          >
            <ArrowLeft size={16} />
            Back to List
          </button>
        )}
      </div>

      {view === 'LIST' ? (
        <div className="space-y-6">
          {/* Filters Bar */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between p-4 bg-white border border-border-light rounded-enterprise shadow-sm">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input 
                type="text" 
                placeholder="Search ticket ID or subject..." 
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                className="input-field w-full pl-10 h-10"
              />
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="relative flex-1 md:flex-none">
                <select 
                  value={categoryFilter}
                  onChange={(e) => { setCategoryFilter(e.target.value); setCurrentPage(1); }}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-100 rounded-button text-xs font-bold text-gray-500 appearance-none pr-8 h-10"
                >
                  <option>All</option>
                  <option>IT Issue</option>
                  <option>HR Issue</option>
                  <option>Payroll</option>
                  <option>General</option>
                </select>
                <Filter size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
              <select 
                value={statusFilter}
                onChange={(e) => { setStatusFilter(e.target.value); setCurrentPage(1); }}
                className="flex-1 md:flex-none px-4 py-2 bg-gray-50 border border-gray-100 rounded-button text-xs font-bold text-gray-500 appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwb2x5bGluZSBwb2ludHM9IjYgOSAxMiAxNSAxOCA5Ij48L3BvbHlsaW5lPjwvc3ZnPg==')] bg-[length:14px] bg-[right_10px_center] bg-no-repeat pr-8 h-10 transition-colors hover:bg-gray-100"
              >
                <option value="All">All Status</option>
                <option>Open</option>
                <option>In Progress</option>
                <option>Resolved</option>
                <option>Closed</option>
              </select>
            </div>
          </div>

          {/* Ticket Table */}
          <div className="enterprise-card bg-white p-0 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50/50">
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Ticket ID</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Subject</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Category</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Status</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Priority</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Date</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {paginatedTickets.map((ticket) => (
                    <tr 
                      key={ticket.id} 
                      className="hover:bg-olive-light/10 transition-colors group cursor-pointer"
                    >
                      <td className="px-6 py-4">
                        <span className="text-xs font-bold text-olive">{ticket.id}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-semibold text-text-primary line-clamp-1">{ticket.subject}</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-[11px] font-medium text-gray-500">{ticket.category}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10px] font-bold uppercase tracking-wider ${getStatusStyle(ticket.status)}`}>
                          {getStatusIcon(ticket.status)}
                          {ticket.status}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex justify-center">
                          <span className={`text-[10px] font-bold uppercase tracking-widest ${
                            ticket.priority === 'High' ? 'text-red-500' : 
                            ticket.priority === 'Medium' ? 'text-orange-500' : 'text-gray-400'
                          }`}>
                            {ticket.priority}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-[11px] text-gray-400 font-medium">
                          <Calendar size={12} />
                          {ticket.date}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="p-2 text-gray-100 group-hover:text-olive transition-colors hover:bg-olive-light rounded-full">
                          <ChevronRight size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Table Footer / Pagination */}
            <div className="px-6 py-4 bg-gray-50/50 border-t border-gray-100 flex items-center justify-between">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                Showing {paginatedTickets.length} of {filteredTickets.length} Tickets
              </p>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-1 bg-white border border-gray-200 rounded text-[10px] font-bold text-gray-400 hover:bg-olive hover:border-olive hover:text-white transition-all disabled:opacity-50"
                >
                  PREV
                </button>
                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                    <button 
                      key={p}
                      onClick={() => setCurrentPage(p)}
                      className={`px-3 py-1 rounded text-[10px] font-bold transition-all ${currentPage === p ? 'bg-olive border border-olive text-white shadow-sm' : 'bg-white border border-gray-200 text-gray-400'}`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
                <button 
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages || totalPages === 0}
                  className="px-3 py-1 bg-white border border-gray-200 rounded text-[10px] font-bold text-gray-400 hover:bg-olive hover:border-olive hover:text-white transition-all disabled:opacity-50"
                >
                  NEXT
                </button>
              </div>
            </div>
          </div>
        </div>

      ) : (
        <div className="w-full max-w-[700px] mx-auto">
          <div className="enterprise-card bg-white shadow-sm">
            <div className="border-b border-gray-50 pb-4 mb-8">
              <h2 className="text-xl font-bold text-text-primary uppercase tracking-widest">Create Ticket</h2>
              <p className="text-xs text-text-secondary mt-1">Provide detailed information to help our support team resolve your issue faster.</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Subject</label>
                <input 
                  type="text" 
                  className="input-field w-full" 
                  placeholder="e.g. Printer not working, Payroll discrepancy..."
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Category</label>
                  <select className="input-field w-full appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwb2x5bGluZSBwb2ludHM9IjYgOSAxMiAxNSAxOCA5Ij48L3BvbHlsaW5lPjwvc3ZnPg==')] bg-[length:16px] bg-[right_12px_center] bg-no-repeat">
                    <option>IT Issue</option>
                    <option>HR Issue</option>
                    <option>Payroll</option>
                    <option>General</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Priority</label>
                  <select className="input-field w-full appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwb2x5bGluZSBwb2ludHM9IjYgOSAxMiAxNSAxOCA5Ij48L3BvbHlsaW5lPjwvc3ZnPg==')] bg-[length:16px] bg-[right_12px_center] bg-no-repeat">
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-text-secondary uppercase tracking-widest mb-1.5">Description</label>
                <textarea 
                  className="input-field w-full min-h-[140px] resize-none" 
                  placeholder="Describe your issue in detail. Include any error codes or steps to reproduce if applicable."
                ></textarea>
              </div>

              {/* Attachment */}
              <div className="space-y-2">
                <label className="block text-[10px] font-bold text-text-secondary uppercase tracking-widest">Attachment</label>
                <div 
                  onClick={() => alert('File upload dialog opened')}
                  className="border-2 border-dashed border-gray-100 rounded-enterprise p-8 flex flex-col items-center justify-center text-center hover:border-olive/30 hover:bg-olive-light/20 transition-all cursor-pointer group"
                >
                  <Upload size={24} className="text-gray-300 group-hover:text-olive transition-colors mb-2" />
                  <p className="text-xs font-bold text-gray-400 group-hover:text-text-primary transition-colors">Drag & Drop file or click to upload</p>
                  <p className="text-[10px] text-gray-300 mt-1 uppercase">Max File Size: 10MB</p>
                </div>
              </div>

              {/* Declaration */}
              <div className="pt-2">
                <label className="flex items-center gap-3 cursor-pointer select-none group">
                  <div className="relative w-5 h-5 flex items-center justify-center">
                    <input type="checkbox" className="peer absolute inset-0 opacity-0 cursor-pointer" />
                    <div className="w-5 h-5 border-2 border-gray-200 rounded-sm bg-white peer-checked:bg-olive peer-checked:border-olive transition-all"></div>
                    <svg className="absolute w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="4"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="text-[13px] text-text-secondary font-medium group-hover:text-text-primary transition-colors">I confirm that the information provided is accurate.</span>
                </label>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                <button 
                  onClick={() => alert('Helpdesk Ticket submitted successfully!')}
                  className="btn-primary flex-1 py-3 text-sm font-bold uppercase tracking-widest shadow-sm"
                >
                  Submit Ticket
                </button>
                <button 
                  onClick={() => setView('LIST')}
                  className="btn-secondary flex-1 py-3 text-sm font-bold uppercase tracking-widest"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default HelpdeskTickets;
