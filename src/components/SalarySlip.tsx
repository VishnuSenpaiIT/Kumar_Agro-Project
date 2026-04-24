/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  FileText, 
  FileBadge, 
  Calendar, 
  ClipboardCheck, 
  Contact, 
  FileEdit, 
  Users, 
  UserPlus, 
  Clock,
  ArrowRight
} from 'lucide-react';

interface SalarySectionProps {
  label: string;
  icon: React.ReactNode;
  id: string;
}

const SalarySectionCard: React.FC<SalarySectionProps> = ({ label, icon, id }) => {
  return (
    <div 
      id={id}
      className="enterprise-card flex items-center justify-between group hover:border-olive hover:shadow-sm cursor-pointer"
    >
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-olive-light rounded-button flex items-center justify-center text-olive group-hover:bg-olive group-hover:text-white transition-colors duration-200">
          {isActiveIcon(icon) ? React.cloneElement(icon as React.ReactElement<any>, { size: 20 }) : icon}
        </div>
        <div>
          <h3 className="text-sm font-bold text-text-primary">{label}</h3>
          <p className="text-[11px] text-text-secondary leading-tight">Manage your official {label.toLowerCase()} documents.</p>
        </div>
      </div>
      <div className="text-gray-300 group-hover:text-olive transition-colors">
        <ArrowRight size={18} />
      </div>
    </div>
  );
};

// Helper to check if icon is a valid react element for cloning
const isActiveIcon = (icon: any): icon is React.ReactElement => React.isValidElement(icon);

const SalarySlip: React.FC = () => {
  const sections = [
    { label: 'Income tax slip', icon: <FileText />, id: 'sec-income-tax' },
    { label: 'Increment letters', icon: <FileBadge />, id: 'sec-increment-letters' },
    { label: 'Leave', icon: <Calendar />, id: 'sec-leave' },
    { label: 'Permission', icon: <ClipboardCheck />, id: 'sec-permission' },
    { label: 'My add book', icon: <Contact />, id: 'sec-add-book' },
    { label: 'Daily notes', icon: <FileEdit />, id: 'sec-daily-notes' },
    { label: 'My team', icon: <Users />, id: 'sec-my-team' },
    { label: 'My team members', icon: <UserPlus />, id: 'sec-team-members' },
    { label: 'My time record', icon: <Clock />, id: 'sec-time-record' },
  ];

  return (
    <div id="salary-slip-module" className="w-full max-w-5xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Salary & Employee Records</h1>
        <p className="text-gray-500">View your financial documents, team updates, and time management reports.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {sections.map((section) => (
          <SalarySectionCard 
            key={section.id} 
            label={section.label} 
            icon={section.icon} 
            id={section.id} 
          />
        ))}
      </div>

      {/* Decorative footer for the module */}
      <div className="mt-12 p-6 bg-olive-light rounded-2xl border border-olive/10 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-olive shadow-sm">
            <FileText size={24} />
          </div>
          <div>
            <h4 className="text-sm font-bold text-olive uppercase tracking-wider">Payroll Support</h4>
            <p className="text-xs text-gray-600">Need help with your salary slip? Contact HR helpdesk at ext. 450.</p>
          </div>
        </div>
        <button className="px-4 py-2 bg-olive text-white rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-olive/90 transition-colors">
          Get Help
        </button>
      </div>
    </div>
  );
};

export default SalarySlip;
