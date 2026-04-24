/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Settings, 
  Calendar, 
  Wallet, 
  Clock, 
  Briefcase, 
  LogOut, 
  FileText, 
  Plane, 
  Landmark,
  LayoutGrid,
  X,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  CreditCard,
  Monitor,
  Key,
  ShieldCheck
} from 'lucide-react';

interface ESSItemProps {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
  hasArrow?: boolean;
}

const ESSItem: React.FC<ESSItemProps> = ({ label, icon, onClick, hasArrow = true }) => (
  <div 
    onClick={onClick}
    className="flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-gray-50 transition-all group select-none"
  >
    <div className="flex items-center gap-4">
      <div className="text-gray-400 group-hover:text-olive transition-colors">
        {React.cloneElement(icon as React.ReactElement<any>, { size: 18 })}
      </div>
      <span className="text-sm font-semibold text-text-primary group-hover:text-olive transition-colors">{label}</span>
    </div>
    {hasArrow && <ChevronRight size={14} className="text-gray-300 group-hover:text-olive transition-colors" />}
  </div>
);

interface SubItemProps {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const SubItem: React.FC<SubItemProps> = ({ label, icon, onClick }) => (
  <div 
    onClick={onClick}
    className="flex items-center gap-3 pl-14 pr-6 py-2.5 cursor-pointer hover:text-olive transition-colors select-none"
  >
    <div className="text-gray-300">
      {React.cloneElement(icon as React.ReactElement<any>, { size: 14 })}
    </div>
    <span className="text-[12px] font-medium text-text-secondary">{label}</span>
  </div>
);

interface ESSPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (label: string) => void;
}

const ESSPanel: React.FC<ESSPanelProps> = ({ isOpen, onClose, onNavigate }) => {
  const [isAdminExpanded, setIsAdminExpanded] = useState(false);

  const handleNavigate = (label: string) => {
    onNavigate(label);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div id="ess-panel-overlay" className="fixed inset-0 z-[100] flex justify-end">
      {/* 1. OVERLAY - clicking outside closes sidebar */}
      <div 
        className="absolute inset-0 bg-gray-900/20 backdrop-blur-[1px] transition-all"
        onClick={onClose}
      />
      
      {/* 2. SLIDE-IN PANEL */}
      <aside 
        id="ess-panel-sidebar"
        className="relative w-[340px] h-full bg-white shadow-2xl border-l border-gray-100 flex flex-col animate-in slide-in-from-right duration-300"
      >
        {/* HEADER SECTION */}
        <div className="px-6 py-6 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <LayoutGrid size={20} className="text-olive" />
            <h2 className="text-sm font-bold text-text-primary uppercase tracking-widest">Employee Service System</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-50 text-gray-400 hover:text-olive rounded-full transition-all"
          >
            <X size={20} />
          </button>
        </div>

        {/* MODULE LIST */}
        <div className="flex-1 overflow-y-auto">
          <div className="py-2">
            
            {/* 1. ADMIN SERVICE (EXPANDABLE) */}
            <div className="border-b border-gray-50/50">
              <div 
                className="flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-gray-50 group"
                onClick={() => setIsAdminExpanded(!isAdminExpanded)}
              >
                <div className="flex items-center gap-4">
                  <Settings size={18} className="text-gray-400 group-hover:text-olive" />
                  <span className="text-sm font-bold text-text-primary group-hover:text-olive">Admin service</span>
                </div>
                {isAdminExpanded ? <ChevronUp size={16} className="text-olive" /> : <ChevronDown size={16} className="text-gray-300 group-hover:text-olive" />}
              </div>

              {isAdminExpanded && (
                <div className="bg-gray-50/30 py-2">
                  <SubItem label="ID Card Request" icon={<CreditCard />} onClick={() => handleNavigate('ID Card Request')} />
                  <SubItem label="Asset Request" icon={<Monitor />} onClick={() => handleNavigate('Asset Request')} />
                  <SubItem label="Travel Request" icon={<Plane />} onClick={() => handleNavigate('Travel Request')} />
                  <SubItem label="Gate Pass Request" icon={<Key />} onClick={() => handleNavigate('Gate Pass Request')} />
                  <SubItem label="Document Request" icon={<FileText />} onClick={() => handleNavigate('Document Request')} />
                </div>
              )}
            </div>

            {/* REMAINING MODULES */}
            <ESSItem label="Leave management system" icon={<Calendar />} onClick={() => handleNavigate('Leave Management')} />
            <ESSItem label="Reimbursement" icon={<Wallet />} onClick={() => handleNavigate('Reimbursement')} />
            <ESSItem label="Total working days" icon={<Clock />} onClick={() => handleNavigate('Total working days')} />
            <ESSItem label="Recruitment" icon={<Briefcase />} onClick={() => handleNavigate('Recruitment')} />
            <ESSItem label="Seperation" icon={<LogOut />} onClick={() => handleNavigate('Separation')} />
            <ESSItem label="It declaration" icon={<FileText />} onClick={() => handleNavigate('IT Declaration')} />
            <ESSItem label="LTA Claims" icon={<Plane />} onClick={() => handleNavigate('LTA Claims')} />
            <ESSItem label="Loan requisition" icon={<Landmark />} onClick={() => handleNavigate('Loan Requisition')} />

          </div>
        </div>

        {/* Optional Footer */}
        <div className="p-6 border-t border-gray-100 flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-olive animate-pulse"></div>
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Enterprise Portal v2.4</span>
        </div>
      </aside>
    </div>
  );
};

export default ESSPanel;
