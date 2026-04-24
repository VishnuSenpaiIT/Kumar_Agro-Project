/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Settings, 
  Calendar, 
  CalendarDays,
  Receipt, 
  Clock, 
  Briefcase, 
  LogOut, 
  FileText, 
  FileSignature, 
  Banknote,
  BarChart3,
  Search,
  BookOpen,
  ChevronDown,
  ChevronUp,
  CreditCard,
  Monitor,
  Plane,
  Home,
  LifeBuoy,
  FileBox,
  HeartHandshake,
  X,
  LayoutDashboard
} from 'lucide-react';

interface ESSItemProps {
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
  isSubItem?: boolean;
}

const ESSItem: React.FC<ESSItemProps> = ({ label, icon, onClick, isSubItem = false }) => (
  <div 
    onClick={onClick}
    className={`flex items-center gap-3 px-6 py-3 cursor-pointer transition-colors duration-200 select-none
      ${isSubItem ? 'pl-12 text-text-secondary hover:text-olive hover:bg-olive-light/50' : 'text-text-primary hover:bg-olive-light hover:text-olive'}
    `}
  >
    <div className={`${isSubItem ? 'text-gray-300' : 'text-gray-400'} shrink-0`}>
      {React.cloneElement(icon as React.ReactElement<any>, { size: isSubItem ? 15 : 18 })}
    </div>
    <span className={`${isSubItem ? 'text-xs font-medium' : 'text-sm font-bold'}`}>{label}</span>
  </div>
);

interface ESSPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate?: (label: string) => void;
}

const ESSPanel: React.FC<ESSPanelProps> = ({ isOpen, onClose, onNavigate }) => {
  const [isAdminExpanded, setIsAdminExpanded] = useState(false);

  const handleAdminNavigate = (label: string = 'Admin Service') => {
    if (onNavigate) {
      onNavigate(label);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div id="ess-overlay" className="fixed inset-0 z-[60] flex justify-end">
      {/* Background Backdrop */}
      <div 
        className="absolute inset-0 bg-gray-900/10 backdrop-blur-[2px]"
        onClick={onClose}
      />
      
      {/* Right Sidebar Panel */}
      <aside 
        id="ess-panel"
        className="relative w-[340px] h-full bg-white shadow-2xl border-l border-border-light flex flex-col pt-[60px]"
      >
        {/* Panel Header */}
        <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between bg-white">
          <h2 className="text-sm font-bold text-text-primary uppercase tracking-[0.2em]">ESS Services</h2>
          <button 
            onClick={onClose}
            className="p-1 px-2.5 bg-gray-50 hover:bg-olive-light text-gray-400 hover:text-olive rounded-button transition-colors text-xs font-bold"
          >
            CLOSE
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="py-2">
            
            {/* Admin Service (Expandable) */}
            <div>
              <div 
                className="flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-olive-light hover:text-olive text-text-primary transition-colors border-b border-gray-50/50 group"
              >
                <div 
                  className="flex items-center gap-3 flex-1"
                  onClick={() => handleAdminNavigate()}
                >
                  <Settings size={18} className="text-gray-400 group-hover:text-olive" />
                  <span className="text-sm font-bold">Admin service</span>
                </div>
                <div 
                  className="p-1"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsAdminExpanded(!isAdminExpanded);
                  }}
                >
                  {isAdminExpanded ? <ChevronUp size={16} className="text-olive" /> : <ChevronDown size={14} className="text-gray-300" />}
                </div>
              </div>

              {isAdminExpanded && (
                <div className="bg-gray-50/30 py-1 border-b border-gray-50/50">
                  <ESSItem isSubItem label="ID Card Request" icon={<CreditCard />} onClick={() => handleAdminNavigate('ID Card Request')} />
                  <ESSItem isSubItem label="Asset Request" icon={<Monitor />} onClick={() => handleAdminNavigate('Asset Request')} />
                  <ESSItem isSubItem label="Travel Request" icon={<Plane />} onClick={() => handleAdminNavigate('Travel Request')} />
                  <ESSItem isSubItem label="Accommodation Request" icon={<Home />} onClick={() => handleAdminNavigate('Accommodation Request')} />
                  <ESSItem isSubItem label="Helpdesk Tickets" icon={<LifeBuoy />} onClick={() => handleAdminNavigate('Helpdesk Tickets')} />
                  <ESSItem isSubItem label="Document Request" icon={<FileText />} onClick={() => handleAdminNavigate('Document Request')} />
                  <ESSItem isSubItem label="HR Support Requests" icon={<HeartHandshake />} onClick={() => handleAdminNavigate('HR Support Requests')} />
                </div>
              )}
            </div>

            {/* Other Items */}
            <ESSItem label="Dashboard" icon={<LayoutDashboard />} onClick={() => handleAdminNavigate('Dashboard')} />
            <ESSItem label="Directory" icon={<Search />} onClick={() => handleAdminNavigate('Directory')} />
            <ESSItem label="Knowbase" icon={<BookOpen />} onClick={() => handleAdminNavigate('Knowbase')} />
            <ESSItem label="Leave Management" icon={<CalendarDays />} onClick={() => handleAdminNavigate('Leave Management')} />
            <ESSItem label="Reimbursement" icon={<Receipt />} onClick={() => handleAdminNavigate('Reimbursement')} />
            <ESSItem label="Total working days" icon={<Clock />} onClick={() => handleAdminNavigate('Total working days')} />
            <ESSItem label="Recruitment" icon={<Briefcase />} onClick={() => handleAdminNavigate('Recruitment')} />
            <ESSItem label="Performance (PMS)" icon={<BarChart3 />} onClick={() => handleAdminNavigate('Performance (PMS)')} />
            <ESSItem label="Separation" icon={<LogOut />} onClick={() => handleAdminNavigate('Separation')} />
            <ESSItem label="It declaration" icon={<FileText />} onClick={() => handleAdminNavigate('IT Declaration')} />
            <ESSItem label="LTA Claims" icon={<FileSignature />} onClick={() => handleAdminNavigate('LTA Claims')} />
            <ESSItem label="Loan requisition" icon={<Banknote />} onClick={() => handleAdminNavigate('Loan Requisition')} />
          </div>
        </div>

        {/* Panel Footer */}
        <div className="p-6 border-t border-gray-100 bg-gray-50/50">
          <div className="bg-white p-3 rounded-lg border border-gray-200">
            <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Quick Status</p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-[11px] font-semibold text-gray-600">All Services Operational</span>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default ESSPanel;
